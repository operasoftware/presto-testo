#!/usr/bin/perl
use strict;
use warnings;
use RT;
my $pass = 0;
my @fail;
my @skip;
RT::GrabWindow('core-integration');
RT::GrabWindow('bugs137');
open(TCs,"visual.txt") or die("Can not find list of testcases, make sure that visual.txt is located in the same directory as this script.\n");
while (<TCs>)
	{$_ =~ s/[\n\r]+//;
	RT::LoadPage($_);
	my $result = -1;
	if(RT::SaveReference() eq 'done')
		{RT::SwitchWindows();
		RT::LoadPage($_);
		my $refmatch = RT::MatchesReference();
		if($refmatch eq 'line mismatch')
			{$result = 0;}
		elsif($refmatch eq 'match')
			{$result = 1;}
		}
	RT::Result($result,$_);}
close TCs;
RT::Results;