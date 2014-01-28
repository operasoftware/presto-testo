/* Interactive tests for DOM 2 Core 'htmlmetaelement' object.
*/

var cvs = "$Id: htmlmetaelement_int.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "HTMLMetaElement", cvs );

try {

  testcase( "properties are writable" );

  if(is_phase(2)) // These properies ar currently readonly
  {
  var popup = window.open('', 'meta-popup');
  popup.document.open();
  popup.document.write('<HTML><HEAD><META id="meta" /></HEAD><BODY>Original pop-up</BODY></HTML>');
  popup.document.close();
  var meta_elm = popup.document.getElementById('meta');
  meta_elm.content = "0; url=http://www.opera.com";
  meta_elm.httpEquiv = "refresh";
  conf("Meta refresh", "Is www.opera.com loading inside the pop-up window?");
  }
  
} catch (e) { exception(e); }

testmodule_finished();

/* eof */
