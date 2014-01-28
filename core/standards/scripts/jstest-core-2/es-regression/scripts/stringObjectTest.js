/* -*- tab-width: 4 -*- */

/* ECMAScript regression tests -- Strings */ 

var cvs = "$Id: stringObjectTest.js 4838 2006-01-18 05:59:01Z hallvord $";

function main()
{
    testmodule( "Strings and String objects", cvs ); 

    stdcase( 'String.prototype', testStringPrototype );     
    stdcase( 'String cast', testStringCast );
    stdcase( 'String construction', testStringConstruction );
    stdcase( 'anchor', testAnchor );              
    stdcase( 'big', blink( 'BIG','big' ) );
    stdcase( 'blink', blink( 'BLINK','blink' ) );
    stdcase( 'bold', blink( 'B', 'bold' ) );
    stdcase( 'charAt', testCharAt );              
    stdcase( 'charCodeAt', testCharCodeAt );          
    stdcase( 'concat', testConcat );              
    stdcase( 'constructor', testConstructor );         
    stdcase( 'fixed', blink( 'TT', 'fixed' ) );
    stdcase( 'fontcolor', testFontColor );           
    stdcase( 'fontsize', testFontSize );            
    stdcase( 'fromCharCode', testFromCharCode );        
    stdcase( 'indexOf', testIndexOf );             
    stdcase( 'italics', blink( 'I', 'italics' ) );
    stdcase( 'lastIndexOf', testLastIndexOf );         
    stdcase( 'length', testLength );              
    stdcase( 'link', testLink );                
    stdcase( 'localeCompare', testLocaleCompare );                
    stdcase( 'match', testMatch );               
    stdcase( 'replace', testReplace );             
    stdcase( 'search', testSearch );              
    stdcase( 'slice', testSlice );               
    stdcase( 'small', blink( 'SMALL', 'small' ) );
    stdcase( 'split', testSplit );               
    stdcase( 'strike', blink( 'STRIKE', 'strike' ) );              
    stdcase( 'sub', blink( 'SUB', 'sub' ) );
    stdcase( 'substr', testSubstr );
    stdcase( 'substring', testSubstring );	// Note, substr is not substring.
    stdcase( 'sup', blink( 'SUP', 'sup' ) );
    stdcase( 'toLocaleLowerCase', testToLocaleLowerCase );         
    stdcase( 'toLocaleUpperCase', testToLocaleUpperCase );         
    stdcase( 'toLowerCase', testToLowerCase );         
    stdcase( 'toString', testToString );            
    stdcase( 'toLocaleString', testToLocaleString );
    stdcase( 'toUpperString', testToUpperCase );         
    stdcase( 'valueOf', testValueOf );             
    stdcase( 'nullChars', testNullChars );

    testmodule_finished();
}

function stdcase( name, fn )
{
  setTestCase( name );
  try { 
      fn(); 
  } 
  catch (e) { 
      exception(e); 
  }
}

function testNullChars()
{
    testcase( "null characters");
    x = new String( "foo" );
    test( "no null character", x, "foo" );
    x = new String( "foo" ).concat( String.fromCharCode( 0 ) );
    test( "trailing null character (length)", x.length, 4 );
    test( "trailing null character", x.charCodeAt( x.length - 1 ), 0 );
    x = new String( "foo" ).concat( String.fromCharCode( 0 ) ).concat( "bar" );
    test( "middle null character (length)", x.length, 7 );
    test( "middle null character #0", x.charAt(0), "f" );
    test( "middle null character #1", x.charAt(2), "o" );
    test( "middle null character #2", x.charCodeAt(3), 0 );
    test( "middle null character #3", x.charAt(4), "b" );
    test( "middle null character #4", x.charAt(6), "r" );

    test( "middle null character #5", x.charAt(), "f", 85837 );
}

function testStringCast()
{
    var x; 

    x = '';        test( "String( '' )", String( x ), "" );
    x = undefined; test( "String( undefined )", String( x ), "undefined" );
    x = null;      test( "String( null )", String( x ), "null" );
    x = true;      test( "String( true )", String( x ), "true" );
    x = false;     test( "String( false )", String( x ), "false" );
    x = -0;        test( "String( -0 )", String( x ), "0" );  // Not -0, see 9.8.1
    x = NaN;       test( "String( NaN )", String( x ), "NaN" );
    x = "foo";     test( "String( 'foo' )", String( x ), "foo" );
    x = String;    test( "String( String )", strip( String( x ) ), "function String() { [native code] }" );
}

function testStringConstruction()
{
    var str = "teststring";
    test( 'typeof str', typeof str, 'string' );
    test( 'instance of String', str instanceof String, false );

    str = new String( "teststring" );
    test( 'typeof str', typeof str, 'object' );
    test( 'constructor', strip( String( str.constructor ) ), 'function String() { [native code] }' );
    test( 'constructor.length', str.constructor.length, 1 );
    test( 'instance of String', str instanceof String, true );
    test( "length", ( new String("foo") ).length, 3 ); 
}

