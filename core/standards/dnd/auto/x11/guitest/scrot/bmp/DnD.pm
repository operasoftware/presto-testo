#!/usr/bin/perl
use strict;
use warnings;
use X11::GUITest;
package DnD;
my @winIDs;
my @winX;
my @winY;
my @winWidth;
my @winHeight;
my $lastTC = '';
my $dragSpeed = 4;
my $normalDelay = X11::GUITest::GetEventSendDelay;
X11::GUITest::SetEventSendDelay(int($normalDelay/$dragSpeed));
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
	my ($winID) = X11::GUITest::FindWindowLike($winName) or die("Can not find LinGogi window, make sure that LinGogi is running.\n");
	my $build = X11::GUITest::GetWindowName($winID);
	X11::GUITest::RaiseWindow($winID);
	X11::GUITest::SetInputFocus($winID);
	my ($x,$y,$w,$h) = X11::GUITest::GetWindowPos($winID);
	unshift(@winIDs,$winID);
	unshift(@winX,$x);
	unshift(@winY,$y);
	unshift(@winWidth,$w);
	unshift(@winHeight,$h);
	unshift(@winIDs,$winID);
	if(int(@winIDs) == 1)
		{print "Events will be sent to LinGogi window: \n$build\n";}
	}
sub LoadPage
	{if(Alive())
		{my $tc = shift;
		X11::GUITest::SendKeys("{F8} $tc {ENT}");
		if($tc ne $lastTC)
			{print "Testing TC ".$tc."\n";
			$lastTC = $tc;}
		if($tc =~ /\.svg$/)
			{X11::GUITest::SetEventSendDelay($normalDelay);}
		}
	}
sub SwitchWindows
	{if(Alive())
		{X11::GUITest::SendKeys("%(\t)");
		@winIDs = reverse(@winIDs);}
	WaitSeconds(0.5);}
sub SwitchTabs
	{if(Alive())
		{X11::GUITest::SendKeys("^(\t)");}
	WaitSeconds(0.5);}
sub OpenNewTab
	{if(Alive())
		{X11::GUITest::SendKeys("^(t)");}
	WaitSeconds(0.5);}
sub CloseTab
	{if(Alive())
		{X11::GUITest::SendKeys("^(w)");}
	WaitSeconds(0.5);}
sub SelectAll
	{if(Alive())
		{X11::GUITest::SendKeys("^(a)");}
	}
sub TabNav
	{my $n = shift;
	if(Alive())
		{for my $i (1..$n)
			{X11::GUITest::SendKeys("\t");
			WaitSeconds(0.1);}
		}
	}
