# opjsunit

A JS testsuite designed for JITing JS VMs, targetting ES5.

## Tests

Tests reside in the `test` directory, in files beginning with
`test` and ending in `.js`. To find tests within a test file, a
snippet such as the following can be used:

```js
var tests = [];
var global = Function('return this')();
for (var x in global) {
  if (typeof global[x] == 'function' && x.substring(0, 4) == 'test')
    tests.push(global[x]);
}
```
In theory, tests are split up into files based upon whether they are
testing spec behaviour (`_spec.js`), de-facto required behaviour
(`_required.js`), and Carakan-specific behaviours (`_specified.js`),
though in practice this separation hasn't been entirely followed.

The tests are designed so that they can be run multiple times in a
loop so that JIT behaviour can be tested (of course, as engine
optimizations improve an ever-increasing number of tests becoming
little more than `assert_true(true)`!).

## Running tests

There are two runners provided: a console based one (in
`harness/opjsunit.py`) and a browser-based one (in `index.html`).

The console based one includes support for tracking results (in the
`fail*` and `pass*` files in `tests`). It is to be expected that these
are massively out of date! There is rough documentation available
through `--help`. `harness/jsshells.py` contains definitions of how to
call the various supported JS shells, if support needs to be added for
further shells.

The browser based ones are generated from the `harness/makehtml.py`
script, which updates `tests.js` and the `spartan` directory. It is,
however, currently dependant upon the not-publicly-available Carakan
shell, though should be trivially modifiable to work with others. This
build step duplicates all the tests from `tests` into corresponding
directories within `spartan`.

If one wishes to setup the environment to run the tests manually, one
should run `harness/utils.js`, then `harness/opjsunit.js`, the test
file, and then the call to the test function (in a loop to test JIT
behaviour, if desired).

## Assertions

Assertions are defined in `harness/opjsunit.js`:

```js
function assertTrue(value, message)
function assertFalse(value, message)
function assertEquals(expected, actual, message)
function assertApproxEquals(expected, value, eps, message)
function assertArrayEquals(expected, actual)
function assertObjectEquals(expected, actual, message)
function assertNaN(value, message)
function assertDefined(value, message)
function assertUndefined(value, message)
function assertNull(value, message)
function assertDoesNotThrow(callable, message)
function assertThrows(exception, callable)
function assertUnreached(message)
function assertEnum(object, property_name, message)
function assertDontEnum(object, property_name, message)
function assertDelete(object, property_name, message)
function assertDontDelete(object, property_name, message)
function assertReadOnly(object, property_name, message)
function assertReadWrite(object, property_name, message)
function assertMatches(regexp, value, message)
function assertType(expected, value, message)
```

These mostly do what is expected; `message` is always optional (and
typically omitted).

Most notably, `assertEquals` succeeds if the internal comparison
abstract operation SameValue returns true for `expected` and `actual`
(this is identical to `Object.is` in ES6, but *not* identical to
`===`).

The exact details of other assertions can be found be examining their
implementation.
