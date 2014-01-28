/* Tests for DOM 2 Core 'NamedNodeMap' object. */

var cvs = "$Id: nodemap.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "DOM NamedNodeMap", cvs );

try {

  var attr_map = document.getElementById('foo').attributes;

testcase("length property"); // readonly

  test("length property #1", attr_map.length, 4);
  expect_DOM_exception("length property #2", DOMException.NO_MODIFICATION_ALLOWED_ERR,
			function(){ attr_map.length = 17; } );

testcase("item");

  for (i=0; i<attr_map.length; i++)
  {
    tdef("item #"+(2*i), attr_map.item(i));
    test("item #"+(2*i+1), attr_map.item(i).nodeType, Node.ATTRIBUTE_NODE);
  }

testcase("getNamedItem");

  var id_attr = attr_map.getNamedItem('id');
  var width_attr = attr_map.getNamedItem('width');
  var height_attr = attr_map.getNamedItem('height');
  var click_attr = attr_map.getNamedItem('onclick');

  tdef("getNamedItem #1", id_attr);
  test("getNamedItem #2", id_attr.nodeType, Node.ATTRIBUTE_NODE);
  test("getNamedItem #3", id_attr.nodeName, 'ID');
  tdef("getNamedItem #4", width_attr);
  test("getNamedItem #5", width_attr.nodeType, Node.ATTRIBUTE_NODE);
  test("getNamedItem #6", width_attr.nodeName, 'WIDTH');
  tdef("getNamedItem #7", height_attr);
  test("getNamedItem #8", height_attr.nodeType, Node.ATTRIBUTE_NODE);
  test("getNamedItem #9", height_attr.nodeName, 'HEIGHT');
  tdef("getNamedItem #10", click_attr);
  test("getNamedItem #11", click_attr.nodeType, Node.ATTRIBUTE_NODE);
  test("getNamedItem #12", click_attr.nodeName, 'ONCLICK');

testcase("removeNamedItem");

  var old_len = attr_map.length;
  attr_map.removeNamedItem('onclick');

  test("removeNamedItem #1", attr_map.length, old_len-1);
  test("removeNamedItem #2", document.getElementById('foo').getAttribute('onclick'), '');

testcase("setNamedItem");

  var new_node = document.createAttribute('title');
  new_node.value = 'foo2';
  attr_map.setNamedItem(new_node);

  test("setNamedItem #1", document.getElementById('foo').getAttribute('title'), 'foo2');

} catch (e) { exception( e ); }

testmodule_finished();

/* eof */
