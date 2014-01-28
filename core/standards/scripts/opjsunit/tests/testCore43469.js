/* The reason this is in a separate file is that it verifies
   the correct handling of global variables when compiling the
   loop below.
*/

a = 2147483648 - 100;

for (var i = 0; i < 100; i++)
  a = a + i;

function testCore43469() {
  assertEquals(2147488498, a);
}
