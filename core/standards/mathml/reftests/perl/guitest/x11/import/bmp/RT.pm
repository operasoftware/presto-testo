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
		unshift(@button,'215,215,213');}
	elsif($winName =~ /LinGogi phone UI/)
		{unshift(@knownUI,1);
		unshift(@buttonX,-13);
		unshift(@buttonY,25);
		unshift(@buttonZ,4);
		unshift(@button,'0,0,0,0,0,0,0,0,0,0,0,0');}
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
		my $result = SaveBitmapRows();
		if($result ne "loading")
			{return $result;}
		else
			{if($wait == 0)
				{print "Timeout.\n";
				return "timeout";}
			else
				{print "Waiting for page to load.\n";}
			}
		}
	}
sub MatchesReference
	{my $wait = 3;
	until($wait == 0)
		{$wait = $wait - 1;
		my $result = CompareBitmapRows();
		if($result eq 'loading')
			{if($wait == 0)
				{print "Timeout.\n";
				return "timeout";}
			else
				{print "Waiting for page to load.\n";}
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
	{@mismatch = reverse(@mismatch);
	my ($lines,$range) = ("The following lines mismatch: $mismatch[0]",0);
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
	{my $result = 'no screenshot';
	if(Alive())
		{open(TC,"import -silent -window $winIDs[0] bmp:-|") or Quit("Can't load bitmap.\n");
		read(TC,my $data, 10);
		read(TC,$data, 4);
		my $bitmapStart = unpack('V',$data);
		read(TC,$data, 4);
		read(TC,$data, 8);
		($rowSize,$colSize) = unpack('ii',$data);
		read(TC,$data, 8);
		read(TC,$data, $bitmapStart - 34);
		my $dy = $rowSize*3;
		if($dy%4 != 0)
			{$dy = $dy + 4 - ($dy)%4;}
		for(my $y = 0; $y < $colSize-$pageOffset; $y++)
			{read(TC,$data,$dy);
			push(@reference,$data);}
		$result = 'done';
		if($knownUI[0] == 1)
			{if($buttonX[0] < 0)
				{$buttonX[0] = $rowSize+$buttonX[0]}
			read(TC,$data,($pageOffset - $buttonY[0] - 1)*$dy + $buttonX[0]*3);
			read(TC,$data,$buttonZ[0]*3);
			if($button[0] ne join(',',unpack("C*",$data)))
				{$result = 'loading';}
			}
		close TC;}
	return $result;}
sub CompareBitmapRows
	{my $result = 'no screenshot';
	if(Alive())
		{open(TC,"import -silent -window $winIDs[0] bmp:-|") or Quit("Can't load bitmap.\n");
		$result = 'match';
		@mismatch = ();
		read(TC,my $data, 10);
		read(TC,$data, 4);
		my $bitmapStart = unpack('V',$data);
		read(TC,$data, 4);
		read(TC,$data, 8);
		my ($width,$height) = unpack('ii',$data);
		if($rowSize != $width)
			{$result = 'width mismatch';}
		if($colSize != $height)
			{$result = 'height mismatch';}
		read(TC,$data, 8);
		read(TC,$data, $bitmapStart - 34);
		my $dy = $rowSize*3;
		if($dy%4 != 0)
			{$dy = $dy + 4 - ($dy)%4;}
		for(my $y = 0; $y < $colSize-$pageOffset; $y++)
			{read(TC,$data,$dy);
			if($data ne $reference[$y])
				{$result = 'line mismatch';
				push(@mismatch,$colSize-$y);}
			}
		if($knownUI[0] == 1)
			{if($buttonX[0] < 0)
				{$buttonX[0] = $width+$buttonX[0]}
			read(TC,$data,($pageOffset - $buttonY[0] - 1)*$dy + $buttonX[0]*3);
			read(TC,$data,$buttonZ[0]*3);
			if($button[0] ne join(',',unpack("C*",$data)))
				{$result = 'loading';}
			}
		close TC;}
	return $result;}
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