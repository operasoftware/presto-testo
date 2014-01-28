#!/usr/bin/perl
use strict;
use warnings;
package DnD;
my $focusTimeout = 900000;
my $pageLoadTimeout = 900000;
my $postDropTimeout = 100000;
my $tabCreateTimeout = 500000;
my $tabSwitchTimeout = 500000;
my $scrollTimeout = 1100000;
my $inverseDragSpeed = 5000;
my $lastTC = '';
my @winIDs;
my @winX;
my @winY;
my @winWidth;
my @winHeight;
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
	if(@winIDs)
		{system("xte 'keydown Alt_L'  'usleep 50000' 'key Tab' 'usleep 50000' 'key Tab' 'usleep 50000' 'keyup Alt_L' 'usleep $focusTimeout'");}
	else
		{system("xte 'keydown Alt_L'  'usleep 50000' 'key Tab'  'usleep 50000' 'keyup Alt_L' 'usleep $focusTimeout'");}
	my $win = `xprop -root _NET_ACTIVE_WINDOW`;
	if($win  =~ / (0x[0-9a-fA-F]+)/)
		{unshift(@winIDs,$1);}
	else
		{die("Can't identify active window.\n");}
	my $winInfo = `xwininfo -id '$1'`;
	if($winInfo  =~ /xwininfo: Window id: .* \"($winName.*)\"/)
		{print "Events will be sent to LinGogi window: \n$1\n";
		if($winInfo  =~ /Absolute upper-left X:  (-?[0-9]{1,4})\n.*Absolute upper-left Y:  (-?[0-9]{1,4})/)
			{print "Window position: $1 : $2 \n";
			if($1 < 0 or $2 < 0)
				{die("Make sure that LinGogi window fits on the screen.\n");}
			unshift(@winX,$1);
			unshift(@winY,$2);}
		else
			{die("Can't retreive window position.\n");}
		if($winInfo  =~ /Width: ([0-9]{1,4})\n.*Height: ([0-9]{1,4})/)
			{unshift(@winWidth,$1);
			unshift(@winHeight,$2);}
		else
			{die("Can't retreive window size.\n");}
		}
	else
		{die("Please focus LinGogi window before running this script.\n");}
	}
sub LoadPage
	{if(Alive())
		{my $tc = shift;
		system("xte 'key F8' 'str $tc' 'key Return' 'usleep $pageLoadTimeout'");
		if($tc ne $lastTC)
			{print "Testing TC ".$tc."\n";
			$lastTC = $tc;}
		}
	}
sub SwitchWindows
	{if(Alive())
		{system("xte 'keydown Alt_L'  'usleep 50000' 'key Tab' 'usleep 50000' 'keyup Alt_L' 'usleep $focusTimeout'");
		@winIDs = reverse(@winIDs);}
	}
sub SwitchTabs
	{if(Alive())
		{system("xte 'keydown Control_L'  'usleep 50000' 'key Tab'  'usleep 50000' 'keyup Control_L' 'usleep $tabSwitchTimeout'");}
	}
sub OpenNewTab
	{if(Alive())
		{system("xte 'keydown Control_L'  'usleep 50000' 'key t'  'usleep 50000' 'key Tab'  'usleep 50000' 'keyup Control_L' 'usleep $tabCreateTimeout'");}
	}
sub CloseTab
	{if(Alive())
		{system("xte 'keydown Control_L'  'usleep 50000' 'key w'  'usleep 50000' 'keyup Control_L' 'usleep $tabSwitchTimeout'");}
	}
sub SelectAll
	{if(Alive())
		{system("xte 'keydown Control_L'  'usleep 50000' 'key a'  'usleep 50000' 'keyup Control_L' 'usleep 50000'");}
	}
