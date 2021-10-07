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


async function tokenPurchase(valueEth) {
    let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const web3 = new Web3(Web3.givenProvider);
    const contractGas = new web3.eth.Contract(mixer_abi, MIXER_CONTRACT_ADDR);
    const gas = await contractGas.methods.buyDogCoins().estimateGas({ from: accounts[0], value: valueEth });
    const contract = new web3.eth.Contract(mixer_abi, MIXER_CONTRACT_ADDR, { gas: 30000 });
    const result = await contract.methods.buyDogCoins().send({ from: accounts[0], value: valueEth });
    console.log(result);
    return result;
}

async function tokenCourse() {
    const web3 = new Web3(Web3.givenProvider);
    let contract = new web3.eth.Contract(mixer_abi, MIXER_CONTRACT_ADDR);
    const result = await contract.methods.getCoinDogsRate().call();
    console.log(result);
    return result
}

async function tokenBalanceOff() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(token_abi, TOKEN_CONTRACT_ADDR, { from: accounts[0] })
    const result = await contract.methods.balanceOf(accounts[0]).call();
    console.log(result / Math.pow(10,10));
    return result / Math.pow(10,10);
}

async function dogsBalanceOff() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(dogs_abi, DOGS_CONTRACT_ADDR, { from: accounts[0] })
    const result = await contract.methods.balanceOf(accounts[0]).call();
    console.log(result);
    return result;
}

async function createDog() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(token_abi, TOKEN_CONTRACT_ADDR, { from: accounts[0] })
    const result = await contract.methods.mint(accounts[0], 'GetDogIdFromURL()', "https://coindogs.com/WebService.asmx/UnityGet?dog_id= <DOG_ID>").send({ from: accounts[0] })
    console.log(result);
    return result;
}


// ?????? Promise result tokenCourse() and bigNumber at priceWEI
//const tokenCourseDog = tokenCourse();


const Buy = (props) => {

    const [show, setShow] = useState(true);

    const priceDog = 0.00003;
    const [count, setCount] = useState();
    const [price, setPrice] = useState();

    const priceWEI = String(price * 1000000000000000000);
    //console.log(priceWEI);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        <a href="#modalWait" onClick={() => tokenPurchase(priceWEI) }
                            className="btn grad-modal-button"
                            data-bs-toggle="modal"
                        >Continue</a>
                    </div>
                </div>
            </div>
            <div className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="modalWait" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                    id="modalWait" aria-hidden="true" tabindex="-1">
                    <div className="modal-content">
                        <div className="modal-header">
                        <div className="modal-body"></div>
                        </div>
                        <div className="modal-body">
                            <h3 className="text-center"> Wait for transaction... </h3>
                        </div>
                        <div className="modal-footer">
                        <div className="modal-body">
                            </div>
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



