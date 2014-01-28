/*
 * General tests
 */


/*
 * Tests without Standalone in the name can be applied to all above array types
 * Once CARAKAN-31 is fixed other tests will be run for several possible
 * input arrays
 */

//instanceof

function testInstance_0() {
 var testArray = makeArray_0();
 assertTrue(testArray instanceof Array);
}

//.length

function testLength_0() {
  /*
   * Length property
   */
  var a = makeArray_0();
  assertEquals(7, a.length);
}

function testLength_1() {
  var testArray = makeArray_0();
  var oldLength = testArray.length;
  var originalEndMinus1 = testArray[testArray.length - 2];
  testArray.length -= 1;
  assertEquals(oldLength - 1, testArray.length);
  assertEquals(originalEndMinus1, testArray[testArray.length - 1]);
}

function testLength_2() {
  var testArray = makeArray_0();
  var oldLength = testArray.length;
  testArray.length += 1;
  assertEquals(oldLength + 1, testArray.length);
  assertEquals(undefined, testArray[testArray.length-1]);
}

function testLength_3() {
  var testArray = makeArray_0();
  testArray.length = 0;
  assertEquals(0, testArray.length);
  assertUndefined(testArray[0]);
}
testLength_3.metadata = {
  bug:"CARAKAN-23"
};

function testLength_4() {
  var a = new Array();
  a[16] = 16;
  a.length = 0;
  assertEquals(0, a.length);
}
testLength_4.metadata = {
  bug:"CARAKAN-33"
};

function testLength_5()
{
  function f(obj)
  {
      for (var j = 0; j < 10; j++)
      {
          var copy = [];
          copy.a = "2a";
          for (var i = 0; i < obj.length; i++)
             copy[i] = obj[i];
          assertEquals(obj.length, copy.length);
       }
  }
  var arr = [1,2,3,4,5,2,5,3,5,6,3,5,3,5,3,3,5,3,5,3];
  f(arr);
}
testLength_5.metadata = {
  bug:"CORE-40236"
};

function testLength_6() {
    function f(arr)
    {
	var l = arr.length;
	for (var i = 0; i < 200; i++)
	{
	    arr[l] = arr[l-1];
	    arr.shift();
	}
	return arr;
    }
    function g()
    {
	var arr0 = new Array(10);
	f(arr0);

	var arr = [];
	arr.length = 10;
	for (var i = 0; i < arr.length; i++)
	    arr[i] = i;

	arr = f(arr);
	var s = 0;
	var expected = 0;
	for (var j = 0; j < arr.length; j++)
	{
	    s += arr[j];
	    expected += (arr.length - 1);
			}
	assertEquals(s, expected);
    }
    g();
}
testLength_6.metadata = {
  bug:"CORE-44817"
};

//.concat

function testLengthStandalone_0() {
  assertEquals(0, Array.prototype.length);
}
testLengthStandalone_0.metadata = {
  bug:"CARAKAN-107"
};

function testLengthStandalone_1() {
  function func() {
    var a = [];
    a.length = -1;
  }
  assertThrows(RangeError(), func);
}
testLengthStandalone_1.metadata = {
  bug:"CARAKAN-118"
};

function testLengthStandalone_2() {
  function func() {
    var a = [];
    a.length = 12345678901234567890;
  }
  assertThrows(RangeError(), func);
}
testLengthStandalone_2.metadata = {
  bug:"CARAKAN-119"
};

function testLengthStandalone_3() {
  function func() {
    var a = [];
    a.length = "a";
  }
  assertThrows(RangeError(), func);
}
testLengthStandalone_3.metadata = {
  bug:"CARAKAN-120"
};

function testLengthStandalone_4() {
  var y =[];
  y[1] = 1;
  y[4294967295] = 1;
  assertEquals(2, y.length);
  assertEquals(1, y[1]);
  assertEquals(1, y[4294967295]);
}
testLengthStandalone_4.metadata = {
  bug:"CARAKAN-441"
};

function testLengthStandalone_5() {
  function f(a, b) {var l = "length"; a[l] = b[l]; return a;}
  assertEquals(1, f([], {"length":1}).length);

}
testLengthStandalone_5.metadata = {
  bug:"CARAKAN-546"
};

function testToString_0() {
  var a = Array(1,2,3);
  assertEquals("1,2,3", a.toString());
}

function testToString_1() {
  var a = Array(1,2,3);
  a.toString = Object.prototype.toString;
  assertEquals("[object Array]", a.toString());
}
testToString_1.metadata = {
  bug:"CARAKAN-53"
};

function testToString_2() {
  var a = [[1,2],3,4,[5,6]];
  a.push(a);
  var expected = "1,2,3,4,5,6,";
  var actual = a.toString();
  assertEquals(expected, actual);
}
testToString_2.metadata = {
  bug:"CARAKAN-4"
};

function testToString_3() {
  Array.prototype.toString = Object.prototype.toString;
  assertEquals("[object Array]", Array.prototype.toString());
}
testToString_3.metadata = {
  bug:"CARAKAN-108"
};

function testToString_4() {
  function func() {
    Array.prototype.toString.call((new String('foo')));
  }
  assertDoesNotThrow(func);
}
testToString_4.metadata = {
  version:"3.1"
};

function testToString_5() {
  Array.prototype[1] = 'bar';
  var a = [];
  a[0]='foo';
  a[2] = 'baz';
  assertEquals("foo,bar,baz", a.toString());
}
testToString_5.metadata = {
  bug:"CARAKAN-124"
};

function testToString_6() {
  var a = [1,2,3];
  a.push(a);
  a.push(4);
  assertEquals("1,2,3,,4", a.toString());
}

function testToString_7() {
  var a = [1,2];
  var b = [4,5];
  b.push(a);
  a.push(b);
  assertEquals("1,2,4,5,", a.toString());
  assertEquals("4,5,1,2,", b.toString());
}

function testToString_8() {
  var a = [1,2];
  var b = [4,5];
  var c = [6,7];
  b.push(c);
  a.push(b);
  c.push(a);
  assertEquals("1,2,4,5,6,7,", a.toString());
  assertEquals("4,5,6,7,1,2,", b.toString());
  assertEquals("6,7,1,2,4,5,", c.toString());
}

function testToString_9() {
  var a = [1,2];
  var b = [4,5];
  var c = [6,7];
  b.push(c);
  c.push(b);
  a.push(b);
  assertEquals("1,2,4,5,6,7,", a.toString());
  assertEquals("4,5,6,7,", b.toString());
  assertEquals("6,7,4,5,", c.toString());
}

function testToString_10() {
  var a = [1,2];
  var b = [4,5];
  var c = [6,7];
  var d = [8,9];
  d.push(c);
  c.push(d);
  b.push(c);
  a.push(b);
  assertEquals("1,2,4,5,6,7,8,9,", a.toString());
  assertEquals("4,5,6,7,8,9,", b.toString());
  assertEquals("6,7,8,9,", c.toString());
  assertEquals("8,9,6,7,", d.toString());
}

function testToString_11() {
  //In ES5 Array.prototype.toString is generic, but in 3.0
  // (and current implementations) it is not
  function func() {
    var obj = {
      toString:Array.prototype.toString,
      0:1,
      1:2,
      2:3,
      length:3
    };
    obj.toString();
  }
  assertDoesNotThrow(func);
}
testToString_11.metadata = {
  version:"3.1"
};

/*
 * The following use a.prototype.join to test what toString does
 * on recursive functions when applied to arbitary objects
 *
 * They should have been named differently
 *
 */

function testToString_12() {
  var obj = {
    toString:Array.prototype.join,
    0:1,
    1:2,
    length:3
  };
  obj[2] = obj;
  assertEquals("1,2,", obj.toString());
}

function testToString_13() {
  var a = {
    toString:Array.prototype.join,
    0:1,
    1:2,
    length:3
  };
  var b = {
    toString:Array.prototype.join,
    0:3,
    1:4,
    2:a,
    length:3
  };
  a[2] = b;
  assertEquals("1,2,3,4,", a.toString());
  assertEquals("3,4,1,2,", b.toString());
}

function testToString_14() {
  var a = {
    toString:Array.prototype.join,
    0:1,
    1:2,
    length:3
  };
  var b = {
    toString:Array.prototype.join,
    0:3,
    1:4,
    length:3
  };
  var c = {
    toString:Array.prototype.join,
    0:5,
    1:6,
    2:b,
    length:3
  };
  a[2] = b;
  b[2] = c;
  assertEquals("1,2,3,4,5,6,", a.toString());
  assertEquals("3,4,5,6,", b.toString());
}

function testToString_15() {
  var a = [1,2];
  a.push(a);
  a.push(3);
  assertEquals("1,2,,3", a.toString());
}

function testToString_16() {
  var a = [];
  a.push(a);
  assertEquals("", a.toString());
}

function testToString_17() {
  var a = [];
  var b = {
    length:2,
    0:1,
    1:a,
    toString:Array.prototype.join
  };
  a.push(b);
  a.push(3);
  assertEquals("1,,3", a.toString());
  assertEquals("1,,3", b.toString());
}


function testToString_18() {
  var a = {
    toString:Array.prototype.join,
    0:1,
    1:2,
    length:3
  };
  var b = {
    toString:Array.prototype.join,
    0:3,
    1:4,
    length:3
  };
  a[2] = b;
  var c = {
    toString:Array.prototype.join,
    0:5,
    1:6,
    length:3
  };
  b[2] = c;
  var d = {
    toString:Array.prototype.join,
    0:7,
    1:8,
    length:3
  };
  c[2] = d;
  d[2] = c;
  assertEquals("1,2,3,4,5,6,7,8,", a.toString());
  assertEquals("3,4,5,6,7,8,", b.toString());
  assertEquals("5,6,7,8,", c.toString());
  assertEquals("7,8,5,6,", d.toString());
}

function testToString_19() {
  var a = [1,2,3];
  a.join = function() {
    return "abc";
  };
  assertEquals("abc", a.toString());
}

function testToStringGeneric_0() {
  var o = {
    toString:Array.prototype.toString,
    join:Array.prototype.join,
    0:1,
    1:2,
    2:3,
    length:3
  };
  assertEquals("1,2,3", o.toString());
}

function testToStringGeneric_1() {
  var o = {
    toString:Array.prototype.toString,
    join:function() {
      return "abc";
    },
    0:1,
    1:2,
    2:3,
    length:3
  };
  assertEquals("abc", o.toString());
}

function testToStringGeneric_2() {
  var o = {
    toString:Array.prototype.toString,
    join:null,
    0:1,
    1:2,
    2:3,
    length:3
  };
  assertEquals("[object Object]", o.toString());
}


function testToStringGeneric_3() {
  var p = {
    join:function() {
      return "abc";
    }
  };

  function o() {
    this.toString = Array.prototype.toString;
  }
  o.prototype = p;

  var a = new o();

  assertEquals("abc", a.toString());
}

function testToStringGeneric_4() {
  var o = {
    toString:Array.prototype.toString,
    join:function(x) {
      return x;
    }
  };

  assertEquals("undefined", o.toString());
}

function testToStringGeneric_5() {
  this.i = 0;
  var o = {
    toString:Array.prototype.toString,
    join:function(x) {
      this.i++;
    },
    i:0
  };

  o.toString();
  assertEquals(1, o.i);
  assertEquals(0, this.i);
}

function testToStringGeneric_6() {
  assertEquals("[object String]", Array.prototype.toString.call("abc"));
}

function testToLocaleString_0() {
  function func() {
    return Array.prototype.toLocaleString.call((new String('foo')));
  }
  assertEquals("f,o,o", func());
}
testToLocaleString_0.metadata = {
  version:"3.1"
};

function testToLocaleString_1() {
  var a = [1,2,3];
  a.push(a);
  a.push(4);
  assertEquals("1,2,3,,4", a.toLocaleString());
}

function testToLocaleString_2() {
  var a = [1,2];
  var b = [4,5];
  b.push(a);
  a.push(b);
  assertEquals("1,2,4,5,", a.toLocaleString());
  assertEquals("4,5,1,2,", b.toLocaleString());
}

function testToLocaleString_3() {
  var a = [1,2];
  var b = [4,5];
  var c = [6,7];
  b.push(c);
  a.push(b);
  c.push(a);
  assertEquals("1,2,4,5,6,7,", a.toLocaleString());
  assertEquals("4,5,6,7,1,2,", b.toLocaleString());
  assertEquals("6,7,1,2,4,5,", c.toLocaleString());
}

function testToLocaleString_4() {
  var a = [1,2];
  var b = [4,5];
  var c = [6,7];
  b.push(c);
  c.push(b);
  a.push(b);
  assertEquals("1,2,4,5,6,7,", a.toLocaleString());
  assertEquals("4,5,6,7,", b.toLocaleString());
  assertEquals("6,7,4,5,", c.toLocaleString());
}

function testToLocaleString_5() {
  var a = [1,2];
  var b = [4,5];
  var c = [6,7];
  var d = [8,9];
  d.push(c);
  c.push(d);
  b.push(c);
  a.push(b);
  assertEquals("1,2,4,5,6,7,8,9,", a.toLocaleString());
  assertEquals("4,5,6,7,8,9,", b.toLocaleString());
  assertEquals("6,7,8,9,", c.toLocaleString());
  assertEquals("8,9,6,7,", d.toLocaleString());
}

function testToLocaleString_6() {
  //In ES3.1 Array.prototype.toLocaleString is generic
  var obj = {
    toLocaleString:Array.prototype.toLocaleString,
    0:1,
    1:2,
    length:3
  };
  obj[2] = obj;
  assertEquals("1,2,", obj.toLocaleString());
}
testToLocaleString_6.metadata = {
  version:"3.1"
};

