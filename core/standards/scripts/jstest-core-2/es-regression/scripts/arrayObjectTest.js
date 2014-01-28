/**  -*- mode: java -*-
 *
 * ECMAScript
 * testing the Array object
 *
 * 09.07.2001, torstein@opera.com
 * $Id: arrayObjectTest.js 12979 2007-03-28 00:31:48Z hallvord $
 */

var cvs = "$Id: arrayObjectTest.js 12979 2007-03-28 00:31:48Z hallvord $";

function main()
{
   testmodule( "The Array object", cvs );

   try 
   {
      /* Regexp array specific properties */
      myRe=/p(u+)/g;
      regexpArray = myRe.exec( "my_input_string" );
      tdef( "index", regexpArray.index );
      tdef( "input", regexpArray.input );

      setTestCase( "Array object properties" );
      var anotherTestArray = new Array( "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" );
      test( 'Array constructor', anotherTestArray instanceof Array, true );

      testArrayProperties( anotherTestArray );
      setTestCase( "Array object methods" );
      testArrayMethods( anotherTestArray );

      /*** Object instantiated by using a function instead of using the constructor ***/
      setTestCase( "Array constructor called as a function" );
      var oneTestArray = Array( 7 );
      test( 'Array constructor called as a function', oneTestArray instanceof Array, true );

      testArrayRegression();
   }
   catch( e )
   {
      exception( e );
   }

   testmodule_finished();
}