function testAnchor()
{
    var str = "Click on my anchor";
    anchstr = convertTags( str.anchor( 'mylink_name' ) );
    test( 'anchor( name_attribute )', anchstr, '&lt;A NAME="mylink_name"&gt;' + str + '&lt;/A&gt;' );

    str = "";
    anchstr = convertTags( str.anchor( '' ) );
    test( 'anchor( name_attribute )', anchstr, '&lt;A NAME=""&gt;' + str + '&lt;/A&gt;' );
}

/* Test .big, .blink, etc. */
function blink( tag, fnn )
{
    return function ()
	{
	    testcase( 'String.prototype.' + fnn );
	    var str = "Big text";
	    bigstr = convertTags( str[fnn]() );
	    test( fnn + '()', bigstr, '&lt;' + tag + '&gt;' + str + '&lt;/' + tag + '&gt;' );

	    str = "";
	    bigstr = convertTags( str[fnn]( 'illegal_argument' ) );
	    test( fnn + '( illegal_argument )', bigstr, '&lt;' + tag + '&gt;' + str + '&lt;/' + tag + '&gt;' );
	};
}

function testCharAt()
{
    x = new String( "foo" );

    test( "charAt #1", x.charAt( 0 ), "f" );
    test( "charAt #2", x.charAt( 3 ), "" );
    test( "charAt #3", x.charAt( 30 ), "" );
    test( "charAt #4", x.charAt( -1 ), "" );

    x = { toString: function () { return "foo"; }, 
	  charAt: String.prototype.charAt
    };

    test( 'charAt #5', x.charAt( 0 ), String( x ).substr( 0, 1 ) );
    test( "charAt #6", x.charAt( 0 ), "f" ); 

	/* This is JavaScript 1.5 compatible but not standard */

	test( 'charAt #7', 'cat'[0], "c" );          // in range yields character
	test( 'charAt #8', 'cat'[4], undefined );    // out of range yields undefined

	String.prototype[5] = "foo";
	var s = new String('cat');
	s[1] = "fnord";

	test( 'charAt #9', s[0], "c" );              // in range yields character
	test( 'charAt #10', s[1], "fnord" );         // except when defined as a property
	test( 'charAt #11', s[4], undefined );       // out of range yields undefined
	test( 'charAt #12', s[5], "foo" );           // except when defined in prototype

	delete String.prototype[5];
}

function testCharCodeAt()
{
    x = new String( "foo" );

    test( "charCodeAt #1", x.charCodeAt( 0 ), 102 );
    ttrue( "charCodeAt #2", isNaN( x.charCodeAt( 3 ) ) );
    ttrue( "charCodeAt #3", isNaN( x.charCodeAt( -1 ) ) );
    ttrue( "charCodeAt #4", !isNaN( x.charCodeAt( 0 ) ) );

    test( "charCodeAt compatibility #1", x.charCodeAt(), 102, 85837 );

    x = { toString:   function () { return "foo"; },
	  charCodeAt: String.prototype.charCodeAt 
    };

    test( "charCodeAt #5", x.charCodeAt( 0 ), 102 ); 

    test( "charCodeAt #6", ("foo").charCodeAt( new Number(0) ), 102 );

}

function testConcat()
{
    x = new String( "foo" );
    test( "concat #1", x.concat(), "foo" );
    test( "concat #2", x.concat( x ), "foofoo" );

    x = new String( "foo" );
    test( "concat #3", x.concat( x, x, x ), "foofoofoofoo" );
    test( "concat #4", x, "foo" );  // A bug once: it would update the object with the new string

    onestring = new String( 'onestring ' );
    anotherstring = new String( 'anotherstring ' );
    athirdstring = new String( 'thethirdstring ' );

    test( 'concat #5', onestring.concat( anotherstring, athirdstring ), 
	  'onestring anotherstring thethirdstring ' );
    test( 'concat #6', strip( String( onestring ) ), 'onestring' );
    test( 'concat #7', strip( String( anotherstring ) ), 'anotherstring' );
    test( 'concat #8', strip( String( athirdstring ) ), 'thethirdstring' );

    x = new String( "foo" );
    x.toString = function () { return "bar"; };
    test( "x.concat( x )", x.concat( x ), "barbar" );

    x = { toString: function () { return 'bar'; },
	  concat: String.prototype.concat
    };

    test( "x.concat( x )", x.concat( x ), "barbar" );
    test( 'String.prototype.concat.length', String.prototype.concat.length, 1 )
	}

function testConstructor()
{
    var str = "hello";
    test( 'constructor', str.construtor, undefined );

    str = new String( 'hello' );
    test( 'constructor', strip( String( str.constructor ) ), 'function String() { [native code] }' );
    test( 'constructor.length', str.constructor.length, 1 );
}

function testFontColor()
{
    var str = "My blue text";
    var color = "blue";

    fontcolorstr = convertTags( str.fontcolor( color ) );
    test( 'fontcolor( color )', fontcolorstr, '&lt;FONT COLOR="' + color + '"&gt;' + str + '&lt;/FONT&gt;' );

    color = "#cccccc"; // browsersafe gray
    fontcolorstr = convertTags( str.fontcolor( color ) );
    test( 'fontcolor( color )', fontcolorstr, '&lt;FONT COLOR="' + color + '"&gt;' + str + '&lt;/FONT&gt;' );

    str = "";
    fontcolorstr = convertTags( str.fontcolor( '' ) );
    test( 'fontcolor( "" )', fontcolorstr, '&lt;FONT COLOR=""&gt;' + str + '&lt;/FONT&gt;' );
}

