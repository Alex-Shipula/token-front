import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import StepSection from "../components/ConvertNTF_Step_Section/Step_Section"
import NTF_Button from "../components/NTF_Button/NTF_Button"
import NTF_Button_Cancel from "../components/NTF_Button/NTF_Button_Cancel"
import ModalWindow from "../components/ModalWindow_Convert/ModalWindow"
import { Component } from "react"
import { dogsURL, hostURL } from "../constants/URLs"
import { price, unity } from "../constants/Price"
import './ConvertToNTF.css'
import cardCross from '../img/card-cross.png'
const axios = require('axios');

function GetDogIdFromURL() {
    let url = window.location.href;
    let dogid = url.substr(url.lastIndexOf("/") + 1, (url.length - url.lastIndexOf("/") - 1))
    return dogid;
}



class ConvertToNFT extends Component {
    constructor(props) {
        super();
        let dogid = GetDogIdFromURL();
        this.state = {
            showModalWindow: false,
            dogid: dogid,
            quality:0,
            img: "",
           
        }
        this.getdog(dogid);
     
    }

    isShowPopup = (status) => {
        this.setState({ showModalWindow: status });
    };

    getQuality(str) {
        let result = "100";
        if (str.indexOf("%") > -1) {
            let last_index = str.lastIndexOf(" ");
            let end_index = str.lastIndexOf("%");
            result = str.substr(last_index + 1, (end_index - last_index));
        }
        return result;

    }
    getdog(dog_id) {

        let path = dogsURL + "/" + dog_id;
        console.log(path);
        axios.get(path).then((resp) => {

            this.setState({ img: ((resp.data.Image == null) ? cardCross : resp.data.Image) });
            this.setState({ quality: this.getQuality((resp.data.TopBreedComposition_FullInfo == null) ? " 100%" : resp.data.TopBreedComposition_FullInfo) });
            console.log('resp.data.Image ----->   ' + resp.data.Image);
        })

    }

    render() {
        return (
            <>  
                 <Header />
                <div class="bg-white">
                    <StepSection />
                    <div class="container mt-5">
                        <div class="row">
                            <span class="text-center style_text_select">Select a dog to convert to NFT</span>
                            
                            <div class="d-flex justify-content-center mt-3 mb-4">
                                <div class="block" onClick={() => this.isShowPopup(true)}>

                                    <img src={this.state.img} id="ph"></img>

                                </div>
                            </div>
                            <p class="text-center style_text_bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer diam cum eros,
                                sapien et pellentesque cursus. Augue ipsum lobortis donec varius dui nulla eu aliquam dui.
                                Purus morbi nisi velit, non, tincidunt donec blandit. Convallis duis hac ut arcu, in.</p>
                            <ModalWindow
                                showModalPopup={this.state.showModalWindow}
                                onPopupClose={this.isShowPopup}
                            ></ModalWindow>
                            <div class="d-flex justify-content-center mt-5 button-bottom-ntf">
                                <NTF_Button link={"/convertNTF_page_2/" + this.state.dogid} text="Next step" />
                                <NTF_Button_Cancel text="Cancel" />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </>
        )
    }
}

export default ConvertToNFT
