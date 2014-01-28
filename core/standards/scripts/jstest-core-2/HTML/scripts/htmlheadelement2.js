/* Tests for DOM 2 Core 'DOMImplementation' object.
 */

var cvs = "$Id: htmlheadelement2.js 4838 2006-01-18 05:59:01Z hallvord $";


testmodule( "HTMLHeadElement", cvs );

try {

   var el = document.getElementById("myHead");
   
   if(is_phase(2))
   {
      testcase( "properties exists" );
  
      tdef("profile",el.profile);
 

      testcase( "property values" );
  
      test("profile",el.profile,"http://www.acme.com/profiles/books");
   }  
} catch (e) { exception(e); }

testmodule_finished();

/* eof */