function testFontSize()
{
    var str = "My sized text";
    var size = "10"; // size as string

    fontsizestr = convertTags( str.fontsize( size ) );
    test( 'fontsize( size )', fontsizestr, '&lt;FONT SIZE="' + size + '"&gt;' + str + '&lt;/FONT&gt;' );

    size = 10; // size as number
    fontsizestr = convertTags( str.fontsize( size ) );
    test( 'fontsize( size )', fontsizestr, '&lt;FONT SIZE="' + size + '"&gt;' + str + '&lt;/FONT&gt;' );

    str = "";
    fontsizestr = convertTags( str.fontsize( '' ) );
    test( 'fontsize( "" )', fontsizestr, '&lt;FONT SIZE=""&gt;' + str + '&lt;/FONT&gt;' );
}

function testFromCharCode()
{
    var x;
    var teststring = String.fromCharCode( 65, 66, 67 );
    test( 'fromCharCode #1', typeof teststring, 'string' );
    test( 'fromCharCode #2', teststring, 'ABC' );

    var teststring = String.fromCharCode( 0xB2, 0xB3, 0xB4 );
    test( 'fromCharCode #3', teststring, '\xB2\xB3\xB4' );
    test( 'fromCharCode #4', typeof teststring, 'string' );

    var teststring = String.fromCharCode( 256, 257, 258 );
    test( 'fromCharCode #5', teststring, '\u0100\u0101\u0102' );
    test( 'fromCharCode #6', typeof teststring, 'string' );

    teststring = String.fromCharCode();
    test( 'fromCharCode #7', typeof teststring, 'string' );
    test( 'fromCharCode #8', teststring.length, 0 );

    teststring = String.fromCharCode( '' );
    test( 'fromCharCode #9', typeof teststring, 'string' );
    test( 'fromCharCode #10', teststring.length, 1 );        // One null byte
    test( 'fromCharCode #11', teststring.charCodeAt(0), 0 ); // One null byte

    test( 'fromCharCode #12', String.fromCharCode.length, 1 );

    x = { toString:     function () { return 'bar'; },
	  fromCharCode: String.fromCharCode             // static method, not method of prototype
    };

    test( 'fromCharCode #13', x.fromCharCode( 256, 257, 258 ), '\u0100\u0101\u0102' );
}

function testIndexOf()
{
    var teststring = "My teststring that has more than a few words, and \'that\' is mentioned two times!";
    test( 'typeof str.indexOf( substr )', typeof teststring.indexOf( 'th' ), 'number' );
    test( 'str.indexOf( nonexisting )', teststring.indexOf( 'doesntexist' ), -1 );
    test( 'str.indexOf( str )', teststring.indexOf( 'My' ),  0 );
    test( 'str.indexOf( str )', teststring.indexOf( '\!' ),  teststring.length - 1);
    test( 'str.indexOf( str )', teststring.indexOf( 'that' ),  14 );
    // position 51 because of the escape character '\', which is not counted
    test( 'str.indexOf( str )', teststring.indexOf( 'that', 15 ),  51 ); 

    test( 'String.prototype.indexOf.length', String.prototype.indexOf.length, 1 );

    x = { toString: function () { return 'bar'; },
	  indexOf: String.prototype.indexOf
    };

    test( 'str.indexOf( str )', x.indexOf( 'ar' ), 1 ); 
}

function testLastIndexOf()
{
    var str = 'My teststring';
    test( 'str.lastIndexOf( searchvalue )', str.lastIndexOf( 's' ), str.length - 6 );
    test( 'str.lastIndexOf( nonexisting )', str.lastIndexOf( 'nonexisting' ), -1 );
    test( 'str.lastIndexOf( searchvalue, startindex )', str.lastIndexOf( 's', str.length - 7 ), 5 );
    test( 'str.lastIndexOf( nonexisting, startindex )', str.lastIndexOf( 'nonexisting', str.length - 7 ), -1 );
    test( 'str.lastIndexOf( searchvalue, negativestartindex )', str.lastIndexOf( 's', -7 ), -1 );

    test( 'String.prototype.lastIndexOf.length', String.prototype.lastIndexOf.length, 1 ); 
}

function testLength()
{
    var str = 'A lengthy string';
    var i = '' + 12;
    test( 'length #1', str.length, 16 );
    test( 'length #2', i.length, 2 );

    str = "";
    test( 'length #3', str.length, 0 );

    test( 'length #4', String.length, 1 ); 
}

function testLink()
{
    var str = "Click on my link";
    linkstr = convertTags( str.link( 'http://mylink_href' ) );
    test( 'link( name_attribute )', linkstr, '&lt;A HREF\=\"http:\/\/mylink_href\"&gt;' + str + '&lt;/A&gt;' );

    str = "";
    linkstr = convertTags( str.link( '' ) );
    test( 'link( name_attribute )', linkstr, '&lt;A HREF=""&gt;' + str + '&lt;/A&gt;' );
}

