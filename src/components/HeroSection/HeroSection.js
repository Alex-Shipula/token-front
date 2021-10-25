//components
import Header from "../Header/Header"
import ColoredButton from "../ColoredButton/ColoredButton"
import HeroCard from "../HeroCard/HeroCard"
//images
import maindog from "../../img/maindog.svg"
import React, { useState, Component } from "react"

//styles
import './HeroSection.css'
class HeroSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: [
                {}, {}
            ]
        };


    }

    componentDidMount() {
        // fire your action here
        if (this.props.dogs != undefined) {
            this.setState({ dogs: this.props.dogs });
        }
    }
    componentWillReceiveProps(nextProps) {

        if (this.props.dogs != undefined) {
            this.setState({ dogs: nextProps.dogs });
        }

    }

    render() {
        return (
            <div className="container-fluid heroSection">

                <Header withStarImage={false} />
                <h1>Get your own <span className="textOrange">dog</span> as nft</h1>

                <div className="contentWrapper">
                    <div className="row cloudsHero">
                        {/* <HeroCard dog={this.state.dogs[0]} position='left' /> */}
                        {/* <div className="heroDogCenter col-md"> */}
                        {/* <object id="my-svg" type="image/svg+xml" className="heroDogImg" data={maindog}></object> */}
                        {/* <img className="heroDogImg" src="./img/maindog.svg" alt=""/> */}
                        {/* </div> */}
                        {/* <HeroCard dog={this.state.dogs[1]} position='right' /> */}
                        <div className='col-md hero-buy'>
                            <div className={'card heroLeftBlock'}>
                                <div className="card-img-bg">
                                    <a href="/dog-page/2120">
                                        <img src="https://token.dog:8010/public/uploadImages/dog-2120-nft.svg" className="card-img-top" alt="..." />
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="cBodyLeft">
                                        <a href="/dog-page/2120">
                                            <h5 className="card-title">Savannah Speedo</h5>
                                        </a>
                                        <p className="card-text">Labrador 100%</p>
                                        <div className="priceBottom">
                                            <div className="regPrice">333 ETH</div>
                                        </div>
                                    </div>
                                    <div className="cBoryRight"></div>
                                </div>
                            </div>
                        </div>

                        <div className="heroDogCenter col-md">
                            <object id="my-svg" type="image/svg+xml" className="heroDogImg" data={maindog}></object>
                            {/* <img className="heroDogImg" src="./img/maindog.svg" alt=""/> */}
                        </div>
                        {/* <HeroCard dog={this.state.dogs[1]} price={"200 ETH"} position='right'/> */}

                        <div className='col-md hero-buy'>
                            <div className={'card heroLeftBlock'}>
                                <div className="card-img-bg">
                                    <a href="/dog-page/335">
                                        <img src="https://token.dog:8010/public/uploadImages/dog-335-nft.svg" className="card-img-top" alt="..." />
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="cBodyLeft">
                                        <a href="/dog-page/335">
                                            <h5 className="card-title">Side Zone Shorty</h5>
                                        </a>
                                        <p className="card-text">Shiba Inu 100%</p>
                                        <div className="priceBottom">
                                            <div className="regPrice">200 ETH</div>
                                        </div>
                                    </div>
                                    <div className="cBoryRight"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="heroButtons">
                        {/* <ColoredButton color='gradient'>
                            Participate ro our AirDrop <a style={{ textDecoration: "none" }} href="https://air.token.dog" className="material-icons">arrow_forward</a>
                        </ColoredButton>
                        <ColoredButton color='gradient'>
                            Participate ro our Token Sale <a style={{ textDecoration: "none" }} href="https://sale.token.dog" className="material-icons">arrow_forward</a>
                        </ColoredButton> */}
                        <a style={{ textDecoration: "none" }} href="https://air.token.dog" className="gradientButton"> Participate in our AirDrop <span className="material-icons">arrow_forward </span></a>
                        <a style={{ textDecoration: "none" }} href="https://sale.token.dog" className="gradientButton"> Participate in our Token Sale <span className="material-icons">arrow_forward </span></a>
                        {/* <a href="#" className="olButton">How it work?</a> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default HeroSection
