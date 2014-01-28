#!/usr/bin/perl
use strict;
use warnings;
use RT;
RT::GrabWindow(RT::Gogi);
open(TCs,"blank.txt") or die("Can not find list of testcases, make sure that blank.txt is located in the same directory as this script.\n");
RT::LoadPage('opera:blank');
if(RT::SaveReference() eq 'done')
	{while (<TCs>)
		{$_ =~ s/[\n\r]+//;
		RT::LoadPage($_);
		my $refmatch = RT::MatchesReference();
		my $result = -1;
		if($refmatch =~ /mismatch/)
			{$result = 0;}
		elsif($refmatch eq 'match')
			{$result = 1;}
		RT::Result($result,$_);}
	}
close TCs;
RT::Results;