function testLocaleCompare()
{
    if (!String.prototype.localeCompare) return;

    var teststring = 'Suppe';
    var result = 0;

    test( 'str.localeCompare( "equal string" )', teststring.localeCompare( 'Suppe' ), 0 );

    if( teststring.localeCompare( 'Åge' ) > 1 ) {
	result = 1;
    }
    else if( teststring.localeCompare( 'Åge' ) < 1 ) {
	result = -1;
    }

    test( 'str.localeCompare( "Greater string" )', result, -1 );

    if( teststring.localeCompare( 'Arne' ) > 1 ) {
	result = 1;
    }
    else if( teststring.localeCompare( 'Arne' ) < 1 ) {
	result = -1;
    }

    test( 'str.localeCompare( "Lesser string" )', result, 1 );

    // In Norway, this would be reasonable
    test_expect_failure( 'localeCompare #1', 78241, 'Aager'.localeCompare( 'Åge' ) > 0, true );

	// must work with String objects, too
	var firstString = new String("that");
	var secondString = new String("this"); 
	test( "localecompare #2", firstString.localeCompare(secondString) < 0, true, "185657");

	var firstString1 = new String("this");
	var secondString1 = new String("that"); 
	test( "localecompare #3", firstString1.localeCompare(secondString1) > 0, true, "185657");
}

function testMatch()
{
    testcase( 'String.prototype.match' );

    test_deep( 'match #1', ("fumfoo").match(/f(o)o/), ["foo","o"] );
    test_deep( 'match #2', ("fumfoo").match("f(o)o"), ["foo","o"] );
    test_deep( 'match #3', ("fumfoo").match(/f./g), ["fu","fo"] );
    test_deep( 'match #4', ("fumfoo").match(/f*/g), ["f", "", "", "f","", "", ""] );  // match at end too!

    var teststring = "My teststring that has more than a few words, and \'that\' is mentioned two times!";
    test( 'match #5', teststring.match( /that/gi ), 'that,that' );

    str = "See chapter 3.4.5.1";
    test( 'match #6', str.match( /(chapter \d+(\.\d)*)/i ), 'chapter 3.4.5.1,chapter 3.4.5.1,.1' );

    str = 'My regexp string';
    test( 'match #7', str.match( /((reg)+exp)/i ), 'regexp,regexp,reg' );

    str = 'My regexp string';
    test( 'match #8', str.match( 'noregexpstring' ), null );

    // Test: match is generic
    x = { toString: function () { return 'mymatches'; }, match: String.prototype.match };
    test( 'match #9', x.match( /mymatch/i ), 'mymatch' ); 

    // Test: match throws syntax err on bogus regex
    expect_exception( 'match #10', SyntaxError, function () { ("foo").match("+"); } );

    test_deep( 'match #11', ("mumumumu").match(/mumu/g), ["mumu","mumu"] );

    testcase( 'String.prototype.match regressions' );

    test( 'match #1', ("foofumble").match(/^fumble/g), null );

    test_deep( 'match #2', 
	       ("  this is the dawning of the age of aquarius   ").match(/(^\s+)|(\s+$)/gi), ["  ","   "] );
    var email_re = "\\b(^(\\S+@).+((\\.com)|(\\.net)|(\\.edu)|(\\.mil)|(\\.gov)|(\\.org)|(\\..{2,2}))$)\\b";
    test_deep( 'match #3',
	       ("lth@opera.com").match(new RegExp(email_re)),
	       [ "lth@opera.com", "lth@opera.com", "lth@", ".com", ".com", 
	       undefined, undefined, undefined, undefined, undefined, undefined ] );
    test_deep( 'match #4',
	       ("dyb@cadence.bloomington.indiana.us").match(new RegExp(email_re)),
	       [ "dyb@cadence.bloomington.indiana.us", "dyb@cadence.bloomington.indiana.us", "dyb@", 
	       ".us", undefined, undefined, undefined, undefined, undefined, undefined, ".us" ] );
    test_deep( 'match #5',
	       ("LTH@OPERA.COM").match(new RegExp(email_re,"i")),
	       [ "LTH@OPERA.COM", "LTH@OPERA.COM", "LTH@", ".COM", ".COM", 
	       undefined, undefined, undefined, undefined, undefined, undefined ] );
    test_deep( 'match #6',
	       ("lth@opera.com").match(new RegExp(email_re,"gi")),
	       [ "lth@opera.com" ] );
    // Used to be a problem: \t and \n in set would match 't' and 'n' in string
    test_deep( 'match #7',
	       ("This\nis\ta|string").match(/[\t\n|]/g),
	       [ "\n", "\t", "|" ] );
    test_deep( 'match #8',
	       ("This is a string").match(/[\t\n|]/g), null );
}