function testToLocaleString_7() {
  var obj = {
    toLocaleString:Array.prototype.toLocaleString,
    0:1,
    1:2,
    length:3
  };
  obj[2] = obj;
  assertEquals("1,2,", obj.toLocaleString());
}
testToLocaleString_7.metadata = {
  version:"3.1"
};

function testToLocaleString_13() {
  var a = {
    toLocaleString:Array.prototype.toLocaleString,
    0:1,
    1:2,
    length:3
  };
  var b = {
    toLocaleString:Array.prototype.toLocaleString,
    0:3,
    1:4,
    2:a,
    length:3
  };
  a[2] = b;
  assertEquals("1,2,3,4,", a.toLocaleString());
  assertEquals("3,4,1,2,", b.toLocaleString());
}
testToLocaleString_13.metadata = {
  version:"3.1"
};

function testToLocaleString_14() {
  var a = {
    toLocaleString:Array.prototype.toLocaleString,
    0:1,
    1:2,
    length:3
  };
  var b = {
    toLocaleString:Array.prototype.toLocaleString,
    0:3,
    1:4,
    length:3
  };
  var c = {
    toLocaleString:Array.prototype.toLocaleString,
    0:5,
    1:6,
    2:b,
    length:3
  };
  a[2] = b;
  b[2] = c;
  assertEquals("1,2,3,4,5,6,", a.toLocaleString());
  assertEquals("3,4,5,6,", b.toLocaleString());
}
testToLocaleString_14.metadata = {
  version:"3.1"
};

function testToLocaleString_15() {
  var a = [1,2];
  a.push(a);
  a.push(3);
  assertEquals("1,2,,3", a.toLocaleString());
}
testToLocaleString_15.metadata = {
  version:"3.1"
};

function testToLocaleString_16() {
  var a = [];
  a.push(a);
  assertEquals("", a.toLocaleString());
}

function testToLocaleString_17() {
  var a = [];
  var b = {
    length:2,
    0:1,
    1:a,
    toLocaleString:Array.prototype.toLocaleString
  };
  a.push(b);
  a.push(3);
  assertEquals("1,,3", a.toLocaleString());
  assertEquals("1,,3", b.toLocaleString());
}
testToLocaleString_17.metadata = {
  version:"3.1"
};

function testToLocaleString_18() {
  var a = {
    toLocaleString:Array.prototype.toLocaleString,
    0:1,
    1:2,
    length:3
  };
  var b = {
    toLocaleString:Array.prototype.toLocaleString,
    0:3,
    1:4,
    length:3
  };
  a[2] = b;
  var c = {
    toLocaleString:Array.prototype.toLocaleString,
    0:5,
    1:6,
    length:3
  };
  b[2] = c;
  var d = {
    toLocaleString:Array.prototype.toLocaleString,
    0:7,
    1:8,
    length:3
  };
  c[2] = d;
  d[2] = c;
  assertEquals("1,2,3,4,5,6,7,8,", a.toLocaleString());
  assertEquals("3,4,5,6,7,8,", b.toLocaleString());
  assertEquals("5,6,7,8,", c.toLocaleString());
  assertEquals("7,8,5,6,", d.toLocaleString());
}
testToLocaleString_18.metadata = {
  version:"3.1"
};


function testPrototypeConstructor_0() {
  assertEquals(Array, Array.prototype.constructor);
}
testPrototypeConstructor_0.metadata = {
  bug:"CARAKAN-67"
};

function testConcat_0() {
  /*
   * String representation of the concatenated array
   */
  var testArray = makeArray_0();
  var str = extract( testArray, 0, testArray.length, "," );
  assertEquals(str, testArray.concat().toString());
}

function testConcat_1() {
  var testArray = makeArray_0();
  var anotherArray = [1, 2, 3, "a", "b"];
  var concatArray = testArray.concat(anotherArray);

  assertEquals("object", typeof concatArray);

  //XXX Could add some other types into the array but would have to test by
  //    using .toString()
  for (var i=0; i<testArray.length + anotherArray.length; i++) {
    if (i < testArray.length) {
      assertEquals(testArray[i], concatArray[i]);
    } else {
      assertEquals(anotherArray[i-testArray.length], concatArray[i]);
    }
  }
}

function testConcat_2() {
  /*
   * Changing an object should result in the arrays being updated
   */

  var a = makeArray_0();
  var obj = {"name":"bar"};
  var b = new Array("a", "b", "c", obj);
  var c = a.concat(b);

  obj.name = "baz";
  assertEquals("baz", b[b.length-1].name);
  assertEquals("baz", c[c.length-1].name);
}

function testConcat_3() {
  /*
   * Check changes to the original arrays don't show up in the new arrays
   */

  var a = makeArray_0();
  var b = new Array(10, 20, 30);
  var c = a.concat(b);

  var oldA1 = a[1];
  a[1] = 4;
  assertEquals(oldA1, c[1]);
  b[1] = 40;
  assertEquals(20, c[a.length + 1]);
}

function testConcat_4() {
  /*
   * Multiple arrays
   */
  var z = Array();
  var a = makeArray_0();
  var b = new Array(10, 20, 30);
  var c = new Array(100, 200, 300);

  var d = z.concat(a,b,c);
  assertEquals(a.toString() + "," + b.toString() + "," + c.toString(),
	       d.toString());
}

function testConcatString_0() {
  var a = Array.prototype.concat.call("abc", "efg");
  assertEquals(2, a.length);
  assertEquals("object", typeof a[0]);
  assertEquals("abc", a[0].valueOf());
  assertEquals(String, a[0].constructor);
  assertEquals("efg", a[1]);
}

function testConcatString_1() {
  var a = Array.prototype.concat.call("abc", ["e", 1]);
  assertEquals(3, a.length);
  assertEquals("object", typeof a[0]);
  assertEquals("abc", a[0].valueOf());
  assertEquals(String, a[0].constructor);
  assertEquals("e", a[1]);
  assertEquals(1, a[2]);
}

function testConcatString_2() {
  var a = Array.prototype.concat.call("abc", [,"e",,1]);
  assertEquals(5, a.length);
  assertEquals("object", typeof a[0]);
  assertEquals("abc", a[0].valueOf());
  assertEquals(String, a[0].constructor);
  assertEquals("e", a[2]);
  assertEquals(1, a[4]);
  assertFalse(a.hasOwnProperty(1));
  assertFalse(a.hasOwnProperty(3));
}

function testConcatString_3() {
  var a = Array.prototype.concat.call("abc", ["e",1], "f");
  assertEquals(4, a.length);
  assertEquals("object", typeof a[0]);
  assertEquals("abc", a[0].valueOf());
  assertEquals(String, a[0].constructor);
  assertEquals("e", a[1]);
  assertEquals(1, a[2]);
  assertEquals("f", a[3]);
}


//.join

function testJoin_0() {
  /*
   * Join with no arguments
   */
  var testArray = makeArray_0();
  var str = extract(testArray, 0, testArray.length, ",");
  var joinedArray = testArray.join();
  assertEquals("string", typeof joinedArray);
  assertEquals(str, joinedArray);
}

function testJoin_1() {
  /*
   * Join with an argument
   */
  var testArray = makeArray_0();
  var str2 = extract(testArray, 0, testArray.length, "#" );
  var joinedArray = testArray.join("#");
  assertEquals("string", typeof joinedArray);
  assertEquals(str2, joinedArray);
}

function testJoin_2() {
  /*
   * Join with numeric +/- infinity as arguments
   */
  var testArray = makeArray_0();
  assertEquals(extract(testArray, 0, testArray.length,
          	       Number.POSITIVE_INFINITY),
   	       testArray.join(Number.POSITIVE_INFINITY));

  assertEquals(extract(testArray, 0, testArray.length,
  		       Number.NEGATIVE_INFINITY ),
  	       testArray.join(Number.NEGATIVE_INFINITY));
}

function testJoin_3() {
  var testArray = [1, 2, 3];
  var result = testArray.join(testArray);
  var expected = "11,2,321,2,33";
  assertEquals(expected, result);
}
testJoin_3.metadata = {
  bug: "CORE-31680"
};

function testJoin_4() {
  Function[4] = 5;
  var result = Array.prototype.join.apply(Function);
  assertEquals("", result);

  Number[0] = 51;
  result = Array.prototype.join.apply(Number);
  assertEquals("51", result);
}
testJoin_4.metadata = {
  bug: "CORE-38615"
};

function testJoinStandalone_0() {
  /*
   * Joining large array
   */
  var temp = new Array();
  for( var i=0; i < 12000; i++ )
    temp.push( "." );

  assertEquals(temp.join("").length, 12000);
}

function testJoinStandalone_1() {
  assertEquals(Array.prototype.join.length, 1);
}
testJoinStandalone_1.metadata = {
  bug:"CARAKAN-106"
};

function testJoinStandalone_2() {
  function func() {
    arguments.join = Array.prototype.join;
    return arguments.join(",");
  }
  assertEquals("1,2,3", func(1,2,3));
}

function testJoinStandalone_3() {
  var a = [1,2,3];
  a.push(a);
  a.push(4);
  assertEquals("1,2,3,,4", a.join());
}

function testJoinStandalone_4() {
  var x = {length:2,
	    0:1,
	    1:2,
	    2:3,
	    3:4,
	    join:Array.prototype.join
	  };
  assertEquals("1,2", x.join(","));
}

function testJoinStandalone_5() {
  var x = {length:2,
	    0:1,
	    1:2,
	    2:3,
	    3:4,
	    join:Array.prototype.join
	  };
  assertEquals("12", x.join(""));
}

function testJoinStandalone_6() {
  var a = [];
  for (var i=0; i<0x41; i++) {
    a.push(String.fromCharCode(i));
  }
  var str = a.join("");
  for (var j=0; j<0x41; j++) {
    assertEquals(j, str.charCodeAt(j));
  }
}
testJoinStandalone_6.metadata = {
  bug:"CARAKAN-931"
};

function testJoinSparseDelete_0() {
  var a = [];
  a.length = 1000;
  a[50] = "A";
  delete a[50];
  assertEquals("", a.join(''));
}

function testJoinString_0() {
  assertEquals("a,b,c", Array.prototype.join.call("abc"));
}

function testJoinString_1() {
  assertEquals("a+b+c", Array.prototype.join.call("abc", "+"));
}

function testJoinArguments_0() {
  function joinargs() {
    return Array.prototype.join.call(arguments);
  }
  assertEquals("a", joinargs("a"));
}
testJoinArguments_0.metadata = {
  bug:"CARAKAN-1303"
};

function testJoinArguments_1() {
  function joinargs() {
    return Array.prototype.join.call(arguments);
  }
  assertEquals("ab", joinargs("ab"));
}

function testJoinArguments_2() {
  function joinargs() {
    return Array.prototype.join.call(arguments);
  }
  assertEquals("a,b", joinargs("a", "b"));
}

function testJoinArguments_3() {
  function joinargs() {
    return Array.prototype.join.call(arguments);
  }
  assertEquals("ab,cd", joinargs("ab", "cd"));
}

function testJoinCustomToString_0() {
  Array.prototype.toString = function () {
    return "array";
  };
  var a = [1,[2,3], 4];
  a.push(a);
  assertEquals("1*array*4*array", a.join("*"));
}
testJoinCustomToString_0.metadata = {
  bug:"CARAKAN-368"
};

function testJoinCustomToString_1() {
  Array.prototype.toString = function () {
    return this.join(",");
  };
  var a = [1,[2,3],4];
  a.push(a);
  assertEquals("1*2,3*4*", a.join("*"));
}
testJoinCustomToString_1.metadata = {
  bug:"CARAKAN-368"
};

function testJoinToString_0() {
  Array.prototype.toString = function () {
    return this.join(",");
  };
  var i = 0;
  var empty = [];
  var str = empty.join({toString: function () { i++; return ","; }});
  assertEquals(i, 1);
  assertEquals(str, "");
}
testJoinToString_0.metadata = {
  bug:"CORE-37315"
};

function testPop_0() {
  /*
   * Pop single element
   */
  var testArray = makeArray_0();
  var topElement = testArray[ testArray.length - 1 ];
  assertEquals(topElement, testArray.pop());
}

function testPop_1() {
    var testArray = makeArray_0();
    var tempArray = new Array();
    while( testArray.length > 0 ) {
      tempArray.push( testArray.pop() );
    }

    assertEquals(0, testArray.length);
}

function testPopString_0() {
  function func() {
    Array.prototype.pop.call("abc");
  }
  assertThrows(TypeError(), func);
}

function testPopString_1() {
  // Was: assertUndefined(Array.prototype.pop.call(""));
  // which is at odds with required behaviour.
  function func() {
    Array.prototype.pop.call("")
  }
  assertThrows(TypeError(), func);
}
testPopString_1.metadata = {
  bug: "CORE-41055"
};

function testPush_0() {
  /*
   * Pushing a single element
   */
  var testArray = makeArray_0();
  var oldLength = testArray.length;
  testArray.push(1);
  assertEquals(oldLength+1, testArray.length);
  assertEquals(1, testArray[testArray.length-1]);
}

function testPush_1() {
  /*
   * push and pop
   */
  var testArray = makeArray_0();
  testArray.push('test_push');
  assertEquals('test_push', testArray.pop());

}

function testPush_2() {
  /*
   * Pushing multiple elements
   */
  var testArray = makeArray_0();
  var oldLength = testArray.length;

  testArray.push('push1', 'push2', 'push3');

  assertEquals(oldLength + 3, testArray.length);
  for (var i=oldLength; i<oldLength+3; i++) {
    assertEquals("push" + (i-oldLength+1), testArray[i]);
  }
}