function testArrayProperties( testArray )
{
   try 
   {
      test( 'testArray instanceof Array', testArray instanceof Array, true );
      test( 'testArray.length', testArray.length, 7 );

      tmpArray = copyArray( testArray );
      tmpArray.length = 2;
      test( 'tmpArray.length, truncate array by giving a smaller size than actual elements', tmpArray.length, 2 );
      test( 'tmpArray.length, truncate array by giving a smaller size than actual elements', tmpArray.toString(), 'Mon,Tue' );

      tdef( "constructor", testArray.constructor );

      tdef( "length", testArray.length );
      test( 'length', tmpArray.length, 2 );

      tdef( "prototype", Array.prototype );
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

function testArrayMethods( testArray )
{
   try 
   {
      /************************ concat() ********************************/
      /** Testing that concat() on one array **/
      var str = "";

      testcase( "concat");
      for( var i = 0; i < testArray.length; i++ )
      {
         str += testArray[ i ];

         if( i < testArray.length - 1 )
         {
            str += ",";
         }
      }

      test( "concat()", testArray.concat(), str );

      /** Testing that concat() really concats two arrays **/
      var myObject = new Object();
      var oneArray = new Array( "Aj", "Bee", "Cee" );
      var anotherArray = new Array( 1, 2, 3, myObject );

      myObject.name = "MyObjectName";
      concatArray = oneArray.concat( anotherArray );
      test( "oneArray.concat( anotherArray )", concatArray.toString(), "Aj,Bee,Cee,1,2,3," + eval( myObject ) );

      /*** Changing string values in one of the source array should not affect the concatenated array ***/
      anotherArray[ 0 ] = "new value in 1";
      test( "oneArray.concat( anotherArray )", concatArray.toString(), "Aj,Bee,Cee,1,2,3," + eval( myObject ) );

      /*** Changing an object that is included in a concatenated array, should be "updated" in the array ***/
      myObject.name = "Ina";
      test( "Change in referenced object should affect the array", anotherArray[ 3 ].name, "Ina" );
      test( "Change in referenced object should affect the concatenated array", concatArray[ 6 ].name, "Ina" );

      test( "typeof concat()", typeof testArray.concat(), "object" );
      test( "Array.prototype.concat.length", Array.prototype.concat.length, 1 );

      /*** concat() with multiple arguments, i.e. mutliple arrays ***/
      var cArray = new Array();
      var array1 = new Array( 1, 2, 3 );
      var array2 = new Array( 10, 20, 30 );
      var array3 = new Array( 100, 200, 300 );
      var ca = cArray.concat( array1, array2, array3 );

      test( 'concat( array1, array2, array3 )', cArray.concat( array1, array2, array3 ), array1.toString() + ',' + array2.toString() + ',' + array3.toString() ); 

      /*** checks that concat() leaves the contents from the sub-arrays intact after the concatenation ***/
      var str = "";

      for( var i = 0; i < 3; i++ )
      {
         str += ca[ i ];

         if( i != 2 )
         {
            str += ',';
         }
      }

      test( 'concat()', str, array1.toString() );
      str = "";

      for( var i = 3; i < 6; i++ )
      {
         str += ca[ i ];

         if( i != 5 )
         {
            str += ',';
         }
      }

      test( 'concat()', str, array2.toString() );
      str = "";

      for( var i = 6; i < 9; i++ )
      {
         str += ca[ i ];

         if( i != 8 )
         {
            str += ',';
         }
      }

      test( 'concat()', str, array3.toString() );
      str = "";

      /************************ join() ********************************/
      /*** Using default seperator ***/
      testcase( "join");
      for( var i = 0; i < testArray.length; i++ )
      {
         str += testArray[ i ];

         if( i < testArray.length - 1 )
         {
            str += ",";
         }
      }

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
      str = "";

      for( var i = 0; i < testArray.length; i++ )
      {
         str += testArray[ i ];

         if( i < testArray.length - 1 )
         {
            str += "#";
         }
      }
      test( 'join with seperator specified, join( "#" )', testArray.join( '#' ), str );
      test( "typeof join()", typeof testArray.join(), "string" );

      test( 'Array.prototype.join.length', Array.prototype.join.length, 1 );

      /************************ pop() ********************************/
      if (!isExplorer()) {
        testcase( "pop");
        topElement = testArray[ testArray.length - 1 ];
        test( 'topElement == testArray.pop()', topElement == testArray.pop(), true );

        topElement = testArray[ testArray.length - 1 ];
        test( "pop()", testArray.pop(), topElement );

        /*** Don't stop until you've popped enough :-) ***/
        var tempArray = new Array();

        while( testArray.length > 0 )
        {
           tempArray.push( testArray.pop() ); 
        }

        test( "popping the whole stack ( Array )", testArray.length, 0 ) 

        while( tempArray.length > 0 )
        {
           testArray.push( tempArray.pop() ); 
        }
      }

      /************************ push() ********************************/
      if (!isExplorer()) {
      testcase( "push");
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
      {
         oldTestArray[ i ] = testArray[ i ];
      }

      test( 'pushing multiple ( 3 )  elements onto the stack', testArray.length,  oldTestArrayLength + 3 );
      test( 'pushing multiple ( 3 )  elements onto the stack', testArray.toString(),  oldTestArray.toString() );
      test( 'pushing multiple ( 3 )  elements onto the stack', testArray.toString(),  oldTestArrayString + ',push1,push2,push3' );
      }

      /************************ reverse() ********************************/
      testcase( "reverse" );
      str = "";

      for( var i = testArray.length - 1; i >= 0; i-- )
      {
         str += testArray[ i ];

         if( i > 0 )
         {
            str += ",";
         }
      }

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

      /************************ shift() ********************************/
      if (!isExplorer()) {
	  testcase( "shift" );
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


      /************************ slice() ********************************/
      testcase( "slice" );
      var x=[ '0', '1', '2', '3', '4', '5' ];
      test_s( 'slice #1', x.slice( 2,4 ), [ '2', '3' ] );
      test_s( 'slice #2', x.slice( 4 ), [ '4', '5' ] );
      test_s( 'slice #3', x.slice( 4, undefined ), [ '4', '5' ] );
      test_s( 'slice #4', x.slice(), x );  // Unspecified behavior, really
      test_s( 'slice #5 (bug #48388)', x.slice( 2, -1 ), [ '2', '3', '4' ] );
      test_s( 'slice #6 (bug #48388)', x.slice( -4, -1 ), [ '2', '3', '4' ] );
      test_s( 'slice #7 (bug #135005)', [0,1,,,2,3,4].slice(0), [0,1,,,2,3,4] );

      /************************ sort() ********************************/
      testcase( "sort" );
      str = "";
      var tmp = "";

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

      tArray = new Array( '80', '9', '71' );
      t2Array = new Array( '80', '9', '71' );

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
      [3,2,1].sort(undefined);
      [3,2,1].sort();

      /************************ splice() ********************************/
      if (!isExplorer()) {
      testcase( "splice" );

      /*** using splice() to remove two elements ***/
      tmpArray = new Array( testArray.length - 2 );

      for( var i = 0; i < testArray.length - 2; i++ )
      {
         tmpArray[ i ] = testArray[ i + 2 ];
      }

      test( "Using splice to remove two files, splice( 0, 2 )", 
	    testArray.splice( 2, 2 ).toString(), tmpArray[ 0 ] + "," + tmpArray[ 1 ] );
      test( "Using splice to remove two files, testing length", testArray.length, tmpArray.length );

      tmpArray = new Array( testArray.length + 1 );

      for( var i = 0; i < testArray.length; i++ )
      {
         tmpArray[ i ] = testArray[ i ];
      }

      /*** using splice to change the two first elements ***/
      ta = tmpArray.splice( 0, 2, 'replace_1', 'replace_2' );

      test( "return value, splice( 0, 2, 'replace_1', 'replace_2' )", ta, testArray[ 0 ] + "," + testArray[ 1 ] );
      test( "Contents of an array after replacing the two first elements", eval( tmpArray ), 
	    'replace_1,replace_2,Wed,new_element,push1,push2,push3,' ); 

      /*** specifies more elements to add than you replace ***/
      tmpArray = new Array( 1, 2, 3 );
      ta = tmpArray.splice( 1, 2, 'add1', 'add2', 'add3', 'add4' );
      test( "Return value from splice( 1, 2, 'add1', 'add2', 'add3', 'add4' )", eval( ta ), '2,3' );
      test( "Moderated array after splice( 1, 2, 'add1', 'add2', 'add3', 'add4' )", eval( tmpArray ), 
	   '1,add1,add2,add3,add4' );
      }

      /************************ toLocaleString() ********************************/
      if (!isExplorer()) {
      testcase( "toLocaleString" );
      test( "toLocaleString()", testArray.toLocaleString(), testArray.toString() );
      }

      /************************ toString() ********************************/
      testcase( "toString" );
      str = "";

      for( var i = 0; i < testArray.length; i++ )
      {
         str += testArray[ i ];

         if( i < testArray.length - 1 )
         {
            str += ",";
         }
      }

      test( "toString()", testArray.toString(), str );

      /************************ unshift() ********************************/
      if (!isExplorer()) {
      testcase( "unshift" );
      /*** adding one element ***/
      tmpArray = new Array( testArray.length );

      for( var i = 0; i < testArray.length; i++ )
      {
         tmpArray[ i ] = testArray[ i ];
      }

      test( "unshift( 'new_element_at_the_beginning')", tmpArray.unshift( 'new_element' ), testArray.length + 1 );

      /*** adding three elements ***/
      test( "unshif( 'el1,el2,el3' )", tmpArray.unshift( 'el1', 'el2', 'el3' ), testArray.length + 4 );
      test( "contents after unshif( 'el1,el2,el3' )", eval( tmpArray ), 
	    'el1,el2,el3,new_element,' + eval( testArray )  );
      }

      /************************ valueOf() ********************************/
      testcase( "valueOf" );
      /** 
          Confusing method availablility report in references 
          JavaScript, definitive guide      : not listed ( not JavaScript 1.2 )
          JavaScript, Programmer's Reference: not ECMA, JavaScript 1.1
          JavaScript 1.3                    : ECMA-262
          ECMA 262                          : inherited from Object
      **/
      str = "";

      for( var i = 0; i < testArray.length; i++ )
      {
         str += testArray[ i ];

         if( i < testArray.length - 1 )
         {
            str += ",";
         }
      }

      test( "valueOf()", testArray.valueOf(), str );
   }
   catch( e )
   {
      exception( e );
   }
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
    test( "sorting by localeCompare", a.join(), "1,2,3,A,B,C,a,b,c" );

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
    test( "sort large but empty array #2", (after - before) < 1000, true );

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

