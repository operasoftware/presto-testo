/* Global variables and global scope reqd for this test, hence provided
 * separately.
 * 
 * If a property write is JITed in ARM as the 1505th property, on
 * offset 0x1994 on the global object, garbage would be written (the
 * offset in this case actually). This would probably also happen for
 * other values instead of 1505 and 0x1994 if they are significantly
 * high.
 */

this.x = 42; 
for (var i = 0; i < 81; ++i) { 
    try { 
	eval("this.x" + i + " = " + Math.PI + ";"); 
    } catch(e) {} 
} 
for (var i = 0; i < 1336; ++i) { 
    try { 
	eval("this.y" + i + " = " + 42 + ";"); 
    } catch(e) {} 
} 

crash = "foo"; 

function testCore41494_0() { 
    for (var i = 0; i < 100; ++i) { 
	crash = "foo"; 
	assertEquals("foo", crash); 
    } 
}
testCore41494_0.metadata = {
  "bug": "CORE-41494"
}
