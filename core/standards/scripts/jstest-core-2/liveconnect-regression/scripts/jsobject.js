/*
  Test the JSObject interface.
*/

var cvs = "$Id: jsobject.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule("JSObject interface", cvs);

try {

  var test_obj = opener.test_obj;
  var select_obj = opener.document.getElementById('sel');
  var result = opener.result;

testcase("call");

  test("call #1", result[0], 42);

testcase("equals");

  ttrue("equals #1", result[1]);

testcase("eval");

  test("eval #1", result[2], 2);

testcase("getMember");

  test("getMember #1", result[3], 'Hello');
  test("getMember #2", result[4], 'equal');
  test("getMember #3", result[5], 'double-fnutt');
  test("getMember #4", result[6], 'single-fnutt');

  test("getMember #5", result[7], opener.location);

testcase("getSlot");

  test("getSlot #1", result[8], 'Seven');
  test("getSlot #2", result[9], 'form1');

testcase("removeMember");

  test("removeMember #1", test_obj.member2, undefined);

testcase("setMember");

  test("setMember #1", test_obj.member3, 'newMember');
  test("setMember #2", test_obj.nullmember, null);

  test("setMember #3", select_obj.style.color, '#bafbaf');

testcase("setSlot");

  test("setSlot #1", test_obj[0], 'newSlot');
  test("setSlot #2", test_obj[1], null);

  test("setSlot #3", select_obj[0].text, 'NewOption');

testcase("toString");

  test("toString #1", result[10], '[object Window]');

testcase("getWindow");

  ttrue("getWindow #1", result[11]);

testcase("JSException");

  ttrue("JSException #1", result[12]);

} catch (e) { exception( e ); }

testmodule_finished();
