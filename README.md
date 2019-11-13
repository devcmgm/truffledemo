# truffledemo
Demo Truffle App

This demo give you a simple command line app using the demo unbox code from MetaCoin.

Base on code from: https://github.com/truffle-box/metacoin-box

NOTE: You should download and install Ganache https://www.trufflesuite.com/ganache and NODEJS https://nodejs.org/en/download/

Start up Ganache form Windows Start menu and ensure setup for http:/127.0.0.1:7545

First run the checksetup.bat script to see what pre-reqs are needed.

Then run the runtest.bat to see example.




++++++++++++++++++++++ Sample Run +++++++++++++++++++++++++++++++++

Your environment has been set up for using Node.js 12.13.0 (x64) and npm.

C:\Users\demo>cd C:\Users\demo\Downloads\truffledemo-master\truffledemo-master

C:\Users\demo\Downloads\truffledemo-master\truffledemo-master>checksetup

C:\Users\demo\Downloads\truffledemo-master\truffledemo-master>node --version   2>NUL  || echo "FIRST: You must download and install Node JS !"    && goto enderr
v12.13.0

C:\Users\demo\Downloads\truffledemo-master\truffledemo-master>REM npm -version 2>NUL || echo "SECOND download install Node NPM Package manager !" && goto enderr

C:\Users\demo\Downloads\truffledemo-master\truffledemo-master>node --version   2>NUL  && echo "Node JS is Installed"
v12.13.0
"Node JS is Installed"

C:\Users\demo\Downloads\truffledemo-master\truffledemo-master>npm -version   2>NUL  && echo "Node NPM is Installed"   && npm install truffle -g
6.12.0
"Node NPM is Installed"
C:\Users\demo\AppData\Roaming\npm\truffle -> C:\Users\demo\AppData\Roaming\npm\node_modules\truffle\build\cli.bundled.js

> truffle@5.1.0 postinstall C:\Users\demo\AppData\Roaming\npm\node_modules\truffle
> node ./scripts/postinstall.js

- Fetching solc version list from solc-bin. Attempt #1
- Downloading compiler. Attempt #1
+ truffle@5.1.0
added 27 packages from 439 contributors in 21.984s

C:\Users\demo\Downloads\truffledemo-master\truffledemo-master>runtest

C:\Users\demo\Downloads\truffledemo-master\truffledemo-master>dir "C:\Program Files\WindowsApps\Ganache*"   || echo "ERROR: Ganache not installed. Download https://www.trufflesuite.com/ganache and install Ganache !"   && goto errend
 Volume in drive C is Windows
 Volume Serial Number is 56C4-D34D

 Directory of C:\Program Files\WindowsApps

11/13/2019  05:05 PM    <DIR>          Ganache_2.1.2.0_x64__zh355ej5cj694
               0 File(s)              0 bytes
               1 Dir(s)  123,300,147,200 bytes free

C:\Users\demo\Downloads\truffledemo-master\truffledemo-master>echo "Start up Ganache Listening on Port: 7545"
"Start up Ganache Listening on Port: 7545"

C:\Users\demo\Downloads\truffledemo-master\truffledemo-master>call "truffle"  "migrate"

Compiling your contracts...
===========================
> Compiling .\contracts\ConvertLib.sol
> Compiling .\contracts\MetaCoin.sol
> Compiling .\contracts\Migrations.sol
> Compiling .\contracts\ConvertLib.sol
> Artifacts written to C:\Users\demo\Downloads\truffledemo-master\truffledemo-master\build\contracts
> Compiled successfully using:
   - solc: 0.5.12+commit.7709ece9.Emscripten.clang



Starting migrations...
======================
> Network name:    'development'
> Network id:      5777
> Block gas limit: 0x6691b7


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x397a9d37ada4c1956641eb2df2cbcad125a6a57442d01c95f061f20bea574c6c
   > Blocks: 0            Seconds: 0
   > contract address:    0xA05CbF454D64e523396e22f65bfeA6Aa6961b2c3
   > block number:        1
   > block timestamp:     1573664940
   > account:             0x5757121ff2cfE720703D20240A9eF5000c7A7A63
   > balance:             99.99472518
   > gas used:            263741
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00527482 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00527482 ETH


2_deploy_contracts.js
=====================

   Replacing 'ConvertLib'
   ----------------------
   > transaction hash:    0x9839c2c7f6898bdd601b6fa3141b920c1f0a6f1fa97e8e22989cacaeb561a212
   > Blocks: 0            Seconds: 0
   > contract address:    0xEe28C8f480086022fd3a064434Ba7b4D5Df06637
   > block number:        3
   > block timestamp:     1573664941
   > account:             0x5757121ff2cfE720703D20240A9eF5000c7A7A63
   > balance:             99.9917678
   > gas used:            105846
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00211692 ETH


   Linking
   -------
   * Contract: MetaCoin <--> Library: ConvertLib (at address: 0xEe28C8f480086022fd3a064434Ba7b4D5Df06637)

   Replacing 'MetaCoin'
   --------------------
   > transaction hash:    0xf687c9ab35512ab4580b36f8b7e328217f7efb2a090e7add429226ce2627e6b4
   > Blocks: 0            Seconds: 0
   > contract address:    0x6423d624280D96142F3693874F3c369E8a932A48
   > block number:        4
   > block timestamp:     1573664942
   > account:             0x5757121ff2cfE720703D20240A9eF5000c7A7A63
   > balance:             99.98495386
   > gas used:            340697
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00681394 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00893086 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.01420568 ETH


"Waiting for migrate to finish"
Using network 'development'.

network type:private
network id:5777
10000
20000
500
9500

C:\Users\demo\Downloads\truffledemo-master\truffledemo-master>
