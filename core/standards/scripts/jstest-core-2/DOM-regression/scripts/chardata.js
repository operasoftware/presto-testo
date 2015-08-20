/* Regression tests for Opera's handling of DOM 2 Core documents
 *
 * 2002-04-05 / hanne
 */

var cvs = "$Id: chardata.js 4838 2006-01-18 05:59:01Z hallvord $";

testmodule("CharacterData", cvs);

try {

   var x = document.createTextNode('test1');
   var y = document.createTextNode('test2');
   var foo = document.createTextNode('foo');
   var the_div = document.getElementById("div-foo");

   tdef( "TextNode variable #1", x );
   tdef( "TextNode variable #2", y );
   tdef( "TextNode variable #3", foo );
   tdef( "TextNode variable #4", the_div );

   testcase("Get/set attributes");

   test( "Attr #1", x.data, "test1" );
   test( "Attr #2", y.data, "test2" );
   test( "Attr #3", foo.data, "foo" );
   test( "Attr #4", the_div.firstChild.firstChild.data, "ABC" );

   test( "Attr #5", x.length, y.length );
   testnot( "Attr #6", x.length, foo.length );
   test( "Attr #7", the_div.firstChild.firstChild.length, 3 );

   x.data = "new text";
   test( "Attr #8", x.data, "new text" );
   test( "Attr #9", x.length, 8 );

   x.data = "";
   test( "Attr #10", x.data, "" );
   test( "Attr #11", x.length, 0 );

   x.data = "test1";
   test( "Attr #12", x.data, "test1" );
   test( "Attr #13", x.length, 5 );

   the_div.childNodes[0].firstChild.data = "test1";
   test( "Attr #14", the_div.childNodes[0].firstChild.data, "test1" );
   test( "Attr #15", the_div.childNodes[0].firstChild.length, 5 );
   the_div.childNodes[0].firstChild.data = "ABC";
   test( "Attr #16", the_div.childNodes[0].firstChild.data, "ABC" );
   test( "Attr #17", the_div.childNodes[0].firstChild.length, 3 );

   /*
     showfailure( "Attr #18", "IMPLEMENTME: Test exceptions on setting data when the node is readonly" );
     expect_DOM_exception( "Attr #19", DOMException.NO_MODIFICATION_ALLOWED_ERR,
     function(){ x.length=0; } );
   */

   testcase( "appendData" );

   /* normal append */
   foo.appendData( " bar" );
   test( "appendData #1", foo.data, "foo bar" );

   /* nothing appended */
   foo.appendData();
   test( "appendData #2", foo.data, "foo bar" );
   foo.appendData( "", "test" );
   test( "appendData #3", foo.data, "foo bar" );

   testcase( "substringData" );

   /* return value inserted into 'x' and no modification on 'foo' */
   var text = foo.substringData( 4, 10 );
   x.insertData( 4, text );
   test( "substringData #1", x.data, "testbar1");
   test( "substringData #2", foo.data, "foo bar");

   /* no modification on 'x' */
   text = x.substringData( 0, 0, "test" );
   x.insertData( 5, text );
   test( "substringData #3", x.data, "testbar1");

   /* insufficient parameters */
   var z = document.createTextNode( x.substringData( 0 ) );
   test( "substringData #4", z.data, "undefined" );

   /* index out of bounds */
   expect_DOM_exception( "substringData #5", DOMException.INDEX_SIZE_ERR,
                         function(){x.substringData( "test", 0 );} );
   expect_DOM_exception( "substringData #6", DOMException.INDEX_SIZE_ERR,
                         function(){x.substringData( -1, 0 );} );
   expect_DOM_exception( "substringData #7", DOMException.INDEX_SIZE_ERR,
                         function(){x.substringData( 0, -1 );} );
   expect_DOM_exception( "substringData #8", DOMException.INDEX_SIZE_ERR,
                         function(){x.substringData( 10, 10 );} );

   testcase( "insertData" );

   /* x.data */
   test( "insertData #1", x.data, "testbar1" );

   /* nothing inserted */
   x.insertData( 0, "" );
   test( "insertData #2", x.data, "testbar1" );

   /* insert into front end */
   x.insertData( 0, "start" );
   test( "insertData #3", x.data, "starttestbar1" );

   /* insert into middle */
   x.insertData( 9, "foo" );
   test( "insertData #4", x.data, "starttestfoobar1" );

   /* insert into back end */
   x.insertData( 16, "end" );
   test( "insertData #5", x.data, "starttestfoobar1end" );

   /* index out of bounds */
   expect_DOM_exception( "insertData #6", DOMException.INDEX_SIZE_ERR,
                         function(){x.insertData(-1,"test");} );
   expect_DOM_exception( "insertData #7", DOMException.INDEX_SIZE_ERR,
                         function(){x.insertData(100,"test");} );

   testcase( "deleteData" );

   /* x.data */
   test( "deleteData #1", x.data, "starttestfoobar1end" );

   /* delete from front end */
   x.deleteData( 0, 5);
   test( "deleteData #2", x.data, "testfoobar1end" );

   /* delete from middle */
   x.deleteData( 4, 6);
   test( "deleteData #3", x.data, "test1end" );

   /* delete from end */
   x.deleteData( 5, 10);
   test( "deleteData #4", x.data, "test1" );

   /* nothing deleted */
   x.deleteData( 2, 0);
   test( "deleteData #5", x.data, "test1" );
   x.deleteData( 0, 0);
   test( "deleteData #6", x.data, "test1" );

   /* index out of bounds */
   expect_DOM_exception( "deleteData #2", DOMException.INDEX_SIZE_ERR,
                         function(){x.deleteData(-1,0);} );
   expect_DOM_exception( "deleteData #3", DOMException.INDEX_SIZE_ERR,
                         function(){x.deleteData(0,-1);} );

   testcase( "replaceData" );

   /* y.data */
   test( "replaceData #1", y.data, "test2" );

   /* replace front end */
   y.replaceData(0, 4, "start" );
   test( "replaceData #2", y.data, "start2" );

   /* replace back end */
   y.replaceData(5, 1, "end" );
   test( "replaceData #3", y.data, "startend" );

   /* replace middle */
   y.replaceData( 1, 6, "dummy" );
   test( "replaceData #4", y.data, "sdummyd" );

   /* replace whole string */
   y.replaceData( 0, 10, "test2" );
   test( "replaceData #5", y.data, "test2" );

   /* empty string */
   y.replaceData( 0, 7, "" );
   test( "replaceData #6", y.data, "" );

   /* nothing is replaced with test2 (only appended) */
   y.replaceData( 0, 0, "test2" );
   test( "replaceData #7", y.data, "test2" );

   /* index out of bounds */
   expect_DOM_exception( "replaceData #8", DOMException.INDEX_SIZE_ERR,
                         function(){x.replaceData( -1, 0, "test" );} );
   expect_DOM_exception( "replaceData #9", DOMException.INDEX_SIZE_ERR,
                         function(){x.replaceData( 0, -1, "test" );} );
   expect_DOM_exception( "replaceData #10", DOMException.INDEX_SIZE_ERR,
                         function(){x.replaceData( 30, 4,"test");} );

   /* check that xml parser does not split text-nodes at linebreak. */
   testcase("XML parser text-nodes");

   function testXML()
   {
       var my_span = new_win.document.getElementById('my-span');

       if (!my_span)
           if (++new_win.attempts > 10)
               showfailure( "XML parser text-nodes", "Loading of XML document timed out" );
           else
           {
               setTimeout(testXML, new_win.timeout);
               new_win.timeout += new_win.timeout;
               return;
           }
       else
       {
           test( "XML parser text-nodes #1", my_span.childNodes.length, 1 );
           test( "XML parser text-nodes #2", my_span.firstChild.data.length, 10 );
           test( "XML parser text-nodes #3", my_span.firstChild.data, "Split\nText" );
       }

       new_win.close();
       testmodule_finished();
   }

   var new_win = window.open('xmldoc.xml', '');

   if (!new_win)
   {
       showfailure( "Opening secondary window", "Opening window failed." );
       testmodule_finished();
   }
   else
   {
       new_win.attemps = 0;
       new_win.timeout = 100;
       testXML();
   }
} catch (e) { exception( e ); }

/* eof */

