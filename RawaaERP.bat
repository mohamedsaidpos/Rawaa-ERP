@echo off
REM Rawaa ERP Standalone
REM اضغط على الملف دا واستنى شوية

echo تشغيل Rawaa ERP...
echo.

REM تحقق من Node.js
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js غير مثبت! 
    echo اذهب لـ https://nodejs.org وحمّل LTS
    pause
    exit /b 1
)

REM شغّل التطبيق
cd /d "%~dp0"
node standalone-app.js

pause
