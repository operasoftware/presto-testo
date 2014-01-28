/* The reason this is in a separate file is that it verifies
   the correct handling of global variables when compiling the
   loop below.
*/
var t = 2,
    a = 49,
    b = 20;
 
for (var i = 0; i <= 100; i++) {
  t = a - b;
}
 
function testCore30785_0() {
  assertEquals(29, t);
  assertEquals(49, a);
  assertEquals(20, b);
}