function testPush_3() {
  /*
   * toString of array that has been pushed to
   */

  var testArray = makeArray_0();
  var oldStr = testArray.toString();
  testArray.push("push");
  assertEquals(oldStr + ",push", testArray.toString());
}

function testPush_4() {
  var testArray = makeArray_0();
  var length = testArray.length;
  assertEquals(length + 1, testArray.push(1));
}

function testPush_5() {
  var testArray = makeArray_0();
  var length = testArray.length;
  assertEquals(length + 2, testArray.push(1, 2));
}

function testPushStandalone_0() {
  //function call after array.prototype.push fails
  function foo(val) {
    return(val);
  }

  var length = 4294967295;
  var array = new Array(length);
  try {
    array.push('foo');
  }
  catch (e) {}
  assertEquals(32, foo(32));
}
testPushStandalone_0.metadata = {
  bug:"CARAKAN-121"
};

function testPushStandalone_1() {
  var css = function (key, value) {
    if (key == 'fillertext') value = undefined;
  };

  var test = function () {
    var a;
    for (var i = 0; i < 1; i++) {
      var b, elems = [];
      css({});
      elems.push("bar");
      assertEquals(1, elems.length);
    }
  };

  // Get CSS JIT'ed with a string as the first argument
  for (var i = 0; i < 50; i++) {
    css('foo');
  }

  // Call the actual test
  test();
}
testPushStandalone_1.metadata = {
  bug:"CARAKAN-773"
};

function testPushString_1() {
  function func() {
    Array.prototype.push.call("abc", "e", "f", "g");
  }
  assertThrows(TypeError(), func);
}


function testReverse_0() {
  /*
   * Explicit check elements
   */
  var testArray = makeArray_0();
  var reversedArray = new Array();
  for (var i=testArray.length-1; i>=0; i--) {
    reversedArray[testArray.length - 1 - i] = testArray[i];
  }
  testArray.reverse();
  for (i=0; i<testArray.length; i++) {
    assertEquals(reversedArray[i], testArray[i]);
  }
}

function testReverse_1() {
  /*
   * Check toString of reversed array
   */
  var testArray = makeArray_0();
  var str = extract(testArray, testArray.length-1, -1, ",");
  assertEquals(str, testArray.reverse().toString());
}

function testReverse_2() {
  var testArray = [4];
  testArray.length = 5;
  assertEquals(",,,,4", testArray.reverse().toString());
}
testReverse_2.metadata = {
  bug:"CORE-39724"
};

function testReverseStandalone_0() {
  var result = [].reverse();
  assertEquals(0, result.length);
}

function testReverseStandalone_1() {
  //XXX Remove this when the function generation thing is working
  var x=[ '0',,'2','3','4'];
  var rev_x = ['4','3','2',,'0'];
  x.reverse();
  for (var i=0; i<x.length; i++) {
    assertEquals(rev_x[i], x[i]);
  }
}

function testReverseStandalone_2() {
  //XXX Remove this when the function generation thing is working
  var x = new Array();
  x[0] = '0';
  x[2] = '2';
  x[3] = '3';
  x[4] = '4';
  x.length = 6;

  var rev_x = [,'4','3','2',,'0'];

  x.reverse();

  for (var i=0; i<x.length; i++) {
    assertEquals(rev_x[i], x[i]);
  }
}

function testReverseStandalone_3() {
  assertEquals(0, Array.prototype.reverse.length);
}
testReverseStandalone_3.metadata = {
  bug:"CARAKAN-75"
};

function testReverseStandalone_4() {
  var o = {0:1,1:2,2:3,length:3};
  assertObjectEquals({0:3,1:2,2:1,length:3},
		     Array.prototype.reverse.call(o));
}

function testReverseStandalone_5() {
  var p = {0:1,1:2,2:3,length:3};
  var f = function() {};
  f.prototype = p;
  assertObjectEquals({0:3,1:2,2:1,length:3},
		     Array.prototype.reverse.call(new f));
}
testReverseStandalone_5.metadata = {
  bug:"CARAKAN-695"
};

function testReverseStandalone_6() {
  var a = JSON.parse('{"__proto__": {"1": 1}, "0": 0, "2": 2, "3": 3, "length": 4}');
  assertObjectEquals({0: 3, 1: 2, 3: 0, length: 4, __proto__: {1:1}},
 		     Array.prototype.reverse.call(a));
}
testReverseStandalone_6.metadata = {
  bug:"CORE-44808"
};

function testReverseStandalone_7() {
    var p = [3];
    var obj = [1,,,2];
    obj.__proto__ = p;
    assertArrayEquals([2,,,1], obj.reverse());
}
testReverseStandalone_7.metadata = {
  bug:"CORE-44808"
};

function testReverseString_0() {
  function func() {
    Array.prototype.reverse.call("123");
  }
  assertThrows(TypeError(), func);
}

//.shift

function testShift_0() {
  var testArray = makeArray_0();
  var firstElement = testArray[0];
  assertEquals(firstElement, testArray.shift());
}
testShift_0.metadata = {
  bug:"CARAKAN-39"
};

function testShift_1() {
  var testArray = makeArray_0();
  var originalArray = new Array();
  for (var i=0; i<testArray.length; i++) {
    originalArray.push(testArray[i]);
  }
  testArray.shift();
  for (i=0; i<testArray.length; i++) {
    assertEquals(originalArray[i+1], testArray[i]);
  }
}

function testShiftStandalone_0() {
  var x =[];
  assertEquals(undefined, x.shift());
  assertEquals(0, x.length);
}

//The next few tests apply shift to objects other than arrays
//which is fine but we don't have the same sort of tests for other
//methods here

//Want to run these three tests for different input objects

function testShiftStandalone_1() {
  /*
   * Return value from shift
   */
  var x = new Object();
  x[0] = 'zero';
  x[1] = 'one';
  x[2] = 'two';
  x[3] = 'three';
  x.length = 4;
  x.shift = Array.prototype.shift;
  assertEquals('zero', x.shift());
}
testShiftStandalone_1.metadata = {
  bug:"CARAKAN-70"
};

function testShiftStandalone_2() {
  /*
   * Length after shift
   */
  var x = new Object();
  x[0] = 'zero';
  x[1] = 'one';
  x[2] = 'two';
  x[3] = 'three';
  x.length = 4;
  x.shift = Array.prototype.shift;
  x.shift();
  assertEquals(3, x.length);
}

function testShiftStandalone_3() {
  /*
   * Remaining elements after shift
   */
  var x = new Object();
  x[0] = 'zero';
  x[1] = 'one';
  x[2] = 'two';
  x[3] = 'three';
  x.length = 4;
  x.shift = Array.prototype.shift;
  x.shift();
  assertEquals('one', x[0]);
  assertEquals('two', x[1]);
  assertEquals('three', x[2]);
}

function testShiftStandalone_4() {
  var a = new Array(1);
  var b = a.shift();
  assertArrayEquals([], a);
  assertUndefined(b);
}

function testShiftStandalone_5() {
  var a = new Array(4);
  a[1] = 1;
  a[2] = "b";
  var b = a.shift();
  assertUndefined(b);
  var expected = new Array(3);
  expected[0] = 1;
  expected[1] = "b";
  assertArrayEquals(expected, a);
}

function testShiftString_0() {
  function func() {
    Array.prototype.shift.call("abc");
  }
  assertThrows(TypeError(), func);
}

function testShiftString_1() {
  // Was: assertUndefined(Array.prototype.shift.call(""));
  // which is at odds with required behaviour.
  function func() {
    Array.prototype.shift.call("")
  }
  assertThrows(TypeError(), func);
}
testShiftString_1.metadata = {
  bug: "CORE-41055"
};


//.slice

function testSlice_0() {
  /*
   * Slice with both arguments defined
   */
  var testArray = makeArray_0();
  var slice = testArray.slice(2,4);
  assertEquals(2, slice.length);
  for (var i = 2; i < 4; i++) {
      assertEquals(testArray[i], slice[i-2]);
  }
}

function testSlice_1() {
  /*
   * Slice with one argument
   */
  var testArray = makeArray_0();
  var slice = testArray.slice(4);
  assertEquals(testArray.length - 4, slice.length);
  for (var i = 4; i < testArray.length; i++) {
    assertEquals(testArray[i], slice[i-4]);
  }
}

function testSlice_2() {
  /*
   * Slice with two arguments, one undefined
   */
  var testArray = makeArray_0();
  var slice = testArray.slice(4, undefined);
  assertEquals(testArray.length - 4, slice.length);
  for (var i = 4; i < testArray.length; i++) {
    assertEquals(testArray[i], slice[i-4]);
  }
}

function testSlice_3() {
  /*
   * Slice with no arguments
   */
  var testArray = makeArray_0();
  var slice = testArray.slice();
  assertEquals(testArray.length, slice.length);
  for (var i = 0; i < testArray.length; i++) {
    assertEquals(testArray[i], slice[i]);
  }
}

function testSlice_4() {
  /*
   * Slice with one negative argument
   */
  var testArray = makeArray_0();
  var slice = testArray.slice(2, -1);
  assertEquals(testArray.length - 3, slice.length);
  for (var i = 2; i < testArray.length - 1; i++) {
    assertEquals(testArray[i], slice[i - 2]);
  }
}

function testSlice_5() {
  /*
   * Slice with two negative arguments
   */
  var testArray = makeArray_0();
  var slice = testArray.slice(-4, -1);
  assertEquals(3, slice.length);
  for (var i = testArray.length - 4; i < testArray.length - 1; i++) {
    assertEquals(testArray[i], slice[i - (testArray.length - 4)]);
  }
}

function testSlice_6() {
  /*
   * Infinity argument
   */
  var testArray = makeArray_0();
  var slice = testArray.slice(0, Number.POSITIVE_INFINITY);
  assertEquals(testArray.length, slice.length);
  for (var i = 0; i < testArray.length; i++) {
    assertEquals(testArray[i], slice[i]);
  }
}

function testSlice_7() {
  /*
   * Two Infinity rguments
   */
  var testArray = makeArray_0();
  var slice = testArray.slice(Number.NEGATIVE_INFINITY,
			      Number.POSITIVE_INFINITY);
  assertEquals(testArray.length, slice.length);
  for (var i = 0; i < testArray.length; i++) {
    assertEquals(testArray[i], slice[i]);
  }
}

function testSlice_8() {

  var testArray = makeArray_0();

  var slice = testArray.slice(Number.NEGATIVE_INFINITY,0);
  assertEquals(0, slice.length);
}

function testSlice_9() {

  var testArray = makeArray_0();

  var slice = testArray.slice(Number.NEGATIVE_INFINITY,3);
  assertEquals(3, slice.length);
  for (var i = 0; i < 3; i++) {
    assertEquals(testArray[i], slice[i]);
  }
}

function testSlice_10() {
  var testArray = makeArray_0();
  var slice = testArray.slice(Number.NEGATIVE_INFINITY,
			      Number.NEGATIVE_INFINITY);
  assertEquals(0, slice.length);
}

function testSlice_10() {
  var testArray = makeArray_0();
  var slice = testArray.slice(0,
			      Number.NEGATIVE_INFINITY);
  assertEquals(0, slice.length);
}

//Remove when the generator thing works
function testSliceStandalone_0() {

  var testArray = [0,1,,,2,3,4];
  for (var i=0; i < testArray.length; i++) {
    assertEquals(testArray[i], testArray.slice(0)[i]);
  }
}

function testSliceString_0() {
  assertArrayEquals(["b"], Array.prototype.slice.call("abc", 1, 2));
}

function testSliceString_1() {
  assertArrayEquals(["b"], Array.prototype.slice.call("abc", 1, -1));
}

function testSliceString_2() {
  assertArrayEquals(["b", "c"], Array.prototype.slice.call("abc", -2));
}

/*
 * Infinite loop tests adapted from mozilla test harness js1_5/extensions/regress355497.js
 */

function testSliceInfiniteLoop_0() {
   function func() {
     var a = {length:1};
     a.__defineGetter__(0, [].slice);
     a[0];
  }
  //The specific error is not actually defined
  assertThrows(RangeError(), func);
}

//XXX sort tests in here

function testSort_0() {
  var a = [1,3,2,5,6,4];
  assertArrayEquals([1,2,3,4,5,6], a.sort());
}

function testSort_1() {
  var a = [1,3,NaN, 2];
  assertArrayEquals([1,2,3,NaN], a.sort());
}

function testSort_2() {
  var a = [1,2,undefined,4,3];
  assertArrayEquals([1,2,3,4,undefined], a.sort());
}

function testSort_4() {
  var a = [1,2,undefined,4,3];
  assertArrayEquals([1,2,3,4,undefined], a.sort());
}

function testSort_5() {
  var a = [,1,2,undefined,4,3];
  var expected = new Array(a.length);
  expected[0] = 1;
  expected[1] = 2;
  expected[2] = 3;
  expected[3] = 4;
  expected[4] = undefined;
  assertArrayEquals(expected, a.sort());
}

function testSort_6() {
  var a = ["1", 3, "2"];
  assertArrayEquals(["1","2",3], a.sort());
}

function testSort_7() {
  //Strings compare longer than sorter prefixes
  var a = ["present", "presently", "pre"];
  assertArrayEquals(["pre", "present", "presently"], a.sort());
}

function testSort_8() {
  //Strings sort after numbers and in codepoint order
  var a = ["a", "c", 3, 2, "b"];
  assertArrayEquals([2,3, "a", "b", "c"], a.sort());
}