sub TabNav
	{my $n = shift;
	if(Alive())
		{my $keys = " 'key Tab' 'usleep 50000'"x$n;
		system("xte$keys");}
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
	for my $i (0..7)
		{if($i%2 == 0)
			{$abcd[$i] = $winX[0] + $abcd[$i];}
		else
			{$abcd[$i] = $winY[0] + $abcd[$i];}
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
	for my $i (0..3)
		{if($i%2 == 0)
			{$abcd[$i] = $winX[0] + $abcd[$i];}
		else
			{$abcd[$i] = $winY[0] + $abcd[$i];}
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
	for my $i (0..3)
		{if($i%2 == 0)
			{$abcd[$i] = $winX[0] + $abcd[$i];}
		else
			{$abcd[$i] = $winY[0] + $abcd[$i];}
		}
	return @abcd;}
sub Click
	{my ($x,$y,$n) = @_;
	if(Alive())
		{my $events = "'mousemove $x $y' 'usleep 50000'";
		for my $i (1..$n)
			{$events = "$events 'mouseclick 1' 'usleep 50000'";}
		system("xte $events");}
	}
sub Select
	{my ($dragA,$dragB,$dragC,$dragD) = @_;
	MouseDrag('select',$dragA,int(($dragB+$dragD)/2),$dragC,int(($dragB+$dragD)/2));}
sub DragAndDrop
	{MouseDrag('simple',@_);}
sub CancelDrag
	{MouseDrag('cancel',@_,$_[0],$_[1]+120);}
sub DragAndScroll
	{MouseDrag('scroll',@_);}
sub DragBetweenWindows
	{MouseDrag('simple',@_);
	SwitchWindows();}
sub DragBetweenTabs
	{MouseDrag('crosstab',@_);}
sub DragToPreviousTab
	{MouseDrag('closetab',@_);}
sub DisturbDuringDrag
	{MouseDrag('alert',@_);}
sub MouseDrag
	{my ($drag,$dragX,$dragY,$dropX,$dropY) = @_;
	my $dragBy;
	my $dragTo;
	my $dragPath = '';
	my $beforeDrop = '';
	my $alert = '';
	my $alerts = '';
	if($drag eq 'cancel')
		{$beforeDrop = "'key Escape' ";}
	elsif($drag eq 'scroll')
		{$beforeDrop = "'usleep $scrollTimeout' ";}
	elsif($drag eq 'alert')
		{$alert = "'key space' ";
		$alerts = " $alert 'usleep 50000' $alert 'usleep 50000' $alert";}
	if($dropY > $dragY)
		{for $dragTo ($dragY+1 .. $dropY)
			{$dragPath = $dragPath."'mousemove $dragX $dragTo' 'usleep $inverseDragSpeed' $alert"}
		}
	else
		{for $dragTo (1 .. $dragY - $dropY)
			{$dragBy =  $dragY - $dragTo;
			$dragPath = $dragPath."'mousemove $dragX $dragBy' 'usleep $inverseDragSpeed' $alert"}
		}
	if(Alive())
		{if($drag ne 'select')
			{print "Initiating drag and drop from location ".$dragX.":".$dragY." to location ".$dropX.":".$dropY."\n";}
		system("xte 'mousemove $dragX $dragY' 'mousedown 1' $dragPath");}
	$dragPath = '';
	if($drag eq 'crosstab')
		{SwitchTabs();}
	elsif($drag eq 'closetab')
		{CloseTab();	}
	if($dropX > $dragX)
		{for $dragTo ($dragX+1 .. $dropX)
			{$dragPath = $dragPath."'mousemove $dragTo $dropY' 'usleep $inverseDragSpeed' $alert"}
		}
	else
		{for $dragTo (1 .. $dragX - $dropX)
			{$dragBy =  $dragX - $dragTo;
			$dragPath = $dragPath."'mousemove $dragBy $dropY' 'usleep $inverseDragSpeed' $alert"}
		}
	system("xte $dragPath $beforeDrop\'mouseup 1\' 'usleep $postDropTimeout'$alerts");}
sub DragAround
	{my ($dragX,$dragY,$dropX,$dropY) = @_;
	my $dragBy;
	my $dragTo;
	my $dragPath = '';
	for $dragTo (1 .. $dragY-1)
		{$dragBy =  $dragY - $dragTo;
		$dragPath = $dragPath."'mousemove $dragX $dragBy' 'usleep $inverseDragSpeed' "}
	for $dragTo (1 .. $dragX)
		{$dragBy =  $dragX - $dragTo;
		$dragPath = $dragPath."'mousemove $dragBy 1' 'usleep $inverseDragSpeed' "}
	for $dragTo (1 .. $dropY)
		{$dragPath = $dragPath."'mousemove 1 $dragTo' 'usleep $inverseDragSpeed' "}
	for $dragTo (1 .. $dropX)
		{$dragPath = $dragPath."'mousemove $dragTo $dropY' 'usleep $inverseDragSpeed' "}
	if(Alive())
		{print "Initiating drag and drop from location ".$dragX.":".$dragY." to location ".$dropX.":".$dropY."\n";
		system("xte 'mousemove $dragX $dragY' 'mousedown 1' $dragPath 'mouseup 1' 'usleep $postDropTimeout'");}
	}
sub DragImage
	{my ($dragX,$dragY,$dropX,$dropY) = (@_,$winX[0] + $winWidth[0] - 100,$winY[0] + $winHeight[0] - 100);
	my $dragTo;
	my $dragPath = '';
	for $dragTo ($dragY+1 .. $dropY)
		{$dragPath = $dragPath."'mousemove $dragX $dragTo' 'usleep $inverseDragSpeed' "}
	for $dragTo ($dragX+1 .. $dropX)
		{$dragPath = $dragPath."'mousemove $dragTo $dropY' 'usleep $inverseDragSpeed' "}
	if(Alive())
		{print "Initiating drag and drop from location ".$dragX.":".$dragY." to location ".$dropX.":".$dropY."\n";
		system("xte 'mousemove $dragX $dragY' 'mousedown 1' $dragPath");
		my $pixelData = GetArea($winWidth[0]-100,$winHeight[0]-100,95,95);	
		system("xte 'mouseup 1' 'usleep $postDropTimeout'");
		return CheckBitmap($pixelData);}
	else
		{return (0);	}
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
	$pixelData =~ s/,0,0,0/B/g;
	$pixelData =~ s/,34,139,34/F/g;
	$pixelData =~ s/,180,130,70/S/g;
	$pixelData =~ s/,140,180,210/T/g;
	$pixelData =~ s/,255,255,255/W/g;
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
	{if(index(`xprop -root _NET_ACTIVE_WINDOW`,$winIDs[0]) != -1)
		{return 1;}
	else
		{return 0;}
	}
sub FindColors
	{open(TC,"import -window $winIDs[0] bmp:-|") or die("Can't load bitmap.\n");
	my $n = int(@_)/3;
	read(TC,my $data, 10);
	read(TC,$data, 4);
	my $bitmapStart = unpack('V',$data);
	read(TC,$data, 4);
	read(TC,$data, 8);
	my ($width,$height) = unpack('ii',$data);
	read(TC,$data, 8);
	read(TC,$data, $bitmapStart - 34);
	my $dy = $width*3;
	if($dy%4 != 0)
		{$dy = $dy + 4 - ($dy)%4;}
	my @abcd = (0,0,0,0,0,0,0,0);
	my @pattern = (pack("C*",$_[0],$_[1],$_[2]),pack("C*",$_[3*$n-3],$_[3*$n-2],$_[3*$n-1]));
	for(my $y = 0; $y < $height+1; $y++)
		{read(TC,$data,$dy);
		for(my $i=0; $i < $n; $i++)
			{if($abcd[4*$i] == 0 and $data =~ /(^(?:...)*?$pattern[$i])/)
				{($abcd[4*$i],$abcd[3+4*$i]) = (length($1)/3,$height-$y);}
			if($abcd[4*$i] != 0 and $data =~ /(^(?:...)*$pattern[$i])/)
				{($abcd[2+4*$i],$abcd[4*$i+1]) = (length($1)/3,$height-$y);}
			}
		}
	close TC;
	return splice(@abcd,0,4*($n+1));}
sub GetArea
	{open(TC,"import -window $winIDs[0] bmp:-|") or die("Can't load bitmap.\n");
	my $area = 'Pixel data';
	my ($x,$y,$w,$h) = @_;
	read(TC,my $data, 10);
	read(TC,$data, 4);
	my $bitmapStart = unpack('V',$data);
	read(TC,$data, 4);
	read(TC,$data, 8);
	my ($width,$height) = unpack('ii',$data);
	my $dy = $width*3;
	if($dy%4 != 0)
		{$dy = $dy + 4 - ($dy)%4;}
	read(TC,$data,($height-$y-$h)*$dy + $x*3 + $bitmapStart - 26);
	for(my $i = 0; $i < $h; $i++)
		{read(TC,$data,$w*3);
		$area = join(',',$area,unpack("C*",$data));
		read(TC,$data,$dy-$w*3);}
	close TC;
	return $area;}
1;