function testStringPrototype()
{
    // According to the ECMAScript spec, not JavaScript spec.  Why?
    tdef( "constructor", String.prototype.constructor );
    tdef( "toString", String.prototype.toString );
    tdef( "valueOf", String.prototype.valueOf );
    tdef( "charAt", String.prototype.charAt );
    tdef( "charCodeAt", String.prototype.charCodeAt );
    tdef( "concat", String.prototype.concat );
    tdef( "indexOf", String.prototype.indexOf );
    tdef( "lastIndexOf", String.prototype.lastIndexOf );
    tdef( "localeCompare (bug #73471)", String.prototype.localeCompare );
    tdef( "match", String.prototype.match );
    tdef( "replace", String.prototype.replace );
    tdef( "search", String.prototype.search );
    tdef( "slice", String.prototype.slice );
    tdef( "split", String.prototype.split );
    tdef( "substring", String.prototype.substring );
    tdef( "toLowerCase", String.prototype.toLowerCase );
    tdef( "toLocaleLowerCase", String.prototype.toLocaleLowerCase );
    tdef( "toUpperCase", String.prototype.toUpperCase );
    tdef( "toLocaleUpperCase", String.prototype.toLocaleUpperCase ); 

	var s = "";
	for (var i in "")
        s += i;
	test( "String object has no enumerable properties", s, "", 149735 );
}

var m="this is m";   // Used by one of the tests in testReplace

function testReplace()
{
	/* Some cases below are marked "Compatible".  Here we are compatible with FF/IE:
	   if a pattern $n cannot be satisfied from the match results because it does
	   not exist, then leave the $n alone.  Ditto, in the case of $nn, if $nn is not
       defined but $n is, then use $n and leave the second n alone. */
    var x;
    testcase( "searchValue is string, replaceValue is string" );
    x = new String( "foo!bar" );
    test( "replace #1", x.replace( "!", "(?)" ), "foo(?)bar" );
    test( "replace #2", x.replace( "!", "($$)" ), "foo($)bar" );
    test( "replace #3", x.replace( "!", "($&)" ), "foo(!)bar" );
    test( "replace #4", x.replace( "!", "($`)" ), "foo(foo)bar" );
    test( "replace #5", x.replace( "!", "($')" ), "foo(bar)bar" );
    test( "replace #6", x.replace( "!", "($7)" ), "foo($7)bar" );  // Compatible 
    test( "replace #7", x.replace( new String("!"), new String("($7)") ), "foo($7)bar" );  // Compatible 

    testcase( "searchValue is string, replaceValue is function" );
    x = new String( "foo!bar" );
    test( "replace #1", x.replace( "!", (function (m,loc,s) { return loc + "" + s.length + m; }) ), 
	  "foo37!bar" );

    testcase( "searchValue is non-global regex, replaceValue is string" )
	x = new String( "foo!ab!bar" );
    test( "replace #1", x.replace( /!..!/, "(?)" ), "foo(?)bar" );
    test( "replace #2", x.replace( /!..!/, "($$)" ), "foo($)bar" );
    test( "replace #3", x.replace( /!..!/, "($&)" ), "foo(!ab!)bar" );
    test( "replace #4", x.replace( /!..!/, "($`)" ), "foo(foo)bar" );
    test( "replace #5", x.replace( /!..!/, "($')" ), "foo(bar)bar" );
    test( "replace #6", x.replace( /!(.)(.)!/, "($1)" ), "foo(a)bar" );
    test( "replace #7", x.replace( /!(.)(.)!/, "($2)" ), "foo(b)bar" );
    test( "replace #8", x.replace( /!(.)(.)!/, "($7)" ), "foo($7)bar" );  // Compatible
    x = new String( "foo!abcdefghijkl!bar" );
    test( "replace #9", x.replace( /!(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)!/, "($11)" ), "foo(k)bar" );
    test( "replace #10", x.replace( /!(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)!/, "($48)" ), "foo(d8)bar" );  // Compatible
    test( "replace #11", x.replace( /!((...........)|(............))!/, "($2)" ), "foo()bar" );
    test( "replace #12", x.replace( /!((...........)|(............))!/, "($3)" ), "foo(abcdefghijkl)bar" );

    testcase( "searchValue is non-global regex, replaceValue is function" )
	x = new String( "foo!abcdefghijkl!bar" );
    test( "replace #1", 
	  x.replace( /!(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)(.)!/, 
	  (function () { return arguments[13] + "" + 
			     arguments[14].length + 
			     arguments.length + 
			     arguments.join("*"); }) ),
	  "foo32015!abcdefghijkl!*a*b*c*d*e*f*g*h*i*j*k*l*3*foo!abcdefghijkl!barbar" );

    testcase( "searchValue is global regex, replaceValue is string" );
    x = new String( "foo!abcdefghijkl!bar" );
    test( "replace #1", x.replace( /!./g, "($&)" ), "foo(!a)bcdefghijkl(!b)ar" );
    test( "replace #2", "$1,$2".replace(/(\$(\d))/g, "$$1-$1$2" ), "$1-$11,$1-$22" );  // From spec

    testcase( "searchValue is global regex, replaceValue is function" );
    x = new String( "foo!abcdefghijkl!bar" );
    test( "replace #1", x.replace( /!./g, function (m,loc,s) { return m+m; } ), "foo!a!abcdefghijkl!b!bar" );

    testcase( "Regressions" );
    test( "replace #1", "foo+bar".replace( "+", "-" ), "foo-bar", "bug #66788" );
    test_deep( "replace #2", 
	       "  this is the dawning of the age of aquarius   ".replace(/(?:^\s*)|(?:\s*$)/gi,""),
	       [ "this is the dawning of the age of aquarius" ] );

	// Bug #93455: the variable 'm' was not declared local in the
	// implementation of 'replace', so was clobbered.
	m={};
	var e="dfgfgxx";
	var t=typeof m;	      // should be "object"
	var v=e.replace(/x/g,'.....');
	var t=t + typeof m;   // should still be object
	test( "replace #3", t, "objectobject", "bug #93455" );

	// Bug #102004: $x where x not one of the special characters should be
	// left unchanged.
    x = new String( "foo!bar" );
    test( "replace #4", x.replace( new String("!"), new String("($xyz)") ), "foo($xyz)bar", "bug #102004" );

	// Bug #123149: replacing instances of \b was not correctly handled because
	// \b is an empty match and the replace code did not increment lastIndex
	// following an empty match, as it should have.
	x = new String( "Kibology for all." );
	test( "replace #5", x.replace( /\b/g, "|" ), "|Kibology| |for| |all|.", "#123149" );

	// Bug #155137: regression in linear_b_2 because STRINDEXOF instruction
	// was incorrectly implemented.
	x = "abc".replace("b","x");
	test( "replace #6", x, "axc" );

	x = "abc".replace("s","x");
	test( "replace #7", x, "abc" );
}

