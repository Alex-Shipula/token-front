//hooks
import { useState } from "react";
import { useHttp } from "../hooks/http.hook";
//components
import ColoredButton from "../components/ColoredButton/ColoredButton";
import Metamask from "../components/Metamask/Metamask.js";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import OverlayedTitle from "../components/OverlayedTitle/OverlayedTitle";
import cookie from "react-cookies";
//img
import loginSoba from "../img/login-soba.png";
//urls
import { loginURL, coinDogURL, settingsURL } from "../constants/URLs";
import { AuthContext } from "../App";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
const metamask = new Metamask();
const METAMASK_COOKIE = "metamask_connected";
if (cookie.load(METAMASK_COOKIE)) {
  metamask.metaMaskClientCheck();
}

const axios = require("axios");
const Login = () => {
  const history = useHistory();
  const { loading, error, request, clearError } = useHttp();
  const { state, dispatch } = useContext(AuthContext);
  if (state.logged) {
    history.push("/my-dogs");
  }

  const [form, setForm] = useState({
    email: "",
    password: "",
    error:""
  });
  const [metamaskButton, setMetamaskButton] = useState("Connect Metamask");

  metamask.setOnConnect((accounts) => {
    if (accounts && accounts.length > 0) {
      setMetamaskButton(
        "Metamask: " + accounts[0].substr(0, 8) + "..." + accounts[0].substr(36)
      );
      cookie.save(METAMASK_COOKIE, "1");
    }
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const login = async (event) => {
    event.preventDefault();
    
    try {
      form.error="Login or password is not correct";
      
      /*console.log("try to login");
      console.log(form.email);
      console.log(form.password);*/
      const response = await request(coinDogURL, "POST", {
        email: form.email,
        password: form.password,
      });
      console.log(response);
      console.log(response.userID);
      if(response.userID){
        form.error="";
        //console.log("rrrrrrrrrr")
      localStorage.setItem("userID", response.userID);
      axios.post(settingsURL + "/" + localStorage.getItem("userID"))
        .then((resp) => {
          console.log(resp.data);
        });
      dispatch({ type: "login" });
      history.push("/my-dogs");
      }
      else{
        //form.error="Login or password is not correct";
      }
    } catch (error) {
      console.error(error);
    }
  };

  
  
const countDownDate = new Date("Oct 18, 2021 20:00").getTime();
let x = setInterval(function() {

  let now = new Date().getTime();
  let cdId = document.getElementById("aircount");

  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  cdId? cdId.innerHTML = `
    <div class="timerItem">${days} DAYS </div>
    <div class="timerItem"> ${hours} HOURS </div>
    <div class="timerItem"> ${minutes} MIN </div>
  `:
  console.log('none');

  if (distance < 0) {
    clearInterval(x);
    cdId? cdId.innerHTML = "EXPIRED" : console.log('none');
  }
}, 1000);


  return (
    <div className="container-fluid login-page">
      <Header withStarImage={false} />
      <div className="login-wrapper col-lg-6">
        <div className="login-page-title">
          <div className="blockTitleOverlay">Login</div>
          <div className="blockTitle">
            Login <img src={loginSoba} alt="" />{" "}
          </div>
        </div>

        {/* <div className="enter-email-and-pass">
          Enter your email and password from{" "}
          <a href="https://coindogs.com/Register" className="" target="_blank">
            CoinDogs
          </a>{" "}
          to get started
        </div> */}

        <h2 className="h2air">Login with your coindogs account in:</h2>
        

        <div className="countAir" id="aircount"></div>    

        <div className="getAirText">but now you can participate our Airdrop by <a href="https://air.token.dog" className="getAirLink">clicking here </a> </div>    

        <form className="form-container login-form-main" onSubmit={login}>
          <input
            className="form-control"
            name="email"
            type="text"
            placeholder="Username or Email"
            aria-label="default input example"
            value={form.email}
            onChange={changeHandler}
          />
          <input
            className="form-control"
            name="password"
            type="password"
            placeholder="Password"
            aria-label="default input example"
            value={form.password}
            onChange={changeHandler}
          />
          <div className="login-forgot">
            <span style={{color:"red"}}>{form.error}</span>
            <a href="#" className="lf-a">
              Forgot your password?
            </a>
          </div>
          <ColoredButton color="gradient" classNames="login-button">
            Log in
          </ColoredButton>
          <div className="login-or">or</div>
          <div className="metamask-conn">
            <img src="./img/meta-fox.png" alt="" />
            <a
              href="#"
              className="meta-conn"
              id="metamask-connect-button"
              onClick={() => {
                metamask.metaMaskClientCheck();
              }}
            >
              {metamaskButton}
            </a>
          </div>
        </form>
      </div>

      <Footer parentPage="login" />
    </div>
  );
};

export default Login;