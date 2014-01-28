var standards_compat_mode = document.compatMode === "CSS1Compat";

var standards_table = !Array.prototype.every.call(document.getElementsByTagName("tr"),
  function(x) {
    return window.getComputedStyle(x).height === "3px";
  });

var quirks = !standards_table && !standards_compat_mode;
var limited_quirks = standards_compat_mode && !standards_table;
var standards = standards_compat_mode && standards_table;

var mode = (Number(standards) << 2) | (Number(limited_quirks) << 1) | Number(quirks);

var mode_strings = {1:"quirks", 2:"limited quirks", 4:"standards"};

var mode_string = mode_strings.hasOwnProperty(mode)?mode_strings[mode] : "Unknown";

var passed = mode_string === expected_mode_string;
document.getElementById("log").textContent = passed ? "PASS" : "FAIL in mode: " + mode_string + " expected: " + expected_mode_string;

try{top.opener.rr(passed);} catch(e) {}
