Welcome to the Opera Software JSON implementation test suite

The folders API, correctness, error_handling, integrity, integration and performance contain test files in HTML format.
Each of these folders also contains a "script" folder with corresponding .js files containing the actual test code.

USAGE:

This test suite can be used in several ways. To quickly execute all tests and see a table of results, open the
runner.htm file. From its table, you can click through to the raw JS code of the test.

To link directly to a specific test case, locate the corresponding HTML file and use its address.

To use tests in specific environments (e.g. a JS shell with no UI) write a wrapper that loads each .js file and
calls the "test()" function defined inside each. A return value that compares === to true indicates a pass. One
that compares strictly to false is a fail, any other return value or an unexpected exception is indetermined and
needs human analysis.