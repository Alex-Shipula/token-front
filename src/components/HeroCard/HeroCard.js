//images
import heroDog from '../../img/heroDoglr.png'
import React, { useState,Component } from "react"


class  HeroCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dog:{}
        };

        
    } 

    componentDidMount() {
        // fire your action here
        if( this.props.dog!=undefined){
        this.setState( {dog: this.props.dog});
        }
      }
      componentWillReceiveProps(nextProps) {
        if( nextProps.dog!=undefined){
           this.setState( {dog: nextProps.dog});
        }
             
        }

render() {
    return(
        <div className='col-md hero-buy'>
            <div className={`card ${this.state.position === 'left' ? 'heroLeftBlock': 'heroRightBlock'}`}>
                <div className="card-img-bg">
                    <img src={this.state.dog.CurImage} className="card-img-top" alt="..."/>
                </div>
                <div className="card-body">
                    <div className="cBodyLeft">
                        <h5 className="card-title">{this.state.dog.Name}</h5>
                        <p className="card-text">{this.state.dog.TopBreedComposition_FullInfo}</p>
                        <div className="priceBottom">
                            <div className="regPrice">{this.state.dog.Price}</div>
                        </div>
                    </div>
                    <div className="cBoryRight"></div>
                </div>
            </div>
        </div>
    )
}
}

export default HeroCard