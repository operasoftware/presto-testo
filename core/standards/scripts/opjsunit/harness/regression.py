import os
import itertools
try:
    import json
except ImportError:
    import simplejson as json

class SortedDict(dict):
    def __init__(self, base_dict):
        self._keys = []
        for key, value in base_dict.iteritems():
            self._keys.append(key)
            self[key] = value
        self._keys.sort()

    def __setitem__(self, key, value):
        dict.__setitem__(self, key, value)
        if not key in self:
            self._keys.append(key)
            self._keys.sort()

    def __delitem__(self, key):
        dict.__del__(self, key)
        del self._keys[self.keys.index(key)]

    def __iter__(self):
        for key in self.keys():
            yield key

    def iteritems(self):
        for key in self._keys:
            yield key, self[key]

    def keys(self):
        return self._keys

    def iterkeys(self):
        for key in self.keys():
            yield item

    def values(self):
        return [self[item] for item in self]

    def itervalues(self):
        for key in self._keys:
            return self[key]

class Results(dict):
    def __init__(self, profile_name, passes, fails, valgrind, crashes, timeouts, **kwargs):
        self.profile_name = profile_name
        for name, result_set in itertools.chain([("pass", passes),
                                                 ("fail", fails),
                                                 ("valgrind", valgrind),
                                                 ("crash", crashes),
                                                 ("timeout", timeouts)],
                                                kwargs.iteritems()):
            self[name] = result_set

        self["all"] = reduce(lambda x, y: x | y if isinstance(y, set) else x, 
                                          self.itervalues())
        self["all fail"] = self["all"] - self["pass"]

class Expected(dict):
    def __init__(self, profile_name, test_data, test_id_class=None):
        self.test_data = test_data
        self.profile_name = profile_name
        dict.__init__(self,
                      [("pass", set()),
                       ("fail", set()),
                       ("irrelevant", set()),
                       ("all", set())])

        if test_id_class is None:
            init_test_id = lambda x: x
        else:
            init_test_id = lambda x:test_id_class.fromString(x)

        for test_id_str, metadata in self.test_data.iteritems():
            id_obj = init_test_id(test_id_str)
          
            possible_results = metadata["results"]
            key = self.profile_name if self.profile_name in possible_results else "default"
            if key in metadata["results"]:
                self[metadata["results"][key]].add(id_obj)
            self["all"].add(id_obj)

class TestData(SortedDict):
    """We organise results in a json object with the following structure:

    data := {
       test_id:metadata
    }
    test_id := unique string identifying test
    metadata := {
      (field:value)*
    }
    field := string
    value := any json object
    One essential piece of metadata is the results. This has the form
    
    results := "results":results_value
    results_value := {"default":result, (profile_name:result)*}
    result := "pass"|"fail"|"irrelevant"
    profile_name := string

    each Results object is associated with a particular profile_name. 
    If the result expected for that profile name is different to the 
    default result then the regressions will be computed against the
    profile=specific result rather than the default."""

    @classmethod
    def from_file(cls, filename):
        if os.path.exists(filename):
            data = json.load(open(filename))
        else:
            data = {}
        return cls(data)

    def to_file(self, filename):
        json.dump(self, open(filename, "w"), indent=0)
        


class ResultsComparison(object):
    def __init__(self, expected, results):
        self.expected = expected
        self.test_data = expected.test_data
        self.results = results

        missing = self.expected["all"] - self.results["all"]

        self.sets = {
            "new pass": results["pass"] - self.expected["pass"],
            "regressions":self.expected["pass"] - results["pass"] - missing,
            "new":self.results["all"] - self.expected["all"],
            "missing":missing
            }

    def get_result(self, test_id):
        if test_id in self.results["pass"]:
            return "pass"
        elif test_id in self.results["all fail"]:
            return "fail"
        elif test_id in self.expected["irrelevant"]:
            return "irrelevant"
        else:
            raise ValueError, "Unknown test_id %s"%test_id


    def updated_test_data(self):
        """Return a *new* TestData object with the results updated 
        according to the results objet passed in"""
        new_data = {}

        for test_id in (self.results["all"] |
                        self.expected["irrelevant"] |
                        self.sets["missing"]):
            test_id_string = unicode(test_id)
            if test_id_string in self.test_data:
                new_data[test_id_string] = self.test_data[test_id_string].copy()
                new_test = False
            else:
                assert test_id in self.sets["new"]
                new_data[test_id_string] = {"results":{}}
                new_test = True

            if test_id in self.sets["missing"]:
                continue
        
            new_expected = new_data[test_id_string]["results"]
            test_result = self.get_result(test_id)
            if self.results.profile_name not in new_expected:
                if test_result == "pass" or new_test:
                    new_expected["default"] = test_result
            elif test_result == "pass" or new_test:
                new_expected[self.results.profile_name] = test_result
                if all(value == test_result for value in 
                       new_expected.itervalues()):
                    new_data[test_id_string]["results"] = {"default":test_result}

        return TestData(new_data)

    def generate_baseline(self, filename):
        try: new_data = json.load(open(filename))
        except: new_data = {}

        for test_id in (self.results["all"] | self.expected["irrelevant"]):
            new_data.setdefault(unicode(test_id), {}).setdefault("results", {})[self.results.profile_name] = self.get_result(test_id)

        json.dump(new_data, open(filename, "w"), indent=2)

    def to_buildbot(self, extra_name_map=None):
        results_data = {"results":{}}
        name_map = {
            "pass":"passed",
            "fail":"failed",
            "crash":"crashed",
            "timeout":"timed out"
            }
        if extra_name_map is not None:
            name_map.update(extra_name_map)

        def sorted_list(iterable):
            return [unicode(item) for item in sorted(iterable)]

        for set_name, results_set in self.results.iteritems():
            if set_name in ("all", "all fail"):
                continue
            name = name_map.get(set_name, set_name)
            results_data["results"][name] = sorted_list(results_set)

        results_data["results"]["regressions"] = sorted_list(self.sets["regressions"])
        results_data["results"]["missing"] = sorted_list(self.sets["missing"])
        results_data["results"]["new"] = sorted_list(self.sets["missing"])

        return results_data
