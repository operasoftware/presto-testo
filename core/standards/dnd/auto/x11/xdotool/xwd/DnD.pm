#!/usr/bin/perl
use strict;
use warnings;
package DnD;
my @winIDs;
my $winX;
my $winY;
my $winWidth;
my $winHeight;
my $lastTC = '';
sub GrabWindow
	{my $winName = shift;
	if($winName eq 'Gogi')
		{$winName = 'LinGogi'}
	elsif($winName eq 'Desktop')
		{$winName = 'LinGogi desktop UI \(X11\/SW\)'}
	elsif($winName eq 'TV')
		{$winName = 'LinGogi desktop UI \(X11\/VEMU2D\)'}
	elsif($winName eq 'SmartPhone')
		{$winName = 'LinGogi SmartPhone'}
	my $winID = `xdotool search --limit 1 --name '$winName'`;
	if($winID)
		{system("xdotool windowraise $winID");
		system("xdotool windowfocus $winID");}
	my $build = `xdotool getwindowname $winID`;
	my $winInfo = `xwininfo -id '$winID'`;
	if($winInfo  =~ /Absolute upper-left X:  (-?[0-9]{1,4})\n.*Absolute upper-left Y:  (-?[0-9]{1,4})/)
		{($winX, $winY) = ($1,$2);}
	else
		{die("Can't retreive window position.\n");}
	if($winInfo  =~ /Width: ([0-9]{1,4})\n.*Height: ([0-9]{1,4})/)
		{($winWidth, $winHeight) = ($1, $2);}
	else
		{die("Can't retreive window size.\n");}
	unshift(@winIDs,$winID);
	if(int(@winIDs) == 1)
		{print "Events will be sent to LinGogi window: \n$build";}
	}
sub LoadPage
	{if(Alive())
		{my $tc = shift;
		system("xdotool key F8");
		system("xdotool type $tc");
		system("xdotool key Return");
		if($tc ne $lastTC)
			{print "Testing TC ".$tc."\n";
			$lastTC = $tc;}
		}
	}
sub SwitchWindows
	{if(Alive())
		{system("xdotool key alt+Tab");
		@winIDs = reverse(@winIDs);}
	WaitSeconds(0.5);}
sub SwitchTabs
	{if(Alive())
		{system("xdotool key ctrl+Tab");}
	WaitSeconds(0.5);}
sub OpenNewTab
	{if(Alive())
		{system("xdotool key ctrl+t");}
	WaitSeconds(0.5);}
sub CloseTab
	{if(Alive())
		{system("xdotool key ctrl+w");}
	WaitSeconds(0.5);}
sub SelectAll
	{if(Alive())
		{system("xdotool key ctrl+a");}
	}
sub TabNav
	{my $n = shift;
	if(Alive())
		{for my $i (1..$n)
			{system("xdotool key Tab");
			WaitSeconds(0.1);}
		}
	}
sub ScanPage
	{my ($drag,$wait,@abcd) = (0,3,0,0,0,0,0,0,0,0);
	if(Alive())
		{until($wait == 0 or $drag == 1)
			{WaitSeconds(1);
			$wait = $wait - 1;
			@abcd = FindColors(140,180,210,180,130,70);
			if($abcd[0] != 0 and $abcd[4] != 0)
				{$drag = 1;}
			else
				{if($wait != 0)
					{print "Waiting for draggable area and/or dropzone to appear\n";}
				else
					{print "Can't locate draggable area and/or dropzone\n";}
				}
			}
		}
	return @abcd;}
sub FindDraggableArea
	{my ($drag,$wait,@abcd) = (0,3,0,0,0,0);
	if(Alive())
		{until($wait == 0 or $drag == 1)
			{WaitSeconds(1);
			$wait = $wait - 1;
			@abcd = FindColors(140,180,210);
			if($abcd[0] != 0)
				{$drag = 1;}
			else
				{if($wait != 0)
					{print "Waiting for draggable area to appear\n";}
				else
					{print "Can't locate draggable area.\n";}
				}
			}
		}
	return @abcd;}
sub FindDropzone
	{my ($drop,$wait,@abcd) = (0,3,0,0,0,0);
	if(Alive())
		{until($wait == 0 or $drop == 1)
			{WaitSeconds(1);
			$wait = $wait - 1;
			@abcd = FindColors(180,130,70);
			if($abcd[0] != 0)
				{$drop = 1;}
			else
				{if($wait != 0)
					{print "Waiting for dropzone to appear\n";}
				else
					{print "Can't locate dropzone.\n";}
				}
			}
		}
	return @abcd;}