function testSort_9() {
  var a = [true, false, 3,4,5];
  assertArrayEquals([3,4,5, false, true], a.sort());
}

function testSort_10() {
  var a = [null, NaN, undefined, false, 3];
  assertArrayEquals([3, NaN, false, null, undefined], a.sort());
}

function testSort_11() {
  //Different sort function
  var a = [3,4,2,1];
  function cmp(a,b){
    return a-b;
  }
  assertArrayEquals([1,2,3,4], a.sort(cmp));
}

function testSort_12() {
  function cmp(a, b) {
    return parseInt(a, 16) - parseInt(b, 16);
  }
  var a = [1,3,"a",17, "f", 21];
  assertArrayEquals([1, 3,"a", "f", 17, 21], a.sort(cmp));
}

function testSort_13() {
  var a = [1, 17, 3, 21];
  assertArrayEquals([1, 17, 21, 3], a.sort(undefined));
}

function testSort_14() {
  var a= [,,1,2];
  var expected = new Array(a.length);
  expected[0] = 1;
  expected[1] = 2;
  function cmp(x,y) {
    if (x===y) return 0;
    assertFalse(x === undefined);
    assertFalse(y === undefined);
    return x-y;
  }
  a.sort(cmp);
  assertArrayEquals(expected, a);
}

function testSort_15() {
  var a=[undefined,,undefined,1,,2];
  var expected = new Array(a.length);
  expected[0] = 1;
  expected[1] = 2;
  expected[2] = undefined;
  expected[3] = undefined;
  function cmp(x,y) {
    if (x===y) return 0;
    assertFalse(x === undefined);
    assertFalse(y === undefined);
    return x-y;
  }
  a.sort(cmp);
  assertArrayEquals(expected, a);
  assertTrue(2 in a);
  assertTrue(3 in a);
  assertFalse(4 in a);
  assertFalse(5 in a);
}

function testSort_16() {
  var a = [,,undefined];
  var expected = new Array(a.length);
  expected[0] = undefined;
  a.sort();
  assertArrayEquals(expected, a);
}

function testSort_17() {
  var a = [1,2,3,4,5];
  (function () {
    eval("for(var i = 0; i < 50; i++) a.sort(function(){ return 1; })");
  })();

  assertArrayEquals([1,2,3,4,5], a);
}
testSort_17.metadata = {
  bug:"CARAKAN-697"
};

function testSort_18() {
  var a = ["d","b",,"a",,"e","c"];
  assertEquals('a,b,c,d,e,,', a.sort().toString());
  var b = ["d","b",,"a",,"e","c",,,,,,,];
  assertEquals('a,b,c,d,e,,,,,,,,', b.sort().toString());
}
testSort_18.metadata = {
  bug:"CORE-39736"
};

function testSortGeneric_0() {
  var a = {
    length:3,
    0:2,
    1:1,
    2:3
  };
  Array.prototype.sort.call(a);
  assertObjectEquals({0:1,1:2,2:3}, a);
}
testSortGeneric_0.metadata = {
  bug:"CARAKAN-390"
};

function testSortGeneric_1() {
  var a = {
    length:4,
    0:2,
    1:1,
    2:3
  };
  Array.prototype.sort.call(a);
  var expected = {
    length:4,
    0:1,
    1:2,
    2:3
  };
  assertObjectEquals(expected, a);
}
testSortGeneric_1.metadata = {
  bug:"CARAKAN-390"
};


function testSortGeneric_2() {
  var a = {
    length:2,
    0:3,
    1:2,
    2:1
  };
  var expected = {
    length:2,
    0:2,
    1:3,
    2:1
  };
  Array.prototype.sort.call(a);
  assertObjectEquals(expected, a);
}
testSortGeneric_2.metadata = {
  bug:"CARAKAN-390"
};

function testSortGeneric_3() {
  var a = {
    length:2,
    0:2,
    2:1
  };
  Array.prototype.sort.call(a);
  var expected = {
    length:2,
    0:2,
    2:1
  };
  assertObjectEquals(expected, a);
  assertEquals(1, a[2]);
}
testSortGeneric_3.metadata = {
  bug:"CARAKAN-390"
};

function testSortGeneric_4() {
  var a = {
    length:3,
    0:2,
    2:undefined,
    10:1
  };
  Array.prototype.sort.call(a);
  var expected = {
    length:3,
    0:2,
    1:undefined,
    10:1
  };
  assertObjectEquals(expected, a);
}
testSortGeneric_4.metadata = {
  bug:"CARAKAN-390"
};

function testSortGeneric_5() {
  var a = {
    length:3,
    0:2,
    2:3,
    1:undefined,
    10:1
  };
  Array.prototype.sort.call(a, function (a,b) {return b-a;});
  var expected = {
    length:3,
    0:3,
    1:2,
    2:undefined,
    10:1
  };
}
testSortGeneric_5.metadata = {
  bug:"CARAKAN-390"
};

function testSortGeneric_6() {
  var crash = Array.prototype.sort.caller;
  assertTrue(true); // PASS if it doesn't crash on the line above
}
testSortGeneric_6.metadata = {
  bug:"CORE-40249"
};

function testSortString_0() {
  function func() {
     Array.prototype.sort.call("bca");
  }
  assertThrows(TypeError, func());
}

function testSpliceStandalone_0() {
  var a = [1,2,3,4];
  a.splice();
  assertArrayEquals([1,2,3,4], a);
}
testSpliceStandalone_0.metadata = {
  bug:"CARAKAN-240"
};

function testSpliceStandalone_1() {
  var a = [1,2,3,4];
  a.splice(null, null);
  assertArrayEquals([1,2,3,4], a);
}

function testSpliceStandalone_2() {
  var a = [1,2,3,4];
  var b = a.splice(undefined, undefined);
  assertArrayEquals([1,2,3,4], a);
  assertArrayEquals([], b);
}
testSpliceStandalone_2.metadata = {
  bug:"CARAKAN-240"
};

function testSpliceStandalone_3() {
  var a = [1,2,3,4];
  a.splice(0, 0, 1);
  assertArrayEquals([1,1,2,3,4], a);
}

function testSpliceStandalone_4() {
  var a = [1,2,3,4];
  a.splice(0, 0, 1, 2);
  assertArrayEquals([1,2,1,2,3,4], a);
}

function testSpliceStandalone_5() {
  var a = [1,2,3,4];
  a.splice(undefined, null, 1, 2);
  assertArrayEquals([1,2,1,2,3,4], a);
}

function testSpliceStandalone_6() {
  var a = [1,2,3,4];
  a.splice(null, undefined, 1, 2);
  assertArrayEquals([1,2,1,2,3,4], a);
}
testSpliceStandalone_6.metadata = {
  bug:"CARAKAN-240"
};

function testSpliceStandalone_7() {
  var a = [1,2,3,4];
  a.splice(1, undefined, 5, 6);
  assertArrayEquals([1,5,6,2,3,4], a);
}
testSpliceStandalone_7.metadata = {
  bug:"CARAKAN-240"
};

function testSpliceStandalone_8() {
  var a = [1,2,3,4];
  a.splice(1, 1, 5, 6);
  assertArrayEquals([1,5,6,3,4], a);
}

function testSpliceStandalone_9() {
  var a = [1,2,3,4];
  a.splice(1, 3, 5, 6);
  assertArrayEquals([1,5,6], a);
}

function testSpliceStandalone_10() {
  var a = [1,2,3,4];
  a.splice(1, 5, 5, 6);
  assertArrayEquals([1,5,6], a);
}

function testSpliceStandalone_11() {
  //Pure removal
  var a = [1,2,3,4];
  a.splice(0, 2);
  assertArrayEquals([3,4], a);
}

function testSpliceStandalone_12() {
  //Pure removal
  var a = [1,2,3,4];
  a.splice(0, 100);
  assertArrayEquals([], a);
}

function testSpliceStandalone_13() {
  var a = [1,2,3,4];
  a.splice(4, 100);
  assertArrayEquals([1,2,3,4], a);
}

function testSpliceStandalone_14() {
  var a = [1,2,3,4];
  a.splice(-2, 0, 5, 6);
  assertArrayEquals([1,2,5,6,3,4], a);
}

function testSpliceStandalone_15() {
  var a = [1,2,3,4];
  a.splice(-2, -2, 5, 6);
  assertArrayEquals([1,2,5,6,3,4], a);
}

function testSpliceStandalone_16() {
  var a = [1,2,3,4];
  a.splice(-1, 1, 5, 6, 7);
  assertArrayEquals([1,2,3,5,6,7], a);
}

function testSpliceStandalone_17() {
  var a = [1,2,3,4];
  a.splice(NaN, NaN, 5,6);
  assertArrayEquals([5,6,1,2,3,4], a);
}

function testSpliceStandalone_18() {
  var a = [1,2,3,4];
  a.splice(Number.POSITIVE_INFINITY, 0, 5,6);
  assertArrayEquals([1,2,3,4,5,6], a);
}

function testSpliceStandalone_19() {
  var a = [1,2,3,4];
  a.splice(Number.NEGATIVE_INFINITY, 0, 5,6);
  assertArrayEquals([5,6,1,2,3,4], a);
}

function testSpliceStandalone_20() {
  var a = [1,2,3,4];
  a.splice(0, Number.POSITIVE_INFINITY, 5,6);
  assertArrayEquals([5,6], a);
}

function testSpliceStandalone_21() {
  var a = [1,2,3,4];
  a.splice(0, Number.NEGATIVE_INFINITY, 5,6);
  assertArrayEquals([5,6,1,2,3,4], a);
}

function testSpliceStandalone_22() {
  var a = [1,2,3,4];
  a.splice(true, false, 5,6);
  assertArrayEquals([1,5,6,2,3,4], a);
}

function testSpliceStandalone_23() {
  var a = [1,2,3,4];
  a.splice("2", 0, 5,6);
  assertArrayEquals([1,2,5,6,3,4], a);
}

function testSpliceStandalone_24() {
  var a = [1,2,3,4];
  a.splice(0, "2", 5,6);
  assertArrayEquals([5,6,3,4], a);
}

function testSpliceStandalone_25() {
  var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  a.splice("0x10", 0, 17,18);
  assertArrayEquals([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18], a);
}

function testSpliceStandalone_26() {
  var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  a.splice("0xA", 0, 17,18);
  assertArrayEquals([1,2,3,4,5,6,7,8,9,10,17,18,11,12,13,14,15,16], a);
}

function testSpliceStandalone_27() {
  var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  a.splice(0, " \n\t0xA  ", 17,18);
  assertArrayEquals([17,18,11,12,13,14,15,16], a);
}

function testSpliceStandalone_28() {
  var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  a.splice(0, "1E1", 17,18);
  assertArrayEquals([17,18,11,12,13,14,15,16], a);
}

function testSpliceStandalone_29() {
  var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  a.splice(0, "1E-1", 17,18);
  assertArrayEquals([17,18,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], a);
}

function testSpliceStandalone_30() {
  var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  a.splice("  \n\t0xA  ",0, 17,18);
  assertArrayEquals([1,2,3,4,5,6,7,8,9,10,17,18,11,12,13,14,15,16], a);
}

function testSpliceStandalone_31() {
  var a = [1,2,3,4];
  a.splice("Infinity",0, 5,6);
  assertArrayEquals([1,2,3,4,5,6], a);
}

function testSpliceStandalone_32() {
  var a = [1,2,3,4];
  a.splice(0,"Infinity",5,6);
  assertArrayEquals([5,6], a);
}

function testSpliceStandalone_33() {
  var a = [1,2,3,4];
  var b = {
    valueOf:function() {
      return 1;
    }
  };
  a.splice(b, 0, 5, 6);
  assertArrayEquals([1,5,6,2,3,4], a);
}

function testSpliceStandalone_34() {
  var a = [1,2,3,4];
  var b = {
    valueOf:function() {
      return 1;
    }
  };
  a.splice(0, 1, 5, 6);
  assertArrayEquals([5,6,2,3,4], a);
}

function testSpliceStandalone_35() {
  var a = [1,2,3,4];
  var b = {
    toString:function() {
      return "1";
    }
  };
  a.splice(b, 0, 5, 6);
  assertArrayEquals([1,5,6,2,3,4], a);
}

function testSpliceStandalone_36() {
  var a = [1,2,3,4];
  var b = {
    toString:function() {
      return "1";
    }
  };
  a.splice(0, 1, 5, 6);
  assertArrayEquals([5,6,2,3,4], a);
}

function testSpliceStandalone_37() {
  var a = [1,2,3,4];
  var b = a.splice(1,2,5,6);
  assertArrayEquals([2,3], b);
}

function testSpliceStandalone_38() {
  var a = [1,2,3,4];
  var b = a.splice(1,0,5,6);
  assertArrayEquals([], b);
}

function testSpliceStandalone_39() {
  //Splice is generic
  var a = {
    length:4,
    0:1,
    1:2,
    2:3,
    3:4,
    splice:Array.prototype.splice
  };
  a.splice(0,0,5,6);
  //This should still be the right comparison
  assertArrayEquals([5,6,1,2,3,4], a);
}

function testSpliceStandalone_41() {
  //Splice is generic
  var a = {
    length:4,
    0:1,
    1:2,
    2:3,
    3:4,
    splice:Array.prototype.splice
  };
  a.splice(1,0,5,6);
  //This should still be the right comparison
  assertArrayEquals([1,5,6,2,3,4], a);
}

