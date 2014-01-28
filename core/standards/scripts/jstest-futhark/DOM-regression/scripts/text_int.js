/* Regression tests for Opera's handling of DOM 2 Core documents
 *
 * Interactive version
 * 
 * 2002-04-05 / hanne
 */

var cvs = "$Id: text_int.js 10655 2006-12-18 15:47:57Z hallvord $";

try {

testcase("Splitting text");

  var string1 = document.getElementsByTagName('BODY').item(0).firstChild;
  var tmp1 = string1.splitText(2);
  var string2 = document.getElementsByTagName('SPAN').item(0).firstChild;
  var tmp2 = string2.splitText(2);

 conf( "splitText #15", "Do the text occur as \nABC\nDEF ?" );

} catch (e) { exception( e ); }

/* eof */

