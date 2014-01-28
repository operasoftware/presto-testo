
function main( textObject, checkboxObject, imageObject, fileObject )
{
   printHeader( "Input Element Object" );
   setTestCase( "Input Element Object Properties" );

   testProperty( "id", textObject.id );
   testProperty( "defaultValue", textObject.defaultValue );
   testProperty( "form", textObject.form );
   testProperty( "name", textObject.name );
   testProperty( "type", textObject.type );
   testProperty( "value", textObject.value );
   testProperty( "size", textObject.size );
   testProperty( "maxlength", textObject.maxlength );
   testProperty( "tabindex", textObject.tabindex );
   testProperty( "accesskey", textObject.accesskey );
   testProperty( "readonly", textObject.readonly );

   testCheckRadio( checkboxObject );
   testImage( imageObject );
   testFile( fileObject );

   print( '' );
   setTestCase( "Input Element Object Methods" );
   printSubTitle( 'Object Methods' );
   testProperty( "blur()", textObject.blur() );
   testProperty( "click()", textObject.click() );
   testProperty( "focus()", textObject.focus() );
   testProperty( "select()", textObject.select() );

   printTail();
}

function testCheckRadio( checkboxObject )
{
   print( '' );
   setTestCase( "CheckBox Properties" );
   printSubTitle( 'type="checkbox"/type="radio" specific properties' );
   testProperty( "checked", checkboxObject.checked );
   testProperty( "defaultChecked", checkboxObject.defaultChecked );
}

function testImage( imageObject )
{
   print( '' );
   setTestCase( 'Image Properties' );
   printSubTitle( 'type="image" specific properties' );
   testProperty( "src", imageObject.src );
   testProperty( "alt", imageObject.alt );
   testProperty( "usemap", imageObject.usemap );
}

function testFile( fileObject )
{
   print( '' );
   setTestCase( "File Properties" );
   printSubTitle( 'type="file" specific properties' );
   testProperty( "accept", fileObject.accept );
}