function testSpliceStandalone_42() {
  //Splice is generic
  var a = {
    length:4,
    0:1,
    1:2,
    2:3,
    3:4,
    splice:Array.prototype.splice
  };
  a.splice(0,1,5,6);
  //This should still be the right comparison
  assertArrayEquals([5,6,2,3,4], a);
}

function testSpliceStandalone_43() {
  //Splice is generic
  var a = {
    length:4,
    0:1,
    1:2,
    2:3,
    3:4,
    splice:Array.prototype.splice
  };
  a.splice(0,1,5,6);
  //This should still be the right comparison
  assertArrayEquals([5,6,2,3,4], a);
}

// This is an ES5 spec bug
// https://bugs.ecmascript.org/show_bug.cgi?id=332
function testSpliceStandalone_44() {
  var a = [0];
  a[2] = 2;
  assertEquals(2, a.splice(0, 2).length);
}

function testSpliceString_0() {
  function func() {
    Array.prototype.splice.call("123",0,1);
  }
  assertThrows(TypeError(), func);
}

function testSpliceString_1() {
  function func() {
    Array.prototype.splice.call("123",0,0,"4");
  }
  assertThrows(TypeError(), func);
}

function testSpliceGeneric_0() {
  var o = {
    length:2,
    0:1,
    1:2,
    2:3
  };
  assertArrayEquals([2], Array.prototype.splice.call(o, 1, 1));
}

function testSpliceGeneric_1() {
  function func() {this.length=0;}
  func.prototype = {
    1:"two",
    push:function(value) {
      this[this.length] = value;
      this.length++;
    }
  };

  var o = new func();
  o.push(1);
  o.push(undefined);
  o.push(2);

  assertArrayEquals([undefined], Array.prototype.splice.call(o, 1, 1));
}

function testSpliceGeneric_2() {
  function func() {this.length=0;}
  func.prototype = {
    1:"two",
    push:function(value) {
      this[this.length] = value;
      this.length++;
    }
  };

  var o = new func();
  o.push(1);
  o.push(undefined);
  o.push(2);

  delete o[1];

  assertArrayEquals(["two"], Array.prototype.splice.call(o, 1, 1));
}

//things to test: objects with already existing properties
function testSliceInfiniteLoop_1() {
  function func() {
    var c = [1,2,3];
    c.__defineGetter__(0, function() {this.slice(0,1,1);});
    return c[0];
  }
  assertThrows(RangeError(), func);
}

function testUnshift_0() {
  var a = [1,2,3,4];
  a.unshift();
  assertArrayEquals([1,2,3,4], a);
}

function testUnshift_1() {
  var a = [1,2,3,4];
  a.unshift(undefined);
  assertArrayEquals([undefined, 1,2,3,4], a);
}

function testUnshift_2() {
  var a = [1,2,3,4];
  a.unshift(null);
  assertArrayEquals([null, 1,2,3,4], a);
}

function testUnshift_3() {
  var a = [1,2,3,4];
  a.unshift(5,6);
  assertArrayEquals([5,6,1,2,3,4], a);
}

function testUnshift_4() {
  //Unshift is generic
  var a = {
    length:1,
    0:1,
    unshift:Array.prototype.unshift
  };
  a.unshift(2,3);
  assertArrayEquals([2,3,1], a);
}

function testUnshift_5() {
  //Unshift is generic
  var a = {
    length:1,
    unshift:Array.prototype.unshift
  };
  a.unshift(2,3);
  //assertArrayEquals([2,3,,], a);
}

function testUnshift_5() {
  //Unshift is generic
  var a = {
    length:0,
    1:0,
    2:1,
    unshift:Array.prototype.unshift
  };
  a.unshift(2,3);
  assertArrayEquals([2,3], a);
}

function testUnshiftInfiniteLoop_0() {
  function func() {
    var c = [];
    c.__defineSetter__(0, c.unshift);
    c[0] = 1;
  }
  assertThrows(RangeError(), func);
}

function testUnshiftString_0() {
  function func() {
    Array.prototype.unshift.call("abc", "a");
  }
  assertThrows(TypeError(), func);
}

function testForIn_0() {
  //Pass condition is to not crash
  for (var p in Array) {
  }
}
testForIn_0.metadata = {
  bug:"CARAKAN-66"
};

function testForIn_1() {
  var a = [], m = true;
  for (var i in a["filter"]) {
    m = false;
  }
  assertTrue(m);
}
testForIn_1.metadata = {
  bug:"CARAKAN-1215"
};

/*
 * Pure helper functions (no actual tests)
 */

function makeArray_0() {
  return new Array( "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" );
}

function makeArray_1() {
  /*
   * Constructor called as function
   */
  return Array( "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" );
}

function makeSparseArray_0() {
  var a = new Array(7);
  a[5]='Mon';
  a[1]='Tue';
  return a;
}

function makeArrayLiteral_0() {
  return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
}

//function makeSparseLiteral_0() {
//  return [ ,"Tue", , , , "Mon",,];
//}

function extract(testArray, start, stop, sep) {
  var str = "";
  var step = start <= stop ? 1 : -1;
  for( var i = start; i != stop; i += step )
  {
    str += (testArray[i]) ? testArray[i] : '';
    if( i != stop - step) {
      str += sep;
    }
  }
  return str;
}

function compareNumbers( a, b )
{
   return a - b;
}


function testDelete_0() {
  //The pass condition is to not crash
  var a = [0,1,2];
  delete a[Math.pow(2,31)-1];
}
testDelete_0.metadata = {bug:"CARAKAN-1 CARAKAN-116"};

function testDelete_1() {
  Array.prototype[2] = "two";
  var a = [0,1,2,3];
  delete a[2];
  assertEquals("two", a[2]);
}
testDelete_1.metadata = {bug:"CARAKAN-125"};

function testCustomProperties_0() {
  //Pass condition is to not crash
  function foo() {}

  var barr = Array(); barr.getGo = foo; barr.getGo();
  var arr = Array(); arr.getGo = foo; arr.getGo();
}
testCustomProperties_0.metadata = {
  bug:"CARAKAN-54"
};

function testPut_0() {
  var a = new Array();
  a[10] = "10";
  assertEquals("10", a[10]);
  assertEquals(11, a.length);
}

function testPut_1() {
  var a = new Array();
  a["10"] = "10";
  assertEquals("10", a[10]);
  assertEquals(11, a.length);
}

function testPut_2() {
  var a = new Array();
  a["  10"] = "10";
  assertEquals("10", a["  10"]);
  assertUndefined(a[10]);
  assertEquals(0, a.length);
}

function testPut_3() {
    var a = new Array();
  a["0010"] = "10";
  assertEquals("10", a["0010"]);
  assertUndefined(a[10]);
  assertEquals(0, a.length);
}
testPut_3.metadata = {
  bug:"CARAKAN-111"
};

function testPut_4() {
    var a = new Array();
  a["0X10"] = "10";
  assertEquals("10", a["0X10"]);
  assertUndefined(a[10]);
  assertUndefined(a[16]);
  assertEquals(0, a.length);
}

function testPut_5() {
  var a = new Array();
  a[10] = "10";
  assertEquals("10", a[10]);
  assertEquals(11, a.length);
}

function testConstructor_0() {
  function func() {
    new Array(12345678901234567890);
  }
  assertThrows(RangeError(), func);
}

function testConstructor_1() {
  var a = new Array(true);
  assertEquals(1, a.length);
  assertEquals(true, a[0]);
}

function testConstructor_2() {
  function func() {
    new Array(-1);
  }
  assertThrows(RangeError(), func);
}

function testIndexOf_0() {
  var a = [];
  var x = a.indexOf(1);
  assertEquals(-1, x);
}
testIndexOf_0.metadata = {
  bug:"CARAKAN-26",
  version:3.1
};


function testIndexOf_1() {
  var a = [1,2,3];
  assertArrayEquals([0,1,2], [a.indexOf(1), a.indexOf(2), a.indexOf(3)]);
}

function testIndexOf_2() {
  assertEquals(1, [1,undefined, 2, undefined].indexOf(undefined));
}

function testIndexOf_3() {
  assertEquals(-1, [1,,2].indexOf(undefined));
}

function testIndexOf_4() {
  assertEquals(-1, [1,, 2].indexOf());
}

function testIndexOf_5() {
  assertEquals(1, [1,undefined,2].indexOf());
}

function testIndexOf_6() {
  assertEquals(-1, [1,,2].indexOf());
}

function testIndexOf_7() {
  assertEquals(-1, [].indexOf());
}

function testIndexOf_8() {
  assertEquals(1, ["1", 1].indexOf(1));
}

function testIndexOf_9() {
  assertEquals(1, [1, "1"].indexOf("1"));
}

function testIndexOf_10() {
   assertEquals(1, [undefined, null].indexOf(null));
}

function testIndexOf_11() {
  assertEquals(-1, [1,2,3].indexOf(4));
}

function testIndexOf_13() {
  assertEquals(0, [1,2,1,1].indexOf(1,0));
}

function testIndexOf_14() {
  assertEquals(2, [1,2,1,1].indexOf(1,1));
}

function testIndexOf_15() {
  assertEquals(3, [1,2,1,1].indexOf(1,-1));
}

function testIndexOf_16() {
  assertEquals(0, [1,2,1,1].indexOf(1,-5));
}

function testIndexOf_17() {
  assertEquals(0, [1,2,3,1].indexOf(1, NaN));
}

function testIndexOf_18() {
  assertEquals(0, [1,2,3,1].indexOf(1, undefined));
}

function testIndexOf_19() {
  a = {
    length:0,
    "0":"a",
    indexOf:Array.prototype.indexOf
  };
  assertEquals(-1, a.indexOf("a"));
}

function testIndexOf_20() {
  a = {
    length:0,
    "0":"a",
    "1":"b",
    indexOf:Array.prototype.indexOf
  };
  assertEquals(-1, a.indexOf("a"));
}

function testIndexOf_21() {
    assertEquals(0, [Math.ceil(-0.4)].indexOf(0));
}

function testIndexOfString_0() {
  assertEquals(1, Array.prototype.indexOf.call("123", "2"));
}

function testIndexOfString_1() {
  assertEquals(-1, Array.prototype.indexOf.call("", "1"));
}

function testIndexOfString_2() {
  assertEquals(3, Array.prototype.indexOf.call("abab", "b", 2));
}

function testIndexOfString_3() {
  assertEquals(-1, Array.prototype.indexOf.call("abab", "a", -1));
}

function testIndexOfString_4() {
  assertEquals(3, Array.prototype.indexOf.call("abab", "b", -1));
}

function testIndexOfString_5() {
  assertEquals(1, Array.prototype.indexOf.call("abab", "b", -5));
}

function testLastIndexOf_1() {
  var a = [1,2,3];
  assertArrayEquals([0,1,2], [a.lastIndexOf(1), a.lastIndexOf(2),
			      a.lastIndexOf(3)]);
}

function testLastIndexOf_2() {
  assertEquals(2, [undefined, 1, undefined, 2].lastIndexOf(undefined));
}

function testLastIndexOf_3() {
  assertEquals(-1, [1,,2].lastIndexOf(undefined));
}

function testLastIndexOf_4() {
  assertEquals(-1, [1,,2].lastIndexOf());
}

function testLastIndexOf_5() {
  assertEquals(1, [1,undefined,2].lastIndexOf());
}

function testLastIndexOf_6() {
  assertEquals(-1, [1,2,3].lastIndexOf());
}

function testLastIndexOf_7() {
  assertEquals(-1, [].lastIndexOf());
}

function testLastIndexOf_8() {
  assertEquals(2, [1, "1", 1, "1", "a"].lastIndexOf(1));
}

function testLastIndexOf_9() {
  assertEquals(2, ["1", 1, "1", 1].lastIndexOf("1"));
}

function testLastIndexOf_10() {
  assertEquals(2, [null, undefined, null, undefined].lastIndexOf(null));
}

function testLastIndexOf_11() {
  assertEquals(-1, [1,2,3].lastIndexOf(4));
}

function testLastIndexOf_13() {
  assertEquals(0, [1,2,1,1].lastIndexOf(1,1));
}

function testLastIndexOf_14() {
  assertEquals(0, [1,2,1,1].lastIndexOf(1,1));
}

function testLastIndexOf_15() {
  assertEquals(3, [1,2,1,1].lastIndexOf(1,-1));
}

function testLastIndexOf_16() {
  assertEquals(-1, [1,2,1,1].lastIndexOf(1,-5));
}

function testLastIndexOf_17() {
  assertEquals(0, [1,2,3,1].lastIndexOf(1, NaN));
}

function testLastIndexOf_18() {
  a = {
    length:0,
    "0":"a",
    lastIndexOf:Array.prototype.lastIndexOf
  };
  assertEquals(-1, a.lastIndexOf("a"));
}

function testLastIndexOf_19() {
  a = {
    length:0,
    "0":"a",
    "1":"b",
    lastIndexOf:Array.prototype.lastIndexOf
  };
  assertEquals(-1, a.lastIndexOf("a"));
}

function testLastIndexOf_20() {
  a = {
    length:3,
    "0":"a",
    "1":"b",
    "2":"a",
    lastIndexOf:Array.prototype.lastIndexOf
  };
  assertEquals(2, a.lastIndexOf("a"));
}

function testLastIndexOf_21() {
  a = {
    length:3,
    "0":"a",
    "1":"b",
    "2":"a",
    lastIndexOf:Array.prototype.lastIndexOf
  };
  assertEquals(2, a.lastIndexOf("a", -1));
}

function testLastIndexOf_22() {
  a = {
    length:4,
    "0":"a",
    "1":"b",
    "3":"a",
    lastIndexOf:Array.prototype.lastIndexOf
  };
  assertEquals(3, a.lastIndexOf("a", -1));
}

