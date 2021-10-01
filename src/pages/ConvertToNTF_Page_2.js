import { Component } from "react"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Step_Section_2 from "../components/ConvertNTF_Step_Section/Step_Section_2"
import './ConvertToNTF.css'
import './ConvertNTF_Page_2.css'
import NTF_Button from "../components/NTF_Button/NTF_Button"
import NTF_Button_Cancel from "../components/NTF_Button/NTF_Button_Cancel"
import Convert_Card from "../components/Conevrt_Card/Convert_Card"
import { dogsURL,hostURL } from "../constants/URLs"
import Metamask from "../components/Metamask/Metamask.js"
import { price, unity } from "../constants/Price"

const metamask = new Metamask()
const axios = require('axios');

function GetDogIdFromURL(){
    let url = window.location.href;
    let dogid =url.substr(url.lastIndexOf("/")+1, (url.length-url.lastIndexOf("/")-1))
    return dogid;
}

class ConvertToNFT_Page_2 extends Component{

    constructor(props){
        super(); 
        let dogid = GetDogIdFromURL();
        this.state={
            dogid:dogid,
            img:"", 
            quality:100
        }
        this.getdog(dogid);
        this.handleNextClick = this.handleNextClick.bind(this);
    }
    getQuality(str) {
        let result = "100";
        if (str.indexOf("%") > -1) {
            let last_index = str.lastIndexOf(" ");
            let end_index = str.lastIndexOf("%");
            result = str.substr(last_index + 1, (end_index - last_index-1));
        }
        return result;

    }
    getdog(dog_id){
        
        let path = dogsURL+"/"+dog_id;
        console.log(path);
        axios.get(path).then((resp)=>{
       let quality =this.getQuality((resp.data.TopBreedComposition_FullInfo == null) ? " 100%" : resp.data.TopBreedComposition_FullInfo);
       console.log(quality);
        this.setState({img:resp.data.Image});

        this.setState({ quality: quality});
        console.log(resp.data.Image);  
        })
        
    }
    async mintDog(){
        await metamask.connect()

        if (!metamask.isMetaMaskConnected())
            return false;

        const result = await metamask.mintDog( metamask.accounts[0], GetDogIdFromURL());   
        console.log("Mint result: ", result );
    } 

    async handleNextClick() {
        await this.mintDog()
        
        this.props.history.push(`/convertNTF_page_3/${this.state.dogid}`)
    }
    render(){
        return(
        <>
            <Header />
             <div class="bg-white">
              <Step_Section_2/>
              <div class="container mt-5">
                  <div class="row ">
                  <span class="text-center style_text_select mb-5">Select a dog to convert to NFT</span>
                     <div class="d-flex justify-content-center">
                         <div class="mt-5"><Convert_Card link={this.state.img}/></div>
                         <div class="convert_center_block "><img src="https://temp.coindogs.com/l/img/arrow10.png"></img></div>
                         <div class="mt-5 "><Convert_Card link={this.state.img}/></div>
                     </div>
                      <div class="d-flex justify-content-center mt-4">
                          <span class="total">Total cost:<span class="price">&nbsp;{price[this.state.quality]+" "+ unity}</span></span>
                      </div>
                    <div class="d-flex justify-content-center mt-4">
                          {/* <NTF_Button link={"/convertNTF_page_3/"+this.state.dogid} text="Next step"/> */}
                          <NTF_Button text="Next step" onClick={this.handleNextClick} />
                          <NTF_Button_Cancel text="Cancel"/>
                    </div>
                  </div>
              </div>
            <Footer/>
         </div>
        </>
        )
    }
}
export default ConvertToNFT_Page_2