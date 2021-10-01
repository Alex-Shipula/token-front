//components
import React, { useState,Component } from "react"
import Card from "../components/Card/Card"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Pagination from "../components/Pagination/Pagination"
import Profile from "../components/Profile/Profile"
//images
import my_profile_logor from "../img/ava-box-image.png"
import { settingsURL } from "../constants/URLs"
const axios = require('axios');


class Settings extends Component {
    
    constructor() {
        super();
        this.state = {
        };
        this.onInputchange = this.onInputchange.bind(this);
        this.getSettings();
      }
      componentDidMount() {
        // fire your action here
    }
    onInputchange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
        //window.setTimeout(this.putSettings, 2000);
        this.putSettings(event.target.name,event.target.value);
      }
    
      async getSettings() {
    try {
        console.log("Test");
        axios.get(settingsURL+"/" + localStorage.getItem('userID')).then((resp) => {
            
            this.setState({"UserID": resp.data.UserID });
            this.setState({ "UserImage": resp.data.UserImage });
            this.setState({"Email": resp.data.Email });
            this.setState({ "Phone": resp.data.Phone });
            console.log(resp.data);
          });
    } catch (error) {
        console.error(error)
    }

}
async putSettings(param_name, param_value) {
    try {
        let putParams ={ 
            UserID: this.state.UserID, 
           // UserImage: this.state.UserImage, 
            Email: this.state.Email, 
            Phone: this.state.Phone,
           // UserImage: null, 
        };
        putParams[param_name]=param_value;
        console.log("Put");
        console.log(putParams);
        axios.patch(settingsURL+"/" + localStorage.getItem('userID'),putParams).then((resp) => {
            
            console.log("Get");
            console.log(resp.data);
          });
    } catch (error) {
        console.error(error)
    }

}
    render(){
        return (
        <>
            <Header/>
            <div className="bodyWrapper settings">
            <div class="container">

<div class="settings__title-wrapper">
  Settings
  <div class="h2 settings__title">Settings</div>
</div>

<div class="section-one row">
  <div class="section-one__left col-lg-8">

    <div class="phone-number">
      <div class="phone-number__title">
        Phone notifications
      </div>
      <input type="phone" class="form-control" name="Phone" id="phone" onChange={this.onInputchange} value={this.state.Phone} placeholder="1234567"></input>
      <div class="phone-number__under">
        Phone Number is for text notifications only. We will keep your number secret.
      </div>
    </div>

    <div class="mail-number">
      <div class="mail-number__title">
        email notifications
      </div>
      <input type="email" class="form-control"  name="Email" id="mail" onChange={this.onInputchange} value={this.state.Email} placeholder="1234567"></input>
      
    </div>

    <div class="balance">
     

      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button balance__title" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              my balance
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body">
              
              <table class="table table-striped">
                
                <tbody>
                  <tr>
                    <td>WALLET NAME</td>
                    <td>100 $</td>
                  </tr>
                  <tr>
                    <td>WALLET NAME</td>
                    <td>100 $</td>
                  </tr>
                  <tr>
                    <td>WALLET NAME</td>
                    <td>100 $</td>
                  </tr>
                  <tr>
                    <td>WALLET NAME</td>
                    <td>100 $</td>
                  </tr>
                  <tr>
                    <td>WALLET NAME</td>
                    <td>100 $</td>
                  </tr>
                  <tr>
                    <td>WALLET NAME</td>
                    <td>100 $</td>
                  </tr>
                  <tr>
                    <td>WALLET NAME</td>
                    <td>100 $</td>
                  </tr>
                  <tr>
                    <td>WALLET NAME</td>
                    <td>100 $</td>
                  </tr>
                  <tr>
                    <td>WALLET NAME</td>
                    <td>100 $</td>
                  </tr>
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
        
        
      </div>
      

    </div>

    <div class="accounts">
      <div class="accounts__title">
        Connected accounts
      </div>
      <div class="accounts__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci id enim ut. Pulvinar at magna leo at. Porttitor risus vestibulum, nunc, orci non. Amet, quisque vulputate aliquam sed magna pretium lectus sagittis, scelerisque.
      </div>
      <div class="accounts__buttons">
        <a class="green-button" href="#">
          CoinDogs <i class="fas fa-check ml10"></i>
        </a>
        <i class="far fa-trash-alt ml10"></i>
        <div class="delimeter"></div>
        <a class="blue-gradient-button" href="#">
          Connect Metamask <img class="ml10" src="./img/mdi_google.png" alt=""></img>
        </a>
        <i class="far fa-trash-alt ml10"></i>
      </div>
    </div>
    <div class="update-and-cancel">
      <a class="blue-gradient-button" href="#">
        Update my settings <i class="fas fa-paw ml10"></i>
      </a>
      <a href="#">Cancel</a>
    </div>

  </div>
  <div class="section-one__right col-lg-4">
    <div class="section-one__ava-box">
      <div class="ava-box__title">
        User IMAGE
      </div>
      <div class="ava-box__image">
        <img src={my_profile_logor} alt=""></img>
      </div>
    </div>
  </div>
</div>

</div>
                
                <Footer/>
            </div>
        </>
        )
    }
}

export default Settings