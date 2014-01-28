#!/usr/bin/perl
package RT;
use strict;
use warnings;
use X11::GUITest;
my @winIDs;
my @reference;
my @fail;
my @skip;
my @button;
my @buttonX;
my @buttonY;
my @buttonZ;
my @knownUI;
my @mismatch;
my $rowSize;
my $colSize;
my $pass = 0;
my $pageOffset = 40;
my $normalDelay = X11::GUITest::GetEventSendDelay;
X11::GUITest::SetEventSendDelay(int($normalDelay/4));
sub GrabWindow
	{my $winName = shift;
	my ($winID) = X11::GUITest::FindWindowLike($winName) or die("Can not find LinGogi window, make sure that LinGogi is running.\n");
	X11::GUITest::RaiseWindow($winID);
	X11::GUITest::SetInputFocus($winID);
	$winName = X11::GUITest::GetWindowName($winID);
	unshift(@winIDs,$winID);
	if($winName =~ /LinGogi desktop UI/)
		{unshift(@knownUI,1);
		unshift(@buttonX,90);
		unshift(@buttonY,10);
		unshift(@buttonZ,1);
		unshift(@button,'215,215,213,255');}
	elsif($winName =~ /LinGogi phone UI/)
		{unshift(@knownUI,1);
		unshift(@buttonX,-13);
		unshift(@buttonY,22);
		unshift(@buttonZ,4);
		unshift(@button,'0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,255');}
	else
		{unshift(@knownUI,0);}
	}
sub LoadPage
	{if(Alive())
		{my $tc = shift;
		X11::GUITest::SendKeys("{F8} $tc {ENT}");
		print "Loading page ".$tc."\n";}
	}
sub SwitchWindows
	{if(Alive())
		{X11::GUITest::SendKeys("%(\t)");
		@winIDs = reverse(@winIDs);
		@button = reverse(@button);
		@buttonX = reverse(@buttonX);
		@buttonY = reverse(@buttonY);
		@buttonZ = reverse(@buttonZ);
		@knownUI = reverse(@knownUI);}
	}
sub WaitSeconds
	{select(undef, undef, undef, shift);}
sub Alive
	{if(X11::GUITest::IsWindowViewable($winIDs[0]))
		{return 1;}
	else
		{Quit("Testing interrupted since target window is no longer viewable.\n");}
	}
sub Gogi()
	{return 'LinGogi';}
sub Desktop()
	{return 'LinGogi desktop UI \(X11\/SW\)';}
sub TV()
	{return 'LinGogi desktop UI \(X11\/VEMU2D\)';}
sub SmartPhone()
	{return 'LinGogi phone UI';}
sub SaveReference
	{@reference = ();
	my $wait = 3;
	until($wait == 0)
		{$wait = $wait - 1;
		WaitSeconds(0.5);
		my $result = SaveBitmapRows();
		if($result eq 'loading' or $result eq 'invalid screenshot')
			{if($wait == 0)
				{print "Timeout.\n";
				return "timeout";}
			elsif($result eq 'loading')
				{print "Waiting for page to load.\n";}
			else
				{print "Waiting for screenshot.\n";}
			}
		else
			{return $result;}
		}
	}
sub MatchesReference
	{my $wait = 3;
	until($wait == 0)
		{$wait = $wait - 1;
		WaitSeconds(0.5);
		my $result = CompareBitmapRows();
		if($result eq 'loading' or $result eq 'invalid screenshot')
			{if($wait == 0)
				{print "Timeout.\n";
				return "timeout";}
			elsif($result eq 'loading')
				{print "Waiting for page to load.\n";}
			else
				{print "Waiting for screenshot.\n";}
			}
		else
			{if($result eq 'line mismatch')
				{print LineNumbers();}
			elsif($result eq 'width mismatch')
				{print "Bitmap width does not match reference\n";}
			elsif($result eq 'height mismatch')
				{print "Bitmap height does not match reference\n";}
			return $result;}
		}
	}
sub LineNumbers
	{my ($lines,$range) = ("The following lines mismatch: $mismatch[0]",0);
	for(my $i = 1; $i != int(@mismatch); $i++)
		{if($mismatch[$i]-$mismatch[$i-1]>1)
			{if($range == 1)
				{$lines = "$lines-$mismatch[$i-1], $mismatch[$i]";
				$range = 0;}
			else
				{$lines = "$lines, $mismatch[$i]";}
			}
		else
			{if($i == int(@mismatch)-1)
				{$lines = "$lines-$mismatch[$i]";}
			$range = 1;}
		}
	return "$lines\n";}
