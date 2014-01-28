#!/usr/bin/perl
use strict;
use warnings;
use DnD;
my $pass = 0;
my @fail;
my @skip;
DnD::GrabWindow('Gogi');
open(TCs,'dragimage.txt') or die('Can not find list of testcases, make sure that dragimage.txt is located in the same directory as this script.\n');
while (<TCs>)
	{$_ =~ s/[\n\r]+//;
	DnD::LoadPage($_);
	my ($dragA,$dragB,$dragC,$dragD) = DnD::FindDraggableArea;
	if($dragA != 0 and $dragB != 0)
		{my @feedback = DnD::DragImage($dragA+4,$dragB+4);
		if($feedback[0] == 1)
			{if(int(@feedback) == 2)
				{print "PASS (".$feedback[1].")\n"}
			else
				{print "PASS\n";}
			$pass = $pass + 1;}
		else
			{push(@fail,$_);
			if(int(@feedback) == 2)
				{print "FAIL (".$feedback[1].")\n"}
			else
				{print "FAIL\n";}
			}
		}
	else
		{push(@skip,$_);}
	}
close TCs;
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