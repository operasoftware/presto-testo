REFTEST SETUP: WINDOWS

	1. Install Perl
		http://activestate.com/activeperl
	2. Install Perl Win32::GuiTest module
		http://search.cpan.org/~karasik/Win32-GuiTest-1.59/lib/Win32/GuiTest.pm#INSTALLATION
	3. Save RT.pm module http://t/core/standards/mathml/reftests/perl/guitest/win32/RT.pm to disk
	4. Copy *.pl scripts and *.txt files http://t/core/standards/mathml/reftests/perl/testruns/ to the same folder where RT.pm was saved

REFTEST SETUP: LINUX

	1. Install xautomation package
		$ sudo apt-get install xautomation
	2. Check if you have import (from imagemagick package) or xwd utilities
	and depending on which one you have save one of the following RT.pm module versions to disk:
			http://t/core/standards/mathml/reftests/perl/xautomation/import/bmp/RT.pm
			http://t/core/standards/mathml/reftests/perl/xautomation/xwd/RT.pm
	3. Copy *.pl scripts and *.txt files from http://t/core/standards/mathml/reftests/perl/testruns/ to the same folder where RT.pm was saved

RUNNING TESTS

	Reftests that should match reference
		Launch Gogi build
		Run eq.pl script

	Reftests that should not match reference
		Launch Gogi build
		Run neq.pl script

	Reftests that should be blank
		Launch Gogi build
		Run blank.pl script

	Reftests that should not be blank
		Launch Gogi build
		Run notblank.pl script