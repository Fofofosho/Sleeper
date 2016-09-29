SETLOCAL
@echo off
set sec=1
timeout /T %sec% /NOBREAK

powercfg /H OFF
rundll32.exe powrprof.dll,SetSuspendState 0,1,0