function testSearch()
{
    testcase( "String.prototype.search" );

    test( "search #1", ("this is a test case").search(/test/), 10 );
    var re = /test/g;
    re.exec("this test is funny");  // sets lastIndex to 9
    test( "search #2a", re.lastIndex, 9 );
    test( "search #2b", ("a test at beginning").search(re), 2 );
    test( "search #2b", re.lastIndex, 9 );
    test( "search #3", ("the age of aquarius").search(/pices/), -1 );

    var searchstring = 'Chocolate is good for your, especially dark chocolate';
    var re = /chocolate/gi;
    test( 'search #4', searchstring.search( re ), 0 );

    var re = /chocolate/g;
    test( 'search #5', searchstring.search( re ), 44 );

    var re = /doesntexist/g;
    test( 'search #6', searchstring.search( re ), -1 );

    x = { toString: function () { return 'Chocolate is good for your, especially dark chocolate'; },
	  search: String.prototype.search };
    var re = /chocolate/g;
    test( 'search #7', x.search( re ), 44 );

    test( 'search #8', 'abc'.search( /$/ ), 3 );        // From Netscape tests
    test( 'search #9', 'abc'.search( /[b-z]/ ), 1 );
}

function testSlice()
{
    var str = 'Bad to the bone';
    test( 'str.slice( 0 )', str.slice( 0 ), str );
    test( 'str.slice( start )', str.slice( str.indexOf( 'bone' ) ), 'bone' );
    test( 'str.slice( negativestart )', str.slice( -3 ), 'one' );
    test( 'str.slice( start, end )', str.slice( 0, str.length ), str );
    test( 'str.slice( start, end )', str.slice( str.indexOf( 'to' ), str.indexOf( 'bone' ) - 1 ), 'to the' );
    test( 'str.slice( negativestart, end )', str.slice( -3, str.length ), 'one' );
    test( 'str.slice( start, negativeend )', str.slice( 0, -5 ), 'Bad to the' );
    test( 'String.prototype.slice.length', String.prototype.slice.length, 2 );

    x = { toString: function () { return 'Chocolate is good for your, especially dark chocolate'; },
	  slice: String.prototype.slice
    };

    test( 'str.slice( start, end )', x.slice( 0, 3 ), 'Cho' );
    test( 'str.slice( start, end )', x.slice( 2, 3 ), 'o' );
    // Neither ECMAv3 nor JS1.3 supports the following interpretation.
    //test( 'str.slice( biggerstartthanend, end )', x.slice( 3, 0 ), x.slice( 0, 3 ) );
}

