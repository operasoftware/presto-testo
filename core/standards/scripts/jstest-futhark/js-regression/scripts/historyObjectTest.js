/* -*- mode: java -*- */

/* FIXME: tests do not even run in IE or Mozilla. */

var cvs = "$Id: historyObjectTest.js 19486 2007-10-08 13:12:39Z hallvord $";

testmodule( "JS history object test", cvs );

testcase( "properties exist" );
var l = window.history;
try {
    testProperty( "current", l.current );
    testProperty( "length", l.length );
    testProperty( "next", l.next );
    testProperty( "previous", l.previous );
}
catch (e) { exception(e); }

testcase( "properties read as coherent values" );

try {
    var fn1 = "locationHelper.html";
    var fn2 = "historyHelper2.html";
    var fn3 = "historyHelper3.html";
    var w=window.open(fn1);
    l = w.history;
    test( 'current', l.current, get_protocol_and_host() + get_pathname(fn1) );
    test( 'length', l.length, spoofingExplorer() ? 0 : 1 );

    w.location = fn2;  surrender_timeslice();
    w.location = fn3;  surrender_timeslice();

    test( 'length after location change', l.length, spoofingExplorer() ? 2 : 3 );
    w.back();          surrender_timeslice();

    test( 'length after back', l.length, spoofingExplorer() ? 1 : 3 );
    test( 'next', l.next, get_protocol_and_host() + get_pathname(fn3));
    test( 'previous', l.previous, get_protocol_and_host() + get_pathname(fn1) );
}
catch(e) { exception(e); }

testcase( "entries seen as array elements" );

try {
    test( 'history[0]',w.history[0], get_protocol_and_host() + get_pathname(fn1) );
    test( 'history[1]',w.history[1], get_protocol_and_host() + get_pathname(fn2) );
}
catch(e) { exception(e); }

testcase( "properties are writeable" );

// All properties are read-only.
// FIXME: So should test that they are *not* writeable.


// Cleanup

w.close();

testmodule_finished();
