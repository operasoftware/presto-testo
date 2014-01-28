/* Tests for suspend on [[Get]], [[Put]], [[Call]], [[Construct]]
   lth@opera.com
 
   The tests are executed on our private opera object.  This object has some
   additional properties when Opera is compiled in debug mode:

      opera.debugMode is defined and is TRUE

      opera.hardToGet is defined but hard to read and write; it suspends
         several times on both get and put.  The initial value is a string
         "GetName was restarted!".  It can be assigned nonnegative numbers.

      opera[0] is defined but hard to read and and write; it suspends 
         several times on both get and put.  The initial value is a string
         "GetIndex was restarted!".  It can be assigned nonnegative numbers.

      opera.hardToCall is defined but hard to call either as method, function,
         or constructor; it suspends on all three.  When called as a method
         or function without arguments it returns a value, the string 
         "Call was suspended!".  When called as a constructor without arguments
	 it returns an object with a property "myproperty", which has the
	 value "Construct was suspended!".

   The tests are structured relative to the *implementation* of suspension
   inside the ES engine.  This is necessary because we want to test that
   all cases in the implementation are tested.  Thus accessing a variable
   is different from accessing a property, and different again from accessing
   an array slot (because a[3] is handled differently from a["foo"] in the
   implementation), and there are several ways to assign to a variable or
   property or array slot, depending on the operator used.

   See doc/dom/opera/jsopera.cpp for the other side of the test code.
*/

var cvs = "$Id: suspend.js 10655 2006-12-18 15:47:57Z hallvord $";

testmodule( "suspending [[Get]], [[Put]], [[Call]], [[Construct]]", cvs );

testcase( "Sanity check" );

if (!opera.debugMode)
{
  showfailure( "This test can only be run when Opera is compiled in debug mode!", "Foo!" );
  throw "FOO!  You are not a developer!  Surrender!!";
}

try {

testcase( "Reference" );

// RestartableGet on property
test( "hardToGet ref #1", opera.hardToGet, "GetName was restarted!" );

// RestartableGet on variable
with (opera)
{
  test( "hardToGet ref #2", hardToGet, "GetName was restarted!" );
}

// RestartableGet on array ref (both kinds)
test( "hardToGet ref #3", opera["hardToGet"], "GetName was restarted!" );
test( "hardToGet ref #4", opera[0], "GetIndex was restarted!" );

testcase( "Assignment" );

/* The rest of the tests use RestartableGet too, but test RestartablePutL 
   in various contexts.
   */
var x = Math.random(37)+1; 

// AssignPropref
opera.hardToGet = x;	test( "hardToGet Assign #1", opera.hardToGet, x );

// AssignVar
opera.hardToGet = 0;
with (opera)
{
  hardToGet = x;
  test( "hardToGet Assign #2", hardToGet, x );
}
test( "hardToGet Assign #3", opera.hardToGet, x );

// AssignAref (index and name)
opera.hardToGet = 0;
opera["hardToGet"] = x; 
  test( "hardToGet Assign #4", opera.hardToGet, x );
  test( "hardToGet Assign #4", opera["hardToGet"], x );
opera[0] = x;
opera.hardToGet = 0;
  test( "[0] Assign #1", opera[0], x );
  test( "[0] Assign #2", opera.hardToGet, 0 );

// IncrementPropref
opera.hardToGet=x;
opera.hardToGet++;	test( "hardToGet Increment #1", opera.hardToGet, x+1 );
--opera.hardToGet;	test( "hardToGet Increment #2", opera.hardToGet, x );

// IncrementVar
opera.hardToGet=x;
with (opera)
{
  hardToGet++;	test( "hardToGet Increment #3", hardToGet, x+1 );
}
test( "hardToGet Increment #4", opera.hardToGet, x+1 );

with (opera)
{
  --hardToGet;	test( "hardToGet Increment #5", hardToGet, x );
}
test( "hardToGet Increment #6", opera.hardToGet, x );

// IncrementAref (index and name)
opera[0] = x;
opera[0]++;	test( "[0] Increment #1", opera[0], x+1 );
--opera[0];	test( "[0] Increment #2", opera[0], x );

// CompoundAssignPropref
opera.hardToGet=x;
opera.hardToGet+=3;	test( "hardToGet CompoundAssign #1", opera.hardToGet, x+3 );
opera.hardToGet-=3;	test( "hardToGet CompoundAssign #2", opera.hardToGet, x );

// CompoundAssignVar
opera.hardToGet=x;
with (opera)
{
  hardToGet+=3;	test( "hardToGet CompoundAssign #3", hardToGet, x+3 );
}
test( "hardToGet CompoundAssign #4", opera.hardToGet, x+3 );

with (opera)
{
  hardToGet-=2;	test( "hardToGet CompoundAssign #5", hardToGet, x+1 );
}
test( "hardToGet CompoundAssign #6", opera.hardToGet, x+1 );

// CompoundAssignAref (index and name)
opera[0]=x;
opera[0]+=3;	test( "[0] CompoundAssign #1", opera[0], x+3 );
opera[0]-=2;	test( "[0] CompoundAssign #2", opera[0], x+1 );


testcase( "Call" );

// [[Call]]
test( "hardToCall #1", opera.hardToCall(), "Call was suspended!" );
test( "hardToCall #2", (opera.hardToCall)(), "Call was suspended!" );

// [[Call]] with return value being forced to String, this does not actually
// suspend but returns the argument with an ES_TOSTRING return value.
test( "hardToCall.toString #1", opera.hardToCall(opera), "[object Opera]" );
test( "hardToCall.toString #2", opera.hardToCall(true), "true" );
var pentium = new Object();
var s = "I am Pentium of Borg; division is futile, you will be approximated";
pentium.toString = function () { return s; }
test( "hardToCall.toString #3", opera.hardToCall(pentium), s );
opera.toString = function () { return "I am Opera of Borg"; }
test( "hardToCall.toString #4", opera.hardToCall(opera), "I am Opera of Borg" );


testcase( "Construct" );

// [[Construct]]
test( "hardToConstruct #1", (new opera.hardToCall()).myproperty, "Construct was suspended!" );
test( "hardToConstruct #2", (new opera.hardToCall).myproperty, "Construct was suspended!" );

} 
catch(e) { exception(e); }

testmodule_finished();

/* eof */

