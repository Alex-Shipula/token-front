//components
import React, { useState,Component } from "react"
import Card from "../components/Card/Card"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Pagination from "../components/Pagination/Pagination"
import Profile from "../components/Profile/Profile"
import Market from "../pages/Market"
//images
import divider from "../img/hr-color.png"
import { dogsByOwnerURL } from "../constants/URLs"
const axios = require('axios');
class MyDogs extends Component {
    
    constructor() {
        super();
        this.state = {
            currentUser:localStorage.getItem('userID')
        };
      }
      componentDidMount() {
        // fire your action here
    }
      
      render(){
    return(
        <>
            <Market showElementsStatus={true} ShowConvertPage={false} currentUser={this.state.currentUser} />
            
        </>
    )

}
}
export default MyDogs