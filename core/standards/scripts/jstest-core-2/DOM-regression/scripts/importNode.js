/* Regression tests for Opera's handling of DOM 2 Core documents
 *
 * 2002-04-05 / hanne
 */

var cvs = "$Id: importNode.js 10654 2006-12-18 15:35:58Z hallvord $";

testmodule("Import Node", cvs);

try {

  var w = window.open( 'importNode2.html', "import-node-win" );
  if (!w)
  {
    showfailure( "Opening secondary window", "Opening window failed." );
    testmodule_finished();
  }
  else
  {
    var timeout = 100;
    var attempts = 0;

    function runTests()
    {
      var d = w.document;
      if (!d || d.readyState != "complete")
        if (++attempts > 10)
          showfailure("loading document", "Loading timed out.");
        else
        {
          setTimeout(runTests, timeout);
          timeout += timeout;
          return;
        }
      else
      {
        testcase("Import element node");
 
        var remoteElement = d.getElementById( "span-pop-up" );
        tdef( "Element #2", remoteElement );
        var impElement = document.importNode( remoteElement, true );
        tdef( "Element #3", impElement );
        test( "Element #4", impElement.nodeType, Node.ELEMENT_NODE );
        test( "Element #5", impElement.childNodes.length, 1 );
        tdef( "Element #6", impElement.childNodes.item(0) );
        test( "Element #7", impElement.childNodes.item(0).nodeValue, "A pop-up window!" );
        test( "Element #8", impElement.parentNode, null );
        test( "Element #9", impElement.nodeName, remoteElement.nodeName );

        var localSpan = document.getElementById( "span-base" );
        test( "Element #10", localSpan.childNodes.length, 1 );
        localSpan.appendChild( impElement );
        test( "Element #11", localSpan.childNodes.length, 2 );
        localSpan.removeChild( localSpan.lastChild );
        test( "Element #12", localSpan.childNodes.length, 1 );

        impElement = document.importNode( remoteElement, false );
        tdef( "Element #13", impElement );
        test( "Element #14", impElement.nodeType, Node.ELEMENT_NODE );
        test( "Element #15", impElement.childNodes.length, 0 );
        test( "Element #16", localSpan.childNodes.length, 1 );
        localSpan.appendChild( impElement );
        test( "Element #17", localSpan.childNodes.length, 2 );
        localSpan.removeChild( localSpan.lastChild );
        test( "Element #18", localSpan.childNodes.length, 1 );

        expect_DOM_exception( "Element #19", DOMException.WRONG_DOCUMENT_ERR, 
                              function(){ localSpan.appendChild( remoteElement ); } );

        testcase("Import attribute node");

        test( "Attribute #1", localSpan.hasAttributes(), true );
        test( "Attribute #2", localSpan.attributes.item(0).name, "ID" );
        test( "Attribute #3", localSpan.attributes.item(0).value, "span-base" );
        var localAttr = impElement.getAttributeNode("ID");
        tdef( "Attribute #4", localAttr );
        var remoteAttr = remoteElement.getAttributeNode("ID");
        tdef( "Attribute #5", remoteAttr ); 
        var impAttr = document.importNode( remoteAttr, true );
        tdef( "Attribute #6", impAttr );
        test( "Attribute #7", impAttr.nodeType, Node.ATTRIBUTE_NODE );
        test( "Attribute #8", impAttr.value, "span-pop-up" );
        test( "Attribute #9", impAttr.ownerElement, null );
        test( "Attribute #10", impAttr.specified, true );
        test( "Attribute #11", impAttr.parentNode, null );
        test( "Attribute #12", impAttr.nodeName, remoteAttr.nodeName );
        localSpan.setAttributeNode( impAttr );
        test( "Attribute #13", localSpan.attributes.item(0).name, "ID" );
        test( "Attribute #14", localSpan.attributes.item(0).value, "span-pop-up" );
        test( "Attribute #15", localSpan.attributes.item(0).ownerElement, localSpan );

        impAttr = document.importNode( remoteAttr, false );
        tdef( "Attribute #16", impAttr );
        test( "Attribute #17", impAttr.nodeType, Node.ATTRIBUTE_NODE );
        test( "Attribute #18", impAttr.value, "span-pop-up" );
        test( "Attribute #19", impAttr.ownerElement, null );
        test( "Attribute #20", impAttr.specified, true );
        localSpan.setAttributeNode( impAttr );
        test( "Attribute #21", localSpan.attributes.item(0).name, "ID" );
        test( "Attribute #22", localSpan.attributes.item(0).value, "span-pop-up" );
        test( "Attribute #23", localSpan.attributes.item(0).ownerElement, localSpan );

        expect_DOM_exception( "Attribute #24", DOMException.INUSE_ATTRIBUTE_ERR, 
                              function(){ localSpan.setAttributeNode( remoteAttr ); } );

        testcase("Import document fragment node");

        var remoteDocFrag = d.createDocumentFragment();

        remoteDocFrag.appendChild( remoteElement.cloneNode( true ) );
        tdef( "Document Fragment #1", remoteDocFrag );
        test( "Document Fragment #2", remoteDocFrag.hasChildNodes(), true );
        test( "Document Fragment #3", remoteDocFrag.childNodes.length, 1 );
        test( "Document Fragment #4", remoteDocFrag.childNodes[0].firstChild.nodeValue, "A pop-up window!" );
        test( "Document Fragment #5", localSpan.childNodes.length, 1 );
        test( "Document Fragment #6", localSpan.childNodes[0].nodeValue, "A base window!" );  
        var impDocFrag = document.importNode( remoteDocFrag, true );
        test( "Document Fragment #7", impDocFrag.nodeType, Node.DOCUMENT_FRAGMENT_NODE );
        localSpan.appendChild( impDocFrag );  
        test( "Document Fragment #8", localSpan.childNodes.length, 2 );
        test( "Document Fragment #9", localSpan.childNodes[0].nodeValue, "A base window!" );
        test( "Document Fragment #10", localSpan.childNodes[1].firstChild.nodeValue, "A pop-up window!" );
        localSpan.removeChild( localSpan.lastChild );

        impDocFrag = document.importNode( remoteDocFrag, false );
        test( "Document Fragment #11", impDocFrag.nodeType, Node.DOCUMENT_FRAGMENT_NODE );
        test( "Document Fragment #12", impDocFrag.hasChildNodes(), false );
        test( "Document Fragment #13", localSpan.childNodes.length, 1 );
        test( "Document Fragment #14", impDocFrag.parentNode, null );
        test( "Document Fragment #15", impDocFrag.nodeName, remoteDocFrag.nodeName );
        localSpan.appendChild( impDocFrag );
        test( "Document Fragment #16", localSpan.childNodes.length, 1 );
        test( "Document Fragment #17", localSpan.childNodes[0].nodeValue, "A base window!" );

        expect_DOM_exception( "Document Fragment #18", DOMException.WRONG_DOCUMENT_ERR, 
                              function(){ localSpan.appendChild( remoteDocFrag ); } );

        testcase("Import text node");

        var remoteText = remoteElement.firstChild;
        tdef( "Text #1", remoteText );
        test( "Text #2", remoteText.nodeType, Node.TEXT_NODE );
        test( "Text #3", remoteText.nodeValue, "A pop-up window!" );  
        test( "Text #4", localSpan.childNodes.length, 1 );
        test( "Text #5", localSpan.firstChild.nodeValue, "A base window!" );  
        var impText = document.importNode( remoteText, true );
        test( "Text #6", impText.nodeType, Node.TEXT_NODE );
        test( "Text #7", impText.parentNode, null );
        test( "Text #8", impText.nodeName, remoteText.nodeName );
        test( "Text #9", impText.data, "A pop-up window!" );
        test( "Text #10", impText.length, 16 );
        localSpan.appendChild( impText );
        test( "Text #11", localSpan.childNodes[0].nodeValue, "A base window!" );  
        test( "Text #12", localSpan.childNodes[1].nodeValue, "A pop-up window!" );  

        impText = document.importNode( remoteText, false );
        test( "Text #13", impText.nodeType, Node.TEXT_NODE );
        localSpan.appendChild( impText );
        test( "Text #14", localSpan.childNodes[0].nodeValue, "A base window!" );  
        test( "Text #15", localSpan.childNodes[1].nodeValue, "A pop-up window!" );  

        expect_DOM_exception( "Text #16", DOMException.WRONG_DOCUMENT_ERR, 
                              function(){ localSpan.appendChild( remoteText ); } );

        testcase("Import document node");

        expect_DOM_exception( "Document #1", DOMException.NOT_SUPPORTED_ERR, 
                              function(){ document.importNode( d, true ); } );

        // wrong input parameters
        expect_DOM_exception( "Input #1", 6,  function(){document.importNode( true, remoteText )}  );
        test( "Input #2", document.importNode( "test", true ), undefined );
        test( "Input #3", document.importNode( 1, false ), undefined );
        test( "Input #4", document.importNode( true ), undefined );
        test( "Input #5", document.importNode(), undefined );
      }

      w.close();
      testmodule_finished();
    }

    runTests();
  }

} catch (e) { exception( e ); }

/* eof */
