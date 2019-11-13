
'use strict';

global.artifacts = artifacts;
global.web3 = web3;

async function main(){
    //web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
    const newtworkType = await web3.eth.net.getNetworkType();
    const networkId = await web3.eth.net.getId();
    console.log("network type:"+newtworkType);
    console.log("network id:"+networkId);
    const MetaCoin = artifacts.require("MetaCoin");
    let instance = await MetaCoin.deployed();
    let accounts = await web3.eth.getAccounts();
    let balance = await instance.getBalance(accounts[0]);
    console.log(balance.toNumber());
    let ether = await instance.getBalanceInEth(accounts[0]);
    console.log(ether.toNumber());
    instance.sendCoin(accounts[1], 500);
    let received = await instance.getBalance(accounts[1]);
    console.log(received.toNumber());
    let newBalance = await instance.getBalance(accounts[0]);
    console.log(newBalance.toNumber());
}

// For truffle exec
module.exports = function(callback) {
    main().then(() => callback()).catch(err => callback(err))
};
