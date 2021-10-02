import MetaMaskOnboarding from '@metamask/onboarding'
import { ethers } from 'ethers'
var Web3 = require('web3');
const { dogs_abi, access_abi, mixer_abi, token_abi } = require('./abi.js')


const forwarderOrigin = 'http://localhost:9010'
const TOKEN_CONTRACT_ADDR = "0x262fb23402d548df053771a4723f54cd6fda1591"
const ACCESS_CONTRACT_ADDR = "0x9e2e9861ed8504b6aaa32e54e3775c07c6bbbbc9"
const DOGS_CONTRACT_ADDR = "0xa961f940e9fb21d881403eacf62ae49395a07143"
const MIXER_CONTRACT_ADDR = "0xfa55333df4fa8976beb5b51332c8b8241d0a2b8a"

let onConnect = (accounts) => {
  console.log("connect not handled")
}
let onAccountChange = (accounts) => {
  console.log("account change not handled")
}
let onChainChange = () => {
  console.log("chain change not handled")
}
export default class Metamask{

  constructor(){
    this.accountButtonsInitialized = false
    this.accounts=[]
  }

  isMetaMaskInstalled (){
    return Boolean(window.ethereum && window.ethereum.isMetaMask)
  }

  isMetaMaskConnected(){
     return this.accounts && this.accounts.length > 0
  }

  install(){
    try {
      this.onboarding = new MetaMaskOnboarding({ forwarderOrigin })
      this.onboarding.startOnboarding()

    } catch (error) {
      console.error(error)
    }
  }

  async getNetworkAndChainId () {
    if (!this.isMetaMaskInstalled ()) return false
    try {
      this.chainId = await window.ethereum.request({
        method: 'eth_chainId',
      })
    } catch (err) {
      console.error(err)
    }
    return this.chainId
  }

  async connect(){
    if (!this.isMetaMaskInstalled ()) {
      this.install()
      return false
    }

    try {
      this.accounts= await window.ethereum.request({ method: 'eth_requestAccounts' })
      await this.getNetworkAndChainId()
    } catch (error) {
      console.error(error)
    }
    window.ethereum.on('chainChanged', this.handleNewChain)
    window.ethereum.on('accountsChanged', this.handleNewAccounts)

    onConnect(this.accounts)
    return this.accounts
  }
async mintDog(receiver, id, url){
    const web3 = new Web3(Web3.givenProvider)
    const contract = await new web3.eth.Contract(dogs_abi,DOGS_CONTRACT_ADDR,{ from: this.accounts[0] })
    return await contract.methods.mint(receiver,id,url).send({from: receiver})
  
  }

  async dogContract(){
    const web3 = new Web3(Web3.givenProvider)
    return await new web3.eth.Contract(dogs_abi,DOGS_CONTRACT_ADDR,{ from: this.accounts[0] })
  }

  async tokenContract(){
    const web3 = new Web3(Web3.givenProvider)
    return await new web3.eth.Contract(token_abi,TOKEN_CONTRACT_ADDR,{ from: this.accounts[0] })
  }

  async mixerContract(){
    const web3 = new Web3(Web3.givenProvider)
    return await new web3.eth.Contract(mixer_abi,MIXER_CONTRACT_ADDR,{ from: this.accounts[0] })
  }
  async accessoryContract(){
    const web3 = new Web3(Web3.givenProvider)
    return await new web3.eth.Contract(access_abi,ACCESS_CONTRACT_ADDR,{ from: this.accounts[0] })
  }


  setOnConnect(f){
    onConnect=f
  }
  setOnAccountChange(f){
    onAccountChange=f
  }
  setOnChainChange(f){
    onChainChange=f
  }
  handleNewChain (chainId) {
    this.chainId = chainId
    onChainChange(chainId)
  }


  handleNewAccounts (newAccounts) {
    this.accounts = newAccounts
    onAccountChange(newAccounts)

  }


  async metaMaskClientCheck(){
    if (!this.isMetaMaskInstalled()) {
      this.install()
      return false
    } else {

    window.ethereum.autoRefreshOnNetworkChange = false
    this.getNetworkAndChainId()

    window.ethereum.on('chainChanged', this.handleNewChain)
    window.ethereum.on('accountsChanged', this.handleNewAccounts)
    try {
      const newAccounts = await window.ethereum.request({
        method: 'eth_accounts',
      })
      this.handleNewAccounts(newAccounts)
    } catch (err) {
      console.error('Error on init when getting accounts', err)
    }
      await this.connect()
    }
  }
  async getAccounts(){
    this.accounts = await window.ethereum.request({ method: 'eth_accounts' })
    return this.accounts
  }

}
