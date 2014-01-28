function testReviver_0() {
  /*taken from a YUI test that regressed*/
  function isArray(a) {
    return a.constructor === Array.prototype.constructor;
  }

  JSON_STRING = JSON_STRING = '[\
    "JSON Test Pattern pass1",\
    {"object with 1 member":["array with 1 element"]},\
    {},\
    [],\
    -42,\
    true,\
    false,\
    null,\
    {\
        "integer": 1234567890,\
        "real": -9876.543210,\
        "e": 0.123456789e-12,\
        "E": 1.234567890E+34,\
        "": 23456789012E66,\
        "zero": 0,\
        "one": 1,\
        "space": " ",\
        "quote": "\\"",\
        "backslash": "\\\\",\
        "controls": "\\b\\f\\n\\r\\t",\
        "slash": "/ & \\/",\
        "alpha": "abcdefghijklmnopqrstuvwxyz",\
        "ALPHA": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",\
        "digit": "0123456789",\
        "0123456789": "digit",\
        "special": "`1~!@#$%^&*()_+-={\':[,]}|;.</>?",\
        "hex": "\\u0123\\u4567\\u89AB\\uCDEF\\uabcd\\uef4A",\
        "true": true,\
        "false": false,\
        "null": null,\
        "array":[ ],\
        "object":{ },\
        "address": "50 St. James Street",\
        "url": "http://www.JSON.org/",\
        "comment": "// /* <!-- --",\
        "# -- --> */": " ",\
        " s p a c e d " :[1,2 , 3\
\
,\
\
4 , 5 , 6 ,7 ],"compact":[1,2,3,4,5,6,7],\
        "jsontext": "{\\\"object with 1 member\\\":[\\\"array with 1 element\\\"]}",\
        "quotes": "&#34; \\u0022 %22 0x22 034 &#x22;",\
        "\\/\\\\\\"\\uCAFE\\uBABE\\uAB98\\uFCDE\\ubcda\\uef4A\\b\\f\\n\\r\\t`1~!@#$%^&*()_+-=[]{}|;:\',./<>?" : "A key can be any string"\
    },\
    0.5 ,98.6\
,\
99.44\
,\
\
1066,\
1e1,\
0.1e1,\
1e-1,\
1e00,\
2e+00,\
2e-00,\
"rosebud"]';

  var data = JSON.parse(JSON_STRING,
    function (k,v) {
      switch (k) {
	case "alpha" : return "LOWER CASE";
	case "ALPHA" : return "upper case";
	case "true" :
	case "false" :
	case "null" : return undefined;
      }
      if (typeof v === 'number') {
	return -(Math.abs(v|0));
      }

      if (v !== null && isArray(v)) {
	v[99] = "NEW ITEM";
      }
      return v;
    });


  assertEquals("LOWER CASE", data[8].alpha);
  assertEquals("upper case", data[8].ALPHA);
  assertUndefined(data[8]["true"]);
  assertUndefined(data[8]["false"]);
  assertUndefined(data[8]["null"]);
  assertEquals(-42, data[4]);
  assertEquals(-1234567890, data[8].integer);
  assertEquals(-9876, data[8].real);
  assertEquals(-1, data[8].one);
  assertEquals(-3, data[8][" s p a c e d "][2]);
}
testReviver_0.metadata = {
  bug:"CARAKAN-890"
};

function testParse_0() {
    var a='a';
      for(z=0;z<16;z++){
	a+=a;
      }

    assertEquals(65536, JSON.parse('"'+a+'"').length);
}
testParse_0.metadata = {
  bug:"CARAKAN-888"
};

function testParse_1() {
    var str = '{"prop": "as_string", "prop": false}';
    var obj = JSON.parse(str);
    assertEquals(obj.prop, false);
}
testParse_1.metadata = {
  bug:"CORE-42533"
};

function testStringify_0() {
    assertTrue(JSON.stringify(2) === "2");
}
testStringify_0.metadata = {
  bug: "CORE-39722"
};

function testStringify_1() {
    var a = '' + parseInt("4344324234399342");
    var b = JSON.stringify(4344324234399342);
    assertEquals(a, b);
}
testStringify_1.metadata = {
  bug: "CORE-45295"
};

function testStringify_2() {
    assertTrue(JSON.stringify() === undefined);
}
testStringify_2.metadata = {
  bug: "CORE-48161"
};
