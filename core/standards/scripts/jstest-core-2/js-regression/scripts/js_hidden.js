/**
 * JavaScript
 * Hidden object, js 1.3.
 *
 * 17.07.2001, torstein@opera.com
 * $Id:
 *
 */
var tprop;

function main( hiddenObject )
{
   try 
   {
      var cvs = "$Id: js_hidden.js 4838 2006-01-18 05:59:01Z hallvord $";
      testmodule( "The Hidden object", cvs );

      testcase( 'Hidden exists' );
      this.tprop = make_tprop( document.theform );
      tprop( "thehidden", "object" );

      test( "Hidden elements in form.elements array", document.theform.elements.length, 2 );
      test( "Hidden elements in form.elements array",
            document.theform.elements[ 0 ],
            document.theform.thehidden );
      test( "Hidden elements in form.elements array",
            document.theform.elements[ 1 ],
            document.theform.anotherthehidden );

      testcase( 'Hidden object properties' );
      this.tprop = make_tprop( document.theform.thehidden );
      testHiddenProperties( hiddenObject );
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}

function testHiddenProperties( hidden )
{
   tprop( "form", "object" );
   tprop( "name", "string" );
   tprop( "type", "string" );
   tprop( "value", "string" );
   
   test( "form", hidden.form, document.theform );
   test( "name", hidden.name, "thehidden" );
   test( "type", hidden.type, "hidden" );
   test( "value", hidden.value, "Hidden default value" );

   hidden.name = "New Hidden name";
   hidden.value = "New Hidden value";

   test( "modified value", hidden.name, "New Hidden name" );
   test( "modified value", hidden.value, "New Hidden value" ); 

   /* Read-only JS 1.3, not read-only in DOM2-HTML */
   hidden.type = "text";
   test( "type", hidden.type, "text" );
   hidden.type = "hidden";

   expect_DOM_exception( "Changing a readonly property, hidden.form",
                         dom_no_modification_allowed_err,
                         function() { hidden.form = "something"; } );
}

