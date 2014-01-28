/**
 * ECMAScript
 * Testing the RegExp object
 *
 * torstein@opera.com
 */

var cvs = "$Id: regExpObjectTest.js 4838 2006-01-18 05:59:01Z hallvord $";

function main()
{
      printHeader( "The RegExp Object", cvs );

      stdcase( 'RegExp object construction', testRegExpConstruction );
      stdcase( 'RegExp.prototype', testRegExpPrototype );
      stdcase( 'constructor', testConstructor );
      stdcase( 'exec', testExec );
      stdcase( 'global', testGlobal );
      stdcase( 'ignoreCase', testIgnoreCase );
      stdcase( 'lastIndex', testLastIndex );
      stdcase( 'source', testSource );
      stdcase( 'test', testTest );
      stdcase( 'toString', testToString ); 
      stdcase( 'valueOf', testValueOf ); 
      // The following not in ECMAScript v3, but supported (or we wish to support)
      stdcase( '$n', testDollarNumber );
      stdcase( 'compile', testCompile );
      stdcase( 'identity', testIdentity );

      printTail();
}

function stdcase( name, fn )
{
  setTestCase( name );
  try { fn(); } catch (e) { exception(e); }
}

function testRegExpConstruction()
{
      var re = RegExp( '/pattern/' );
      var reo = new RegExp( '/pattern/', 'i' );

      test( 'RegExp constructor called as a constructor', typeof new RegExp( 'pattern' ), 'object' );
      test( 'RegExp constructor called as a constructor', typeof new RegExp( 'pattern', 'i' ), 'object' );
      test( 'RegExp called as a function', typeof re, 'object' );

      test( 'Instance of RegExp', re instanceof RegExp, true );
      test( 'Instance of RegExp', reo instanceof RegExp, true );
      test( 'regexpobject.constructor', strip( String( new RegExp( 'pattern' ).constructor ) ), 
	    'function RegExp() { [native code] }' );
      test( 'regexpobject.global', ( new RegExp( 'pattern' ).global ), false );
      test( 'regexpobject.ignoreCase', ( new RegExp( 'pattern' ) ).ignoreCase, false );
      test( 'regexpobject.lastIndex', ( new RegExp( 'pattern' ) ).lastIndex, 0 );
      test( 'regexpobject.source', (new RegExp( 'pattern' )).source, 'pattern' );
      test( 'regexpobject.multiline', (new RegExp( 'pattern' )).multiline, false );
}

function testRegExpPrototype()
{
    tdef( "constructor", RegExp.prototype.constructor );
    tdef( "exec", RegExp.prototype.exec );
    tdef( "test", RegExp.prototype.test );
    tdef( "toString", RegExp.prototype.toString );

    // Bug #161563: for compatibility, and for consistency,
    // the class of RegExp.prototype should be RegExp, not
    // Object as required by the spec.  We test this here
    // by checking that RegExp.prototype.toString() returns
    // a regular expression.
    test( "RegExp.prototype is a regular expression", RegExp.prototype.toString(), "/(?:)/", 161563 );
}

function testDollarNumber()
{
      var re = /(foobar)/gi;
      var searchstring = 'myFooBarStringaftermatch';
      var result = searchstring.match( re );

      test( 'RegExp[ "$1" ]', RegExp[ "$1" ], result[ result.length - 1 ] );
}

// From JavaScript

function testCompile()
{
      var re = /(foobar)/gi;
      var searchstring = 'myFooBarStringaftermatch';   

      testcase( "Properties after compiling, no flags" );
      re.compile( "(Foo)" );
      test( 'compile #1', re.ignoreCase, false );
      test( 'compile #2', re.global, false );
      test( 'compile #3', re.multiline, false );
      test( 'compile #4', re.source, "(Foo)" );
      test( 'compile #5', re.lastIndex, 0 );

      testcase( "Properties after compiling, flags" );
      re.compile( "(Foom)", "gim" );
      test( 'compile #1', re.ignoreCase, true );
      test( 'compile #2', re.global, true );
      test( 'compile #3', re.multiline, true );
      test( 'compile #4', re.source, "(Foom)" );
      test( 'compile #5', re.lastIndex, 0 );

      test( 'RegExp.prototype.compile.length', RegExp.prototype.compile.length, 1 );
}

function testConstructor()
{
      test( 'RegExp.prototype..constructor', strip( String( RegExp.prototype.constructor ) ), 
	    'function RegExp() { [native code] }' );

      var re = /(foobar)/gi;
      test( 'regexpobject.constructor', strip( String( re.constructor ) ),
	    'function RegExp() { [native code] }' );

      re = new RegExp( '/(foobar)/', 'gi' );
      test( 'regexpobject.constructor', strip( String( re.constructor ) ), 
	    'function RegExp() { [native code] }' );
}