sub Click
	{my ($x,$y,$n) = @_;
	if(Alive())
		{system("xdotool mousemove --sync $x $y click --repeat $n --delay 50 1");}
	}
sub Select
	{my ($dragA,$dragB,$dragC,$dragD) = @_;
	MouseDrag('select',$dragA,int(($dragB+$dragD)/2),$dragC,int(($dragB+$dragD)/2));}
sub DragAndDrop
	{MouseDrag('simple',@_);}
sub DragAndScroll
	{MouseDrag('scroll',@_);}
sub CancelDrag
	{MouseDrag('cancel',@_,$_[0],$_[1]+120);}
sub DragBetweenWindows
	{MouseDrag('crosswindow',@_);}
sub DragBetweenTabs
	{MouseDrag('crosstab',@_);}
sub DragToPreviousTab
	{MouseDrag('closetab',@_);}
sub DisturbDuringDrag
	{MouseDrag('alert',@_);}
sub MouseDrag
	{my ($drag,$dragX,$dragY,$dropX,$dropY) = @_;
	if(Alive())
		{my $dragBy;
		my $dragTo;
		if($drag ne 'select')
			{print "Initiating drag and drop from location ".$dragX.":".$dragY." to location ".$dropX.":".$dropY."\n";}
		system("xdotool mousemove --sync $dragX $dragY");
		system("xdotool mousedown 1");
		if($dropY > $dragY)
			{for $dragTo ($dragY+1 .. $dropY)
				{system("xdotool mousemove --sync $dragX $dragTo");
				if($drag eq 'alert')
					{Accept(1);}
				}
			}
		else
			{for $dragTo (1 .. $dragY - $dropY)
				{$dragBy =  $dragY - $dragTo;
				system("xdotool mousemove --sync $dragX $dragBy");
				if($drag eq 'alert')
					{Accept(1);}
				}
			}
		if($drag eq 'crosstab')
			{SwitchTabs();}
		elsif($drag eq 'closetab')
			{CloseTab();	}
		if($dropX > $dragX)
			{for $dragTo ($dragX+1 .. $dropX)
				{system("xdotool mousemove --sync $dragTo $dropY");
				if($drag eq 'alert')
					{Accept(1);}
				}
			}
		else
			{for $dragTo (1 .. $dragX - $dropX)
				{$dragBy =  $dragX - $dragTo;
				system("xdotool mousemove --sync $dragBy $dropY");
				if($drag eq 'alert')
					{Accept(1);}
				}
			}
		if($drag eq 'scroll')
			{WaitSeconds(2);}
		system("xdotool mousemove --sync $dropX $dropY");
		if($drag eq 'alert')
			{Accept(1);}
		if($drag eq 'cancel')
			{system("xdotool key Escape");}
		elsif($drag eq 'bitmap')
			{return CheckBitmap()}
		system("xdotool mouseup 1");
		if($drag eq 'alert')
			{Accept(3);}
		if($drag eq 'crosswindow')
			{SwitchWindows();}
		}
	else
		{if($drag eq 'bitmap')
			{return (0);}
		}
	}
sub DragAround
	{my ($dragX,$dragY,$dropX,$dropY) = @_;
	if(Alive())
		{my $dragBy;
		my $dragTo;
		print "Initiating drag and drop from location ".$dragX.":".$dragY." to location ".$dropX.":".$dropY."\n";
		system("xdotool mousemove --sync $dragX $dragY");
		system("xdotool mousedown 1");
		for $dragTo (1 .. $dragY-1)
			{$dragBy =  $dragY - $dragTo;
			system("xdotool mousemove --sync $dragX $dragBy");}
		for $dragTo (1 .. $dragX)
			{$dragBy =  $dragX - $dragTo;
			system("xdotool mousemove --sync $dragBy 1");}
		for $dragTo (1 .. $dropY)
			{system("xdotool mousemove --sync 1 $dragTo");}
		for $dragTo (1 .. $dropX)
			{system("xdotool mousemove --sync $dragTo $dropY");}
		system("xdotool mousemove --sync $dropX $dropY");
		system("xdotool mouseup 1");}
	}