function testLastIndexOf_23() {
    assertEquals(0, [Math.ceil(-0.4)].lastIndexOf(0));
}

function testLastIndexOfString_0() {
  assertEquals(1, Array.prototype.lastIndexOf.call("123", "2"));
}

function testLastIndexOfString_1() {
  assertEquals(-1, Array.prototype.lastIndexOf.call("", "1"));
}

function testLastIndexOfString_2() {
  assertEquals(2, Array.prototype.lastIndexOf.call("abab", "a"));
}

function testLastIndexOfString_3() {
  assertEquals(1, Array.prototype.lastIndexOf.call("abab", "b", 2));
}

function testLastIndexOfString_4() {
  assertEquals(0, Array.prototype.lastIndexOf.call("abab", "a", -3));
}

function testLastIndexOfString_5() {
  assertEquals(3, Array.prototype.lastIndexOf.call("abab", "b", -1));
}

function testLastIndexOfString_6() {
  assertEquals(-1, Array.prototype.lastIndexOf.call("abab", "b", -5));
}

function testEvery_0() {
  assertTrue([].every(function() {}));
}

function testEvery_1() {
  function func() {
    [].every();
  }
  assertThrows(TypeError(), func);
}

function testEvery_2() {
  assertTrue([true, true].every(
	       function(value, index, obj) {return value;}));
}

function testEvery_3() {
  assertFalse([true, false].every(
		function(value, index, obj){return value;}));
}

function testEvery_4() {
  var indicies = [];
  assertTrue([true, true, true, true].every(
	       function(value, index, obj) {indicies.push(index);
					    return value;}));
  assertArrayEquals([0,1,2,3], indicies);
}

function testEvery_5() {
  var indicies = [];
  assertFalse([true, true, false, true].every(
	       function(value, index, obj) {indicies.push(index);
					    return value;}));
  assertArrayEquals([0,1,2], indicies);
}

function testEvery_6() {
  var a = [true, true];
  a.every(
    function(value, index, obj) {assertEquals(a, obj);});
}

function testEvery_7() {
  //Missing array indicies are ignored
  var a = [true,, true];
  assertTrue(a.every(function(value, index, obj) {return value;}));
}

function testEvery_8() {
  //Missing array indicies are ignored
  var a = [true,,false];
  assertFalse(a.every(function(value, index, obj) {return value;}));
}

function testEvery_9() {
  //If elements are added to obj they don't get processed
  var a = [true,true];
  assertTrue(a.every(function(value, index, obj) {if (obj.length == 2) {obj.push(false);}; return value;}));
  assertArrayEquals([true, true, false], a);
}

function testEvery_10() {
  //Elements that are deleted during iteration are not counted
  var a = [true, false, true];
  assertTrue(a.every(function(value, index, obj) {delete obj[1]; return value;}));
  assertArrayEquals([true,,true], a);
}

function testEvery_11() {
  var a = [true, false, true];
  assertTrue(a.every(function(value, index, obj) {obj.length = 1; return value;}));
  assertArrayEquals([true], a);
}

function testEvery_12() {
  var a = [true, false, true];
  assertTrue(a.every(function(value, index, obj) {obj.length = 0; return value;}));
  assertArrayEquals([], a);
}


function testEvery_14() {
  this.a = 0;
  var a = [true, true, true];
  assertTrue(a.every(function(value, index, obj) {
		       this.a++;
		       return value;})
	    );
  assertEquals(3, this.a);
}

function testEvery_15() {
  this.a = 0;
  var a = [true, true, true];
  var my_this = {
    a:0
  };
  a.every(function(value, index, obj) {
		       this.a++;
		       return value;},
	  my_this);
  assertEquals(0, this.a);
  assertEquals(3, my_this["a"]);
}

function testEvery_16() {
  this.a = 0;
  var a = [true, true, true];
  a.every(function(value, index, obj) {
		       this.a++;
		       return value;},
	  null);
  assertEquals(3, this.a);
}

function testEvery_18() {
  this.a = 0;
  var a = [true, true, true];
  var my_this = 1;
  a.every(function(value, index, obj) {
	    assertEquals(Number, this.constructor);
	    assertEquals(1, this.valueOf());
	    return value;}, my_this);
}
testEvery_18.metadata = {
  bug:"CARAKAN-335"
};

function testEvery_19() {
  this.a = 0;
  var a = [true, true, true];
  var my_this = "abc";
  a.every(function(value, index, obj) {
	    assertEquals(String, this.constructor);
	    assertEquals("abc", this.toString());
	    return value;}, my_this);
}
testEvery_19.metadata = {
  bug:"CARAKAN-335"
};

function testEvery_20() {
  this.a = 0;
  var a = [true, true, true];
  var my_this = true;
  a.every(function(value, index, obj) {
	    assertEquals(Boolean, this.constructor);
	    assertEquals(true, this.valueOf());
	    return value;}, my_this);
}
testEvery_20.metadata = {
  bug:"CARAKAN-335"
};

function testEvery_21() {
  var a = {every:Array.prototype.every};
  assertTrue(a.every(function(){return false;}));
}


function testEvery_22() {
  var a = {every:Array.prototype.every,
	   0:true,
	   length:1};
  assertTrue(a.every(function(value, index, obj){return value;}));
}

function testEvery_23() {
  var a = {every:Array.prototype.every,
	   0:true,
	   1:false,
	   length:1};
  assertTrue(a.every(function(value, index, obj) {return value;}));
}

function testEvery_24() {
  var a = {every:Array.prototype.every,
	   0:true,
	   1:false,
	   length:2};
  assertFalse(a.every(function(value, index, obj) {return value;}));
}

function testEvery_25() {
  var a = {every:Array.prototype.every,
	   0:true,
	   1:true,
	   length:3};
  assertTrue(a.every(function(value, index, obj) {return value;}));
}

function testEvery_26() {
  var a = {every:Array.prototype.every,
	   0:true,
	   1:true,
	   length:3};
  assertTrue(a.every(function(value, index, obj) {assertEquals(a, obj);
						  return value;}));
}

function testEvery_27() {
  var a = {every:Array.prototype.every,
	   0:true,
	   1:true,
	   length:3};
  this.i = 0;
  assertTrue(a.every(function(value, index, obj) {this.i++;
						  return value;}));
  assertEquals(2, this.i);
}

function testEvery_28() {
  var a = {every:Array.prototype.every,
	   0:true,
	   1:true,
	   2:true,
	   length:3};
  this.i = 0;
  var my_this = {
    i:0
  };
  assertTrue(a.every(function(value, index, obj) {this.i++;
						  return value;},
		     my_this));
  assertEquals(0, this.i);
  assertEquals(3, my_this.i);
}

function testEvery_29() {
  var a = {every:Array.prototype.every,
	   0:true,
	   1:true,
	   2:true,
	   length:3};
  this.i = 0;
  var my_this = 1;
  assertTrue(a.every(function(value, index, obj) {
		       assertEquals(Number, my_this.constructor);
		       return value;},
		     my_this));
}

function testEvery_30() {
  var i = 0;
  assertTrue(Array.prototype.every.call("abc", function() {
					  i++;
					  return true;}));
  assertEquals(3,i);
}

function testEvery_31() {
  var p = {
    0:false
  };
  function o() {
    this[1] = true;
    this[2] = true;
    this.length = 3;
    this.every = Array.prototype.every;
  }
  o.prototype = p;
  var a = new o();

  var b = a.every(function(x) {
		  return x;
		});
  assertEquals(false, b);
}

function testSome_0() {
  var a = [true, false, true];
  var b = a.some(function(x, i, o) {
		   return x;
		 });
  assertEquals(true, b);
}

function testSome_1() {
  var a = [false, false, false];
  var b = a.some(function(x, i, o) {
		   return x;
		 });
  assertEquals(false, b);
}

function testSome_2() {
  var a = [true, false, true];
  var count = 0;
  a.some(function(x, i, o) {
	   count ++;
	   return x;
	 });
  assertEquals(1, count);
}

function testSome_3() {
  var a = [false, false, true];
  var count = 0;
  a.some(function(x, i, o) {
	   count ++;
	   return x;
	 });
  assertEquals(3, count);
}

function testSome_4() {
  var a = [false, false, true];
  var count = 0;
  a.some(function(x, i, o) {
	   count ++;
	   return x;
	 });
  assertEquals(3, count);
}

function testSome_5() {
  var a = [false, false, true];
  var b = [];
  a.some(function(x, i, o) {
	   b.push(i);
	   return x;
	 });
  writeln(b);
  assertArrayEquals([0,1,2], b);
}

function testSome_6() {
  var a = [false, false, true];
  var b = [];
  a.some(function(x, i, o) {
	   b.push(i);
	   return x;
	 });
  assertArrayEquals([0,1,2], b);
}

function testSome_7() {
  var a = [false, false, true];
  var b = [];
  a.some(function(x, i, o) {
	   assertEquals(a, o);
	   return x;
	 });
}

function testSome_8() {
  var a = [false, true];
  var b = a.some(function(x, i, o) {
		   o[1] = false;
		   return x;
		 });
  assertEquals(b, false);
}

function testSome_9() {
  var a = [false, true];
  var b = a.some(function(x, i, o) {
		   o[1] = false;
		   return x;
		 });
  assertEquals(b, false);
}

function testSome_10() {
  var a = [false, false];
  var b = [];
  var c = a.some(function(x, i, o) {
		   o.push(true);
		   b.push(i);
		   return x;
		 });
  assertArrayEquals([false, false, true, true], a);
  assertArrayEquals([0,1], b);
  assertEquals(false, c);
}

function testSome_11() {
  var a = [false,, false];
  var b = [];
  var c = a.some(function(x, i, o) {
		   return x;
		 });
  assertEquals(false, c);
}

function testSome_12() {
  var a = [false,,true];
  var c = a.some(function(x, i, o) {
		   return x;
		 });
  assertEquals(true, c);
}

function testSome_13() {
  var a = [];
  var c = a.some(function() {return true;});
  assertEquals(false, c);
}


function testSome_14() {
  var a = [false,true,false];
  var b = [];
  var c = a.some(function(x, i, o) {
                   delete a[1];
		   b.push(i);
                   return x;
		 });
  assertArrayEquals([0,2], b);
  assertEquals(false, c);
}

function testSome_15() {
  var a = [false,true,false];

  function func() {
    var c = a.some(function(x, i, o) {
		     throw "Error";
		     return x;
		   });
  }

  assertThrows("Error", func);
}

function testSome_16() {
  var a = [0,1,2];
  var b = [];
  var c = a.some(function(x, i, o) {
		   b.push(i);
		   return x;
		 });
  assertArrayEquals([0,1], b);
  assertEquals(true, c);
}

function testSome_17() {
  var a = ["",null, undefined, false];
  var c = a.some(function(x, i, o) {
		   return x;
		 });
  assertEquals(false, c);
}

function testSome_18() {
  var a = ["",null,undefined, false];
  var b = [];
  var c = a.some(function(x, i, o) {
		   return x;
		 });
  assertEquals(false, c);
}

function testSome_19() {
  var a = {
    length:1,
    0:false,
    1:true,
    some:Array.prototype.some
  };
  var b = a.some(function(x, i, o) {
		   return x;
		 });
  assertEquals(false, b);
}

function testSome_20() {
  var a = {
    length:3,
    0:false,
    1:false,
    2:true,
    some:Array.prototype.some
  };
  var b = a.some(function(x, i, o) {
		   o.length = 2;
		   return x;
		 });
  assertEquals(true, b);
}

function testSome_21() {
  var a = {
    length:2,
    0:false,
    1:false,
    2:true,
    some:Array.prototype.some
  };
  var b = a.some(function(x, i, o) {
		   return x;
		 });
  assertEquals(false, b);
}

function testSome_22() {
  var p = {
    0:true
  };
  var o = function() {
    this[1] = false;
    this.length = 2;
    this.some = Array.prototype.some;
  };
  o.prototype = p;

  var a = new o();
  var b = a.some(function(x, i, o) {
		   o.length = 2;
		   return x;
		 });
  assertEquals(true, b);
}

function testForEach_0() {
  var a = [1,2,3];
  var b = [];
  var c = a.forEach(function(x, i, obj) {
		      b.push(x*x);
		    });
  assertArrayEquals([1,2,3], a);
  assertArrayEquals([1,4,9], b);
  assertUndefined(c);
}

function testForEach_1() {
  var a = [1,,3];
  var b = [];
  var c = [];
  a.forEach(function(x, i, obj) {
	      b.push(x*x);
	      c.push(i);
	    });
  assertArrayEquals([1,9], b);
  assertArrayEquals([0,2], c);
}

function testForEach_2() {
  var a = {a:[1,2,3]};
  var b = [];
  a['a'].forEach(function(x, i, obj) {
		   if ('a' in a) {
		     delete a.a;
		   }
		   b.push(i);
		 });
  assertArrayEquals([0,1,2], b);
}

function testForEach_3() {
  var a = [1,2,3];
  var b = [];
  a.forEach(function(x, i, obj) {
	      a.push(x);
	      b.push(i);
	    });
  assertArrayEquals([0,1,2], b);
  assertArrayEquals([1,2,3,1,2,3], a);
}

function testForEach_4() {
  var a = [1,2,3];
  var b = [];
  a.forEach(function(x, i, obj) {
	      b.push(a[i]);
	      if (i <  (obj.length -1)) {
		obj[i+1] = 1;
	      }
	    });
  assertArrayEquals([1,1,1], b);
}

