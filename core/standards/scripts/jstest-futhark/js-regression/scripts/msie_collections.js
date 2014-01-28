/* -*- mode: c++; tab-width: 4 -*- 
 *
 * Non-interactive tests for MSIE collection operations.
 */

var cvs = "$Id: msie_collections.js 131642 2013-05-14 16:29:49Z svn $";

testmodule( "MSIE collection semantics", cvs );
expect( document.body.children.tags ? 35 : 29);
try {

    testcase( "document.forms" );

    test( "forms #1", document.forms.length, 2 );
    if (!isMozilla())
    {
	test( "forms #2", document.forms(0).id, "form1" );
	test( "forms #3", document.forms(1).id, "form2" );
    }
    test( "forms #4", document.forms[0].id, "form1" );
    test( "forms #5", document.forms[1].id, "form2" );
    test( "forms #6", document.forms.form1.id, "form1" );
    test( "forms #7", document.forms.form2.id, "form2" );
    test( "forms #8", document.forms.item(0).id, "form1" );
    test( "forms #9", document.forms.item(1).id, "form2" );
    if (!isExplorer())
    {
	test( "forms #10", document.forms.namedItem("form1").id, "form1" );
	test( "forms #11", document.forms.namedItem("form2").id, "form2" );
    }
    // In MSIE, strings can be passed to item in the same way namedItem
    // accepts them in DOM.
//    if (!isMozilla())
    try{
	test( "forms #12", document.forms.item("form1").id, "form1" );
	test( "forms #13", document.forms.item("form2").id, "form1", 'changed Jan 2011 as requested in CT-326' );
    }catch(e){}

    testcase( "radio" );

    test( "radio #1", document.forms[1].r1.length, 5 );
    // In MSIE, the form actually has an item() function, so it can be treated
    // like a collection, and the item() function takes a string, like namedItem.
    //if (!isMozilla())
    {
	test( "radio #2", document.forms[1].item(0).type, "button" );
	test( "radio #3", document.forms[1].item("r1").type, 'button', 'changed Jan 2011 as requested in CT-326' );
    }
    //if (!isExplorer() && !isMozilla())
	test( "radio #4", document.forms[1].namedItem("r1").length, 5 );
    test( "radio #5", document.forms[1].thebutton.tagName, "INPUT" );
    test( "radio #6", document.forms[1].thebutton.length, undefined );
    test( "radio #7", document.forms[1].r1.length, 5 );
    //if (!isMozilla())
    {
	test( "radio #8", document.forms[1].r1[0].value, "a" );
	test( "radio #9", document.forms[1].r1(4).value, "e" );
    }
    test( "radio #10", document.forms[1].r1.item(0).value, "a" );
    test( "radio #11", document.forms[1].r1.item(4).value, "e" );
    test( "radio #12", document.forms[1].r1.item(0).tagName, "INPUT" );
    test( "radio #13", document.forms[1][0].type, "button" );

    testcase( "document.all subcollections" );

    test( "subcoll #1", document.all["opera"].length, 4 );
    test( "subcoll #2", document.all["ibm"].length, 3 );
    test( "subcoll #3", document.all["ibm"][0].href, "http://www.opera.com/");

    if( document.body.children.tags ){ // Jan 2011 - .tags() support was removed, do feature detection. Hallvord
      testcase( "collection.tags function" );
      var c = document.getElementById("top_1").children.tags("div");
      test( "length", c.length, 2 );
      test( "id #1", c.item(0).id, "second_1" );
      test( "id #2", c.item(1).id, "second_2" );
      test( "namedItem #1", c.namedItem("second_1"), c.item(0) );  // by ID
      test( "namedItem #2", c.namedItem("second_2"), c.item(1) );  // by ID
      test( "namedItem #3", c.namedItem("abra"), undefined ); // by name, but DIV doesn't have a name attribute
      test( "namedItem #4", c.namedItem("cadabra"), undefined ); // by name, see above
    }
}
catch (e) { exception(e); }

testmodule_finished();