sub DragImage
	{my ($dragX,$dragY,$dropX,$dropY) = (@_,$winX + $winWidth - 100,$winY + $winHeight - 100);
	if(Alive())
		{my $dragTo;
		print "Initiating drag and drop from location ".$dragX.":".$dragY." to location ".$dropX.":".$dropY."\n";
		system("xdotool mousemove --sync $dragX $dragY");
		system("xdotool mousedown 1");
		for $dragTo ($dragY+1 .. $dropY)
			{system("xdotool mousemove --sync $dragX $dragTo");}
		for $dragTo ($dragX+1 .. $dropX)
			{system("xdotool mousemove --sync $dragTo $dropY");}
		system("xdotool mousemove --sync $dropX $dropY");
		my $pixelData = GetArea($winWidth-100,$winHeight-100,95,95);
		system("xdotool mouseup 1");
		return CheckBitmap($pixelData);}
	else
		{return (0);	}
	}
sub Accept
	{my $n = shift;
	for my $i (1 .. $n)
		{if($i > 1)
			{WaitSeconds(0.3);}
		system("xdotool key space");}
	}
sub Green
	{if(Alive())
		{WaitSeconds(1);
		my $wait = 3;
		my @abcd;
		until($wait == 0)
			{if($wait < 3)
				{print "Waiting for test result\n";
				WaitSeconds(2);}
			$wait = $wait - 1;
			@abcd = FindColors(34,139,34);
			if($abcd[0] != 0)
				{return 1;}
			else
				{if($wait == 0)
					{return 0;}
				}
			}
		}
	}
sub CheckBitmap
	{my $pixelData = shift;
	$pixelData =~ s/,0,0,0,0/B/g;
	$pixelData =~ s/,34,139,34,255/F/g;
	$pixelData =~ s/,180,130,70,255/S/g;
	$pixelData =~ s/,140,180,210,255/T/g;
	$pixelData =~ s/,255,255,255,255/W/g;
	if($pixelData =~ /[BW]/)
		{return (0,'transparent areas are not transparent in feedback bitmap');}
	elsif($pixelData =~ /F/ and $pixelData =~ /S/ and $pixelData =~ /T/)
		{if($pixelData =~ /^Pixel data[TSF]+$/)
			{return (1);}
		else
			{$pixelData =~ s/,[0-9]{1,3}//g;
			if(length($pixelData) > 8000)
				{return (1,'ignoring anti-aliasing and/or small rendering artifacts');}
			else
				{return (0,'unexpected colors in feedback bitmap');}
			}
		}
	else
		{return (0,'feedback bitmap is incomplete');}
	}
sub WaitSeconds
	{select(undef, undef, undef, shift);}
sub Alive
	{if(`xdotool getactivewindow` == $winIDs[0])
		{return 1;}
	else
		{return 0;}
	}
sub FindColors
	{my ($n,@abcd) = (int(@_)/3,0,0,0,0,0,0,0,0);
	if(Alive())
		{open(TC,"xwd -nobdrs -id $winIDs[0]|") or die("Can't load xwd data.\n");
		read(TC,my $data, 100);
		my @h = unpack('N'.100, $data);
		if(@h)
			{read(TC, $data, $h[0] - 100 + 12*$h[19]);
			my @pattern = (pack("C*",255,$_[0],$_[1],$_[2],255),pack("C*",255,$_[3*$n-3],$_[3*$n-2],$_[3*$n-1],255));
			for(my $y=0; $y < $h[5]; $y++)
				{read(TC, $data, $h[12]);
				for(my $i=0; $i < $n; $i++)
					{if($abcd[4*$i] == 0 and $data =~ /(^.*?$pattern[$i])/)
						{($abcd[4*$i],$abcd[4*$i+1]) = ($h[22] + length($1)*8/$h[11],$h[23] + $y);}
					if($abcd[4*$i] != 0 and $data =~ /(^.*$pattern[$i])/)
						{($abcd[4*$i+2],$abcd[4*$i+3]) = ($h[22] + length($1)*8/$h[11],$h[23] + $y);}
					}
				}
			}
		}
	return splice(@abcd,0,4*$n);}
sub GetArea
	{my $area = 'Pixel data';
	if(Alive())
		{open(TC,"xwd -nobdrs -screen -id $winIDs[0]|") or die("Can't load xwd data.\n");
		read(TC, my $data, 100);
		my @h = unpack('N'.100, $data);
		if(@h)
			{read(TC, $data, $h[0] - 100 + 12*$h[19] + $_[1]*$h[12] + $_[0]*$h[11]/8);
			for(my $i = 0; $i < $_[3];$i++)
				{read(TC, $data, $_[2]*$h[11]/8);
				$area = join(',',$area,unpack("C*",$data));
				read(TC, $data, $h[12]-$_[2]*$h[11]/8);}
			}
		close TC;}
	return $area}
1;