function testForEach_5() {
  var a = new Array(Math.pow(2,32) -1);
  a[a.length - 1] = 1;
  var i = 0;
  a.forEach(function() {
	      i++;
	    });
  assertEquals(1, i);
}

function testForEach_6() {
  function func() {
    var a = [1,2,3];
    a.forEach();
  }
  assertThrows(TypeError, func);
}

function testForEach_7() {
  var a = [1,2,3];
  var count = 0;
  a.forEach(function(x, i, obj) {
	      assertEquals(count, i);
	      assertEquals(count+1, x);
	      assertEquals(a, obj);
	      count ++;
	    });
}

function testForEach_8() {
  var count = 0;
  function func() {
    var a = [1,2,3];
    a.forEach(function(x, i, obj) {
		count ++;
		if (i == 1) {
		  throw TypeError();
		}
	      });
  }
  assertThrows(TypeError(), func);
  assertEquals(2, count);
}

function testForEach_9() {
  var a = [1,2,3];
  this.i = 0;
  var my_this = {
    i:0
  };
  a.forEach(function(x, i, obj) {
	      my_this.i++;
	    }, my_this);
  assertEquals(0, i);
  assertEquals(3, my_this.i);
}

function testForEach_10() {
  var a = [1,2,3];
  this.i = 0;
  var my_this = new Number(10);
  a.forEach(function(x, i, obj) {
	      assertEquals(Number, this.constructor);
	      assertEquals(10, this.valueOf());
	    }, my_this);
  assertEquals(0, this.i);
}

function testForEach_11() {
  var a = [1,2,3];
  this.i = 0;
  var my_this = undefined;
  a.forEach(function(x, i, obj) {
	      this.i++;
	    }, my_this);
  assertEquals(3, this.i);
}

function testForEach_12() {
  var a = [1,2,3];
  this.i = 0;
  var my_this = null;
  a.forEach(function(x, i, obj) {
	      this.i++;
	    }, my_this);
  assertEquals(3, this.i);
}

function testForEach_13() {
  var a = [1,2,3];
  var my_this = new Number(10);
  a.forEach(function(x, i, obj) {
	      assertEquals(Number, this.constructor);
	      assertEquals(10, this.valueOf());
	    }, my_this);
}

function testForEach_14() {
  var a = [1,2,3];
  var my_this = true;
  a.forEach(function(x, i, obj) {
	      assertEquals(Boolean, this.constructor);
	      assertEquals(true, this.valueOf());
	    }, my_this);
}

function testForEach_15() {
  var a = [1,2,3];
  var my_this = 3;
  a.forEach(function(x, i, obj) {
	      assertEquals(Number, this.constructor);
	      assertEquals(3, this.valueOf());
	    }, my_this);
}

function testForEach_16() {
  var a = [1,2,3];
  var my_this = "abc";
  a.forEach(function(x, i, obj) {
	      assertEquals(String, this.constructor);
	      assertEquals("abc", this.valueOf());
	    }, my_this);
}

function testForEach_17() {
  var a = {
    length:3,
    0:1,
    forEach:Array.prototype.forEach
  };
  var count = 0;
  a.forEach(
    function(x,i,o) {
      count ++;
      assertEquals(a, o);
      assertEquals(0, i);
      assertEquals(1,x);
    }
  );
  assertEquals(1, count);
}

function testForEach_18() {
  var a = {
    length:1,
    0:1,
    1:2,
    forEach:Array.prototype.forEach
  };
  var count = 0;
  a.forEach(
    function(x,i,o) {
      count ++;
      assertEquals(a, o);
      assertEquals(0, i);
      assertEquals(1,x);
    }
  );
  assertEquals(1, count);
}

function testForEach_18() {
  var p = {
    0:1
  };
  function o() {
    this[1] = 2;
    this[2] = 3;
    this.length = 3;
    this.forEach = Array.prototype.forEach;
  }
  o.prototype = p;
  var a = new o();
  var b = [];
  a.forEach(function(x) {
	     b.push(x);
	   });

  assertArrayEquals([1, 2, 3], b);
}

function testForEach_19() {
    function g(x, n) {
      if (n == 0)
          return x;
      else
          return g(x, n - 1);
    };
    var a = [];
    for (var i = 0; i < 100; ++i)
        a.push(i);

    var f = function (x) { return g(x, x); };
    a.forEach(f);
    for (var i = 0 ; i < 100; i ++)
        assertEquals(i, a[i]);
}
testForEach_19.metadata = {
  bug:"CORE-40656"
};

function testForEachString_0() {
  var a = "123";
  var count = 0;
  Array.prototype.forEach.call(a, function(x, i, o) {
				 assertEquals(a[i], x);
				 assertEquals("object", typeof o);
				 assertEquals("123", o.toString());
				 count ++;
			       });
  assertEquals(3, count);
}

function testMap_0() {
  var a = [1,2,3];
  var b = a.map(function(x,i,o) {
		  return x*x;
		});
  assertArrayEquals([1,4,9], b);
}

function testMap_2() {
  var a = [1,2,3];
  var b = a.map(function(x,i,o) {
		  return i;
		});
  assertArrayEquals([0,1,2], b);
}

function testMap_3() {
  var a = [1,2,3];
  var b = a.map(function(x,i,o) {
		  return o;
		});
  assertArrayEquals([a,a,a], b);
}

function testMap_4() {
  var a = [1,2,3];
  function func() {
    a.map(true);
  }
  assertThrows(TypeError, func);
}

function testMap_5() {
  var a = [1,,3];
  var b = a.map(function(x,i,o) {
		  return i;
		});
  assertArrayEquals([0,,2], b);
}

function testMap_6() {
  //Properties of the returned array
  var a = [1,2,3];
  var b = a.map(function(x,i,o) {
		  return x*x;
		});
  assertDelete(b, 0);
  assertDelete(b, 1);
  assertDelete(b, 2);
}

function testMap_7() {
  //Properties of the returned array
  var a = [1,2,3];
  var b = a.map(function(x,i,o) {
		  return x*x;
		});
  assertEnum(b, 0);
  assertEnum(b, 1);
  assertEnum(b, 2);
}

function testMap_8() {
  //Properties of the returned array
  var a = [1,2,3];
  var b = a.map(function(x,i,o) {
		  return x*x;
		});
  assertReadWrite(b, 0);
  assertReadWrite(b, 1);
  assertReadWrite(b, 2);
}

function testMap_9() {
  var a = [1,2,3];
  var b = a.map(function(x,i,o) {
		  return x*x;
		});
  assertEquals("object", typeof b);
}

function testMap_10() {
  var a = [1,2,3];
  this.i = 0;
  var b = a.map(function(x,i,o) {
		  this.i++;
		  return x*x;
		});
  assertEquals(3, this.i);
}

function testMap_11() {
  var a = [1,2,3];
  this.i = 0;
  var b = a.map(function(x,i,o) {
		  this.i++;
		  return x*x;
		}, undefined);
  assertEquals(3, this.i);
}

function testMap_12() {
  var a = [1,2,3];
  var b = a.map(function(x,i,o) {
		  assertEquals(Number, this.constructor);
		  assertEquals(10, this.valueOf());
		}, 10);
  assertArrayEquals([undefined, undefined, undefined], b);
}

function testMap_12b() {
  var a = [1,2,3];
  this.i = 0;
  var b = a.map(function(x,i,o) {
		  this.i++;
		  return x*x;
		}, null);
  assertEquals(3, this.i);
}

function testMap_13() {
  var a = [1,2,3];
  var b = a.map(function(x,i,o) {
		  assertEquals(String, this.constructor);
		  assertEquals("abc", this.valueOf());
		}, "abc");
  assertArrayEquals([undefined, undefined, undefined], b);
}

function testMap_14() {
  var a = [1,2,3];
  var b = a.map(function(x,i,o) {
		  assertEquals(Boolean, this.constructor);
		  assertEquals(true, this.valueOf());
		}, true);
  assertArrayEquals([undefined, undefined, undefined], b);
}

function testMap_15() {
  var a = [1,2,3];
  var my_this = {
    i:0
  };
  var b = a.map(function(x,i,o) {
		  assertEquals(Boolean, this.constructor);
		  assertEquals(true, this.valueOf());
		}, true);
  assertArrayEquals([undefined, undefined, undefined], b);
}

function testMap_16() {
  var a = [1,2,3];

  var my_this = function a() {
    writeln(this.i);
    if (this.i == 0) {
      writeln(this.i);
      this.i++;
      a.call(this);
    }
    this.i++;
  };
  my_this.i = 0 ;

  a.map(function() {this.call(this);}, my_this);

  assertEquals(5, my_this.i);
}

function testMap_17() {
  var a = {
    length:1,
    0:4,
    1:5
  };
  var b = Array.prototype.map.call(a, function(x, i, o){
				     assertEquals(a, o);
				     return x*x;
				   });
  assertArrayEquals([16], b);
}

function testMap_18() {
    var a = {
    length:3,
    0:4,
    1:5
  };
  var b = Array.prototype.map.call(a, function(x, i, o){
				     assertEquals(a, o);
				     return x*x;
				   });
  var expected = new Array(3);
  expected[0] = 16;
  expected[1] = 25;
  assertArrayEquals(expected, b);
}

function testMap_19() {
  var p = {
    0:1
  };
  function o() {
    this[1] = 2;
    this[2] = 3;
    this.length = 3;
    this.map = Array.prototype.map;
  }
  o.prototype = p;
  var a = new o();

  var b = a.map(function(x) {
		  return x*x;
		});
  assertArrayEquals([1, 4, 9], b);
}

function testMap_20() {
  function func() {
    return arguments[0];
  }
  assertArrayEquals([1,2,3], [1,2,3].map(func));
}

function testMap_21() {
    eval("");
    var a = [1];
    var my_this = function a() {
      assertEquals("function", typeof(a.call));
    };
    a.map(function() {this.call(this);}, my_this);
}
testMap_21.metadata = {
  bug:"CARAKAN-701"
};

function testMapString_0() {
  var a = "abc";
  var b = Array.prototype.map.call(a, function(x, i, o) {
				     return x+i;
				   });
  assertArrayEquals(["a0", "b1", "c2"], b);
}

function testMapString_1() {
  var a = "abc";
  Array.prototype.map.call(a, function(x, i, o) {
			     assertEquals("object", typeof o);
			     assertEquals(String, o.constructor);
			     assertEquals("abc", o.valueOf());
			   });
}

function testFilter_0() {
  var a = [true, true, false];
  var b = a.filter(function(x, i, o) {
		     return x;
		   });
  assertArrayEquals([true, true], b);
}

function testFilter_1() {
  //missing values do not appear in the output
  var a = [true, true,,false];
  var b = a.filter(function(x, i, o) {
		     return x;
		   });
  assertArrayEquals([true, true], b);
}

function testFilter_2() {
  var a = [true, true,,false];
  var b = a.filter(function(x, i, o) {
		     return x;
		   });
  assertArrayEquals([true, true], b);
}

function testFilter_2() {
  var a = [true, true, false];
  function func() {
    a.filter(true);
  }
  assertThrows(TypeError(), func);
}

function testFilter_3() {
  var a = [1, 2, 3];
  var b = a.filter(function(x,i,o) {
		     return x > 1;
		   });
  assertArrayEquals([2,3], b);
}

function testFilter_4() {
  var a = [1, 2, 3];
  var b = a.filter(function(x,i,o) {
		     return i > 1;
		   });
  assertArrayEquals([3], b);
}

function testFilter_5() {
  var a = [1, 2, 3];
  var b = a.filter(function(x,i,o) {
		     return i;
		   });
  assertArrayEquals([2,3], b);
}

function testFilter_6() {
  var a = ["a", undefined, null, "", 0, 1];
  var b = a.filter(function(x,i,o) {
		     return x;
		   });
  assertArrayEquals(["a",1], b);
}

function testFilter_7() {
  var a = ["a"];
  var b = a.filter(function(x,i,o) {
		     return true;
		   });
  assertDelete(b, 0);
}

function testFilter_8() {
  var a = ["a"];
  var b = a.filter(function(x,i,o) {
		     return true;
		   });
  assertEnum(b, 0);
}

function testFilter_9() {
  var a = ["a"];
  var b = a.filter(function(x,i,o) {
		     return true;
		   });
  assertReadWrite(b, 0);
}

function testFilter_10() {
  var a = [1,2,3];
  this.i = 0;
  var my_this = {
    i:0
  };
  a.filter(function() {
	     this.i++;
	   }, my_this);
  assertEquals(0, this.i);
  assertEquals(3, my_this.i);
}

function testFilter_11() {
  var a = [1,2,3];

  a.filter(function() {
	     assertEquals(String, this.constructor);
	     assertEquals("abc", this.toString());
	   }, "abc");
}

function testFilter_12() {
  var a = [1,2,3];

  a.filter(function() {
	     assertEquals(Number, this.constructor);
	     assertEquals(1, this.valueOf());
	   }, 1);
}

function testFilter_13() {
  var a = [1,2,3];

  a.filter(function() {
	     assertEquals(Boolean, this.constructor);
	     assertEquals(true, this.valueOf());
	   }, true);
}

function testFilter_14() {
  var a = [1,2,3];
  this.i = 0;

  a.filter(function() {
	     this.i++;
	   }, null);

  assertEquals(3, this.i);
}

function testFilter_15() {
  var a = {
    length:1,
    0:true,
    1:true,
    filter:Array.prototype.filter
  };

  var b = a.filter(function(x) {return x;});
  assertArrayEquals([true], b);
}

function testFilter_16() {
  var a = {
    length:3,
    0:true,
    1:true,
    filter:Array.prototype.filter
  };

  var b = a.filter(function(x) {return x;});
  assertArrayEquals([true, true], b);
}

