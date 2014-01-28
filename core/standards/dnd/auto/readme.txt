TEST SETUP: WINDOWS

	1. Install Perl
		http://activestate.com/activeperl
	2. Install Perl Win32::GuiTest module
		http://search.cpan.org/~karasik/Win32-GuiTest-1.59/lib/Win32/GuiTest.pm#INSTALLATION
	3. Save DnD.pm module from http://t/core/standards/dnd/auto/win/perl/ to disk
	4. Copy *.pl scripts and *.txt files from http://t/core/standards/dnd/auto/testruns/ to the same folder where DnD.pm was saved

	Alternatively one can use AHK setup:

	1. Install AutoHotKey utility
		http://www.autohotkey.com/download/
	2. Copy *.ahk scripts and *.txt files from http://t/core/standards/dnd/auto/win/ahk/ to disk

TEST SETUP: LINUX

	1. Install xautomation package and if needed scrot utility
		$ sudo apt-get install xautomation scrot
	2. Save DnD.pm module and *.pat files from http://t/core/standards/dnd/auto/x11/xautomation/scrot/visgrep/ to disk
	3. Copy *.pl scripts and *.txt files from http://t/core/standards/dnd/auto/testruns/ to the same folder where DnD.pm was saved

RUNNING TESTS

	Basic drag and drop tests:
		Launch Gogi build
		Run dnd.pl script (or dnd.ahk in AutoHotKey setup)

	Tests that involve dragging elements outside browser window with subsequent return and drop:
		Launch Gogi build and make sure that Gogi window does not occupy top-left corner of the screen
		Run dragaround.pl script (or dragaround.ahk in AutoHotKey setup)

	Tests where text is selected by multiclick:
		Launch Gogi build
		Run click.pl script

	Drag and drop tests that check feedback bitmap (setDragImage/addElement tests):
		Launch Gogi build
		Run dragimage.pl script
		N.B. Currently this testrun works under LXDE only
		in other enviroments feedback bitmap might not be captured properly
		or might be blurred.

	Tests that involve drop on scrollbars:
		Launch Gogi build
		Run dropby.pl script

	Tests where drag and drop is cancelled before drop:
		Launch Gogi build
		Run escape.pl script (or escape.ahk in AutoHotKey setup)

	Drag and drop tests where drag is interrupted by JS alerts:
		Launch Gogi build
		Enable User JS via opera:config#UserPrefs|UserJavaScript
		Set opera:config#UserPrefs|UserJavaScriptFile to one of the User JS files from http://t/core/standards/dnd/auto/userjs/
		Run interrupt.pl script

	Regression tests for mouse selection:
		Launch Gogi build
		Run nodrag.pl script

	Drag and drop tests that involve scrolling:
		Launch Gogi build
		Run scroll.pl script (or scroll.ahk in AutoHotKey setup)

	Tests where text is selected by mouse and dragged:
		Launch Gogi build and make sure that Gogi window does not occupy top-left corner of the screen
		Run select.pl script

	SVG drag and drop tests:
		Launch Gogi build and make sure that Gogi window does not occupy top-left corner of the screen
		Run svg.pl script

	Cross-tab drag and drop tests that involve switching tabs during drag:
		Launch Gogi build
		Make sure that only one tab is open
		Run xpage.pl script

	Cross-tab drag and drop tests that involve closing tab during drag:
		Launch Gogi build
		Make sure that only one tab is open
		Run xtab.pl script

	Cross-application drag and drop tests:
		Launch Gogi desktop and TV profiles
		Make sure that both windows fit on screen, don't overlap each other and have different vertical offsets
		Run xwindow.pl script (or xwindow.ahk in AutoHotKey setup)