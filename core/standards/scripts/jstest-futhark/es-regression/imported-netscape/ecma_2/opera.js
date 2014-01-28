// Author: lth@opera.com, based on Netscape code

var header_string = false;

oldtest = test;
test = function ()
       {
         if (window.TITLE) header_string = window.TITLE;
         oldtest();
       }
function writeHeaderToLog( string ) {
    header_string = string;
}
function doWriteHeaderToLog() {
    if (header_string)
    {
      document.write( "<h2>" + header_string + "</h2>" );
      header_string=false;
    }
}
function writeFormattedResult( expect, actual, string, passed ) {
    if (passed) return;

    doWriteHeaderToLog();
    var s = "<tt>"+ string ;
    s += "<b>" ;
    s += ( passed ) ? "<font color=#009900> &nbsp;" + PASSED
                    : "<font color=#aa0000>&nbsp;" +  FAILED + expect + "</tt>";
    writeLineToLog( s + "</font></b></tt>" );
    return passed;
}
function stopTest()
{
  if (opera.collect)
    opera.collect();
  if (!header_string)
      document.write("<hr>");
}
function writeLineToLog( string ) {
  if (string.indexOf( "BUGNUMBER" ) != 0)
  {
    doWriteHeaderToLog();
    document.write( string + "<br>\n");
  }
}
