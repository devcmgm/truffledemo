node --version 2>NUL || echo "FIRST: You must download and install Node JS !"  && goto enderr
REM npm -version 2>NUL || echo "SECOND download install Node NPM Package manager !" && goto enderr

node --version 2>NUL && echo "Node JS is Installed"
npm -version 2>NUL && echo "Node NPM is Installed" && npm install truffle -g

goto end

:enderr

echo ":**ERROR**099:Missing Prerequisite: !"

:end

echo "Finished !"