function testExec()
{
      var re = /(foobar)/gi;
      var searchstring = 'myFooBarStringaftermatch';
      var results = re.exec( searchstring );

      test( 'RegExp.prototype.exec.length', RegExp.prototype.exec.length, 1 );
      test( 'regexpobject.exec( str )', results[ 0 ], 'FooBar' );
      test( 'regexpobject.exec( str )', typeof results, 'object' );
      test( 'typeof regexpobject.exec( str )', typeof results, 'object' );
      test( 'regexpobject.exec( str ) instanceof', results instanceof Array, true );
      test( 'regexpstring.exec( str )', /(foobar)/gi.exec( searchstring ), strip( String( results ) ) );

      re = /(gandalf)/gi;
      searchstring = 'Baggend';
      test( 'regexpobject.exec( str )', re.exec( searchstring ), null );

      // Does not seem to be written up in spec, either.
      //test( 'regexpobject( "searchstring" )', re( searchstring ), results );

      // For some odd reason, Opera insists that the two boolean variables weren't identical (true and true),
      // therefore I have casted them to String and stripped them.
      test( 're.ignoreCase', strip( String( re.ignoreCase ) ), strip( String( true ) ) );
}

function testGlobal()
{
      test( 'RegExp.global', RegExp.global, undefined );

      var re = /(foobar)/gi;
      test( 're.global', re.global, true );

      var re = new RegExp( '(foobar)', 'g' );
      test( 're.global', re.global, true );

      RegExp.global = true;
      test( 'RegExp.global', RegExp.global, true );

      RegExp.global = false;
      test( 'RegExp.global', RegExp.global, false );
}

function testIgnoreCase()
{
      var re = /(foobar)/gi;
      // For some odd reason, Opera insists that the two boolean variables weren't identical (true and true),
      // therefore I have casted them to String and stripped them.
      test( 're.ignoreCase', strip( String( re.ignoreCase ) ), strip( String( true ) ) );

      var re = new RegExp( '(foobar)', 'i' );
      test( 're.ignoreCase', strip( String( re.ignoreCase ) ), strip( String( true ) ) );

      RegExp.ignoreCase = true;
      test( 'RegExp.ignoreCase -dd', RegExp.ignoreCase, true );

      RegExp.ignoreCase = false;
      test( 'RegExp.ignoreCase', RegExp.ignoreCase, false );
}

function testLastIndex()
{
      var reo = /str/i;
      var searchstring = 'myFooBarStringaftermatchFoobar';
      var results = reo.exec( searchstring );
      test( 'regexpobject.lastIndex', reo.lastIndex, 0 );

      var re = /foobar/gi;
      searchstring = 'myFooBarStringaftermatchFoobar';
      results = re.exec( searchstring );
      test( 'regexpobject.lastIndex', re.lastIndex, searchstring.indexOf( 'FooBar' ) + 'FooBar'.length );

      re = /Bilbo/g;
      searchstring = 'Bilbo';
      results = re.exec( searchstring );
      test( 'regexpobject.lastIndex', reo.lastIndex, 0 );

      re = /Bilb/g;
      searchstring = 'Bilbo';
      results = re.exec( searchstring );
      test( 'regexpobject.lastIndex', reo.lastIndex, 0 );

      re = /(Bilb)?/g;
      searchstring = 'Bilbo';
      results = re.exec( searchstring );
      test( 'regexpobject.lastIndex', reo.lastIndex, 0 );
}


function testSource()
{
      var re = /str/i;
      var searchstring = 'myFooBarStringaftermatchFoobar';
      var results = re.exec( searchstring );
      test( 'regexpobject.source', re.source, 'str' );

      re.compile( 'newpattern' );
      test( 'regexpobject.source', re.source, 'newpattern' );

      re = new RegExp( 'str', 'i' );
      test( 'regexpobject.source', re.source, 'str' );

      re.compile( '' );
      test( 'regexpobject.source', re.source, '' );
}

function testTest()
{
      var re = /gandalf/i;
      var searchstring = 'myGandalfString';
      var nomatchstring = 'doesntmatch';

      test( 'regexpobject.test( str )', re.test( searchstring ), true );
      test( 'regexpobject.test( str )', re.test( nomatchstring ), false );
      test( 'RegExp.prototype.test.length', RegExp.prototype.test.length, 1 );

      var ok = false;
}

function testToString()
{
      var re = /gandalf/i;
      test( 'regexpobject.toString()', re.toString(), '/gandalf/i' );

      re.compile( 'bilbo', 'gi' );
      test( 'regexpobject.toString()', re.toString(), '/bilbo/gi' );

      re.compile( 'frodo' );
      test( 'regexpobject.toString()', re.toString(), '/frodo/' );

      reo = new RegExp( 'aragorn', 'gi' );
      test( 'regexpobject.toString()', reo.toString(), '/aragorn/gi' );

      test( 'RegExp.prototype.toString.length', RegExp.prototype.toString.length, 0 );
}

function testValueOf()
{
      var re = /gandalf/i;

      test( 'regexpobject.valueOf()', re.valueOf(), re );
      test( 'typeof regexpobject.valueOf()', typeof re.valueOf(), 'object' );

      test( 'RegExp.prototype.valueOf.length', RegExp.prototype.valueOf.length, 0 );
}

function testIdentity()
{
    function f(i) {
	// The regexes must look the same, but the spec mandates that
	// they are compiled as two different objects, and that these
	// objects persist across calls to f() so that two calls to f(0)
	// returns the same object.
	if (i == 0)
	    return /abracadabra/g;
	else
	    return /abracadabra/g;
    }

    var a = f(0);
    a.lastIndex = 8;
    var b = f(0);
    test( "RegExp literal identity #1", b.lastIndex, 8 );
    var c = f(1);
    test( "RegExp literal identity #2", c.lastIndex, 0 );
}
