This is Opera's Presto test repository.
After the Presto project was mostly discontinued,
Opera decided to release it publicly in its raw form
at the urging of test enthusiasts involved with the W3C.

These are not production-ready,
they need to be checked/fixed for all W3C requirements before submitting.
Many of these may already be submitted by
James Graham,
Geoffrey Sneddon,
or other Opera employees.
None of this has been recently checked in any way
other than a quick skim for confidential material.
Some of it may be irrelevant for standards
(though some stress tests may be useful, if tangential).

Test suites are gradually uploaded after they've been checked.
Specification testsuites are done,
look in core/standards for those.

Please send pull requests to delete testsuites from this repository
when they have been merged into the appropriate W3C repository,
with a note as to where you have found them to be submitted.
Typically, this will be either
https://github.com/w3c/web-platform-tests
or
https://github.com/w3c/csswg-test

Pull requests to delete test suites that should not be submitted,
with a note saying why,
are also welcome.

If you find test suites that have **not yet** been submitted to the W3C,
please send a pull request
adding a file called `not-submitted`
in the directory of the test suite.
This file should contain the date
when you checked if it had been submitted,
in YYYY-MM-DD format.
Here is [an example](https://github.com/operasoftware/presto-testo/blob/b8c877781512628e6649ca2302f10a9bfcd4af78/core/standards/css3/cursor/uri/not-submitted).

Special thanks to Florian Rivoal for the idea and enthusiasm.