function testSplit()
{
    testcase( "Split by string" );
    var splitstring = "My split string with a lot of words, and some #special characters";
    test( 'split #1', splitstring.split() instanceof Array, true );
    test( 'split #2', splitstring.split().length, 1 );
    test( 'split #3', splitstring.split( ' ' )[ 0 ], 'My' );
    test( 'split #4', splitstring.split( '' ).length, splitstring.length );
    test( 'split #5', splitstring.split( ' ' )[ splitstring.split( ' ' ).length - 1 ], 'characters' );
    test( 'split #6', splitstring.split( ' ' ).length, 12 );
    test_deep( 'split #7', splitstring.split( ' ', 3 ), [ 'My', 'split', 'string' ] );
    test_deep( 'split #8', splitstring.split( ' ', 0 ),  [] );
    test( "split #9", "".split("").length, 0 );
    test( "split #10", "".split("x").length, 1 );

    testcase( "Split by regex" );
    var re = /\s*;/;
    splitstring = "Words ;separated ;by ;semicolons";
    test( 'split #1', splitstring.split( re ) instanceof Array, true );
    test_deep( 'split #2', splitstring.split( re ), ['Words','separated','by','semicolons'] );
    // Non-matching
    var re = /åge/;
    splitstring = "Words separated by spaces";
    test_deep( "split #3", splitstring.split( re ), [ splitstring ] );
    test_deep( "split #4", "hello".split( /l/ ), [ 'he','','o' ] );
    test_deep( "split #5", "hello".split( /l/, 1 ), [ 'he' ] );
    test( "split #6", "hello".split( /l/, 1 ).length, 1 );
    test( "split #7", "hello".split( new RegExp, void 0 ).length, 5 );
    test_deep( "split #8", "".split("a"), [""] );
    test( "split #9", "".split(/a*/).length, 0 );

    testcase( "Tests from spec" );
    test_deep( "split #1", "A<B>bold</B>and<CODE>coded</CODE>".split(/<(\/)?([^<>]+)>/),
	       [ "A", undefined, "B", "bold", "/", "B", "and", undefined, "CODE", "coded", "/", "CODE", ""] );
    test_deep( "split #1", "ab".split(/a*?/), ["a","b"] );
    test_deep( "split #1", "ab".split(/a*/), ["","b"] );

    testcase( "Split has right properties" );
    test( 'split #1', String.prototype.split.length, 2 );

    testcase( "Split is generic" );
    x = { toString: function () { return 'Chocolate is good for your, especially dark chocolate'; },
	  split: String.prototype.split };
    test_deep( 'split #1', x.split( ' ', 2 ), 'Chocolate,is' );

    testcase( "Regressions" );
    x = new Number(373);
    x.split = String.prototype.split;
    test_deep( 'split #1 (bug #72585)', x.split( '7' ), [ '3', '3' ] );
}

// Please note, substr and substring are two different functions
function testSubstr()
{
    // Note about #7: MSIE 5 / Windows differs in behavior of this from Mozilla
    // and Opera, which interpret -5 as x.length-5, ie, 1.  MSIE forces -5 to 0,
    // just like -20 is forced to 0 in #8.
    var x;

    x = new String("foobar");
    test( 'substr #1', x.substr(3,2), "ba" );
    test( 'substr #2', x.substr(0,6), "foobar" );
    test( 'substr #3', x.substr(0), "foobar" );
    test( 'substr #4', x.substr(2), "obar" );
    test( 'substr #5', x.substr(0,20), "foobar" );
    test( 'substr #6', x.substr(6,5), "" );
    test( 'substr #7', x.substr(-5,4), "ooba" );
    test( 'substr #8', x.substr(-20,4), "foob" );
    test( 'substr #9', x.substr(0,0), "" );
    test( 'substr #10', x.substr(0,NaN), "" );
    test( 'substr #11', x.substr(0,-2), "" );
    test( 'substr #12', x.substr(NaN,3), "foo" );  // Not in spec
}

// Please note, substr and substring are two different functions
function testSubstring()
{
    // Note about #a12 and #13:  Opera 6 and Mozilla 0.99 return "" and "foo" for
    // these tests, forcing undefined to 0, apparently.  The ECMAScript spec
    // says to treat undefined in this position as end-of-string.  MSIE 5 / Windows
    // agrees with the test cases.
    var x;

    testcase( "substring" );
    x = new String( "foobar" );
    test( "substring #a0", x.substring( 0, 3 ), "foo" );	
    test( "substring #a1", x.substring( NaN, 3 ), "foo" );  // NaN => 0
    test( "substring #a2", x.substring( -17, 3 ), "foo" );  // neg => 0
    test( "substring #a3", x.substring( 0, -6 ), "" );      // neg => 0
    test( "substring #a4", x.substring( 0, NaN ), "" );     // NaN => 0
    test( "substring #a5", x.substring( 1, 0 ), "f" );      // swap
    test( "substring #a6", x.substring( 0, 77 ), "foobar" ); // greater than length => length
    test( "substring #a7", x.substring( 3, 6 ), "bar" );
    test( "substring #a8", x.substring( 0 ), "foobar" );    // missing => length
    test( "substring #a9", x.substring( 3 ), "bar" );       // missing => length
    test( "substring #a10", x.substring(), "foobar" );      // missing start => 0; missing end => length
    test( "substring #a11", x.substring( 12, -1 ), "foobar" );  // swap then adjust
    test( "substring #a12", x.substring( 0, undefined ), "foobar" ); // undef => length
    test( "substring #a13", x.substring( 3, undefined ), "bar" );    // undef => length
    test( "substring #a14", x.substring( undefined ), "foobar" ); // undef => 0
    test( "substring #a15", x.substring( undefined, 3 ), "foo" );    // undef => 0
    x = String.fromCharCode( 102, 111, 111, 0, 98, 97, 114 );  // pedantic
    test( "substring #b0", x.substring( 0, 3 ), "foo" );
    test( "substring #b1", x.substring( 4, 7 ), "bar" );
    test( "substring #b2", x.substring( 2, 5 ), String.fromCharCode( 111, 0, 98 ) );
    test( "substring #b3", x.substring( 2, 5 ).length, 3 );
    test( "substring #b4", x.substring( 0 ), x );
    test( "substring #b5", x.substring( 0 ).length, 7 );
    test( "substring #b6", x.substring( 4 ), "bar" );
    test( "substring #b7", x.substring( 4 ).length, 3 );
}

