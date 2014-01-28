function testLookupGetter_0() {
  /*
   * In firefox (most) host properties (but not methods) have native getters
   */
  for (p in document) {
    if (typeof document[p] !== 'function') {
      assertEquals("function", typeof document.__lookupGetter__(p));
    }

  }
}

function testLookupGetter_1() {
  /*
   * In firefox (most) host properties (but not methods) have native getters
   */
  for (p in HTMLDocument.prototype) {
    if (typeof HTMLDocument.prototype[p] !== 'function') {
      assertEquals("function", typeof HTMLDocument.prototype.__lookupGetter__(p));
    }
  }
}

function testLookupGetter_2() {
  /*
   * In opera, thus far, function objects have also had getters
   */
  for (p in document) {
    if (typeof document[p] === 'function') {
      assertEquals("function", typeof document.__lookupGetter__(p));
    }

  }
}

function testLookupGetter_3() {
  /*
   * In firefox (most) host properties (but not methods) have native getters
   */
  for (p in HTMLDocument.prototype) {
    if (typeof HTMLDocument.prototype[p] !== 'function') {
      assertEquals("function", typeof HTMLDocument.prototype.__lookupGetter__(p));
    }
  }
}

function testLookupGetter_4() {
  //Should probably have a list of properties here
  var getter = document.__lookupGetter__("compatMode");
  assertEquals(document.compatMode, getter.call(document));
}

function testLookupGetter_5() {
  /*
   * Calling the getter without setting the this value to the host object
   */
  var getter = document.__lookupGetter__("compatMode");
  assertEquals(undefined, getter());
}

function testDefineGetter_0() {
  var s1 = document.createElement("select");
  assertEquals(0, s1.length);
  HTMLSelectElement.prototype.__defineGetter__("length", function() {
						 return 42;
					       });
  assertEquals(42, s1.length);
  var s2 = document.createElement("select");
  assertEquals(42, s2.length);
}

function testDefineGetter_1() {
  var s1 = document.createElement("select");
  assertEquals(0, s1.length);
  s1.__defineGetter__("length", function() {
			return 42;
		      });
  assertEquals(42, s1.length);
  var s2 = document.createElement("select");
  assertEquals(0, s2.length);
}

function testDefineGetter_2() {
  /*
   * Replace getter and call original getter.
   */
  var s = document.createElement("span");
  var f = s.__lookupGetter__("tagName");
  assertEquals("function", typeof f);
  s.__defineGetter__("tagName",
		     function() {return "abc";});
  assertEquals("abc", s.tagName);
  assertEquals("span", f.call(s).toLowerCase());
}

function testInheritance_0() {
  assertTrue(document.appendChild === document.body.appendChild,
	     "appendChild not on Node.prototype");
}

function testInheritance_1() {
  /*
   * Check that properties on Element are found before getters on Node
   */
  Node.prototype.__defineGetter__("tagName", function() {
				    return "NodeGetter";
				  });
  var span = document.createElement("span");
  assertEquals("span", span.tagName.toLowerCase());
  var text = document.createTextNode("span");
  assertEquals("NodeGetter", text.tagName);
}

function testInheritance_2() {
  /*
   * Check that properties on Element are found before getters on Node
   */
  HTMLElement.prototype.__defineGetter__("tagName", function() {
					   return "Getter";
					 });
  var span = document.createElement("span");
  assertEquals("Getter", span.tagName);
  var text = document.createTextNode("span");
  assertUndefined(text.tagName);
}

function testInheritance_3() {
  /*
   * Check that properties on Element are found before getters on Node
   */
  var span = document.createElement("span");
  span.__defineGetter__("tagName", function() {
			  return "Getter";
			});
  var span_2 = document.createElement("span");
  assertEquals("Getter", span.tagName);
  assertEquals("span", span_2.tagName.toLowerCase());
}

function testInheritance_4() {
  HTMLFormElement.prototype.__defineGetter__("tagName", function() {
					       return "Getter";
					 });
  var span = document.createElement("form");
  assertEquals("Getter", span.tagName);
  var div = document.createElement("div");
  assertEquals("div", div.tagName.toLowerCase());
}

function testNodeListLength_0() {
  var getter = NodeList.__lookupGetter__("length");
  NodeList.prototype.__defineGetter__("length", function() {
					return getter.call(this) + 1;
				      });
  var scripts = document.getElementsByTagName("script");
  var real_length = getter.call(scripts);
  assertEquals(real_length + 1, scripts.length);
  var a = Array.prototype.slice.call(scripts);
  assertEquals(real_length + 1, a.length);
  assertUndefined(a[real_length]);
}

function testReadonlySetter_0() {
  var setter = document.__lookupSetter__("URL");
  assertEquals("function", typeof setter);
  function func() {
    setter.call(document, "http://example.com");
  }
  //No idea if this is the right error or not
  assertThrows(Error(), func);
}
