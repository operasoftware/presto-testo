/* -*- mode: java -*- */

var cvs = "$Id: locationObjectTest.js 19486 2007-10-08 13:12:39Z hallvord $";

testmodule( "JS location object test", cvs );

testcase( "properties exist" );
var l = document.location;
try {
    testProperty( "hash", l.hash );
    testProperty( "host", l.host );
    testProperty( "hostname", l.hostname );
    testProperty( "href", l.href );
    testProperty( "pathname", l.pathname );
    testProperty( "port", l.port );
    testProperty( "protocol", l.protocol );
    testProperty( "reload", l.reload );
    testProperty( "replace", l.replace );
    testProperty( "search", l.search );
}
catch (e) { exception(e); }

testcase( "properties read as coherent values" );

var fn="locationHelper.html";
var w=window.open(fn + "#here?there");
test( 'hash#1', w.document.location.hash, "#here" );
test( 'host#1', w.document.location.host, get_host() );
test( 'hostname#1', w.document.location.hostname, get_host() );
test( 'href#1', w.document.location.href, get_protocol_and_host() + get_pathname(fn) + "#here?there" );
test( 'pathname#1', w.document.location.pathname, get_pathname(fn) );
test( 'port#1', w.document.location.port, get_port() );
test( 'protocol#1', w.document.location.protocol, get_protocol() );
test( 'search#1', w.document.location.search, "?there" );

testcase( "toString and valueOf" );
test( 'toString #1', l.toString(), l );
test( 'toString #2', l, get_protocol_and_host() + get_pathname("locationObjectTest.html") );
test( 'toString #3', l.valueOf(), l.toString() );

testcase( "properties are writeable" );

w.document.location.hash = "#nowhere";
test( 'hash#2', w.document.location.hash, "#nowhere" );
if (w.document.location.host == "localhost")
{
  w.document.location.host = "127.0.0.1";
  test( 'host#2', w.document.location.host, "127.0.0.1" );
}

// These fail in both Opera 6.01 and Opera 7, with the old scheduler at least,
// and the reason is not yet known.  Setting fields like search and href really
// ought to be blocking operations, but are not, in Opera as it is today.
w.document.location.search = "?everywhere";
test( 'search#2', w.document.location.search, "?everywhere" );
w.document.location.href = get_protocol_and_host() + get_pathname(fn);
test( 'href#2', w.document.location.href, get_protocol_and_host() + get_pathname(fn) );

w.close();

testmodule_finished();
