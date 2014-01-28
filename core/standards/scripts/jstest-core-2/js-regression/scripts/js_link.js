/**
 * JavaScript
 * Link object, js 1.3.
 *
 * 16.07.2001, torstein@opera.com
 */
var tprop;

function main( documentObject )
{
   try 
   {
      var cvs = "$Id: js_link.js 4838 2006-01-18 05:59:01Z hallvord $";
      testmodule( "The Link object", cvs );
      
      testcase( "document.links exists" );
      this.tprop = make_tprop( documentObject );
      tprop( "links", "collection" );
      
      testcase( convertTags( "both <area> and <a> are link objects"  ) );
      test( "length", documentObject.links.length, 2 );
      test( "typeof anchor", typeof documentObject.getElementById("anchorlink"), "object" );
      test( "typeof area", typeof documentObject.getElementById("arealink"), "object" );

      /* Testing the <a> element */
      var linkObject = documentObject.getElementById("anchorlink");
      this.tprop = make_tprop( linkObject );

      testcase( "Link exists ( anchor )" );
      tdef( 'link defined', linkObject );

      test( 'toString',  linkObject + "", "http://www.opera.com:80/index.html?mysearch" );

      testcase( 'Link object properties ( anchor )' );
      testLinkProperties( linkObject, true );

      testcase( 'Link object methods ( anchor )' );
      testLinkMethods( linkObject );

      testcase( "Link object evenhandlers ( anchor )" );
      testAnchorEventHandlers( linkObject );

      /* Testing the <area> element */
      linkObject = documentObject.getElementById("arealink");
      this.tprop = make_tprop( linkObject );

      testcase( "Link exists ( area )" );
      tdef( 'Link defined', linkObject );

      test( 'toString', linkObject + "", "http://www.opera.com:80/index.html#myhash", 'bug #85183' );

      testcase( 'Link object properties ( area )' );
      testLinkProperties( linkObject, false );

      testcase( 'Link object methods ( area )' );
      testLinkMethods( linkObject );

      testcase( "Link object evenhandlers ( area )" );
      testAreaEventHandlers( linkObject );
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}

function testLinkProperties( link, is_anchor )
{
   tprop( "hash", "string" );
   tprop( "host", "string" );
   tprop( "hostname", "string" );
   tprop( "href", "string" );
   tprop( "pathname", "string" );
   tprop( "port", "string" );
   tprop( "protocol", "string" );
   tprop( "search", "string" );
   tprop( "target", "string" );
   if (is_anchor)
     tprop( "text", "string" );

   if( isDefined( link.host ) )
      test( "host", link.host, "www.opera.com" );
   if( isDefined( link.hostname ) )
      test( "hostname", link.hostname, "www.opera.com" );
   if( isDefined( link.post ) )
      test( "port", link.port, "80" );
   if( isDefined( link.protocol ) )
      test( "protocol", link.protocol, "http:" );

   test( "target", link.target, "mytarget" );
   test( "host/hostname identical when port is 80", link.host, link.hostname );
   test_spaceagnostic( "text", link.text, "www.opera.com" );

   if( isDefined( link.href ) )
   {
      if( link.href.indexOf( "myhash" ) != -1 )
      {
         if( isDefined( link.hash ) )
            test( "hash", link.hash, "#myhash" );
         
         test( "href", link.href, "http://www.opera.com:80/index.html#myhash" );
      }
      else
      {
         if( isDefined( link.search ) )
            test( "search", link.search, "?mysearch" );
         
         test( "href", link.href, "http://www.opera.com:80/index.html?mysearch" );
      }
   }

   /*
      Mozilla throws a length exception when trying to change
      the property values. According to the JS 1.3 spec ( and DOM2-HTML ), they should
      be fully modifiable.
   */
   try
   {
      link.hash = "newhash";
      link.host = "newhost";
      link.hostname = "newhostname";
      link.href = get_protocol_and_host() + get_modulepath( "js-regression", "newhref" );
      link.pathname = "newpathname";
      link.port = "newport";
      link.protocol = "newprotocol";
      link.search = "newsearch";
      link.target = "newtarget";
      link.text = "newtext"; 

      test( "changing hash", link.hash, "newhash" ); 
      test( "changing host", link.host, "newhost" ); 
      test( "changing hostname", link.hostname, "newhostname" ); 
      test( "changing href", link.href, get_protocol_and_host() + get_modulepath("js-regression","newhref") );
      test( "changing pathname", link.pathname, "newpathname" ); 
      test( "changing port", link.port, "newport" ); 
      test( "changing protocol", link.protocol, "newprotocol" ); 
      test( "changing search", link.search, "newsearch" ); 
      test( "changing target", link.target, "newtarget" ); 
      test( "changing text", link.text, "newtext" ); 
   }
   catch( e ) 
   {
      exception( e, "Trying to change the property values of the link object" );
   }

   if( is_phase( 2 ) )
   {
      tprop( "x", "number" );
      except_exception( "changing read-only value, link.x", Error, function() { link.x = 0; } );

      tprop( "y", "number" );
      except_exception( "changing read-only value, link.y", Error, function() { link.y = 0; } );
   }
}

function testLinkMethods( link )
{
   if( is_phase( 2 ) )
   {
      tprop( "handleEvent", "function" );
   }
}

function testAnchorEventHandlers( link )
{
   test_spaceagnostic( "onclick", "" + link.onclick, getEventHandlerSource( 0 ) );
   test_spaceagnostic( "ondblclick", "" + link.ondblclick, getEventHandlerSource( 1 ) );
   test_spaceagnostic( "onkeydown", "" + link.onkeydown, getEventHandlerSource( 2 ) );
   test_spaceagnostic( "onkeypress", "" + link.onkeypress, getEventHandlerSource( 3 ) );
   test_spaceagnostic( "onkeyup", "" + link.onkeyup, getEventHandlerSource( 4 ) );
   test_spaceagnostic( "onmousedown", "" + link.onmousedown, getEventHandlerSource( 5 ) );
   test_spaceagnostic( "onmouseout", "" + link.onmouseout, getEventHandlerSource( 6 ) );
   test_spaceagnostic( "onmouseup", "" + link.onmouseup, getEventHandlerSource( 7 ) );
   test_spaceagnostic( "onmouseover", "" + link.onmouseover, getEventHandlerSource( 8 ) );
}

function testAreaEventHandlers( link )
{
   test_spaceagnostic( "ondblclick", "" + link.ondblclick, getEventHandlerSource( 0 ) );
   test_spaceagnostic( "onmouseover", "" + link.onmouseover, getEventHandlerSource( 1 ) );
   test_spaceagnostic( "onmouseout", "" + link.onmouseout, getEventHandlerSource( 2 ) );
}

