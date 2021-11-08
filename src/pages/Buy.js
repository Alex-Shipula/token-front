import React, { useState, useEffect } from "react";
import MetaMaskOnboarding from '@metamask/onboarding'
import { ethers } from 'ethers';
import Metamask from "../components/Metamask/Metamask";
const Web3 = require('web3');
const metamask = new Metamask();
const axios = require('axios');


function isMetaMaskConnect() {
    console.log(metamask.isMetaMaskInstalled());
    return metamask.isMetaMaskInstalled()
}

const { dogs_abi, access_abi, mixer_abi, token_abi } = require('../components/Metamask/abi');

const forwarderOrigin = 'http://localhost:9010';
const TOKEN_CONTRACT_ADDR = "0x4908A8Fd956fd5F027f95C0495F02E735ae4a9Ee";
const ACCESS_CONTRACT_ADDR = "0x712097886516001347A9cbE80469f0D448c8F15a";
const DOGS_CONTRACT_ADDR = "0x61153c29895010D55DFC77c88a82DcFDf00c5545";
const MIXER_CONTRACT_ADDR = "0xCe9D286ea76Fd22edFa8c884EA75f405e51d3858";
const TEST_PURSE = "0x809F1945AE7E0aaA6046Feefb2dc022c43b000f3";


async function tokenPurchasePurse(valueEth) {
    if (metamask.isMetaMaskInstalled() === true) {
        let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(Web3.givenProvider);
        const gas = await web3.eth.estimateGas({ to: TEST_PURSE });
        const result = await web3.eth.sendTransaction(
            {
                gas,
                to: TEST_PURSE,
                from: accounts[0],
                value: valueEth
            },
            (error) => {
                if (error) {
                    return console.error(error);
                }
            }
        );
        return result;
    }
}

async function balanceOffPurse() {
    if (metamask.isMetaMaskInstalled() === true) {
        let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(Web3.givenProvider);
        const result = await web3.eth.getBalance(accounts[0]);
        return (result / Math.pow(10, 10)).toFixed(2);
    }
}

async function tokenPurchaseContract(valueEth) {
    let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const web3 = new Web3(Web3.givenProvider);
    const contractGas = new web3.eth.Contract(mixer_abi, MIXER_CONTRACT_ADDR);
    const gas = await contractGas.methods.buyDogCoins().estimateGas({ from: accounts[0], value: valueEth });
    const contract = new web3.eth.Contract(mixer_abi, MIXER_CONTRACT_ADDR, { gas: gas });
    const result = await contract.methods.buyDogCoins().send({ from: accounts[0], value: valueEth });
    //console.log(result);
    return result;
}

async function tokenCourse() {
    const web3 = new Web3(Web3.givenProvider);
    let contract = new web3.eth.Contract(mixer_abi, MIXER_CONTRACT_ADDR);
    const result = await contract.methods.getCoinDogsRate().call();
    return result
}

async function tokenBalanceOff() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(token_abi, TOKEN_CONTRACT_ADDR, { from: accounts[0] })
    const result = await contract.methods.balanceOf(accounts[0]).call();
    //console.log(result / Math.pow(10, 10));
    return result / Math.pow(10, 10);
}

async function dogsBalanceOff() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(dogs_abi, DOGS_CONTRACT_ADDR, { from: accounts[0] })
    const result = await contract.methods.balanceOf(accounts[0]).call();
    //console.log(result);
    return result;
}

async function createDog() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(token_abi, TOKEN_CONTRACT_ADDR, { from: accounts[0] })
    const result = await contract.methods.mint(accounts[0], 'GetDogIdFromURL()', "https://coindogs.com/WebService.asmx/UnityGet?dog_id= <DOG_ID>").send({ from: accounts[0] })
    //console.log(result);
    return result;
}



