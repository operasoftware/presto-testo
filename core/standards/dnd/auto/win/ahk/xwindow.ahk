; This is draft of automated drag and drop testing script
; List of testcases to run is stored in testcases.txt file
; Launch WinGogi build before running this script

#NoEnv
SetWorkingDir %A_ScriptDir%
SetTitleMatchMode 2
dragBuild = WinGogi Desktop
dropBuild = WinGogi TV
CoordMode, Mouse, Screen
CoordMode, Pixel, Screen
inverseDragSpeed = 10
dragColor = 0xD2B48C
dropColor = 0x4682B4
passColor = 0x228B22
tests = 0
failed = 0
startHour = %A_Hour%
startMin = %A_Min%
startSec = %A_Sec%
Loop, Read, xwindow.txt
	{IfWinExist, %dropBuild%
		{WinActivate
		WinGetPos, dropWinX, dropWinY, dropWinWidth, dropWinHeight, A
		dropSearchX := dropWinX + dropWinWidth
		dropSearchY := dropWinY + dropWinHeight
		Send {F8}
		SendRaw %A_LoopReadLine%
		Send {Enter}
		Sleep, 300
		PixelSearch, dropX, dropY, %dropWinX%, %dropWinY%, %dropSearchX%, %dropSearchY%, %dropColor%, 0, Fast RGB
		IfWinExist, %dragBuild%
			{WinActivate
			WinGetPos, dragWinX, dragWinY, dragWinWidth, dragWinHeight, A
			dragSearchX := dragWinX + dragWinWidth
			dragSearchY := dragWinY + dragWinHeight
			Send {F8}
			SendRaw %A_LoopReadLine%
			Send {Enter}
			Sleep, 300
			PixelSearch, dragX, dragY, %dragWinX%, %dragWinY%, %dragSearchX%, %dragSearchY%, %dragColor%, 0, Fast RGB
			}
		if (dragX > %dragWinX% && dragY > %dragWinY% && dropX > %dropWinX% && dropY > %dropWinY%)
			{dragX += 5
			dragY += 5
			dropX += 5
			dropY += 5
			MouseClickDrag, Left, %dragX%, %dragY%, %dropX%, %dropY%, %inverseDragSpeed%
			Sleep, 100
			}
		PixelSearch, passX, passY, %dropWinX%, %dropWinY%, %dropSearchX%, %dropSearchY%, %passColor%, 0, Fast RGB
		tests += 1
		if ErrorLevel
			{failed += 1
			Send ^t
			Sleep, 500
			}
		}
	}
Send {F8}
SendRaw data:text/plain,Done, %tests% tests processed, %failed% tests failed. Testing started on %startHour%:%startMin%:%startSec% and finished on %A_Hour%:%A_Min%:%A_Sec%.
Send {Enter}
