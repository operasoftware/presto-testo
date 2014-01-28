/* The reason this is in a separate file is that it verifies
   the correct handling of global variables when compiling the
   loop below.
*/

for (var i = 0; i < 100; i++) {
}

function testCore44215_0() {
    assertEquals(100, i);
}
testCore44215_0.metadata = {
    bug: "CORE-44215"
};
