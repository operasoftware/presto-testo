var URLs = [
  "http://www.apple.com",
  "http://www.coca.com",
  "http://www.msnd.com",
  "http://www.linux.com" ];

function test_anchors()
{
  var i;
  try {
    var url_prog="", tabindex_prog="", name_prog="", innerText_prog="", protoclLong_prog="";
    for ( i=0 ; i < document.anchors.length ; i++ )
    {
	url_prog = url_prog + 'fail += !test( "Anchor #' + i + '","' + document.anchors[i].href + '","' + URLs[i] + '");';
    }
    w = window.open();
    w.document.writeln( '<' + 'script src="../regression-lib/testbase.js"><' + '/script>' );
    w.document.writeln( '<' + 'script>' );
    w.document.writeln( 'testmodule( "anchor array" );' );
    w.document.writeln( 'var fail=0;' );
    w.document.writeln( 'testcase( "URL values");' );
    w.document.writeln( url_prog );
    w.document.writeln( 'if (fail == 0) self.close();' );
    w.document.writeln( 'testmodule_finished();' );
    w.document.writeln( '<' + '/script>' );
    w.document.close();
  }
  catch (e) { exception(e); }
}


