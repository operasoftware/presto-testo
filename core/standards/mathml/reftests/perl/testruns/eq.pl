#!/usr/bin/perl
use strict;
use warnings;
use RT;
my $refpage = 1;
my $ignore = 0;
RT::GrabWindow(RT::Gogi);
open(TCs,"eq.txt") or die("Can not find list of testcases, make sure that eq.txt is located in the same directory as this script.\n");
while (<TCs>)
	{$_ =~ s/[\n\r]+//;
	if($ignore != 1)
		{RT::LoadPage($_);
		if($refpage == 1)
			{$refpage = 0;
			if(RT::SaveReference() ne 'done')
				{$ignore = 1;}
			}
		else
			{my $refmatch = RT::MatchesReference();
			my $result = -1;
			$refpage = 1;
			if($refmatch eq 'line mismatch')
				{$result = 0;}
			elsif($refmatch eq 'match')
				{$result = 1;}
			RT::Result($result,$_);}
		}
	else
		{$ignore = 0;
		$refpage = 1;
		RT::Results(-1,$_);}
	}
close TCs;
RT::Results;