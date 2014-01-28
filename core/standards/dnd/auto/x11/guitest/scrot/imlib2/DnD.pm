#!/usr/bin/perl
use strict;
use warnings;
use Image::Imlib2;
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
		@winIDs = reverse(@winIDs);
		@winX = reverse(@winX);
		@winY = reverse(@winY);
		@winWidth = reverse(@winWidth);
		@winHeight = reverse(@winHeight);}
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
	{my ($drag,$drop,$wait,$dragA,$dragB,$dragC,$dragD,$dropA,$dropB,$dropC,$dropD) = (0,0,3,0,0,0,0,0,0,0,0);
	if(Alive())
		{until($wait == 0 or $drag + $drop == 2)
			{WaitSeconds(1);
			$wait = $wait - 1;
			system("scrot --focused tc$wait.png");
			my $img = Image::Imlib2->load("tc$wait.png");
			my $x;
			my $y;
			$img->set_colour(210,180,140,255);
			if($img->find_colour)
				{($x, $y) = $img->find_colour;
				($dragA, $dragB) = ($winX[0]+$x, $winY[0]+$y);}
			$img->set_colour(70,130,180,255);
			if($img->find_colour)
				{($x, $y) = $img->find_colour;
				($dropA, $dropB) = ($winX[0]+$x, $winY[0]+$y);}
			$img->flip_horizontal();
			$img->flip_vertical();
			if($img->find_colour)
				{($x, $y) = $img->find_colour;
				($dropC, $dropD) = ($winX[0]+$winWidth[0]-$x, $winY[0]+$winHeight[0]-$y);}
			$img->set_colour(210,180,140,255);
			if($img->find_colour)
				{($x, $y) = $img->find_colour;
				($dragC, $dragD) = ($winX[0]+$winWidth[0]-$x, $winY[0]+$winHeight[0]-$y);}
			if($dragA != 0 and $dragB != 0 and $dragC != 0 and $dragD != 0)
				{$drag = 1;}
			else
				{if($wait == 0)
					{print "Can't locate draggable area\n"}
				else
					{print "Waiting while draggable area appears\n";}
				}
			if($dropA != 0 and $dropB != 0 and $dropC != 0 and $dropD != 0)
				{$drop = 1;}
			else
				{if($wait == 0)
					{print "Can't locate dropzone\n"}
				else
					{print "Waiting while dropzone appears\n";}
				}
			}
		}
	return ($dragA,$dragB,$dragC,$dragD,$dropA,$dropB,$dropC,$dropD);}
sub FindDraggableArea
	{my ($drag,$wait,$dragA,$dragB,$dragC,$dragD) = (0,3,0,0,0,0);
	if(Alive())
		{until($wait == 0 or $drag == 1)
			{WaitSeconds(1);
			$wait = $wait - 1;
			system("scrot --focused tc$wait.png");
			my $img = Image::Imlib2->load("tc$wait.png");
			my $x;
			my $y;
			$img->set_colour(210,180,140,255);
			if($img->find_colour)
				{($x, $y) = $img->find_colour;
				($dragA, $dragB) = ($winX[0]+$x, $winY[0]+$y);}
			$img->flip_horizontal();
			$img->flip_vertical();
			if($img->find_colour)
				{($x, $y) = $img->find_colour;
				($dragC, $dragD) = ($winX[0]+$winWidth[0]-$x, $winY[0]+$winHeight[0]-$y);}
			if($dragA != 0 and $dragB != 0 and $dragC != 0 and $dragD != 0)
				{$drag = 1;}
			else
				{if($wait == 0)
					{print "Can't locate draggable area\n"}
				else
					{print "Waiting while draggable area appears\n";}
				}
			}
		}
	return ($dragA,$dragB,$dragC,$dragD);}
sub FindDropzone
	{my ($drop,$wait,$dropA,$dropB,$dropC,$dropD) = (0,3,0,0,0,0);
	if(Alive())
		{until($wait == 0 or $drop == 1)
			{WaitSeconds(1);
			$wait = $wait - 1;
			system("scrot --focused tc$wait.png");
			my $img = Image::Imlib2->load("tc$wait.png");
			my $x;
			my $y;
			$img->set_colour(70,130,180,255);
			if($img->find_colour)
				{($x, $y) = $img->find_colour;
				($dropA, $dropB) = ($winX[0]+$x, $winY[0]+$y);}
			$img->flip_horizontal();
			$img->flip_vertical();
			if($img->find_colour)
				{($x, $y) = $img->find_colour;
				($dropC, $dropD) = ($winX[0]+$winWidth[0]-$x, $winY[0]+$winHeight[0]-$y);}
			if($dropA != 0 and $dropB != 0 and $dropC != 0 and $dropD != 0)
				{$drop = 1;}
			else
				{if($wait == 0)
					{print "Can't locate dropzone\n"}
				else
					{print "Waiting while dropzone appears\n";}
				}
			}
		}
	return ($dropA,$dropB,$dropC,$dropD);}
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
		my $pixelData = GetArea($winWidth[0]-100,$winHeight[0]-100,95,95);
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
			system("scrot --focused pass$wait.png");
			my $img = Image::Imlib2->load("pass$wait.png");
			$img->set_colour(34,139,34,255);
			if($img->find_colour)
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
	$pixelData =~ s/,70,130,180,255/S/g;
	$pixelData =~ s/,210,180,140,255/T/g;
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
	{if(X11::GUITest::IsWindowViewable($winIDs[0]))
		{return 1;}
	else
		{return 0;}
	}
sub GetArea
	{my $area = 'Pixel data';
	if(Alive())
		{system('scrot --focused pass.png');
		my $img = Image::Imlib2->load('pass.png');
		(my $x, my $y, my $w, my $h) = @_;
		for(my $i = 0; $i < $h;$i++)
			{for(my $j = 0; $j < $w;$j++)
				{$area = join(',',$area,$img->query_pixel($x+$j,$y+$i));}
			}
		}
	return $area}
1;