SETLOCAL
@echo off
set /P secs="Minutes to sleep: "
set /A min=%secs%*60
timeout /T %min% /NOBREAK

powercfg /H OFF
rundll32.exe powrprof.dll,SetSuspendState 0,1,0