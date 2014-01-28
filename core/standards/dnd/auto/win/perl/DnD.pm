#!/usr/bin/perl
use strict;
use warnings;
use Win32::GuiTest;
package DnD;
my @winIDs;
my @winX;
my @winY;
my $winR;
my $winB;
my $lastTC = '';
sub GrabWindow
	{my $winName = shift;
	if($winName eq 'Gogi')
		{$winName = 'WinGogi'}
	elsif($winName =~ '^(Desktop|TV|SmartPhone)$')
		{$winName = "WinGogi $1"}
	my ($winID) = Win32::GuiTest::FindWindowLike(undef,$winName) or die("Can not find WinGogi window, make sure that WinGogi is running.\n");
	$winName = Win32::GuiTest::GetWindowText($winID);
	Win32::GuiTest::SetForegroundWindow($winID);
	my @rect = Win32::GuiTest::GetWindowRect($winID);
	Win32::GuiTest::SendKeys("{F9}",0);
	unshift(@winIDs,$winID);
	unshift(@winX,$rect[0]);
	unshift(@winY,$rect[1]);
	($winR,$winB) = ($rect[2],$rect[3]);
	if(int(@winIDs) == 1)
		{print "Events will be sent to WinGogi window: \n$winName\n";}
	}
sub LoadPage
	{if(Alive())
		{my $tc = shift;
		Win32::GuiTest::SendKeys("{F8} $tc {ENTER}",0);
		if($tc ne $lastTC)
			{print "Testing TC ".$tc."\n";
			$lastTC = $tc;}
		}
	}
sub SwitchWindows
	{if(Alive())
		{Win32::GuiTest::SendKeys("%{TAB}",300);
		@winIDs = reverse(@winIDs);
		@winX = reverse(@winX);
		@winY = reverse(@winY);}
	}
sub SwitchTabs
	{if(Alive())
		{Win32::GuiTest::SendKeys("^{TAB}",300);}
	}
sub OpenNewTab
	{if(Alive())
		{Win32::GuiTest::SendKeys("^(t)",300);}
	}
sub CloseTab
	{if(Alive())
		{Win32::GuiTest::SendKeys("^(w)",300);}
	}
sub SelectAll
	{if(Alive())
		{Win32::GuiTest::SendKeys("^(a)",50);}
	}
sub TabNav
	{my $n = shift;
	if(Alive())
		{for my $i (1..$n)
			{Win32::GuiTest::SendKeys("{TAB}",50);}
		}
	}
sub Click
	{my ($x,$y,$n) = @_;
	if(Alive())
		{Win32::GuiTest::MouseMoveAbsPix($x,$y);
		for my $i (1..$n)
			{Win32::GuiTest::SendMouse("{LEFTCLICK}");}
		}
	}
