var cvs = "$Id: except.js 22424 2008-01-18 14:04:59Z hallvord $";

testmodule( "DOM and Event exceptions", cvs );

try {

testcase( "DOM Exception constructor exists" );

  tdef( "DOMException", window.DOMException );

testcase( "DOM Exception values" );

  test( "DOMException.INDEX_SIZE_ERR",              DOMException.INDEX_SIZE_ERR, 1 );
  test( "DOMException.DOMSTRING_SIZE_ERR",          DOMException.DOMSTRING_SIZE_ERR, 2 );
  test( "DOMException.HIERARCHY_REQUEST_ERR",       DOMException.HIERARCHY_REQUEST_ERR, 3 );
  test( "DOMException.WRONG_DOCUMENT_ERR",          DOMException.WRONG_DOCUMENT_ERR, 4 );
  test( "DOMException.INVALID_CHARACTER_ERR",       DOMException.INVALID_CHARACTER_ERR, 5 );
  test( "DOMException.NO_DATA_ALLOWED_ERR",         DOMException.NO_DATA_ALLOWED_ERR, 6 );
  test( "DOMException.NO_MODIFICATION_ALLOWED_ERR", DOMException.NO_MODIFICATION_ALLOWED_ERR, 7 );
  test( "DOMException.NOT_FOUND_ERR",               DOMException.NOT_FOUND_ERR, 8 );
  test( "DOMException.NOT_SUPPORTED_ERR",           DOMException.NOT_SUPPORTED_ERR, 9 );
  test( "DOMException.INUSE_ATTRIBUTE_ERR",         DOMException.INUSE_ATTRIBUTE_ERR, 10 );
  test( "DOMException.INVALID_STATE_ERR",           DOMException.INVALID_STATE_ERR, 11 );
  test( "DOMException.SYNTAX_ERR",                  DOMException.SYNTAX_ERR, 12 );
  test( "DOMException.INVALID_MODIFICATION_ERR",    DOMException.INVALID_MODIFICATION_ERR, 13 );
  test( "DOMException.NAMESPACE_ERR",               DOMException.NAMESPACE_ERR, 14 );
  test( "DOMException.INVALID_ACCESS_ERR",          DOMException.INVALID_ACCESS_ERR, 15 );

testcase( "DOM Exception construction" );
try{
  testinstance( "construct #1", new DOMException(), DOMException );
  testinstance( "construct #2", new DOMException(), Error );
  testinstance( "construct #3", new DOMException(), Object );
  testnotinstance( "construct #4", new DOMException(), String );	// Pure paranoia
}catch(e){exception(e);}
testcase( "Event Exception constructor exists" );

  tdef( "EventException", window.EventException );
if(window.EventException){
testcase( "Event Exception values" );

  test( "EventException.UNSPECIFIED_EVENT_TYPE_ERR", EventException.UNSPECIFIED_EVENT_TYPE_ERR, 0 );

testcase( "Event Exception construction" );

  testinstance( "construct #1", new EventException(), EventException );

}
} catch (e) { exception( e ); }

testmodule_finished();

/* eof */
