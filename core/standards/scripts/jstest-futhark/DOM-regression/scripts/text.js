/* Regression tests for Opera's handling of DOM 2 Core documents
 *
 * 2002-04-05 / hanne
 */

var cvs = "$Id: text.js 28223 2008-06-26 12:31:49Z hallvord $";

testmodule("Text", cvs);

try {

var text = document.createTextNode('123456789');
var split;

testcase("Splitting text");

  split = text.splitText(5);

  test( "splitText #1", text.data, "12345" );
  test( "splitText #2", split.data, "6789" );
  split = text.splitText(5);
  test( "splitText #3", text.data, "12345" );
  test( "splitText #4", split.data, "" );
  split = text.splitText(0);
  test( "splitText #5", text.data, "" );
  test( "splitText #6", split.data, "12345" );
  split = text.splitText(0);
  var string1 = document.getElementsByTagName('BODY').item(0).firstChild;
  var tmp1 = string1.splitText(2);
  test( "splitText #8", string1.data, "AB" );
  test( "splitText #9", tmp1.nodeValue, "C" );

  test( "splitText #11", document.getElementsByTagName('SPAN').item(0).childNodes.length, 1 );
  var string2 = document.getElementsByTagName('SPAN').item(0).firstChild;
  var tmp2 = string2.splitText(2);
  test( "splitText #12", string2.data, "DE" );
  test( "splitText #13", tmp2.data, "F" );
  test( "splitText #14", document.getElementsByTagName('SPAN').item(0).childNodes.length, 2 );

  // #15 moved to text_js.

  expect_DOM_exception( "text #16", DOMException.INDEX_SIZE_ERR, 
	                  function(){split = text.splitText(20);} );

  expect_DOM_exception( "text #17", DOMException.INDEX_SIZE_ERR, 
	                  function(){split = text.splitText(-1);} );

  expect_DOM_exception( "text #18", DOMException.NOT_SUPPORTED_ERR, 
	                  function(){split = text.splitText("string");} );

  // testing wrong input
  expect_DOM_exception( 'splitText with no args', DOMException.NO_DATA_ALLOWED_ERR, function(){ split = text.splitText(); } );

} catch (e) { exception( e ); }

testmodule_finished();

/* eof */

