#!/usr/bin/perl
use strict;
use warnings;
use DnD;
my $pass = 0;
my @fail;
my @skip;
DnD::GrabWindow('Gogi');
for my $testrun (1..3)
	{open(TCs,"select$testrun.txt") or die("Can not find list of testcases, make sure that select$testrun.txt is located in the same directory as this script");
	while (<TCs>)
		{$_ =~ s/[\n\r]+//;
		DnD::LoadPage($_);
		my ($dragA,$dragB,$dragC,$dragD,$dropA,$dropB,$dropC,$dropD) = DnD::ScanPage;
		my ($dragX,$dragY,$dropX,$dropY) = (int(($dragA+$dragC)/2),int(($dragB+$dragD)/2),int(($dropA+$dropC)/2),int(($dropB+$dropD)/2));
		if($dragX != 0 and $dragY != 0 and $dropX != 0 and $dropY != 0)
			{DnD::Select($dragA+2,$dragB,$dragC,$dragD);
			if($testrun == 1)
				{DnD::DragAndDrop($dragX,$dragY,$dropX,$dropY);}
			elsif($testrun == 2)
				{DnD::DragAround($dragX,$dragY,$dropX,$dropY);}
			elsif($testrun == 3)
				{DnD::DragAndScroll($dragX,$dragY,$dropX,$dropY);}
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