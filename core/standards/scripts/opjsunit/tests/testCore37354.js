/* Global variables and global scope reqd for this test, hence provided
 * separately.
 * 
 * It attempts to verify that the arguments object of the toplevel execution
 * state is initialised as having length 0. By chance, that it may happen to
 * be even with builds lacking CORE-37354, so a false PASS is a possibility.
 */
var arr = new Array();
function f()
{
   this.a = newf.arguments;
   this.newf = newf;
}

function newf()
{
   return arr[arr.length] = new f();
}
var obj = newf();
for (var i = 0; i < 50; i++)
   obj.newf();

function testCore37354_0() {
    for (var i = 0; i < arr.length; i++)
      assertEquals(0, arr[i].a.length);
}
testCore37354_0.metadata = {
  "bug": "CORE-37354"
}
