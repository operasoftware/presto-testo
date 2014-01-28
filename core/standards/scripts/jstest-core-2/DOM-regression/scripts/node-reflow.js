/* Tests for reflow of DOM 2 Core 'Node' object.

 all conf() tests moved to node-reflow_int.js
*/

var cvs = "$Id: node-reflow.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule( "DOM Node reflow", cvs );

try {

testcase( "Node constructor exists" );

  try {
    tdef( "Node", window.Node );
  } 
  catch (e) { 
    exception( e );
    window.Node = function () { throw( "Do not call me!" ); }
  }

testcase( "Node reflow" );

  the_div = document.getElementById("div-foo");
  var kidNumber = the_div.childNodes.length;

  for (var i = kidNumber - 1; i >= 0; i--)
  {
    var c = the_div.removeChild( the_div.childNodes[i] );
    the_div.appendChild( c );
  }
 
  the_div.insertBefore( the_div.childNodes[2], the_div.childNodes[1] );
  the_div.replaceChild( the_div.childNodes[2], the_div.childNodes[1] );

  for (var i = the_div.childNodes.length - 1; i >= 0; i--)
  {
    var c = the_div.removeChild( the_div.childNodes[i] );
    the_div.appendChild( c );
  }

  test( "reflow #4", the_div.childNodes.length, 2 );
  test( "reflow #5", the_div.childNodes[1].nodeType, Node.ELEMENT_NODE );
  test( "reflow #6", the_div.childNodes[1].childNodes[0].nodeType, Node.TEXT_NODE );
  test( "reflow #7", the_div.childNodes[1].childNodes.length, 1 );
  test( "reflow #8", the_div.childNodes[1].childNodes[0].nodeValue, " C " );

  var the_text = document.createTextNode("ADD");
  the_div.appendChild( the_text );

  test( "reflow #10", the_div.childNodes.length, 3 );
  the_div.lastChild.splitText( 1 );
  test( "reflow #11", the_div.childNodes.length, 4 );
  test( "reflow #13", the_div.lastChild.nodeValue, "DD" );

  the_div.normalize();

  test( "reflow #15", the_div.childNodes.length, 3 );
  test( "reflow #16", the_div.lastChild.nodeValue, "ADD" );

} catch (e) { exception( e ); }

testmodule_finished();

/* eof */
