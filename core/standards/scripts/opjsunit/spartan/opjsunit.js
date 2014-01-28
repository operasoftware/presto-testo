function OpJsUnitAssertionError(message) {
  this.name = "OpJSUnitAssertionError";
  this.message = message;
}

OpJsUnitAssertionError.prototype.toString = function () {
  return "Failure: " + this.message + " ";
};

function opjsunitFail(message) {
    throw new OpJsUnitAssertionError(message);
}

function msg(generic_message, specific_message) {
  var rv = generic_message;
  if (specific_message) {
    rv += " message: " + specific_message;
  }
  return rv;
}

var getPropertyDescriptor = function(Object) {
  return function getPropertyDescriptor(o, p) {
    var desc;
    while (o && (desc = Object.getOwnPropertyDescriptor(o, p)) === undefined) {
      o = Object.getPrototypeOf(o);
    }
    
    if (o && desc) return desc;
    else return undefined;
  };
}(Object);

function assertTrue(value, message) {
    if (value !== true)
      opjsunitFail(msg("assertTrue, got " + value, message));
}

function assertFalse(value, message) {
  if (value !== false)
    opjsunitFail(msg("assertFalse, got " + value, message));
}

function assertEquals(expected, actual, message) {
    if (expected !== actual) {
      if (typeof expected == "number" && isNaN(expected) &&
	  typeof actual == "number" && isNaN(actual)) {
	    //Both are NaN which is OK
      } else {
	opjsunitFail(msg("assertEquals, expected: " + expected + " got: " + actual, message));
      }
    } else if (expected === 0) {
      //Distinguish -0 from 0
      if (Math.atan2(expected, actual) > 0) {
        opjsunitFail(msg("assertEquals, expected: 0, got: -0", message));
      }
	else if (Math.atan2(actual, expected) > 0) {
	  opjsunitFail(msg("assertEquals, expected: -0, got: 0", message));
      }
    }
}

function assertApproxEquals(expected, value, eps, message) {
  if (eps === undefined) {
    eps = Math.pow(10, -7);
  }
  if (Math.abs(expected-value) > eps) {
    opjsunitFail(msg("assertApproxEquals, " + value + " is not within " + eps + "of " + expected, message));
  }
}

function assertArrayEquals(expected, actual) {
  if (expected.length != actual.length) {
    opjsunitFail("assertArrayEquals, lengths are different, expected length: " + expected.length + " got length: " + actual.length);
  }
  for (var i=0; i<expected.length; i++) {
    assertEquals(i in expected, i in actual);
    try {
      assertEquals(expected[i], actual[i]);
   } catch(e) {
      opjsunitFail("assertArrayEquals, element " + i + " is different, expected: " + expected[i] + " got: " + actual[i]);
    }
  }
}

function assertObjectEquals(expected, actual, message) {
  for (var p in expected) {
    if (!(p in actual)) {
      opjsunitFail(msg("assertObjectEquals: property " + p + "in expected not in actual", message));
    }
    try {
      assertEquals(expected[p], actual[p]);
   } catch(e) {
     opjsunitFail(msg("assertObjectEquals, property " + p + " is different, expected: " + expected[p] + " (type " + typeof expected[p] + ") got: " + actual[p] + " (type " + typeof actual[p] + ")", message));
    }
  }

  for (p in expected) {
    if (!(p in actual)) {
      opjsunitFail(msg("assertObjectEquals: property " + p + "in actual not in expected", message));
    }
  }
}

function assertNaN(value, message) {
  /*
   *Test for the value NaN; throws for non-numbers
   */
  if (!(typeof value == "number" && isNaN(value)))
    opjsunitFail(msg("Failure: assertNaN, got: " + value, message));
}

function assertDefined(value, message) {
  if (value === undefined)
    opjsunitFail(msg("Failure: assertDefined", message));
}

function assertUndefined(value, message) {
  if (value !== undefined)
    opjsunitFail(msg("Failure: assertUndefined, got: " + value + " expected undefined", message));
}

function assertNull(value, message) {
  if (value !== null) {
    opjsunitFail(msg("Failure: assertNull, got: " + value + " expected null", message));
  }
}

function assertDoesNotThrow(callable, message) {
  var args = Array.prototype.slice.call(arguments, 2);
  try {
    callable.apply(this, args);
  } catch(e) {
    throw opjsunitFail(msg("Failure: assertDoesNotThrow, exception: \"" +
		 e + "\" thrown", message));
  }
}

function assertThrows(exception, callable) {
  var args = Array.prototype.slice.call(arguments, 2);
  try {
    callable.apply(this, args);
    opjsunitFail("assertThrows, no exception thrown, expected: " +
		 exception);
  } catch(e) {
    if (e instanceof Object && "name" in e && e.name == exception.name ||
	e == exception) {
      //pass
    } else if (e instanceof OpJsUnitAssertionError) {
      throw e;
    } else {
      opjsunitFail("assertThrows, got exception: " + e
		   + " expected: " + exception);
    }
  }
}

function assertUnreached(message) {
  opjsunitFail(msg("Failure: reached unreachable point", message));
}

