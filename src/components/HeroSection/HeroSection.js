//components
import Header from "../Header/Header"
import ColoredButton from "../ColoredButton/ColoredButton"
import HeroCard from "../HeroCard/HeroCard"
//images
import maindog from "../../img/maindog.svg"
import React, { useState,Component } from "react"

//styles
import './HeroSection.css'
class  HeroSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs:[
                {},{}
            ]
        };

        
    } 

    componentDidMount() {
      // fire your action here
      if(this.props.dogs!=undefined){
      this.setState( {dogs: this.props.dogs});
      }
    }
    componentWillReceiveProps(nextProps) {
        
        if(this.props.dogs!=undefined){
         this.setState( {dogs: nextProps.dogs});
        }
           
      }

render() {
    return(
        <div className="container-fluid heroSection">

            <Header withStarImage={false}/>
            <h1>Get your own <span className="textOrange">dog</span> as nft</h1>
        
            <div className="contentWrapper">
            <div className="row cloudsHero">
                <HeroCard dog={this.state.dogs[0]} position='left'/>
                <div className="heroDogCenter col-md">
                    <object id="my-svg" type="image/svg+xml" className="heroDogImg"  data={maindog}></object>
                    {/* <img className="heroDogImg" src="./img/maindog.svg" alt=""/> */}
                </div>
                <HeroCard dog={this.state.dogs[1]} position='right'/>
            </div>
            <div className="heroButtons">
                <ColoredButton color='gradient'>
                    Get started <a style={{textDecoration:"none"}} href="/convertNTF" className="material-icons">arrow_forward</a>
                </ColoredButton>
                {/* <a href="#" className="olButton">How it work?</a> */}
            </div>
            </div>
        </div>
    )
}
}
export default HeroSection
