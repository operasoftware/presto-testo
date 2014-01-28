#!/usr/bin/perl
use strict;
use warnings;
use DnD;
my $pass = 0;
my @fail;
my @skip;
DnD::GrabWindow('Gogi');
for my $testrun (1..5)
	{open(TCs,"svg$testrun.txt") or die("Can not find list of testcases, make sure that svg$testrun.txt is located in the same directory as this script");
	while (<TCs>)
		{my ($dragA,$dragB,$dragC,$dragD,$dropA,$dropB,$dropC,$dropD);
		my ($dragX,$dragY,$dropX,$dropY);
		$_ =~ s/[\n\r]+//;
		DnD::LoadPage($_);
		if($testrun < 4)
			{($dragA,$dragB,$dragC,$dragD,$dropA,$dropB,$dropC,$dropD) = DnD::ScanPage;
			($dragX,$dragY,$dropX,$dropY) = (int(($dragA+$dragC)/2),int(($dragB+$dragD)/2),int(($dropA+$dropC)/2),int(($dropB+$dropD)/2));}
		else
			{($dragA,$dragB,$dragC,$dragD) = DnD::FindDraggableArea;
			($dragX,$dragY) = (int(($dragA+$dragC)/2),int(($dragB+$dragD)/2));}
		if($dragX != 0 and $dragY != 0 and ($testrun > 3 or ($dropX != 0 and $dropY != 0)))
			{if($testrun == 2 or $testrun == 4)
				{my ($selectA,$selectB,$selectC,$selectD) = ($dragA+2,int(($dragB+$dragD)/2),$dragC,int(($dragB+$dragD)/2));
				DnD::Select($selectA,$selectB,$selectC,$selectD);}
			if($testrun < 3)
				{DnD::DragAndDrop($dragX,$dragY,$dropX,$dropY);}
			elsif($testrun == 3)
				{DnD::DragAround($dragX,$dragY,$dropX,$dropY);}
			elsif($testrun == 5)
				{DnD::CancelDrag($dragX,$dragY);}
			if(DnD::Green)
				{print "PASS\n";
				$pass = $pass + 1;}
			else
				{print "FAIL\n";
				push(@fail,$_);}
			}
		else
			{push(@skip,$_);}
		}
	close TCs;}
for my $testrun (6..7)
	{if($testrun == 6)
		{DnD::OpenNewTab;}
	open(TCs,"svg$testrun.txt") or die("Can not find list of testcases, make sure that svg$testrun.txt is located in the same directory as this script");
	while (<TCs>)
		{$_ =~ s/[\n\r]+//;
		if($testrun == 7)
			{DnD::OpenNewTab;}
		DnD::LoadPage($_);
		my ($dropA,$dropB,$dropC,$dropD) = DnD::FindDropzone;
		my ($dropX,$dropY) = (int(($dropA+$dropC)/2),int(($dropB+$dropD)/2));
		if($dropX != 0 and $dropY != 0)
			{DnD::SwitchTabs;
			DnD::LoadPage($_);
			my ($dragA,$dragB,$dragC,$dragD) = DnD::FindDraggableArea;
			my ($dragX,$dragY) = (int(($dragA+$dragC)/2),int(($dragB+$dragD)/2));
			if($dragX != 0 and $dragY != 0)
				{if($dragX == $dropX)
					{$dropX++;}
				if($testrun == 6)
					{DnD::DragBetweenTabs($dragX,$dragY,$dropX,$dropY);}
				else
					{DnD::DragToPreviousTab($dragX,$dragY,$dropX,$dropY);}
				if(DnD::Green)
					{print "PASS\n";
					$pass = $pass + 1;}
				else
					{print "FAIL\n";
					push(@fail,$_);}
				}
			else
				{push(@skip,$_);}
			}
		else
			{push(@skip,$_);}
		}
	close TCs;
	if($testrun == 6)
		{DnD::CloseTab;}
	}
my $tests = $pass + int(@fail);
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
	{my $averageTime = int($testTime*10/$tests)/10;
	print " $averageTime seconds per test.\n";}
else
	{print "\n";}