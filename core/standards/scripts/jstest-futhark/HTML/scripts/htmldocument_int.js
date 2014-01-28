/* Tests for DOM 2 Core 'DOMImplementation' object.
   Interactive
*/

var cvs = "$Id: htmldocument_int.js 10655 2006-12-18 15:47:57Z hallvord $";

document.writeln("<pre>");  
document.write("Text1: AB");
document.writeln("CD");
document.writeln("Text2: EF");
document.writeln("GH");
document.writeln("</pre>");  

function testInteractive()
{
   conf( "write" , "Does Text1 occur as ABCD ?" );
   conf( "writeln" , "Does Text2 occur as EF followed by GH on the next line ?" );
}

/* eof */