function testToLocaleLowerCase()
{
    var str = "AnALMOSTUPPeRCaseWORd";
    test( 'str.toLocaleLowerCase()', str.toLocaleLowerCase(), str.toLowerCase() );
    test( 'str.toLocaleLowerCase( illegalargument )', 
	  str.toLocaleLowerCase( 'illegalargument' ), 
	  str.toLowerCase() );
    test( '"".toLocaleLowerCase()', "".toLocaleLowerCase(), "" );
}

function testToLocaleUpperCase()
{
    var str = "AnALmostlOwercaSeword";
    test( 'str.toLocaleUpperCase()', str.toLocaleUpperCase(), str.toUpperCase() );
    test( 'str.toLocaleUpperCase( illegalargument )', 
	  str.toLocaleUpperCase( 'illegalargument' ), 
	  str.toUpperCase() );
    test( '"".toLocaleUpperCase()', "".toLocaleUpperCase(), "" );
}

function testToLowerCase()
{
    var str = "AnALMOSTUPPeRCaseWORd";
    var num = 23;
    test( "str.toLowerCase()", "ABRACADABRA".toLowerCase(), "abracadabra" );
    test( "typeof str.toLowerCase()", typeof str.toLowerCase(), 'string' );
    test( "str.toLowerCase()", str.toLowerCase(), "analmostuppercaseword" );

    test( "'23'.toLowerCase()", '23'.toLowerCase(), "23" );
    test( "'SPECIAL_characters@#%1'.toLowerCase()", 'SPECIAL_characters@#%1'.toLowerCase(), 
	  "special_characters@#%1" );

    test( 'str.toLowerCase( illegalargument )', str.toLowerCase( 'illegalargument' ), str.toLowerCase() );
    test( '"".toLowerCase()', "".toLowerCase(), "" ); 
}

function hobbitToString()
{
   return this.name;
}

function Hobbit( name )
{
   this.name = name;
}

function testToString()
{
    str = "foo"; 
    test( "toString()", ( new String( str ) ).toString(), str );  // Identity??
    test( "''.toString()", ''.toString(), '' );  
    test( "str.toString()", str.toString(), str.valueOf() );  
    test( "typeof str.toString()", typeof str.toString(), 'string' );  

    // Overriding Object.toString(), like the String object does.
    var frodo = new Hobbit( 'Frodo Baggins' );
    Hobbit.prototype.toString = hobbitToString;
    test( 'overriding Object.prototype.toString()', frodo.toString(), 'Frodo Baggins' );
}

function testToLocaleString()
{
    str = "foo"; 
    test( "toLocaleString #1", ( new String( str ) ).toLocaleString(), str );  // Identity??
    test( "toLocaleString #2", ('').toLocaleString(), '' );  
    test( "toLocaleString #3", str.toLocaleString(), str.valueOf() );  
    test( "toLocaleString #4", typeof str.toLocaleString(), 'string' );  

    // Overriding Object.toString(), like the String object does.
    var frodo = new Hobbit( 'Frodo Baggins' );
    Hobbit.prototype.toLocaleString = hobbitToString;
    test( 'toLocaleString #5', frodo.toLocaleString(), 'Frodo Baggins' );
}

function testToUpperCase()
{
    var str = "abracadabra";
    var num = 23;

    test( "str.toUpperCase()", str.toUpperCase(), "ABRACADABRA" );
    test( "typeof str.toLowerCase()", typeof str.toLowerCase(), 'string' );
    test( "''.toUpperCase()", "".toUpperCase(), "" );  

    test( "'23'.toUpperCase()", '23'.toUpperCase(), "23" );
    test( "'SPECIAL_characters@#%1'.toUpperCase()", 'SPECIAL_characters@#%1'.toUpperCase(), 
	  "SPECIAL_CHARACTERS@#%1" );

    test( 'str.toUpperCase( illegalargument )', str.toUpperCase( 'illegalargument' ), str.toUpperCase() );
    test( '"".toUpperCase()', "".toUpperCase(), "" );    
}

function testValueOf()
{
    var str = 'My valuable string';
    // FIXME: Test: not generic testcase( "valueOf" );
    test( "str.valueOf", ( new String( str ) ).valueOf(), str );    // Identity??
    test( 'typeof valueOf()', typeof str.valueOf(), 'string' );
    test( 'str.valueOf( illegalargument )', str.valueOf( 'illegalargumeent' ), str );

    x = { toString: function() { return "mytostringreturns"; },
	  valeuOf: String.prototype.valueOf 
    };

    test( 'valueOf()', x.valueOf(), "mytostringreturns" );
}
