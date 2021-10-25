/* eslint-disable jsx-a11y/alt-text */
//libraries
import { NavLink } from "react-router-dom";
//images
import logoMetamask from "../../img/Fox.png"
import logo from "../../img/logo.svg";
import { AuthContext } from "../../App";
import React, { useContext, useState, useEffect } from "react";
import Metamask from "../Metamask/Metamask";
const Web3 = require('web3');
const metamask = new Metamask();
//const BN = web3.utils.BN;

const { dogs_abi, access_abi, mixer_abi, token_abi, erc20Abi } = require('../Metamask/abi');
const TOKEN_CONTRACT_ADDR = "0xa2bdffcde606be6a65c7e81b2d63cd59b74e1f9c";

async function tokenBalanceOff() {
  if (metamask.isMetaMaskInstalled() === true) {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(erc20Abi, TOKEN_CONTRACT_ADDR, { from: accounts[0] })
    const result = await contract.methods.balanceOf(accounts[0]).call();
    return (result / Math.pow(10, 10)).toFixed(2);
  }
}
async function accountsIsTrue() {
  if (metamask.isMetaMaskInstalled() === true) {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    return (accounts && accounts.length > 0);
  }
}

const Header = (props) => {
  const starTop = props.withStarImage === false ? null : "starTop";
  const { state, dispatch } = useContext(AuthContext);
  const { logged } = state;
  const [balanceDog, setBalanceDog] = useState();
  const [metamaskIsTrue, setMetamaskIsTrue] = useState();
  const [metamaskConnected, setMetamaskConnected] = useState(false);
  const [account, setAccount] = useState(null);
  if (account) {
    window.ethereum.on("accountsChanged", () => { setAccount(window.ethereum.selectedAddress) });
  };
  useEffect(() => {
    setAccount(window.ethereum.selectedAddress)
  }, [account, metamaskConnected]);
  //console.log(account);
  useEffect(() => {
    accountsIsTrue().then(res => { setMetamaskConnected(res) })
  }, []);
  useEffect(() => {
    setMetamaskIsTrue(metamask.isMetaMaskInstalled());
  }, [metamaskIsTrue]);
  useEffect(() => {
    if (account) {
      tokenBalanceOff().then(res => { setBalanceDog(res) });
    }
  }, [account, metamaskIsTrue, metamaskConnected]);

  function openAir() {
    window.open('https://air.token.dog/', "_self");
  }
  function openTokenSale() {
    window.open('https://sale.token.dog/', "_self");
  }
  function openMetamask() {
    window.open('https://metamask.io/');
  }
  return (
    <div className={`container-fluid ${starTop}`}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container topNav">
          <div className="navbar-header-social">

            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="Coin Dogs"></img>
            </NavLink>
            <div class="top-social-links">
              <a href="https://www.instagram.com/token_dog/" target="_blank" class="scroll-to"><i class="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/gaming/Token.Dogs" target="_blank" class="scroll-to"><i class="fab fa-facebook-square"></i></a>
              <a href="https://twitter.com/TokenDogs" target="_blank" class="scroll-to"><i class="fab fa-twitter"></i></a>
              <a href="https://t.me/tokendogs" target="_blank" class="scroll-to"><i class="fab fa-telegram-plane"></i></a>
              <a href="https://discord.gg/dqxnRnBm" target="_blank" class="scroll-to"><i class="fab fa-discord"></i></a>
            </div>
            <div className="navbar-tog">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarSupportedContent"
          >
            <nav className="navbar-nav mb-2 mb-lg-0">
              <NavLink
                to="/"
                className="nav-link"
                aria-disabled="true"
              >
                <div style={(metamaskIsTrue === true) ? { display: 'none' } : {}} className="metamask-logo-connect">
                  <div className="connect-metamask" onClick={openMetamask} >Connect</div>
                  <img src={logoMetamask} className="logo-metamask"></img>
                </div>
              </NavLink>
              <NavLink
                to="https://sale.token.dog/"
                className="nav-link"
                aria-disabled="true"
                onClick={openTokenSale}
              >
                <div className="balanceDog" style={((metamaskIsTrue === true) && (metamaskConnected === true)) ? {} : { display: 'none' }} >{balanceDog} DOG</div>
                <div className="balanceDog" style={((metamaskIsTrue === true) && (metamaskConnected === true)) ? { display: 'none' } : {}} >0 DOG</div>
              </NavLink>
              {/* <NavLink
                to="/buy"
                className="nav-link"
                aria-disabled="true"
              >
                Buy
              </NavLink> */}
              <NavLink
                to="/market"
                className="nav-link"
                aria-disabled="true"
              >
                Market
              </NavLink>
              <NavLink
                to="https://sale.token.dog/"
                className="nav-link"
                aria-disabled="true"
                onClick={openTokenSale}
                target="_self"
              >
                Token Sale
              </NavLink>
              <NavLink
                to="http://air.token.dog/"
                className="nav-link"
                aria-disabled="true"
                onClick={openAir}
                target="_self"
              >
                Airdrop
              </NavLink>
              {/* <NavLink
                  to="/settings"
                  className="nav-link"
                  aria-disabled="true"
                  target="_self"
                >
                  Settings
                </NavLink> */}
              {logged && (
                <NavLink
                  to="/my-dogs"
                  className="nav-link"
                  aria-disabled="true"
                >
                  My dogs
                </NavLink>
              )}
              {/* {logged && (
                <NavLink
                  to="/settings"
                  className="nav-link"
                  aria-disabled="true"
                >
                  Settings
                </NavLink>
              )} */}
              {/* {logged && (
                <NavLink
                  to="/transactions"
                  className="nav-link"
                  aria-disabled="true"
                >
                  Transactions
                </NavLink>
              )} */}
              {!logged && (
                <NavLink
                  to="/login"
                  className="nav-link"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Login
                </NavLink>
              )}

              {logged && (
                <NavLink
                  onClick={() => dispatch({ type: "logout" })}
                  to="/"
                  className="nav-link"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Logout
                </NavLink>
              )}
              <NavLink
                to="/faq"
                className="nav-link"
                tabIndex="-1"
                aria-disabled="true"
              >
                FAQ
              </NavLink>
              {/* <NavLink
                to="/convertNTF"
                className="nav-link"
                tabIndex="-1"
                aria-disabled="true"
              >
                Convert NTF
              </NavLink> */}
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