sub ScanPage
	{my ($drag,$wait,@abcd) = (0,3,0,0,0,0,0,0,0,0);
	if(Alive())
		{until($wait == 0 or $drag == 1)
			{WaitSeconds(0.5);
			$wait = $wait - 1;
			my $screen = new Win32::GuiTest::DibSect;
			$screen->CopyWindow($winIDs[0]);
			$screen->SaveAs("tc$wait.bmp");
			@abcd = FindColors("tc$wait",140,180,210,180,130,70);
			if($abcd[0] != 0 and $abcd[4] != 0)
				{$drag = 1;}
			elsif($wait == 0)
				{print "Can't locate draggable area and/or dropzone\n";}
			else
				{print "Waiting for draggable area and/or dropzone to appear\n";}
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
			my $screen = new Win32::GuiTest::DibSect;
			$screen->CopyWindow($winIDs[0]);
			$screen->SaveAs("tc$wait.bmp");
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
			my $screen = new Win32::GuiTest::DibSect;
			$screen->CopyWindow($winIDs[0]);
			$screen->SaveAs("tc$wait.bmp");
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
		Win32::GuiTest::MouseMoveAbsPix($dragX,$dragY);
		Win32::GuiTest::SendMouse("{LEFTDOWN}");
		if($dropY > $dragY)
			{for $dragTo ($dragY+1 .. $dropY)
				{Win32::GuiTest::MouseMoveAbsPix($dragX,$dragTo);
				if($drag eq 'alert')
					{Accept(1);}
				}
			}
		else
			{for $dragTo (1 .. $dragY - $dropY)
				{$dragBy =  $dragY - $dragTo;
				Win32::GuiTest::MouseMoveAbsPix($dragX,$dragBy);
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
				{Win32::GuiTest::MouseMoveAbsPix($dragTo,$dropY);
				if($drag eq 'alert')
					{Accept(1);}
				}
			}
		else
			{for $dragTo (1 .. $dragX - $dropX)
				{$dragBy =  $dragX - $dragTo;
				Win32::GuiTest::MouseMoveAbsPix($dragBy,$dropY);
				if($drag eq 'alert')
					{Accept(1);}
				}
			}
		if($drag eq 'scroll')
			{WaitSeconds(2);}
		Win32::GuiTest::MouseMoveAbsPix($dropX,$dropY);
		if($drag eq 'alert')
			{Accept(1);}
		if($drag eq 'cancel')
			{Win32::GuiTest::SendKeys("{ESCAPE}",0);}
		elsif($drag eq 'bitmap')
			{return CheckBitmap()}
		Win32::GuiTest::SendMouse("{LEFTUP}");
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
		Win32::GuiTest::MouseMoveAbsPix($dragX,$dragY);
		Win32::GuiTest::SendMouse("{LEFTDOWN}");
		for $dragTo (1 .. $dragY-1)
			{$dragBy =  $dragY - $dragTo;
			Win32::GuiTest::MouseMoveAbsPix($dragX,$dragBy);}
		for $dragTo (1 .. $dragX)
			{$dragBy =  $dragX - $dragTo;
			Win32::GuiTest::MouseMoveAbsPix($dragBy,1);}
		for $dragTo (1 .. $dropY)
			{Win32::GuiTest::MouseMoveAbsPix(1,$dragTo);}
		for $dragTo (1 .. $dropX)
			{Win32::GuiTest::MouseMoveAbsPix($dragTo,$dropY);}
		Win32::GuiTest::MouseMoveAbsPix($dropX,$dropY);
		Win32::GuiTest::SendMouse("{LEFTUP}");}
	}
sub DragImage
	{my ($dragX,$dragY,$dropX,$dropY) = (@_,$winR - 100,$winB - 100);
	if(Alive())
		{my $dragTo;
		print "Initiating drag and drop from location ".$dragX.":".$dragY." to location ".$dropX.":".$dropY."\n";
		Win32::GuiTest::MouseMoveAbsPix($dragX,$dragY);
		Win32::GuiTest::SendMouse("{LEFTDOWN}");
		for $dragTo ($dragY+1 .. $dropY)
			{Win32::GuiTest::MouseMoveAbsPix($dragX,$dragTo);}
		for $dragTo ($dragX+1 .. $dropX)
			{Win32::GuiTest::MouseMoveAbsPix($dragTo,$dropY);}
		Win32::GuiTest::MouseMoveAbsPix($dropX,$dropY);
		my $screen = new Win32::GuiTest::DibSect;
		$screen->CopyWindow($winIDs[0]);
		$screen->SaveAs("pass.bmp");
		my $pixelData = GetArea("pass",$winR-100,$winB-100,95,95);
		Win32::GuiTest::SendMouse("{LEFTUP}");
		return CheckBitmap($pixelData);}
	else
		{return (0);}
	}
sub Accept
	{my $n = shift;
	for my $i (1 .. $n)
		{if($i > 1)
			{Win32::GuiTest::SendKeys("{SPACE}",300);}
		else
			{Win32::GuiTest::SendKeys("{SPACE}",0);}
		}
	}
sub Green
	{if(Alive())
		{WaitSeconds(1);
		my ($wait, @abcd) = (3,0,0,0,0);
		until($wait == 0)
			{if($wait < 3)
				{print "Waiting for test result\n";
				WaitSeconds(2);}
			$wait = $wait - 1;
			my $screen = new Win32::GuiTest::DibSect;
			$screen->CopyWindow($winIDs[0]);
			$screen->SaveAs("pass$wait.bmp");
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
	{if(Win32::GuiTest::IsWindowVisible($winIDs[0]))
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
				{($abcd[4*$i],$abcd[4*$i+3]) = (length($1)/3,$height-$y);}
			if($abcd[4*$i] != 0 and $data =~ /(^(?:...)*$pattern[$i])/)
				{($abcd[4*$i+2],$abcd[4*$i+1]) = (length($1)/3,$height-$y);}
			}
		}
	close TC;
	return splice(@abcd,0,4*($n+1));}
sub GetArea
	{open(TC, "<".(shift).".bmp") or die("Can't load image file.\n");
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