const Buy = (props) => {

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [priceDog, setPriceDog] = useState();
    const [count, setCount] = useState();
    const [price, setPrice] = useState();
    const [transactionHash, setTransactionHash] = useState();
    const [balanceDog, setBalanceDog] = useState();
    //console.log(transactionHash);

    useEffect(() => {
        tokenCourse().then(res => { setPriceDog(res / 10 ** 10) });
    }, [priceDog])
    //console.log(priceDog);

    useEffect(() => {
        balanceOffPurse().then(res => { setBalanceDog(res) });
    }, [balanceDog])
    //console.log(balanceDog);

    const modalSuccess = document.querySelector('#modalSuccess');
    const modalFail = document.querySelector('#modalFail');

    const priceWEI = String(price * 1000000000000000000);
    //console.log(priceWEI);


    return (

        <div>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-center" id="staticBackdropLabel">
                            deposite
                        </h5>
                        <a type="button" className="btn-close" href={"/"} > </a>

                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label for="inputCounter" className="form-label">
                                DOG:
                            </label>
                            <input
                                type="number"
                                className="curr-input form-control"
                                id="inputCounter"
                                min="1"
                                onChange={() => {
                                    setPrice((Math.abs(priceDog * (Number(document.getElementById("inputCounter").value)))).toFixed(8));
                                    setCount(Number(document.getElementById("inputCounter").value));
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label for="inputPrice" className="form-label">
                                ETH:
                            </label>
                            <input
                                type="text"
                                className="curr-input form-control"
                                id="inputPrice"
                                placeholder="Search Currency"
                                value={price}
                            />
                        </div>

                    </div>
                    <div className="modal-footer amount-btn">
                        <a href="#modalWait" onClick={() => tokenPurchasePurse(priceWEI).then(res => { setTransactionHash(res.transactionHash) })}
                            className="btn grad-modal-button"
                            data-bs-toggle="modal"
                        >Continue</a>
                    </div>
                </div>
            </div>
            <div className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="modalWait" aria-hidden="true">
                <div className="modal-dialog  modal-dialog-scrollable"
                    aria-hidden="true" tabindex="-1">
                    <div className="modal-content">
                        <div className="modal-header">
                            <a type="button" className="btn-close" href={"/"} > </a>
                        </div>
                        <div className="modal-body">
                            <div className="amount-body">
                                <h3>Wait for transaction...</h3>
                                <div className="modal-body"></div>
                                <div style={(transactionHash !== undefined) ? {} : { display: 'none' }}
                                    onClick={() => window.location.href = `https://rinkeby.etherscan.io/tx/${transactionHash}`}>
                                    <a style={{ cursor: "pointer" }}><h4 >Check your transaction</h4></a></div>
                                <div className="mb-3"></div>
                                <div className="mb-3"></div>
                                <h5>Actual balance: {balanceDog} DOG</h5>
                            </div>
                        </div>
                        <div className="modal-footer amount-btn">
                            <div className="mb-4"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modalFail" aria-hidden="true"  >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                    aria-hidden="true" tabindex="-1">
                    <div className="modal-content">
                        <div className="modal-header">
                            <a type="button" className="btn-close" href={"/"} > </a>
                        </div>
                        <div className="modal-body">
                            <div className="amount-body">
                                <h1 className="text-danger"> FAIL! </h1>
                            </div>
                        </div>
                        <div className="modal-footer amount-btn">
                            <a href="#modalSuccess"
                                className="btn grad-modal-button"
                                data-bs-toggle="modal"
                            >Если удачно то...</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modalSuccess" aria-hidden="true"  >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                    aria-hidden="true" tabindex="-1">
                    <div className="modal-content">
                        <div className="modal-header">
                            <a type="button" className="btn-close" href={"/"} > </a>
                        </div>
                        <div className="modal-body">
                            <div className="amount-body">
                                <h1 className="text-success">Success</h1>
                            </div>
                        </div>
                        <div className="modal-footer amount-btn">
                            <a href={"/market"}
                                className="btn grad-modal-button"
                            >Continue</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Buy;



