
dir "C:\Program Files\WindowsApps\Ganache*" || echo "ERROR: Ganache not installed. Download https://www.trufflesuite.com/ganache and install Ganache !" && goto errend
echo "Start up Ganache Listening on Port: 7545"

call "truffle"  "migrate"
echo "Waiting for migrate to finish"

truffle exec demo.js

goto end
:errend
echo "Had some setup issues with Ganache errors"

:end