function testFilter_17() {
  var p = {
    0:1
  };
  function o() {
    this[1] = 2;
    this[2] = 3;
    this.length = 3;
    this.filter = Array.prototype.filter;
  }
  o.prototype = p;
  var a = new o();

  var b = a.filter(function(x) {
		     return x < 1;
		   });
  assertArrayEquals([1], b);
}

function testFilter_17() {
  var p = {
    0:1
  };
  function o() {
    this[1] = 2;
    this[2] = 3;
    this.length = 3;
    this.filter = Array.prototype.filter;
  }
  o.prototype = p;
  var a = new o();

  var b = a.filter(function(x) {
		     return x <= 1;
		   });
  assertArrayEquals([1], b);
}

function testFilter_18() {
  function filt() {
    return arguments[0] > 1;
  }
  assertArrayEquals([2,3], [1,2,3].filter(filt));
}
testFilter_18.metadata = {
  bug:"CARAKAN-520"
};

function testFilterString_0() {
  var a = "abc";
  var b = Array.prototype.filter.call(a,
				      function(x, i, o){
					assertEquals(String,
						     o.constructor);
					assertEquals("abc", o.valueOf());
					return x > "a";}
				     );

  assertArrayEquals(["b", "c"], b);
}


function testReduce_0() {
  var a = [1,2];
  a.reduce(function(prev, cur, i, obj) {
	     assertEquals(1, prev);
	     assertEquals(2, cur);
	   });
}

function testReduce_1() {
  var a = [1,2];
  a.reduce(function(prev, cur, i, obj) {
	     if (i==0) {
	       assertEquals(0, prev);
	       assertEquals(1, cur);
	     }
	   }, 0);
}

function testReduce_2() {
  //Throw if len(a) == 0 and initalValue == 0
  var a = [];
  function func() {
     a.reduce(function(prev, cur, i, obj) {});
  }

  assertThrows(TypeError(), func);
}
testReduce_2.metadata = {
  bug:"CARAKAN-343"
};

function testReduce_3() {
  var a = [1,2,3];
  function func() {
    a.reduce(true);
  }

  assertThrows(TypeError(), func);
}

function testReduce_4() {
  var a = [1,2,3];
  var b = a.reduce(function(prev, cur, i, o) {
		     return prev+cur;
		   }, 0);
  assertEquals(6, b);
}

function testReduce_5() {
  var a = [1,2,3];
  var b = a.reduce(function(prev, cur, i, o) {
		     return prev+cur;
		   });
  assertEquals(6, b);
}

function testReduce_6() {
  var a = [1,2,3];
  var b = a.reduce(function(prev, cur, i, o) {
		     return prev+cur;
		   }, 4);

  assertEquals(10, b);
}

function testReduce_7() {
  var a = [1,2,3];
  var b = a.reduce(function(prev, cur, i, o) {
		     assertEquals(prev, cur);
		     return i+2;
		   }, 1);

  assertEquals(4, b);
}

function testReduce_8() {
  var a = [];
  this.i = 0;
  var b = a.reduce(function(prev, cur, i, o){
		     this.i++;
		   }, 1);
  assertEquals(1, b);
  assertEquals(0, this.i);
}

function testReduce_9() {
  var a = [1,2,"a"];
  var b = a.reduce(function(prev, cur, i, o) {
		     return prev + cur;
		   });
  assertEquals("3a", b);
}

function testReduce_10() {
  var a = [1,,"a"];
  var b = a.reduce(function(prev, cur, i, o) {
		     return prev + cur;
		   });
  assertEquals("1a", b);
}

function testReduce_11() {
  var a = [,,,1,,"a"];
  var b = a.reduce(function(prev, cur, i, o) {
		     return prev + cur;
		   });
  assertEquals("1a", b);
}

function testReduce_12() {
  var a = [1,,"a"];
  var count = 0;
  var b = a.reduce(function(prev, cur, i, o) {
		     count++;
		     o.push(cur);
		     return prev + cur;
		   }, 0);
  assertEquals("1a", b);
  assertArrayEquals([1,,"a", 1, "a"], a);
  assertEquals(2, count);
}

function testReduce_13() {
  var a = [1,,"a"];
  var b = a.reduce(function(prev, cur, i, o) {
		     a[2] = 1;
		     return prev + cur;
		   }, 0);
  assertEquals(2, b);
}

function testReduce_15() {
  var a = {
    length:2,
    0:1,
    1:2,
    2:3,
    reduce:Array.prototype.reduce
  };
  var count = 0;
  var b = a.reduce(function(prev, cur, i, o) {
		     assertEquals(a, o);
		     assertEquals(count, i);
		     count ++;
		     return prev + cur;
		   }, 0);
  assertEquals(3, b);
}

function testReduce_16() {

  function p() {
    this[2] = 3;
  }

  function o() {
    this.length = 3;
    this[0] = 1;
    this[1] = 2;
    this.reduce = Array.prototype.reduce;
  };
  o.prototype = new p();
  var a = new o();

  var count = 0;
  var b = a.reduce(function(prev, cur, i, o) {
		     assertEquals(a, o);
		     assertEquals(count, i);
		     count++;
		     return prev + cur;
		   }, 0);
  assertEquals(6, b);
}

function testReduce_17() {
  var a = [1,2,3];
  var my_this = {
    i:0
  };
  this.i = 0;
  var b = a.reduce(function(prev, cur, i, o) {
		     this.i++;
		     return prev + cur;
		   }, 0, my_this);
  assertEquals(0, my_this.i);
  assertEquals(3, this.i);
  assertEquals(6, b);
}

function testReduce_18() {
  var a = [1,2,3];
  var b = [];
  a.reduce(function(prev, cur, i) {
	     b.push(i);
	   }, 0);
  assertArrayEquals([0,1,2], b);
}

function testReduce_19() {
  var a = [1,2,3];
  var b = [];
  a.reduce(function(prev, cur, i) {
	     b.push(i);
	   });
  assertArrayEquals([1,2], b);
}

function testReduce_20() {
  function func() {
    return arguments[0] + arguments[1];
  }
  assertEquals("abc", ["a","b","c"].reduce(func));
}

function testReduce_21() {
  //Check we use the right this object in reduce
  count = 0;
  var o = {
    count:0
  };
  [1,2,3,4,5].reduce(function(prev){
		       this.count++;
		       return prev;
		     }, o);
  assertEquals(5, count);
  assertEquals(0, o.count);
}


function testReduceRight_0() {
  var a = ["a", 2, 1];
  var b = [];
  var c = a.reduceRight(function(prev, cur, i, o) {
			  b.push(i);
			  assertEquals(a, o);
			  return prev + cur;
			}, 0);
  assertEquals("3a", c);
  assertArrayEquals([2,1,0], b);
}

function testReduceRight_1() {
  function func() {
    [].reduceRight(function() {});
  }
  assertThrows(TypeError(), func);
}

function testReduceRight_2() {
  function func() {
    [1,2,3].reduceRight(true, 0);
  }
  assertThrows(TypeError(), func);
}

function testReduceRight_3() {
  var a = [1, 2];
  var c = a.reduceRight(function(prev, cur, i, o) {
			  assertEquals(2, prev);
			  assertEquals(1, cur);
			});
}

function testReduceRight_4() {
  var a = [1, 2];
  var c = a.reduceRight(function(prev, cur, i, o) {
			  assertEquals(2, prev);
			  assertEquals(1, cur);
			});
}

function testReduceRight_5() {
  var a = [1, 2, 3];
  this.i = 0;
  var c = a.reduceRight(function(prev, cur, i, o) {
			  this.i++;
			});

  assertEquals(2, this.i);
}

function testReduceRight_6() {
  var a = [1, 2];
  var b = a.reduceRight(function(prev, cur, i, o) {
			  return prev+cur;
			}, 3);
  assertEquals(6, b);
}

function testReduceRight_7() {
  var a = ["a"];
  var count = 0;
  var b = a.reduceRight(function(prev, cur, i, o) {
			  count++;
			  return prev+cur;
			});
  assertEquals(0, count);
  assertEquals("a", b);
}

function testReduceRight_8() {
  var a = ["a", "b", "c"];
  var count = 0;
  var b = a.reduceRight(function(prev, cur, i, o) {
			  count++;
			  a.push(cur);
			  return prev+cur;
			}, "");
  assertEquals(3, count);
  assertEquals("cba", b);
  assertArrayEquals(["a", "b", "c", "c", "b", "a"], a);
}

function testReduceRight_9() {
  var a = ["a", "b", "c"];
  var count = 0;
  var b = a.reduceRight(function(prev, cur, i, o) {
			  count++;
			  delete a[0];
			  return prev+cur;
			}, "");
  assertEquals(2, count);
  assertEquals("cb", b);
  assertArrayEquals([, "b", "c"], a);
}


function testReduceRight_10() {
  var a = {
    "length":2,
    "0":1,
    "1":"a",
    "2":3
  };
  var b = [];
  var c = Array.prototype.reduceRight.call(a,
	    function(prev, cur, i, o) {
	      assertEquals(a, o);
	      b.push(i);
	      return prev + cur;
	    }, "");
  assertEquals(c, "a1");
  assertArrayEquals([1,0], b);
}

function testReduceRight_11() {
  var a = {
    "length":16,
    "0":1,
    "1":"a",
    "2":3
  };
  var b = [];
  var c = Array.prototype.reduceRight.call(a,
	    function(prev, cur, i, o) {
	      assertEquals(a, o);
	      b.push(i);
	      return prev + cur;
	    }, "");
  assertEquals(c, "3a1");
  assertArrayEquals([2,1,0], b);
}

function testReduceRight_12() {
  var a = {
    "length":16,
    "0":1,
    "1":"a",
    "2":3
  };
  var b = [];
  var c = Array.prototype.reduceRight.call(a,
	    function(prev, cur, i, o) {
	      assertEquals(a, o);
	      b.push(i);
	      return prev + cur;
	    }, "");
  assertEquals("3a1", c);
  assertArrayEquals([2,1,0], b);
}

function testReduceRight_13() {

  var p = {
    "0":1
  };

  var o = function() {
    this.length = 3;
    this[1] = "a";
    this[2] = 3;
  };
  o.prototype = p;

  var a = new o();

  var b = [];
  var c = Array.prototype.reduceRight.call(a,
	    function(prev, cur, i, o) {
	      assertEquals(a, o);
	      b.push(i);
	      return prev + cur;
	    }, "");
  assertEquals(c, "3a1");
  assertArrayEquals([2,1,0], b);
}

function testReduceRight_14() {
  function func() {
    return arguments[0] + arguments[1];
  }
  assertEquals("cba", ["a","b","c"].reduceRight(func));
}

function testReduceRight_15() {
  var largeSparseArray = [0,1,2,3,4,5];
  largeSparseArray[299] = 299;
  var count = 0;
  var lastIndex = -1;
  function decreaseLength(a, b, array) {
    count++;
    array.length--;
  }
  var currentFunc = decreaseLength;

  function f(prev, elem, index, array) {
    return currentFunc.call(this, elem, index, array);
  }

  largeSparseArray.reduceRight(f, 0);
  assertEquals(7, count);
}
testReduceRight_15.metadata = {
  bug:"CARAKAN-693"
};

function testReduceRight_16() {
  count = 0;
  var o = {
    count:0
  };
  [1,2,3,4,5].reduceRight(function(prev){
			    this.count++;
			    return prev;
			  }, o);
  assertEquals(5, count);
  assertEquals(0, o.count);
}

function testIsArray_0() {
  assertTrue(Array.isArray([]));
}

function testIsArray_1() {
  assertTrue(Array.isArray(["a", 2, undefined]));
}

function testIsArray_2() {
  assertTrue(Array.isArray(["a", , undefined]));
}

function testIsArray_3() {
  assertTrue(Array.isArray(new Array(3)));
}

function testIsArray_4() {
  assertFalse(Array.isArray(undefined));
}

function testIsArray_5() {
  assertFalse(Array.isArray());
}

function testIsArray_6() {
  assertFalse(Array.isArray(null));
}

function testIsArray_7() {
  assertFalse(Array.isArray("abc"));
}

function testIsArray_8() {
  assertFalse(Array.isArray(/abc/));
}

function testIsArray_9() {
  assertFalse(Array.isArray(0));
}

function testIsArray_10() {
  assertFalse(Array.isArray({length:1, 0:1}));
}

function testIsArray_11() {
  var a = {
    0:1,
    length:1
  };
  a.prototype = new Array();
  assertFalse(Array.isArray(a));
}

function testPropertyRegression_0() {
  function f(i) {
    var a = [1, 2, 3];
    return a[i || 0];
  }
  assertEquals(2, f(1));
}
testPropertyRegression_0.metadata = {
  bug:"CARAKAN-529"
};

function testArrayConstructorLength_0(){
  assertEquals( 1, Array.length );
}
testArrayConstructorLength_0.metadata={
  bug:'CORE-16214'
};

function testJITOutOfRangeRead_0()
{
  var a1 = [1,2],
      a2 = a1.slice(0);

  a2.shift();

  /* This loop serves two purposes:
     1) JIT compile the function, and
     2) allocate some memory, to trigger more interesting out-of-bounds
        read effects. */
  for (var i = 0; i < 1000; ++i) "a" + String(i);

  assertEquals(2, a2[0]);
  assertUndefined(a2[1]);
  assertUndefined(a2[2]);
  assertUndefined(a2[3]);
}
testJITOutOfRangeRead_0.metadata = {
  bug: "CORE-35314"
};
