/* Regression tests for the Global Object.
 *
 * FIXME: test the implementation of the URI functions.
 */

var cvs = "$Id: global.js 43149 2009-03-13 17:38:07Z hallvord $";

testmodule( "global object", cvs );
expect( 110);//number of tests - update this when tests are added!
try {

testcase( "Properties of the Global Object" );
 tdef( "NaN", this.NaN );
 tdef( "Infinity", this.Infinity );
 try { undefined; } catch (e) { tdef( "undefined", undefined ); }
 try { eval( "0;" ); } catch (e) { tdef( "eval", undefined ); }
 tdef( "parseInt", this.parseInt );
 tdef( "parseFloat", this.parseFloat );
 tdef( "isNaN", this.isNaN );
 tdef( "isFinite", this.isFinite );
 tdef( "decodeURI", this.decodeURI );
 tdef( "decodeURIComponent", this.decodeURIComponent );
 tdef( "encodeURI", this.encodeURIComponent );
 tdef( "encodeURIComponent", this.encodeURIComponent );
 tdef( "Object", this.Object );
 tdef( "Function", this.Function );
 tdef( "Array", this.Array );
 tdef( "String", this.String );
 tdef( "Boolean", this.Boolean );
 tdef( "Number", this.Number );
 tdef( "Date", this.Date );
 tdef( "RegExp", this.RegExp );
 tdef( "Error", this.Error );
 tdef( "EvalError", this.EvalError );
 tdef( "RangeError", this.RangeError );
 tdef( "ReferenceError", this.ReferenceError );
 tdef( "SyntaxError", this.SyntaxError );
 tdef( "TypeError", this.TypeError );
 tdef( "URIError", this.URIError );
 tdef( "Math", this.Math );
 test( "isNaN(NaN)", isNaN(NaN), true );
 test( "isNaN(0)", isNaN(0), false );
 test( "isNaN(Infinity)", isNaN(Infinity), false );
 test( "isNaN(3.14159)", isNaN(3.14159), false );
 test( "isFinite(Infinity)", isFinite(Infinity), false );
 test( "isFinite(NaN)", isFinite(NaN), false );
 test( "isFinite(3.14159)", isFinite(3.14159), true );
 test( "isNaN(\"\")", isNaN(""), false );	// Because "" should convert as 0 according to spec

testcase( "eval" );
 var z=0;
 function t()
 {
   var x=1, y=2;
   eval( "var z=x+y;" );
   return z;
 }
 var x=t();
 test( "x=t(); x==3 && z==0", x==3 && z==0, true );

 // Do we handle EvalError, and if we don't, do we allow eval() to be
 // used in a first-class manner?  §15.1.2.1, §16

 zappa = 0;

 function my_magic_eval()
 {
   var a = 1;

   function foo()
   {
     var b = 2;
     return eval;
   }
   return foo();
 }

 // Implementation may throw EvalError when value of eval is taken,
 // but is not required to.

 try {
   var x = my_magic_eval();
   zappa = x( "a+b" );
 }
 catch (e) {
   test( "EvalError #1", e instanceof ReferenceError, true, 247798);
   zappa = -1;
 }
 test( "EvalError #2", zappa == -1 || zappa == 3, true, zappa );

 var y=37;
 function f2(y) { return eval("y"); }
 function f3(y) { return window.eval("y"); }
 function f4(y) { return window["eval"]("x=y"); }

 try {
   test( "non-qualified eval", f2(2), 2 );
   test( "qualified eval #1", f3(3), 37 );
   test( "qualified eval #2", f4(4), 37 );
    expect_exception( "qualified eval #3",
              EvalError,
                      function () { var obj = new Object(); obj.eval = eval; obj.eval("37"); } );
 }
 catch (e) { exception(e); }

 test( "evaluating reserved words #1", eval("true"), true, "#156592" );
 test( "evaluating reserved words #2", eval("false"), false, "#156592" );
 test( "evaluating reserved words #3", eval("null"), null, "#156592" );
 test( "evaluating reserved words #4", typeof eval("this"), "object", "#156592" );
 var exn=false;
 try { eval("if"); } catch (e) { exn=true; }  // Expect a syntax error
 test( "evaluating reserved words #5", exn, true, "#156592" );

 eval('var evalcreated=3'); // global variable defined by eval, hence should be deletable
 delete evalcreated;
 test( "Can delete global variable created by eval", typeof evalcreated, 'undefined', 157651);

 function evalcreated_f()
 {
   eval('var local_evalcreated=3');
   delete local_evalcreated;
   return typeof local_evalcreated;
 }
 test( "Can delete local variable created by eval", evalcreated_f(), 'undefined', 157651);

testcase( "parseInt" );
 test( "parseInt('1')", parseInt('1'), 1 );
 test( "parseInt('  \\n\\t  1xyzzy')", parseInt('  \n\t  1xyzzy'), 1 );
 test( "parseInt('  \\n\\t  -1xyzzy')", parseInt('  \n\t  -1xyzzy'), -1 );
 test( "parseInt('  \\n\\t  +1xyzzy')", parseInt('  \n\t  +1xyzzy'), 1 );
 test( "isNaN(parseInt('-xyzzy'))", isNaN(parseInt('-xyzzy')), true );
 test( "isNaN(parseInt('+xyzzy'))", isNaN(parseInt('+xyzzy')), true );
 test( "parseInt('1234567890123')", parseInt('1234567890123'), 1234567890123 );
 test( "parseInt('12345678901231234567890123')",
       parseInt('12345678901231234567890123'), 12345678901231234567890123 );
 test( "parseInt('-12345678901231234567890123')",
       parseInt('-12345678901231234567890123'), -12345678901231234567890123 );
 test( "parseInt('   -0xFFFF ')", parseInt('   -0xFFFF '), -65535 );
 test( "parseInt('-FFFF',16)", parseInt('-FFFF',16), -65535 );
 test( "parseInt('3k',36)", parseInt('3k',36), 128);
 test( "parseInt('12345',undefined)", parseInt('12345',undefined), 12345);
 test( "parseInt('12345',0)", parseInt('12345',0), 12345);
 test( "parseInt('')", parseInt(''), NaN );
 test( "parseInt('',14)", parseInt('',14), NaN );
 test( "parseInt('0',37)", parseInt('',37), NaN );
 test( "parseInt('0',1)", parseInt('',1), NaN );
 test( "parseInt('3.14159',10)", parseInt('3.14159',10), 3 );

testcase( "parseFloat" );
 test( "parseFloat('2001')", parseFloat('2001'), 2001 );
 test( "parseFloat('1234.5e67')", parseFloat('1234.5e67'), 1234.5e67 );
 test( "parseFloat('   +1234.5e67ecma')", parseFloat('   +1234.5e67ecma'), 1234.5e67 );
 test( "parseFloat('   +1234.5ecma')", parseFloat('   +1234.5ecma'), 1234.5 );
 test( "parseFloat('')", isNaN(parseFloat('')), true );
 test( "parseFloat('0x12')", parseFloat('0x12'), 0 );

testcase( "var declaration does not override function declaration" );  // §10.1.3, third bullet
 function foobar() {}
 // when the next line runs, function declarations and variable declarations in the global scope have been initialized
 // but the foobar=1 assignment has not happened yet. The way ECMA-262 works, function declarations are seen first, and
 // variable declarations do not overwrite existing functions. Hence the presence of var foobar does not override function foobar
 // until the assignment line is run. Hallvord.
 test('order of variable initialization when entering execution context, global object, pre-assignment', typeof foobar, "function" );
 var foobar = 1;
  test('order of variable initialization when entering execution context, global object, post-assignment', typeof foobar, "number" );
 test('order of variable initialization when entering execution context, function scope, pre-assignment', (function(arg){ var passed, arg; passed = typeof arg=='number'; arg='abc'; return passed;})(1), true );
 test('order of variable initialization when entering execution context, function scope, post-assignment', (function(arg){ var passed, arg;  arg='abc'; passed = typeof arg=='string';return passed;})(1), true );
 test('order of variable initialization when entering execution context, function scope, function declaration', (function(arg){ var passed = typeof arg=='function';return passed; function arg(){}})(1), true );


// FIXME: there is a race condition here, if the iframe that sets the scope_* variables
// has not finished, then we get the wrong results.  But at least the test should fail
// due to undefined variables, so we'll see it.

if (typeof opera == 'undefined' || !opera.jsshell)
{
    testcase( "use of global object across frames" );
     test( "array scope", scope_array_result, "parent", 87934 );
     test( "boolean scope", scope_boolean_result, "parent", 87934 );
     test( "date scope", scope_date_result, "parent", 87934 );
     test( "error scope", scope_error_result, "parent", 87934 );
     test( "function scope", scope_function_result, "Comment: parent", 87934 );
     test( "number scope", scope_number_result, "parent", 87934 );
     test( "object scope", scope_object_result, "parent", 87934 );
     test( "regexp scope", scope_regexp_result, "parent", 87934 );
     test( "string scope", scope_string_result, "parent", 87934 );
     test( "toString scope", scope_tostring_result, "parent", 87934 );
     test( "array concat scope 1", scope_a_concat_result1, "parent" );
     test( "array concat scope 2", scope_a_concat_result2, "iframe" );
     test( "array splice scope 1", scope_a_splice_result1, "parent" );
     test( "array splice scope 2", scope_a_splice_result2, "iframe" );
     test( "array slice scope 1", scope_a_slice_result1, "parent" );
     test( "array slice scope 2", scope_a_slice_result2, "iframe" );
     test( "string match scope", scope_s_match_result, "parent" );
     test( "string split scope", scope_s_split_result, "parent" );
     test( "regexp exec scope", scope_r_exec_result, "parent" );
     test( "regexp $n scope", scope_regexp_$n_result, "101214" );
     test( "array literal scope", scope_a_literal_result, "parent" );
     test( "object literal scope", scope_o_literal_result, "parent" );
     test( "lambda literal scope 1", scope_f_literal_result, "parent" );
     test( "lambda literal scope 2", scope_f_literal_function(), "window: parent" );
     test( "error object scope", scope_e_thrown_result, "parent" );

    testcase( "Global THIS value" );
    // Opera does not yet have iframe.contentWindow (an extension)
    test( "global THIS #1", document.getElementById("theframe").contentWindow.executes_in_iframe(), comment );

    testcase( "proxy object problems" );
    if (window.Node)
    {
      test( "getting Node two ways returns same object #1", self.Node==Node, true );
      test( "getting Node two ways returns same object #2", self.Node===Node, true );
      test( "getting Object two ways returns same object #1", self.Object==Object, true );
      test( "getting Object two ways returns same object #2", self.Object===Object, true );
    }
}

testcase( "unescape" );
try {
// This is a bad test case but it reminds us that the error is here, for now.
// [StanislavJ] Next line is commented out by me; It would be great if the testcase reminded us also what is the error ...
// [StanislavJ] Anyway, I dugged into this and found nothing ill-formed. I believe it has something to do with a bug in 'unescape' I've recently fixed
// Eval(' '+unescape('%76%61%72%20%66%3D%6E%65%77%20%53%74%72%69%6E%67%28%29%3B%77%68%69%6C%65%28%74%2E%6C%65%6E%67%74%68%3E%32%29%7B%70%3D%74%2E%73%75%62%73%74%72%69%6E%67%28%30%2C%20%32%29%3B%74%3D%74%2E%73%75%62%73%74%72%69%6E%67%28%32%2C%74%2E%6C%65%6E%67%74%68%29%3B%66%3D%66%2B%75%6E%65%73%63%61%70%65%28%27%25%27%2B%20%70%29%3B%7D%66%3D%66%2B%75%6E%65%73%63%61%70%65%28%27%25%27%2B%74%29%3B%65%76%61%6C%28%66%29%3B'));
}
catch (e) { exception(e); }


} catch (e) { exception(e); }

/* There is one more test in global.html so we don't call  testmodule_finished(); here */

/* eof */