sub ScanPage
	{my ($drag,$wait,@abcd) = (0,3,0,0,0,0,0,0,0,0);
	if(Alive())
		{until($wait == 0 or $drag == 1)
			{WaitSeconds(1);
			$wait = $wait - 1;
			system("scrot --focused tc$wait.bmp");
			@abcd = FindColors("tc$wait",140,180,210,180,130,70);
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
			system("scrot --focused tc$wait.bmp");
			@abcd = FindColors("tc$wait",140,180,210);
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
			system("scrot --focused tc$wait.bmp");
			@abcd = FindColors("tc$wait",180,130,70);
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
		{X11::GUITest::MoveMouseAbs($x,$y);
		for my $i (1..$n)
			{X11::GUITest::ClickMouseButton(X11::GUITest::M_LEFT);}
		}
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
		X11::GUITest::MoveMouseAbs($dragX,$dragY);
		X11::GUITest::PressMouseButton(X11::GUITest::M_LEFT);
		if($dropY > $dragY)
			{for $dragTo ($dragY+1 .. $dropY)
				{X11::GUITest::MoveMouseAbs($dragX,$dragTo);
				if($drag eq 'alert')
					{Accept(1);}
				}
			}
		else
			{for $dragTo (1 .. $dragY - $dropY)
				{$dragBy =  $dragY - $dragTo;
				X11::GUITest::MoveMouseAbs($dragX,$dragBy);
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
				{X11::GUITest::MoveMouseAbs($dragTo,$dropY);
				if($drag eq 'alert')
					{Accept(1);}
				}
			}
		else
			{for $dragTo (1 .. $dragX - $dropX)
				{$dragBy =  $dragX - $dragTo;
				X11::GUITest::MoveMouseAbs($dragBy,$dropY);
				if($drag eq 'alert')
					{Accept(1);}
				}
			}
		if($drag eq 'scroll')
			{WaitSeconds(2);}
		X11::GUITest::MoveMouseAbs($dropX,$dropY);
		if($drag eq 'alert')
			{Accept(1);}
		if($drag eq 'cancel')
			{X11::GUITest::SendKeys("{ESC}");}
		elsif($drag eq 'bitmap')
			{return CheckBitmap()}
		X11::GUITest::ReleaseMouseButton(X11::GUITest::M_LEFT);
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
		X11::GUITest::MoveMouseAbs($dragX,$dragY);
		X11::GUITest::PressMouseButton(X11::GUITest::M_LEFT);
		for $dragTo (1 .. $dragY-1)
			{$dragBy =  $dragY - $dragTo;
			X11::GUITest::MoveMouseAbs($dragX,$dragBy);}
		for $dragTo (1 .. $dragX)
			{$dragBy =  $dragX - $dragTo;
			X11::GUITest::MoveMouseAbs($dragBy,1);}
		for $dragTo (1 .. $dropY)
			{X11::GUITest::MoveMouseAbs(1,$dragTo);}
		for $dragTo (1 .. $dropX)
			{X11::GUITest::MoveMouseAbs($dragTo,$dropY);}
		X11::GUITest::MoveMouseAbs($dropX,$dropY);
		X11::GUITest::ReleaseMouseButton(X11::GUITest::M_LEFT);}
	}
sub DragImage
	{my ($winX,$winY,$winWidth,$winHeight) = X11::GUITest::GetWindowPos($winIDs[0]);
	my ($dragX,$dragY,$dropX,$dropY) = (@_,$winX + $winWidth - 100,$winY + $winHeight - 100);
	if(Alive())
		{my $dragTo;
		print "Initiating drag and drop from location ".$dragX.":".$dragY." to location ".$dropX.":".$dropY."\n";
		X11::GUITest::MoveMouseAbs($dragX,$dragY);
		X11::GUITest::PressMouseButton(X11::GUITest::M_LEFT);
		for $dragTo ($dragY+1 .. $dropY)
			{X11::GUITest::MoveMouseAbs($dragX,$dragTo);}
		for $dragTo ($dragX+1 .. $dropX)
			{X11::GUITest::MoveMouseAbs($dragTo,$dropY);}
		X11::GUITest::MoveMouseAbs($dropX,$dropY);
		WaitSeconds(0.5);
		system("scrot --focused pass.bmp");
		my $pixelData = GetArea($winWidth-100,$winHeight-100,95,95);
		X11::GUITest::ReleaseMouseButton(X11::GUITest::M_LEFT);
		return CheckBitmap($pixelData);}
	else
		{return (0);	}
	}
sub Accept
	{my $n = shift;
	for my $i (1 .. $n)
		{if($i > 1)
			{WaitSeconds(0.3);}
		X11::GUITest::SendKeys("{SPC}");}
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
			system("scrot --focused pass$wait.bmp");
			@abcd = FindColors("pass$wait",34,139,34);
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
	{if(X11::GUITest::IsWindowViewable($winIDs[0]))
		{return 1;}
	else
		{return 0;}
	}
sub FindColors
	{open(TC, "<".(shift).".bmp") or die("Can't load image file.\n");
	my $n = int(@_)/3;
	seek(TC,10,0);
	read(TC,my $data, 4);
	my $bitmapStart = unpack('V',$data);
	seek(TC,4,1);
	read(TC,$data, 8);
	my ($width,$height) = unpack('ii',$data);
	seek(TC,8,1);
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
	{open(TC, "<pass.bmp") or die("Can't load image file.\n");
	my $area = 'Pixel data';
	my ($x,$y,$w,$h) = @_;
	seek(TC,10,0);
	read(TC,my $data, 4);
	my $bitmapStart = unpack('V',$data);
	seek(TC,4,1);
	read(TC,$data, 8);
	my ($width,$height) = unpack('ii',$data);
	my $dy = $width*3;
	if($dy%4 != 0)
		{$dy = $dy + 4 - ($dy)%4;}
	seek(TC,($height-$y-$h)*$dy + $x*3 + $bitmapStart - 26,1);
	for(my $i = 0; $i < $h; $i++)
		{read(TC,$data,$w*3);
		$area = join(',',$area,unpack("C*",$data));
		seek(TC,$dy-$w*3,1);}
	close TC;
	return $area;}
1;