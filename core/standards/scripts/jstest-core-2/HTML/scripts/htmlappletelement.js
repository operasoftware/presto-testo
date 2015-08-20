/* Tests for DOM 2 HTML 'HTMLAppletElement' object.
 */

var cvs = "$Id: htmlappletelement.js 4838 2006-01-18 05:59:01Z hallvord $";


function go()
{
   testmodule( "HTMLAppletElement", cvs );

   try {
      testcase( "properties exists" );

      var o1 = document.getElementById("myApplet1");
      var o2 = document.getElementById("myApplet2");
      var o3 = document.getElementById("myApplet3");
      var o = o1;

      tdef("align",o.align);
      tdef("alt",o.alt);
      tdef("archive",o.archive);
      tdef("code",o.code);
      tdef("codeBase",o.codeBase);
      tdef("height",o.height);
      tdef("hspace",o.hspace);
      tdef("name",o.name);
      tdef("object",o.object);
      tdef("vspace",o.vspace);
      tdef("width",o.width);

      var o = o1;
      testcase( "default property values" );

      test("align",o.align,"");
      test("alt",o.alt,"");
      test("archive",o.archive,"");
      test("code",o.code,"");
      test("codeBase",o.codeBase,"");
      test("height",o.height,"");
      test("hspace",o.hspace,"");
      test("name",o.name,"");
      test("object",o.object,"");
      test("vspace",o.vspace,"");
      test("width",o.width,"");

      o = o2;
      testcase( "property values from attributes" );

      test("align",o.align,"right");
      test("alt",o.alt,"alt");
      test("archive",o.archive,"http://www.opera.com/ http://www.opera.no/");
      test("code",o3.code,"clock.class");
      test("codeBase",o.codeBase,get_protocol_and_host() + get_modulepath("classes",""));
      test("height",o.height,"50");
      test("hspace",o.hspace,"5");
      test("name",o.name,"a");
      test("object",o.object,"");
      test("vspace",o.vspace,"7");
      test("width",o.width,"100");


      if(is_phase(2)) // All attributes currently readonly
      {
         testcase( "properties are writable" );
      }

      if (navigator.javaEnabled())
      {
        o = o2;
        testcase( "random attributes" );
        // Attributes defined by the applet itself. Accessible through liveconnect.
        // Note that if the applet has an attribute with a name that is identical
        // to an attribute of the HTMLAppletElement, ie. "code", the internal
        // attribute takes presedence.

        test("code",o.code,"Helleu");
        test("nummer",o.nummer,0);
      }

   } catch (e) { exception(e); }

   testmodule_finished();
}

/* eof */
