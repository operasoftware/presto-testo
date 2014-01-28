// Author: lth@opera.com, based on Netscape code

var header_string = false;
TZ_DIFF	= 2;

function writeHeaderToLog( string ) {
    header_string = string;

    // Hack: install an exception handler at least in some cases,
    // but a lot of the test code still does not go through a
    // 'getTestCases' function.
    var oldGetTestCases = getTestCases;
    getTestCases = 
      function () 
      {
        try { 
          return oldGetTestCases(); 
        }
        catch (e) 
        { 
          doWriteHeaderToLog();
          err( e, 0, 0 );
          return new Array();
        }
      };
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
    document.write( string + "<br>\n");
}
