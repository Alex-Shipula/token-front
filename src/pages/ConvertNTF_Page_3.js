import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Step_Section_3 from "../components/ConvertNTF_Step_Section/Step_Section_3"
import NTF_Button from "../components/NTF_Button/NTF_Button"
import Convert_Card from "../components/Conevrt_Card/Convert_Card"
import { Component } from "react"
import './ConvertToNTF.css'
import { dogsURL,hostURL } from "../constants/URLs"
import Metamask from "../components/Metamask/Metamask.js"
import cookie from 'react-cookies';
import { price, unity } from "../constants/Price";


const metamask=new Metamask()
const METAMASK_COOKIE="metamask_connected"
const axios = require('axios');

function GetDogIdFromURL(){
    let url = window.location.href;
    let dogid =url.substr(url.lastIndexOf("/")+1, (url.length-url.lastIndexOf("/")-1))
    return dogid;
}

class ConvertNFT_Page_3 extends Component {

    constructor(props){
        super(); 
        this.state={
            dogid:0,
            img:""
        }
        
    }
    componentDidMount(){
        let dogid = GetDogIdFromURL();
        this.getdog(dogid);
    }
     getdog(dog_id){
         
         let path = dogsURL+"/"+dog_id;
         console.log(path);
         axios.get(path).then((resp)=>{

            this.setState({img:resp.data.Image});

//           console.log(resp.data.Image);  
         })
         
     }

 async mintDog(){
    await metamask.connect()

   if (!metamask.isMetaMaskConnected()) 

      return false;

   const result = await metamask.mintDog( metamask.accounts[0], GetDogIdFromURL());   
   console.log("Mint result: ", result );
/*
  Тут потрібна обробка, що робити після мінту NFT

*/
 
 } 

    render() {
        return (
            <>
                <Header />
                <div className="bg-white">
                    <Step_Section_3 />
                    <div className="container mt-5">
                        <div className="row">
                            <span className="text-center style_text_select">DONE <i className="fas fa-check"></i></span>
                                    <div className="d-flex justify-content-center mt-3 mb-4">
                                        <Convert_Card link={this.state.img}/>
                                    </div>
                            <p className="text-center style_text_bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer diam cum eros, 
                             sapien et pellentesque cursus. Augue ipsum lobortis donec varius dui nulla eu aliquam dui.
                             Purus morbi nisi velit, non, tincidunt donec blandit. Convallis duis hac ut arcu, in.</p>
                             <div className="d-flex justify-content-center mt-5">
                               <NTF_Button link="" text="Save" onClick={e=>{ e.preventDefault(); window.location.href = "/my-dogs"; return false;}}/>
                              
                             </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </>
        )
    }
}

export default ConvertNFT_Page_3