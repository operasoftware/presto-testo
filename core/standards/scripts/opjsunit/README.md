# opjsunit

A JS testsuite designed for JITing JS VMs, targetting ES5.

## Tests

Tests reside in the `tests` directory, in files beginning with
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
testing spec behaviour (`_spec.js`), de-facto required behaviour for 
web compat (`_required.js`), and Carakan-specific behaviours
(`_specific.js`), though in practice this separation hasn't been
entirely followed.

The tests are designed so that they can be run multiple times in a
loop so that JIT behaviour can be tested (of course, as engine
optimizations improve an ever-increasing number of tests becoming
little more than `assert_true(true)`!).

## Adding tests

Each file contains multiple tests, broadly arranged by the
functionality they are testing. If it is obvious which file the
new test should go in, pick that file. If it is not obvious, pick
a likely looking file. If it is really not obvious, or you have
special requirements like having a lot of global variables, make 
a new file with a name like `testFoo_{spec, required, specific}.js`
(see above for the distinction).

Once you have a test file, add a test. One test === one function 
with a name like `testFoo_x` where `x` is a zero-based integer. Note
that if the function name does not start with the four characters 
"`test`" the function will not be considered a test. This setup is
generally good but makes it hard to test things that absolutely must
be run in global code (global variables are fine, however).

Inside each test function you can use any of the large number of 
`assert*` functions defined in `harness/opjsunit.js` to enforce 
the requirements of the test. For example a simple equality check
should be written `assertEquals(expected, actual)`. Try to use 
the most specific assertion you can find for what you want, since 
this will help readability.

Once you have written your test, you need to make sure it works (or, 
typically, fails) in the way you expect. This means getting a copy 
of jsshell and running the harness.

> *[The below is probably out of date]*

> Sadly it is not quite trivial 
> to get jsshell at the moment. You need the source tree and to build
> in modules/ecmascript/carakan/standalone Then assuming you are in 
> this directory, you can run opjsunit like:

> `python harness/opjsunit.py -s /path/to/jsshell -e carakan-nc path/to/test/file`

> If you leave out path/to/test/file it will run all tests. If you happen 
> to have other javascript shells around (e.g. spidermonkey, V8) you can
> also run your test in those for comparison.

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
