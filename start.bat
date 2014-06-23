cd /d %~dp0
call npm install
call npm install -g supervisor
supervisor -e "js|jade" -w burnmap.js,js/templates -- burnmap.js --port 2508
pause
