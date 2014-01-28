/**  -*- mode: java -*-
 *
 * ECMAScript
 * testing the Array object
 *
 * 09.07.2001, torstein@opera.com
 */

var cvs = "$Id: arrayObjectTest.js 119618 2012-07-17 02:52:26Z hallvord $";


function main()
{
   testmodule( "The Array object", cvs );
    expect(285);//number of tests - update this when tests are added!
   try
   {
      /* Regexp array specific properties */
      myRe=/p(u+)/g;
      regexpArray = myRe.exec( "my_input_string" );
      tdef( "index", regexpArray.index );
      tdef( "input", regexpArray.input );

      testcase( "Array object properties" );
      var anotherTestArray = new Array( "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" );
      test( 'Array constructor', anotherTestArray instanceof Array, true );

      testArrayProperties( anotherTestArray, 7, '#1');
      testcase( "Array object methods" );
      testArrayMethods( anotherTestArray, '#1' );

      /*** Object instantiated by using a function instead of using the constructor ***/
      testcase( "Array constructor called as a function" );
      var oneTestArray = Array( 7 );
      test( 'Array constructor called as a function', oneTestArray instanceof Array, true );

      testArrayRegression();

      var aSparseTestArray = new Array(7);
      aSparseTestArray[5]='Mon'; /* for testArrayProperties */
      aSparseTestArray[1]='Tue';
      testcase( 'properties of small sparse array'  );
      testArrayProperties( aSparseTestArray, 7, '#2' );
      testcase( "methods of small sparse array" );
      testArrayMethods( aSparseTestArray, '#2' );
      testES4additions();
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}

function testArrayProperties( testArray, testArrayLength, testRound )
{
   try
   {
      test( 'testArray instanceof Array '+testRound, testArray instanceof Array, true );
      test( 'testArray.length '+testRound, testArray.length, testArrayLength );

      tmpArray = copyArray( testArray );
      tmpArray.length = 2;
      test( 'tmpArray.length, truncate array by giving a smaller size than actual elements '+testRound+'a', tmpArray.length, 2 );
      test( 'tmpArray.length, truncate array by giving a smaller size than actual elements '+testRound+'b', tmpArray[1].toString(), 'Tue' );

      tdef( "constructor " +testRound, testArray.constructor );

      tdef( "length defined " +testRound, testArray.length );
      test( 'length '+testRound, tmpArray.length, 2 );

      tdef( "prototype  "+testRound, Array.prototype );
   }
   catch( e )
   {
      exception( e );
   }
}

/*** function used by the sort() method ***/
function compareNumbers( a, b )
{
   return a - b;
}

function extract( A, start, limit, sep )
{
    var str = "";
    var inc = start <= limit ? 1 : -1;
    for( var i = start; i != limit; i += inc )
    {
        str += (A[i]) ? A[i] : '';
        if( i != limit - inc )
            str += sep;
    }
    return str;
}

function testArrayMethods( testArray, testRound )
{
    var tests = [ testArrayConcat,
                testArrayJoin,
                testArrayPop,
                testArrayPush,
                testArrayReverse,
                testArrayShift,
                testArraySlice,
                testArraySort,
                testArraySplice,
                testArrayToLocaleString,
                testArrayToString,
                testArrayUnshift,
                testArrayValueOf ];

    for ( var i in tests )
        try { tests[i]( testArray.concat(), testRound ); } catch (e) { exception(e); }
}

function testArrayConcat(testArray, test_desc)
{
    testcase( "concat "+test_desc);

    var str = extract( testArray, 0, testArray.length, "," );
    test( "concat()", testArray.concat(), str );

    /** Testing that concat() really concats two arrays **/
    var myObject = new Object();
    var oneArray = new Array( "Aj", "Bee", "Cee" );
    var anotherArray = new Array( 1, 2, 3, myObject );

    myObject.name = "MyObjectName";
    var concatArray = oneArray.concat( anotherArray );
    test( "oneArray.concat( anotherArray ) #1", concatArray.toString(),
          "Aj,Bee,Cee,1,2,3," + eval( myObject ) );

    /*** Changing string values in one of the source array should not affect the
         concatenated array ***/
    anotherArray[ 0 ] = "new value in 1";
    test( "oneArray.concat( anotherArray )  #2", concatArray.toString(),
          "Aj,Bee,Cee,1,2,3," + eval( myObject ) );

    /*** Changing an object that is included in a concatenated array, should be "updated"
         in the array ***/
    myObject.name = "Ina";
    test( "Change in referenced object should affect the array",
          anotherArray[ 3 ].name, "Ina" );
    test( "Change in referenced object should affect the concatenated array",
          concatArray[ 6 ].name, "Ina" );

    test( "typeof concat()", typeof testArray.concat(), "object" );
    test( "Array.prototype.concat.length", Array.prototype.concat.length, 1 );

    /*** concat() with multiple arguments, i.e. mutliple arrays ***/
    var cArray = new Array();
    var array1 = new Array( 1, 2, 3 );
    var array2 = new Array( 10, 20, 30 );
    var array3 = new Array( 100, 200, 300 );
    var ca = cArray.concat( array1, array2, array3 );

    test( 'concat( array1, array2, array3 )',
          cArray.concat( array1, array2, array3 ),
          array1.toString() + ',' + array2.toString() + ',' + array3.toString() );

    /*** checks that concat() leaves the contents from the sub-arrays intact
         after the concatenation ***/

    var str = extract(ca, 0, 3, ",");
    test( 'concat() sub-arrays, #1', str, array1.toString() );

    var str = extract( ca, 3, 6, "," );
    test( 'concat() sub-arrays, #2', str, array2.toString() );

    var str = extract( ca, 6, 9, ",");
    test( 'concat() sub-arrays, #3', str, array3.toString() );
}

function testArrayJoin(testArray, test_desc)
{

    /*** Using default seperator ***/
    testcase( "join"+test_desc);

    var str = extract( testArray, 0, testArray.length, "," );
    test( "join #1", testArray.join(), str );

    try {
        // There used to be a limit on 9999 here, now it's about 2^30.
        // In older versions of Opera you will get an exception here
        // because join returns undefined.
        var temp = new Array();
        for( var i=0; i < 12000; i++ )
            temp.push( "." );

        test( "join #2", temp.join("").length, 12000, "#131939" );
    }
    catch (e) { exception(e); }

    /*** Using self defined seperator ***/
    var str = extract( testArray, 0, testArray.length, "#" );
    test( 'join with seperator specified, join( "#" )', testArray.join( '#' ), str );

    test( "typeof join()", typeof testArray.join(), "string" );

    test( 'Array.prototype.join.length', Array.prototype.join.length, 1 );

    test( 'arg positive infinity', testArray.join(Number.POSITIVE_INFINITY), extract( testArray, 0, testArray.length, Number.POSITIVE_INFINITY ) );
    test( 'arg negative infinity', testArray.join(Number.NEGATIVE_INFINITY), extract( testArray, 0, testArray.length, Number.NEGATIVE_INFINITY ) );
}

function testArrayPop(testArray, test_desc)
{
    if (isExplorer())
        return;

    testcase( "pop "+test_desc);
    topElement = testArray[ testArray.length - 1 ];
    test( 'topElement == testArray.pop()', topElement == testArray.pop(), true );

    topElement = testArray[ testArray.length - 1 ];
    test( "pop()", testArray.pop(), topElement );

    /*** Don't stop until you've popped enough :-) ***/
    var tempArray = new Array();

    while( testArray.length > 0 )
        tempArray.push( testArray.pop() );

    test( "popping the whole stack ( Array )", testArray.length, 0 );

    while( tempArray.length > 0 )
        testArray.push( tempArray.pop() );
}

function testArrayPush(testArray, test_desc)
{
    if ( !Array.prototype.push ){
        ttrue( 'push supported',  false);
        return;
        }

    testcase( "push "+test_desc);
    /*** Pushing one element ***/
    var oldTestArrayLength = testArray.length;
    test( "push( 'new_element' )", testArray.push( 'new_element' ), oldTestArrayLength + 1 );

    testArray.push( 'pushed_element' );
    test( 'push() and pop()', testArray.pop(), 'pushed_element' );
    test( 'Array.prototype.push.length', Array.prototype.push.length, 1 );

    /*** Pushing multiple elements ***/
    oldTestArrayLength = testArray.length;
    var oldTestArrayString = testArray.toString();

    testArray.push( 'push1', 'push2', 'push3' );

    oldTestArray = new Array( testArray.length );

    for( var i = 0; i < testArray.length; i++ )
        oldTestArray[ i ] = testArray[ i ];

    test( 'pushing multiple ( 3 )  elements onto the stack #1',
          testArray.length,
          oldTestArrayLength + 3 );
    test( 'pushing multiple ( 3 )  elements onto the stack #2',
          testArray.toString(),
          oldTestArray.toString() );
    test( 'pushing multiple ( 3 )  elements onto the stack #3',
          testArray.toString(),
          oldTestArrayString + ',push1,push2,push3' );
}

function testArrayReverse(testArray, test_desc)
{
    testcase( "reverse "+ test_desc );

    var str = extract( testArray, testArray.length-1, -1, "," );
    test( "reverse()", testArray.reverse(), str );

    var x=[ '0',,'2','3','4'];
    test_deep( 'reverse w/undefined #1', (x.reverse(),x), ['4','3','2',,'0'] );

    // This is harder because in the instance above, x[1] is defined though it has
    // an undefined value.  Opera got this wrong while it got the above right.
    var x=new Array();
    x[0] = '0';
    x[2] = '2';
    x[3] = '3';
    x[4] = '4';
    x.length = 6;
    test_deep( 'reverse w/undefined #2', (x.reverse(),x), [,'4','3','2',,'0'] );

    // reversing empty array would crash linear_b_1_final_patch_13 and earlier.
    [].reverse();
}

function testArrayShift( testRound )
{
    testcase( "shift "+testRound );
    if ( !Array.prototype.shift ){
        ttrue( 'Shift supported', false );
        return;
    }
    var x=[ '0', '1', '2', '3', '4', '5' ];
    test( 'shift #1', x.shift(), '0' );
    test( 'shift #2', x.shift(), '1' );
    test_deep( 'shift #3', x, ['2', '3', '4', '5'] );

    var x = [];
    test( 'shift #4', x.shift(), undefined );
    test( 'shift #5', x.length, 0 );

    // This fails, but it is a bug in the lexer/parser, not in the shift() function.
    // See bug #73932.
    prog="\
      var x = { length: 4, \
                0: 'zero', \
                1: 'one', \
                2: 'two', \
                3: 'three', \
                shift: Array.prototype.shift }; \
      test( 'shift #6', x.shift(), 'zero', \
            'Really a parser bug #73932: number-valued property names in literal object' ); \
      test( 'shift #7', x.length, 3, 'Used to be related to #73932' ); \
      test( 'shift #8', x[2], 'three', \
            'Really a parser bug #73932: number-valued property names in literal object' ); \
";
    if (!isExplorer())
        eval(prog);
    else
        showfailure("shift #6", "IE cannot handle indices in literal object syntax" );

    // Same shi(f)t, new wrapping.  This works, thereby exhibiting the bug in the
    // object literal syntax handling.
    var x = new Object();
    x[0] = 'zero';
    x[1] = 'one';
    x[2] = 'two';
    x[3] = 'three';
    x.length = 4;
    x.shift = Array.prototype.shift;
    test( 'shift #9', x.shift(), 'zero' );
    test( 'shift #10', x.length, 3 );
    test( 'shift #11', x[2], 'three' );

    // More of the same, just tests another angle.
    var x = new Object();
    x[new String("0")] = 'zero';
    x[new String("1")] = 'one';
    x[new String("2")] = 'two';
    x[new String("3")] = 'three';
    x.length = new String("4");
    x.shift = Array.prototype.shift;
    test( 'shift #12', x.shift(), 'zero' );
    test( 'shift #13', x.length, 3 );
    test( 'shift #14', x[2], 'three' );

    // Bug #165427
    var x = [,"test"];
    test( "shift #15", (x.shift(),x.toString()), "test", "165427" );
}

function testArraySlice( testRound )
{
    testcase( "slice "+testRound );
    var x=[ '0', '1', '2', '3', '4', '5' ];
    test_s( 'slice #1', x.slice( 2,4 ), [ '2', '3' ] );
    test_s( 'slice #2', x.slice( 4 ), [ '4', '5' ] );
    test_s( 'slice #3', x.slice( 4, undefined ), [ '4', '5' ] );
    test_s( 'slice #4', x.slice(), x );  // Unspecified behavior, really
    test_s( 'slice #5 (bug #48388)', x.slice( 2, -1 ), [ '2', '3', '4' ] );
    test_s( 'slice #6 (bug #48388)', x.slice( -4, -1 ), [ '2', '3', '4' ] );
    test_s( 'slice #7 (bug #135005)', [0,1,,,2,3,4].slice(0), [0,1,,,2,3,4] );
    test_s( 'slice infinity #1', x.slice( 0,  Number.POSITIVE_INFINITY), [ '0', '1', '2', '3', '4', '5' ] );
    test_s( 'slice infinity #2', x.slice( Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), [ ] );
    test_s( 'slice infinity #3', x.slice( Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY), [ '0', '1', '2', '3', '4', '5' ] );
    test_s( 'slice infinity #4', x.slice(   Number.NEGATIVE_INFINITY, 0), [ ] );
    test_s( 'slice infinity #5', x.slice(   Number.NEGATIVE_INFINITY, 3), [ '0', '1', '2' ] );
    test_s( 'slice infinity #6', x.slice(   Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY), [ ] );
    test_s( 'slice infinity #7', x.slice(   0, Number.NEGATIVE_INFINITY), [ ] );
}

function testArraySort(testArray,  test_desc)
{
    var str = "";
    var tmp = "";

    testcase( "sort " + test_desc );

    var tmpArray = testArray;
    for( var i = 0; i < tmpArray.length; i++ )
    {
        for( var j = 0; j < tmpArray.length; j++ )
        {
            if( tmpArray[ i ] < tmpArray[ j ] )
            {
                tmp = tmpArray[ i ];
                tmpArray[ i ] = tmpArray[ j ];
                tmpArray[ j ] = tmp;
            }
        }
    }

    test( "sort #1", testArray.sort(), tmpArray.toString() );

    var tArray = new Array( '80', '9', '71' );
    var t2Array = new Array( '80', '9', '71' );

    // In the first test, the numbers are sorted after string value, thus the '71' is less than '9'.
    // In the seconds, the sort function behaves according to the return value from the compeNumbers
    // function, the numbers are sorted as 'numbers', thus '9' is less than '71'.
    test( 'sort #2', tArray.sort( ), '71,80,9' );
    test( 'sort #3', t2Array.sort( compareNumbers ), '9,71,80' );

    // Array.prototype.sort is generic.
    var j = new Object();
    j.sort = Array.prototype.sort;
    j[0] = 'zero';
    j[1] = 'one';
    j[2] = 'two';
    j.length = 3;
    j.sort();
    test( 'sort #4', j[0] + j[1] + j[2], 'onetwozero' );

    // Deal with bogus parameters -- should not crash :-)
    // stj: undefined is not a bogus parameter to sort
    // stj: all the rest are - the spec says in this case sort's
    // stj: behaviour is impl. dependant so guard against exceptions:
    // hallvord:  - keep in mind to flag exceptions if they occur. If we want one, use expect_exception(). My bad ;)
    // hallvord:  .. and Firefox throws on (undefined)
//    expect_exception( 'sort with undefined arg', TypeError, function(){ [3,2,1].sort(undefined);});
try{
    test( 'sort with undefined arg',   ([3,2,1].sort(undefined)).join(';'), '1;2;3');
    // weirdly, these do not sort the array:
    test( 'sort with null arg', [3,2,1].sort(null).join(';'), '3;2;1');
    test( 'sort with object arg', [3,2,1].sort({}).join(';'), '3;2;1' );
    test( 'sort with array arg', [3,2,1].sort([]).join(';'), '3;2;1');
   }catch(e){
     test( 'ignore weird input to sort gracefully', false, true ); // For Firefox & al.
   }
}

function testArraySplice(testArray,  test_desc)
{
    testcase( "splice "+ test_desc );
    if ( !Array.prototype.splice ){
        ttrue('splice supported', false);
        return;
        }
    var tmpArray, ta, i, referenceArray=copyArray(testArray);


    // remove two elements from testArray


    test( "splice removal, #1", testArray.splice( 2, 2 ).toString(),
          [ referenceArray[2], referenceArray[3] ].toString() );

    test( "splice removal, #2", testArray.length, referenceArray.length-2 );

    test( "splice removal, #3", testArray.toString(),
          [ referenceArray[0] , referenceArray[1], referenceArray[4], referenceArray[5], referenceArray[6] ].toString() );


    // change two first elements of tmpArray

    tmpArray =  ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    ta = tmpArray.splice( 0, 2, 'Nom', 'Eut' );

    test( "splice change #1", ta.toString(), ["Mon", "Tue"].toString() )

    test( "Contents of an array after replacing the two first elements",
          tmpArray.toString(),
          ["Nom", "Eut", "Wed", "Thu", "Fri", "Sat", "Sun"]);

    /*** specifies more elements to add than you replace ***/

    tmpArray = new Array( 1, 2, 3 );
    ta = tmpArray.splice( 1, 2, 'add1', 'add2', 'add3', 'add4' );
    test( "Return value from splice( 1, 2, 'add1', 'add2', 'add3', 'add4' )",
          eval( ta ),
          '2,3' );
    test( "Moderated array after splice( 1, 2, 'add1', 'add2', 'add3', 'add4' )",
          eval( tmpArray ),
          '1,add1,add2,add3,add4' );
     var x = [ '0', '1', '2', '3', '4', '5' ];
    test_s( 'splice infinity #1', x.splice( 0,  Number.POSITIVE_INFINITY), [ '0', '1', '2', '3', '4', '5' ] );
    test_s( 'splice infinity - remains #1', x, [ ] );
    x = [ '0', '1', '2', '3', '4', '5' ];
    test_s( 'splice infinity #2', x.splice( Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY), [ ] );
    test_s( 'splice infinity - remains #2', x, [ '0', '1', '2', '3', '4', '5' ] );
    x = [ '0', '1', '2', '3', '4', '5' ];
    test_s( 'splice infinity #3', x.splice( Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY), [ '0', '1', '2', '3', '4', '5' ] );
    test_s( 'splice infinity - remains #3', x, [ ] );
    x = [ '0', '1', '2', '3', '4', '5' ];
    test_s( 'splice infinity #4', x.splice(   Number.NEGATIVE_INFINITY, 0), [ ] );
    test_s( 'splice infinity - remains #4', x, [ '0', '1', '2', '3', '4', '5' ] );
    x = [ '0', '1', '2', '3', '4', '5' ];
    test_s( 'splice infinity #5', x.splice(   Number.NEGATIVE_INFINITY, 3), [ '0', '1', '2' ] );
    test_s( 'splice infinity - remains #5', x, [  '3', '4', '5' ] );
    x = [ '0', '1', '2', '3', '4', '5' ];
    test_s( 'splice infinity #6', x.splice(   Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY), [ ] );
    test_s( 'splice infinity - remains #6', x, [ '0', '1', '2', '3', '4', '5' ] );
    x = [ '0', '1', '2', '3', '4', '5' ];
    test_s( 'splice infinity #7', x.splice(   0, Number.NEGATIVE_INFINITY), [ ] );
    test_s( 'splice infinity - remains #7', x, [ '0', '1', '2', '3', '4', '5' ] );
    x = [ '0', '1', '2', '3', '4', '5' ];
    test_s( 'splice infinity #8', x.splice(  Number.NEGATIVE_INFINITY, 3), [ '0', '1', '2' ], 'a', 'b', 'c' ); // a,b,c simply dropped by all implementations
    test_s( 'splice infinity - remains #8', x, [  '3', '4', '5' ] );
    x = [ '0', '1', '2', '3', '4', '5' ];
    test_s( 'splice infinity #9', x.splice(  Number.POSITIVE_INFINITY, 3), [  ], 'a', 'b', 'c' ); // a,b,c simply dropped by all implementations
    test_s( 'splice infinity - remains #9', x, [  '0', '1', '2', '3', '4', '5' ] );

}

function testArrayToLocaleString(testArray,  test_desc)
{


    testcase( "toLocaleString "+ test_desc );
    if ( !Array.prototype.toLocaleString ){
        ttrue('toLocaleString supported', false);
        return;
        }
    test( "toLocaleString()", testArray.toLocaleString(), testArray.toString() );
}

function testArrayToString(testArray,  test_desc)
{
    testcase( "toString "+ test_desc );

    var str = extract( testArray, 0, testArray.length, ",");
    test( "toString()", testArray.toString(), str );
}

function testArrayUnshift(testArray,  test_desc)
{
    testcase( "unshift "+ test_desc );
    if ( !Array.prototype.unshift ){
        ttrue('unshift supported', false);
        return;
        }
    /*** adding one element ***/
    tmpArray = new Array( testArray.length );

    for( var i = 0; i < testArray.length; i++ )
        tmpArray[ i ] = testArray[ i ];

    test( "unshift( 'new_element_at_the_beginning')", tmpArray.unshift( 'new_element' ), testArray.length + 1 );

    /*** adding three elements ***/
    test( "unshift( 'el1,el2,el3' )",
          tmpArray.unshift( 'el1', 'el2', 'el3' ),
          testArray.length + 4 );
    test( "contents after unshift( 'el1,el2,el3' )",
          eval( tmpArray ),
          'el1,el2,el3,new_element,' + eval( testArray )  );
}

function testArrayValueOf(testArray,  test_desc)
{
    testcase( "valueOf "+ test_desc );
    /**
        Confusing method availablility report in references
        JavaScript, definitive guide      : not listed ( not JavaScript 1.2 )
        JavaScript, Programmer's Reference: not ECMA, JavaScript 1.1
        JavaScript 1.3                    : ECMA-262
        ECMA 262                          : inherited from Object
    **/

    var str = extract( testArray, 0, testArray.length, "," );
    test( "valueOf()", testArray.valueOf(), str );
}

function testArrayRegression()
{
  testcase( "Regression for fixed bug #48945" );
    var x = [ -777 ];
    test( "length", x.length, 1 );
    test( "element", x[0], -777 );

  testcase( "Regression for fixed bug #69979" );
    test( "array literal length #1", ([]).length, 0 );
    test( "array literal length #2", ([,]).length, 1 );
    test( "array literal length #3", ([1,]).length, 1 );
    test( "array literal length #4", ([,1,,]).length, 3 );
    test( "array literal length #5", ([,,,,,]).length, 5 );

  testcase( "Regression for fixed bug #77844" );
    var s="abc123ABC";
    var a=s.split("");
    a.sort(function(x,y) { return x.localeCompare(y); });
    test( "sorting by localeCompare", a.join(), "1,2,3,a,A,b,B,c,C" );

  testcase( "Regression for fixed bug #121308" );
    var x=[,,,,5], s="";
    for(var i in x) s+=i;
    test( "Left-elision does not generate elements #1", s, "4", "#121308" );

    var x=[,,2,,], s="";
    for(var i in x) s+=i;
    test( "Left-elision does not generate elements #2", s, "2", "#121308" );

  testcase( "Regression for fixed bug #157306" );
    var x =["en","to"];
    var s = x.join(void 0);
    test( "join with undefined value defaults to comma", s, "en,to" );

  testcase( "Regression for fixed bug #135006" );
    var x = [1,,2];
    x.sort();
    test( "sort with non-defined properties", 2 in x, false );

  testcase( "Regression for fixed bug #138475" );
    var x = new Array(100000);
    var before = new Date();
    x.sort();
    var after = new Date();
    test( "sort large but empty array #1", 0 in x, false );
    test( "sort large but empty array #2", (after - before) < 256, true );

  testcase("Regression for fixed bug #159963" );
    var a = new Array();
    for ( var i=0 ; i < 10 ; i++ )
        a[a.length] = Math.random();
    a.sort(function(a,b){ return a-b; });
    test( "Sorting small non-integers", isSorted(a), true );
}

function isSorted(a)
{
  for ( var i=0 ; i < a.length-1 ; i++ )
      if (a[i] > a[i+1])
          return false;
  return true;
}


function testES4additions()
{
    test_indexOf();
    test_lastIndexOf();
    test_map();
    test_forEach();
    test_every();
    test_some();
    test_filter();
}

function test_indexOf()
{
    testcase("Testing Array.prototype.indexOf");

    var dense  = [5, 10, 15, 20, 15, 10, 5, 0];
    var sparse = [5,   ,   , 20,   ,   , 5, 0];

    test_s('dense.indexOf #1', dense.indexOf( 0   ),  7);
    test_s('dense.indexOf #2', dense.indexOf( 0,-1),  7);
    test_s('dense.indexOf #3', dense.indexOf( 5   ),  0);
    test_s('dense.indexOf #4', dense.indexOf(10   ),  1);
    test_s('dense.indexOf #5', dense.indexOf(10, 2),  5);
    test_s('dense.indexOf #6', dense.indexOf(10,-5),  5);
    test_s('dense.indexOf #7', dense.indexOf(15   ),  2);
    test_s('dense.indexOf #8', dense.indexOf(15, 2),  2);
    test_s('dense.indexOf #9', dense.indexOf(20, 2),  3);
    test_s('dense.indexOf #a', dense.indexOf(25   ), -1);
    test_s('dense.indexOf #b', dense.indexOf(25, 2), -1);

    test_s('sparse.indexOf #1', sparse.indexOf( 0   ),  7);
    test_s('sparse.indexOf #2', sparse.indexOf( 0,-1),  7);
    test_s('sparse.indexOf #3', sparse.indexOf( 5   ),  0);
    test_s('sparse.indexOf #4', sparse.indexOf(10   ), -1);
    test_s('sparse.indexOf #5', sparse.indexOf(10, 2), -1);
    test_s('sparse.indexOf #6', sparse.indexOf(10,-5), -1);
    test_s('sparse.indexOf #7', sparse.indexOf(15   ), -1);
    test_s('sparse.indexOf #8', sparse.indexOf(15, 2), -1);
    test_s('sparse.indexOf #9', sparse.indexOf(20, 2),  3);
    test_s('sparse.indexOf #a', sparse.indexOf(25   ), -1);
    test_s('sparse.indexOf #b', sparse.indexOf(25, 2), -1);
}

function test_lastIndexOf()
{
    testcase("Testing Array.prototype.lastIndexOf");

    var dense  = [5, 10, 15, 20, 15, 10, 5, 0];
    var sparse = [5,   ,   , 20,   ,   , 5, 0];

    test_s('dense.lastIndexOf #1', dense.lastIndexOf( 0   ),  7);
    test_s('dense.lastIndexOf #2', dense.lastIndexOf( 0,-1),  7);
    test_s('dense.lastIndexOf #3', dense.lastIndexOf( 5   ),  6);
    test_s('dense.lastIndexOf #4', dense.lastIndexOf(10   ),  5);
    test_s('dense.lastIndexOf #5', dense.lastIndexOf(10, 2),  1);
    test_s('dense.lastIndexOf #6', dense.lastIndexOf(10,-5),  1);
    test_s('dense.lastIndexOf #7', dense.lastIndexOf(15   ),  4);
    test_s('dense.lastIndexOf #8', dense.lastIndexOf(15, 2),  2);
    test_s('dense.lastIndexOf #9', dense.lastIndexOf(20, 2), -1);
    test_s('dense.lastIndexOf #a', dense.lastIndexOf(25   ), -1);
    test_s('dense.lastIndexOf #b', dense.lastIndexOf(25, 2), -1);

    test_s('sparse.lastIndexOf #1', sparse.lastIndexOf( 0   ),  7);
    test_s('sparse.lastIndexOf #2', sparse.lastIndexOf( 0,-1),  7);
    test_s('sparse.lastIndexOf #3', sparse.lastIndexOf( 5   ),  6);
    test_s('sparse.lastIndexOf #4', sparse.lastIndexOf(10   ), -1);
    test_s('sparse.lastIndexOf #5', sparse.lastIndexOf(10, 2), -1);
    test_s('sparse.lastIndexOf #6', sparse.lastIndexOf(10,-5), -1);
    test_s('sparse.lastIndexOf #7', sparse.lastIndexOf(15   ), -1);
    test_s('sparse.lastIndexOf #8', sparse.lastIndexOf(15, 2), -1);
    test_s('sparse.lastIndexOf #9', sparse.lastIndexOf(20, 4),  3);
    test_s('sparse.lastIndexOf #a', sparse.lastIndexOf(25   ), -1);
    test_s('sparse.lastIndexOf #b', sparse.lastIndexOf(25, 2), -1);
}

function test_map()
{
    testcase("Testing Array.prototype.map");

    var dense  = [0,1,2,3,4,5];
    var sparse = [11,,7,,,13];
    var sqr    = function (x) { return x*x; }

    test_s('dense.map(sqr)',  dense.map(sqr),  [0,1,4,9,16,25]);
    test_s('sparse.map(sqr)', sparse.map(sqr), [121,,49,,,169]);

    test_s('map does not mutate original', dense[3], 3);
}

function test_forEach()
{
    testcase("Testing Array.prototype.forEach");

    var dense   = [0,1,2,3,4,5];
    var sparse  = [11,,7,,,13];
    var results = [];
    var put_sqr = function (val, idx) { results[idx] = val*val; }

    sparse.forEach(put_sqr);
    test_s('sparse.forEach(put_sqr)', results, [121,,49,,,169]);
    dense.forEach(put_sqr);
    test_s('dense.forEach(put_sqr)',  results, [0,1,4,9,16,25]);

    test_s('forEach does not mutate original', dense[3], 3);
}

function test_every()
{
    testcase("Testing Array.prototype.every");

    var dense   = [0,1,2,3,4,5];
    var sparse  = [4,,1,,,5];
    var lt3     = function (x) { return x < 3; }
    var lt7     = function (x) { return x < 7; }

    test_s('dense.every -> false', dense.every(lt3), false);
    test_s('dense.every -> true' , dense.every(lt7), true );
    test_s('sparse.every -> false', sparse.every(lt3), false);
    test_s('sparse.every -> true' , sparse.every(lt7), true );
}

function test_some()
{
    testcase("Testing Array.prototype.some");

    var dense   = [0,1,2,3,4,5];
    var sparse  = [4,,1,,,5];
    var gt3     = function (x) { return x > 3; }
    var gt7     = function (x) { return x > 7; }

    test_s('dense.some -> false', dense.some(gt7), false);
    test_s('dense.some -> true' , dense.some(gt3), true );
    test_s('sparse.some -> false', sparse.some(gt7), false);
    test_s('sparse.some -> true' , sparse.some(gt3), true );
}

function test_filter()
{
    testcase("Testing Array.prototype.filter");

    var dense   = [0,1,2,3,4,5];
    var sparse  = [4,,1,,,5];
    var gt3     = function (x) { return x > 3; }

    test_s('dense.filter' , dense.filter(gt3),  [4,5]);
    test_s('sparse.filter', sparse.filter(gt3), [4,5]);
}

