import React, { useState, useEffect } from "react";
const Web3 = require('web3');


const { dogs_abi, access_abi, mixer_abi, token_abi } = require('../components/Metamask/abi');

const forwarderOrigin = 'http://localhost:9010';
const DOG_CONTRACT_ADDR = "0x4908A8Fd956fd5F027f95C0495F02E735ae4a9Ee";
const ACCESS_CONTRACT_ADDR = "0x712097886516001347A9cbE80469f0D448c8F15a";
const NFT_CONTRACT_ADDR = "0x61153c29895010D55DFC77c88a82DcFDf00c5545";
const MIXER_CONTRACT_ADDR = "0xCe9D286ea76Fd22edFa8c884EA75f405e51d3858";

async function nftBalanceOff() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(dogs_abi, NFT_CONTRACT_ADDR, { from: accounts[0] })
    const result = await contract.methods.balanceOf(accounts[0]).call();
    //console.log(result);
    return result;
}
async function dogBalanceOff() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(token_abi, DOG_CONTRACT_ADDR, { from: accounts[0] })
    const result = await contract.methods.balanceOf(accounts[0]).call();
    //console.log(result);
    return result / Math.pow(10, 10);
}

const Balance = () => {

    const [dog, setDog] = useState('Wait......');
    const [nft, setNft] = useState('Wait......');

    dogBalanceOff().then(res => { setDog(res) });
    //console.log(dog);
    nftBalanceOff().then(res => { setNft(res) });
    //console.log(nft);
    return (
        <div>
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                aria-hidden="true" tabindex="-1">
                <div className="modal-content">
                    <div className="modal-header">
                        <a type="button" className="btn-close" href={"/"} > </a>
                    </div>
                    <div className="amount-body">
                        <h2>DOG: {dog}</h2>
                        <div className="mb-3"></div>
                        <div className="mb-3"></div>
                        {/* <h2>NFT: {nft}</h2> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Balance;