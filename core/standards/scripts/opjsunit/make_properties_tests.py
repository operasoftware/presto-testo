import os
import string

class PropertiesParser(object):
    #Totally unnecessary custom state machine for parsing the properties
    #file
    def __init__(self):
        self.current_token = None
        self.state = self.initial_state

    def parse(self, in_file):
        for line in in_file:
            line_token = self.parseLine(line)
            self.state = self.initial_state
            if line_token is not None:
                yield line_token

    def parseLine(self, line):
        self.current_token = []

        for char in line:
            self.state(char)
        if self.current_token is not None:
            return tuple(self.current_token)

    def initial_state(self, char):
        if char == "{":
            self.current_token.append([""])
            self.state = self.list_state
        elif char in string.whitespace:
            pass
        elif char == "#":
            self.state = self.comment_state
        else:
            self.state = self.data_state
            self.current_token.append("")
            self.state(char)

    def data_state(self, char):
        if char not in string.whitespace:
            self.current_token[-1] += char
        else:
            self.state = self.seperator_state

    def seperator_state(self, char):
        if char in string.whitespace:
            pass
        elif char == "{":
            self.current_token.append([""])
            self.state = self.list_state
        else:
            self.current_token.append("")
            self.state = self.data_state
            self.state(char)

    def list_state(self, char):
        if char == "}":
            self.state = self.seperator_state
        elif char == ",":
            self.state = self.list_seperator_state
        else:
            self.current_token[-1][-1] += char

    def list_seperator_state(self, char):
        if char == "}":
            self.state = self.seperator_state
        elif char in string.whitespace:
            pass
        else:
            self.current_token[-1].append("")
            self.state = self.list_state
            self.state(char)

    def comment_state(self, char):
        self.current_token = None

class TestMaker(object):
    def make_test_name(self, name):
        components = name.split(".")
        out = []
        for item in components:
            out.append(item[0].upper() + item[1:])
        return "".join(out)

    def make_existence_tests(self, data):
        name = data[0]
        rv = """function test%(testname)sExistence_0() {
  assertDefined(%(name)s);
}"""%{"name":name, "testname":self.make_test_name(name)}
        return rv

    def make_attributes_tests(self, data):
        name = data[0]

        if "." in name:
            object_name, property_name = name.rsplit(".", 1)
        else:
            object_name, property_name = "this", name

        attributes = data[1]
        function_names = {"DontEnum":("assertDontEnum", "assertEnum"),
                          "DontDelete":("assertDontDelete", "assertDelete"),
                          "ReadOnly":("assertReadOnly", "assertReadWrite")}

        test_name = self.make_test_name(name)

        rv = []

        for i, (prop, assert_funcs) in enumerate(function_names.iteritems()):
            if prop in attributes:
                test_function = assert_funcs[0]
            else:
                test_function = assert_funcs[1]
            test_func = """function test%(test_name)sAttributes_%(num)i() {
  %(test_function)s(%(object_name)s, "%(property_name)s");
}"""%{"test_name":test_name, "num":i, "test_function":test_function,
      "object_name":object_name, "property_name":property_name}
            rv.append(test_func)

        return "\n\n".join(rv)

class MethodTestMaker(TestMaker):
    def make_all_tests(self, data):
        output = []
        output.append(self.make_existence_tests(data))
        output.append(self.make_attributes_tests(data))
        output.append(self.make_prototype_tests(data))
        output.append(self.make_length_tests(data))
        return "\n\n".join(output)

    def make_prototype_tests(self, data):
        name = data[0]
        value = data[2]
        prototype_name  = name + ".prototype"
        test_name = self.make_test_name(name)
        if value == "undefined":
            test_expr = "assertUndefined(%s)"%prototype_name
        else:
            test_expr = "assertEquals(%s, %s)"%(value, prototype_name)

        return """function test%(test_name)sPrototypeValue_0() {
  %(test_expr)s;
}"""%{"test_name":test_name, "test_expr":test_expr}

    def make_length_tests(self, data):
        name = data[0]
        length_name = name + ".length"
        value = data[3]
        test_name = self.make_test_name(name)
        rv = []
        rv.append("""function test%(test_name)sLength_0() {
  assertEquals(%(length)s, %(length_name)s);
}"""%{"test_name":test_name, "length":value, "length_name":length_name})
        rv.append(self.make_attributes_tests([length_name, ["DontEnum",
                                                            "DontDelete",
                                                            "ReadOnly"]]))
        return "\n\n".join(rv)
                  

class PropertyTestMaker(TestMaker):
    def make_all_tests(self, data):
        output = []
        output.append(self.make_existence_tests(data))
        output.append(self.make_attributes_tests(data))
        if len(data) == 3:
            output.append(self.make_value_tests(data))
        return "\n\n".join(output)

    def make_value_tests(self, data):
        name = data[0]
        value = data[2]
        test_name = self.make_test_name(name)
        if value == "undefined":
            test_expr = "assertUndefined(%s)"%name
        else:
            test_expr = "assertEquals(%s, %s)"%(value, name)
        return """function test%(test_name)sValue_0() {
  %(test_expr)s;
}"""%{"test_name":test_name, "test_expr":test_expr}


def main(in_file):
    property_test_maker = PropertyTestMaker()
    method_test_maker = MethodTestMaker()
    parser = PropertiesParser()
    suffix = None
    out_file = None
    for token in parser.parse(in_file):
        if token[0].split(".")[0] != suffix:
            if out_file is not None:
                out_file.write("\n\n".join(output))
            if "." in token[0]:
                suffix = token[0].split(".")[0]
            else:
                suffix = "Global"
            output = ["/*GENERATED FILE DO NOT EDIT*/"]
            out_file = open(os.path.join("tests", "testProperties" + suffix + 
                                         "_spec.js"), "w")
        if len(token) == 4:
            output.append(method_test_maker.make_all_tests(token))
        else:
            output.append(property_test_maker.make_all_tests(token))
    out_file.write("\n\n".join(output))

if __name__ == "__main__":
    main(open("properties.dat"))
