#NoEnv
SetWorkingDir %A_ScriptDir%
SetTitleMatchMode 1
IfWinExist, WinGogi
	{WinActivate
	CoordMode, Mouse, Screen
	CoordMode, Pixel, Screen
	WinGetPos, winX, winY, winWidth, winHeight, A
	searchX := winX + winWidth
	searchY := winY + winHeight
	inverseDragSpeed = 10
	dragColor = 0xD2B48C
	dropColor = 0x4682B4
	passColor = 0x228B22
	tests = 0
	failed = 0
	startHour = %A_Hour%
	startMin = %A_Min%
	startSec = %A_Sec%
	Loop, Read, dragaround.txt
		{IfWinActive, WinGogi
			{Send {F8}
			SendRaw %A_LoopReadLine%
			Send {Enter}
			Sleep, 300
			PixelSearch, dragX, dragY, %winX%, %winY%, %searchX%, %searchY%, %dragColor%, 0, Fast RGB
			PixelSearch, dropX, dropY, %winX%, %winY%, %searchX%, %searchY%, %dropColor%, 0, Fast RGB
			if (dragX > %winX% && dragY > %winY% && dropX > %winX% && dropY > %winY%)
				{dragX += 5
				dragY += 5
				dropX += 10
				dropY += 10
				MouseClick, Left, %dragX%, %dragY%, 1, %inverseDragSpeed%, D
				MouseMove, %dragX%, 1, %inverseDragSpeed%
				MouseMove, 1, 1, %inverseDragSpeed%
				MouseMove, 1, %dropY%, %inverseDragSpeed%
				MouseMove, %dropX%, %dropY%, %inverseDragSpeed%
				MouseClick, Left, %dropX%, %dropY%, 1, %inverseDragSpeed%, U
				Sleep, 100
				}
			PixelSearch, passX, passY, %winX%, %winY%, %searchX%, %searchY%, %passColor%, 0, Fast RGB
			tests += 1
			if ErrorLevel
				{failed += 1
				FileAppend, %A_LoopReadLine%`n, fail.txt
				Sleep, 500
				}
			}
		}
	msg = Done. %tests% tests processed, %failed% tests failed. Testing started on %startHour%:%startMin%:%startSec% and finished on %A_Hour%:%A_Min%:%A_Sec%
	Send {F8}
	if(failed > 0)
		{SendRaw data:text/plain,%msg%. List of failed tests is stored in fail.txt file.
		FileAppend, %msg%`n, fail.txt
		}
	else
		{SendRaw data:text/plain,%msg%
		}
	Send {Enter}
	}
else
	{
	MsgBox, Launch WinGogi build before running this script.
	}