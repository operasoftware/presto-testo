#!/usr/bin/perl
package RT;
use strict;
use warnings;
use Win32::GuiTest;
my @winIDs;
my @winNames;
my @fail;
my @skip;
my $pass = 0;
my $pageOffset = 65;
sub GrabWindow
	{my $winName = shift;
	my ($winID) = Win32::GuiTest::FindWindowLike(undef,$winName) or die("Can not find WinGogi window, make sure that WinGogi is running.\n");
	$winName = Win32::GuiTest::GetWindowText($winID);
	Win32::GuiTest::SetForegroundWindow($winID);
	Win32::GuiTest::SendKeys("{F9}",0);
	unshift(@winIDs,$winID);
	unshift(@winNames,$winName);}
sub LoadPage
	{if(Alive())
		{my $tc = shift;
		Win32::GuiTest::SendKeys("{F8} $tc {ENTER}",0);
		print "Loading page ".$tc."\n";
		WaitSeconds(0.6);}
	}
sub SwitchWindows
	{if(Alive())
		{Win32::GuiTest::SendKeys("%{TAB}",300);
		@winIDs = reverse(@winIDs);
		@winNames = reverse(@winNames);}
	}
sub SaveReference
	{if(Alive())
		{my ($wait, $done) = (3,0);
		until($wait == 0)
			{if($wait < 3)
				{print "Waiting for page to load.\n";
				WaitSeconds(1);}
			$wait = $wait - 1;
			my $screen = new Win32::GuiTest::DibSect;
			$screen->CopyWindow($winIDs[0]);
			$screen->SaveAs('ref.bmp');
			my $result = PageLoaded('ref.bmp');
			if($result eq 'loading' and $wait == 0)
				{print "Timeout.\n";
				return 'timeout';}
			else
				{return 'done';}
			}
		}
	}
sub MatchesReference
	{if(Alive())
		{my $wait = 3;
		until($wait == 0)
			{if($wait < 3)
				{print "Waiting for page to load.\n";
				WaitSeconds(1);}
			$wait = $wait - 1;
			my $screen = new Win32::GuiTest::DibSect;
			$screen->CopyWindow($winIDs[0]);
			$screen->SaveAs('tc.bmp');
			my $result = PageLoaded('tc.bmp');
			if($result eq 'loading' and $wait == 0)
				{print "Timeout.\n";
				return 'timeout';}
			else
				{return CompareBitmaps();}
			}
		}
	return 'no screenshot';}
sub Alive
	{if(Win32::GuiTest::IsWindowVisible($winIDs[0]))
		{return 1;}
	else
		{return 0;}
	}
sub Gogi()
	{return 'WinGogi';}
sub Desktop()
	{return 'WinGogi Desktop';}
sub TV()
	{return 'WinGogi TV';}
sub SmartPhone()
	{return 'WinGogi SmartPhone';}
sub PageLoaded
	{my ($x,$y,$z,@pattern);
	open(IMG, '<'.(shift)) or Quit("Can't load bitmap.\n");
	seek(IMG,10,0);
	read(IMG,my $data, 4);
	my $bitmapStart = unpack('V',$data);
	seek(IMG,4,1);
	read(IMG,$data,8);
	my ($width,$height) = unpack('ii',$data);
	if($winNames[0] =~ /WinGogi (Desktop|TV)/)
		{($x,$y,$z,@pattern) = (95,35,1,216,215,214);}
	elsif($winNames[0] =~ /WinGogi SmartPhone/)
		{($x,$y,$z,@pattern) = ($width-17,48,4,0,0,0,0,0,0,0,0,0,0,0,0);}
	else
		{return 'uknown ui';}
	my $dy = $width*3;
	if($dy%4 != 0)
		{$dy = $dy + 4 - ($dy)%4;}
	seek(IMG,($height-$y-1)*$dy + $x*3 + $bitmapStart - 26,1);
	read(IMG,$data,$z*3);
	my @button = unpack("C*",$data);
	close IMG;
	if(join(',',@button) eq join(',',@pattern))
		{return 'done';}
	else
		{return 'loading';}
	}
sub WaitSeconds
	{select(undef, undef, undef, shift);}
sub CompareBitmaps
	{open(REF, '<ref.bmp') or Quit("Can't load reference.\n");
	open(IMG, '<tc.bmp') or Quit("Can't load bitmap.\n");
	seek(REF,10,0);
	seek(IMG,10,0);
	read(REF,my $REFData, 4);
	my $REFBitmapStart = unpack('V',$REFData);
	read(IMG,my $IMGData, 4);
	my $IMGBitmapStart = unpack('V',$IMGData);
	seek(REF,4,1);
	seek(IMG,4,1);
	read(REF,$REFData, 8);
	my ($REFWidth,$REFHeight) = unpack('ii',$REFData);
	read(IMG,$IMGData, 8);
	my ($IMGWidth,$IMGHeight) = unpack('ii',$IMGData);
	if($IMGWidth != $REFWidth)
		{print "Bitmap width does not match reference $IMGWidth != $REFWidth\n";
		close REF;
		close IMG;
		return 'width mismatch';}
	if($IMGHeight != $REFHeight)
		{print "Bitmap height does not match reference $IMGWidth != $REFWidth\n";
		close REF;
		close IMG;
		return 'height mismatch';}
	my $dy = $REFWidth*3;
	if($dy%4 != 0)
		{$dy = $dy + 4 - ($dy)%4;}
	seek(REF,$REFBitmapStart - 26,1);
	seek(IMG,$IMGBitmapStart - 26,1);
	for(my $y = 0; $y < $REFHeight-$pageOffset; $y++)
		{read(REF,$REFData,$dy);
		read(IMG,$IMGData,$dy);
		if($REFData ne $IMGData)
			{print "Bitmap did not match reference.\nLine ".($REFHeight-$y)." was last line that did not match.\n";
			close REF;
			close IMG;
			return 'line mismatch';}
		}
	close REF;
	close IMG;
	return 'match';}
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