sub SaveBitmapRows
	{if(Alive())
		{open(TC,"xwd -nobdrs -silent -id $winIDs[0]|") or Quit("Can't load xwd data.\n");
		read(TC,my $data, 100);
		my @h = unpack('N'.100, $data);
		if(@h)
			{($rowSize,$colSize) = ($h[12],$h[5]);
			read(TC, $data, $h[0] - 100 + 12*$h[19]);
			if($knownUI[0] == 1)
				{if($buttonX[0] < 0)
					{$buttonX[0] = $rowSize+$buttonX[0]}
				read(TC, $data, $buttonY[0]*$rowSize + $buttonX[0]*$h[11]/8);
				read(TC,$data,$buttonZ[0]*$h[11]/8);
				if($button[0] ne join(',',unpack("C*",$data)))
					{print join(',',unpack("C*",$data))."\n";
					close TC;
					return 'loading';}
				read(TC,$data,($pageOffset - $buttonY[0])*$rowSize - ($buttonX[0] + $buttonZ[0])*$h[11]/8);}
			else
				{read(TC,$data,$pageOffset*$rowSize);}
			for(my $y=$pageOffset; $y < $colSize; $y++)
				{read(TC, $data, $rowSize);
				push(@reference,$data);}
			close TC;
			return 'done';}
		close TC;
		return 'invalid screenshot';}
	close TC;
	return 'no screenshot';}
sub CompareBitmapRows
	{if(Alive())
		{open(TC,"xwd -nobdrs -silent -id $winIDs[0]|") or Quit("Can't load xwd data.\n");
		read(TC,my $data, 100);
		@mismatch = ();
		my @h = unpack('N'.100, $data);
		if(@h)
			{if($rowSize != $h[12])
				{close TC;
				return 'width mismatch';}
			if($colSize != $h[5])
				{close TC;
				return 'height mismatch';}
			read(TC, $data, $h[0] - 100 + 12*$h[19]);
			if($knownUI[0] == 1)
				{if($buttonX[0] < 0)
					{$buttonX[0] = $rowSize+$buttonX[0]}
				read(TC, $data, $buttonY[0]*$rowSize + $buttonX[0]*$h[11]/8);
				read(TC,$data,$buttonZ[0]*$h[11]/8);
				if($button[0] ne join(',',unpack("C*",$data)))
					{close TC;
					return 'loading';}
				read(TC,$data,($pageOffset - $buttonY[0])*$rowSize - ($buttonX[0] + $buttonZ[0])*$h[11]/8);}
			else
				{read(TC,$data,$pageOffset*$rowSize);}
			for(my $y=$pageOffset; $y < $colSize; $y++)
				{read(TC, $data, $rowSize);
				if($data ne $reference[$y-$pageOffset])
					{push(@mismatch,$y);}
				}
			close TC;
			if(@mismatch)
				{return 'line mismatch';}
			else
				{return 'match';}
			}
		close TC;
		return 'invalid screenshot';}
	close TC;
	return 'no screenshot';}
sub Quit
	{Results();
	die(shift);}
sub Result
	{my ($result,$title) = @_;
	if($result == 1)
		{print "PASS\n";
		$pass++;}
	elsif($result == 0)
		{print "FAIL\n";
		push(@fail,$title);}
	else
		{push(@skip,$title);}
	}
sub Results
	{my $tests = $pass + int(@fail);
	print "$pass tests out of $tests passed.\n";
	if(@fail)
		{if(int(@fail) > 1)
			{print "The following ".int(@fail)." tests failed:\n";
			print join("\n",@fail);
			print "\n";}
		else
			{print "The following test failed:\n$fail[0]\n";}
		}
	if(@skip)
		{if(int(@skip) > 1)
			{print "The following ".int(@skip)." tests skipped:\n";
			print join("\n",@skip);
			print "\n";}
		else
			{print "The following test skipped:\n$skip[0]\n";}
		}
	my $testTime = time - $^T;
	if($testTime > 60)
		{my $testMin = int($testTime/60);
		my $testSec = $testTime%60;
		if($testSec == 0)
			{print "Testing took $testMin minutes."}
		else
			{print "Testing took $testMin minutes and $testSec seconds."}
		}
	else
		{print "Testing took $testTime seconds."}
	if($tests > 1)
		{my $averageTime = int($testTime*100/$tests)/100;
		print " $averageTime seconds per test.\n";}
	else
		{print "\n";}
	}
1;