function assertEnum(object, property_name, message) {
  var desc = getPropertyDescriptor(object, property_name);
  if (desc && !desc.enumerable) {
    opjsunitFail(msg("Failure: assertEnum, property:" + property_name
		     + " is not enumerable per descriptor on object: " + object, message));
  }

  var found = false;
  for (var x in object) {
    if (x == property_name) {
      found = true;
      break;
    }
  }
  if (!found) {
    opjsunitFail(msg("Failure: assertEnum, property: " + property_name
		 + " not enumerated on object: " + object, message));
  }
}

function assertDontEnum(object, property_name, message) {
  var desc = getPropertyDescriptor(object, property_name);
  if (desc && desc.enumerable) {
    opjsunitFail(msg("Failure: assertDontEnum, property:" + property_name
		     + " is enumerable per descriptor on object: " + object, message));
  }

  for (var x in object) {
    if (x===property_name) {
      opjsunitFail(msg("Failure: assertDontEnum, property: " + property_name
		 + " enumerated on object: " + object, message));
    }
  }
}

var assertDelete = function(Object) {
  return function assertDelete(object, property_name, message) {
    var desc = getPropertyDescriptor(object, property_name);
    if (desc && !desc.configurable) {
      opjsunitFail(msg("Failure: assertDelete, property:" + property_name
		       + " is not configurable per descriptor on object: " + object, message));
    }
    
    var value = object[property_name];
    if (!(delete object[property_name])) {
      opjsunitFail(msg("Failure: assertDelete, property: " + property_name
		       + " cannot be deleted on object: " + object, message));
    }
    
    if (Object.getOwnPropertyDescriptor(object, property_name)) {
      opjsunitFail(msg("Failure: assertDelete, property: " + property_name
		       + " appears undeleted on object: " + object, message));
    }

    //Try to reset the value
    object[property_name] = value;
  };
}(Object);

function assertDontDelete(object, property_name, message) {
  var desc = getPropertyDescriptor(object, property_name);
  if (desc && desc.configurable) {
    opjsunitFail(msg("Failure: assertDontDelete, property:" + property_name
		     + " is configurable per descriptor on object: " + object, message));
  }

  if (delete object[property_name]) {
    opjsunitFail(msg("Failure: assertDontDelete, property: " + property_name
		 + " can be deleted on object: " + object, message));
  }

  var strict_test = function() {
    "use strict";
    var passed;
    try {
      var value = object[property_name];
      delete object[property_name];
      passed = false;
      object[property_name] = value;
    } catch (x) {
      passed = x instanceof TypeError;
    }
    return passed;
  };

  if (!strict_test()) {
    opjsunitFail(msg("Failure: assertDontDelete, property: " + property_name
		 + " did not throw in strict mode on object: " + object, message));
  }
}

function assertReadOnly(object, property_name, message) {
  var desc = getPropertyDescriptor(object, property_name);
  if (desc && desc.writable) {
    opjsunitFail(msg("Failure: assertReadOnly, property:" + property_name
		     + " is writable per descriptor on object: " + object, message));
  }

  var value = object[property_name];
  var new_value = value + "1";
  object[property_name] = new_value;
  //Need to use === value1 here because in the case of NaN we have NaN != NaN
  if (object[property_name] === new_value) {
    opjsunitFail(msg("Failure: assertReadOnly, property: " + property_name
		 + " changed value on object: " + object, message));
  }
  //Try to reset the value
  object[property_name] = value;

  var strict_test = function() {
    "use strict";
    var passed;
    try {
      var value = object[property_name];
      object[property_name] = value + "1";
      passed = false;
      object[property_name] = value;
    } catch (x) {
      passed = x instanceof TypeError;
    }
    return passed;
  };

  if (!strict_test()) {
    opjsunitFail(msg("Failure: assertReadOnly, property: " + property_name
		 + " did not throw in strict mode on object: " + object, message));
  }
}

function assertReadWrite(object, property_name, message) {
  var desc = getPropertyDescriptor(object, property_name);
  if (desc && !desc.writable) {
    opjsunitFail(msg("Failure: assertReadWrite, property:" + property_name
		     + " is not writable per descriptor on object: " + object, message));
  }

  var value = object[property_name];
  var new_value = value + "1";
  object[property_name] = new_value;
  if (object[property_name] !== new_value) {
    opjsunitFail(msg("Failure: assertReadWrite, property: " + property_name
		 + " did not change value on object: " + object, message));
  }
  //Try to reset the value
  object[property_name] = value;
}

function assertMatches(regexp, value, message) {
  if (!regexp.test(value)) {
    opjsunitFail(msg("Failure: assertMatches, value: " + value + " did not match regexp: " + regexp, message));
  }
}

function assertType(expected, value, message) {
  var typev;
  var typeofv = typeof value;
  switch (typeofv) {
    case "undefined":
    case "boolean":
    case "number":
    case "string":
    case "function":
      typev = typeofv;
      break;
    case "object":
      if (value === null) {
	typev = "null";
	break;
      }
    default:
      typev = "object";
  }
  if (expected !== typev) {
    opjsunitFail(msg("Failure: assertType, expected: " + expected + ", got: " + typev, message));
  }
}