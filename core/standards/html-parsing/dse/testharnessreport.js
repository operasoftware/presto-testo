/*
 * Semi-short callback script for SPARTAN.
 *
 * There may well be bugs. You have been warned. (Especially if you set
 * useRawForm to false, as iframes are buggy, and form submission in iframes is
 * really buggy.)
 *
 * Example:
 *   var spartan = new spartanHandler("My amazing test suite");
 *   spartan.addTest("This test passes!", true);
 *   spartan.addTest("This test fails!", false);
 *   spartan.send();
 *
 * Usage:
 *   - The spartanHandler constructor creates a new test suite, and takes one
 *     string as an argument, the name of the test suite.
 *   - addTest adds a test to the test suite, whose first argument is the test
 *     case name (this must be unique within the test suite), a string, and
 *     whose second argument is a boolean where true is a pass and false is a
 *     failure.
 *   - send sends the results to SPARTAN.
 *
 * NB: The combined length of the test suite name and any test case name plus
 * two (as they are concatenated with ": ") must not be greater than 255.
 *
 * NB: Neither the test suite name nor any test case name can contain a tab
 * character.
 */
var spartanHandler = function(name, postPort)
{
    if (name)
    {
        var testSuiteName = String(name);
        if (testSuiteName.indexOf("\t") !== -1)
        {
            throw new Error("spartanHandler's name parameter must not contain any tabs");
        }
    } else {
        var testSuiteName = "";
    }

    var port = postPort ? postPort : "80";
    var tests = [];
    var sendOnLoad = false;
    var sent = false;
    var useRawForm = true;

    this.addTest = function (name, passed)
    {
        name = String(name);
        if (name.indexOf("\t") !== -1)
            throw new Error("spartanHandler.addTest's name parameter must not contain any tabs");

        if (typeof passed !== "boolean")
            throw new TypeError("spartanHandler.addTest's passed parameter must be a boolean");

        tests.push([name, passed]);
    };

    this.send = function()
    {
        document.body.appendChild(document.createTextNode("send"));
        if (sent)
            {
                throw new Error("spartanHandler has already sent results");
            }

        if (document.body || document.createElement("iframe").contentDocument !== null || useRawForm)
        {
            _realSend();
        }
        else
        {
            sendOnLoad = true;
        }
    };

    var _realSend = function()
    {
        document.body.appendChild(document.createTextNode("_real send"));
        if (useRawForm)
        {
            var form = document.createElement("form");
            form.action = "http://localhost:" + port;
            form.method = "POST";
        }
        else
        {
            var iframe = document.createElement("iframe");
            //iframe.style.display = "none";
            document.body.appendChild(iframe);
            var iframeDoc = iframe.contentDocument;
            iframeDoc.body.innerHTML = '<form action="http://localhost/" method="post"></form>';
            var form = iframeDoc.forms[0];
        }

        for (var i = 0, len = tests.length; i < len; i++)
        {
            var name = (testSuiteName ? testSuiteName + ": " : "") + tests[i][0];
            var pass = tests[i][1];

            if (name.length > 255)
                throw new Error("Test case identifier is longer than 255 characters: " + name);

            if (useRawForm)
                form.appendChild(document.createElement("input"));
            else
                form.appendChild(iframeDoc.createElement("input"));

            form.lastChild.name = "jstests[]";
            form.lastChild.value = name + "\t" + (pass ? "PASSED" : "FAILED");
        }

        form.submit();
        document.body.appendChild(document.createTextNode("Results sent"));
    }

    document.addEventListener("load", function()
    {
        if (sendOnLoad)
        {
            document.body.appendChild(document.createTextNode("Load"));
            _realSend();
            sendOnLoad = false;
        }
    }, false);
};

function parse_query() {
    var query = location.search.slice(1);
    var vars = query.split("&");
    var fields = vars.map(function (x) {
                            var split = x.split("=");
                            return [split[0], split.slice(1).join("=")];
                          });
    return fields;
}

function get_port() {
    var port = 80;
    var fields = parse_query();
    fields.forEach(function(x) {
                       if(x[0] == "jspostport") {
                           port = Number(x[1]);
                       }
                   });
    return port;
}

function register_spartan_handler(name) {
    //XXX should really escape tab characters here
    var spartan_handler = new spartanHandler("", get_port());
    var register_result = function(test) {
	var name = test.name;
	var passed = test.status == harness.status.PASS;
	spartan_handler.addTest(name, passed);
    };
    var send_results = function(tests) {
        document.body.appendChild(document.createTextNode("Completion"));
        spartan_handler.send();
    };
    harness.add_result_callback(register_result);
    harness.add_completion_callback(send_results);
}

(function() {
     var fields = parse_query();
     if (fields.some(function(x) {return x[0] === "jspostport";})) {
         register_spartan_handler();
     }
 })();