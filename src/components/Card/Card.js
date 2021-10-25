import React, { useState,Component } from "react"
//images
import dod001 from '../../img/dod001.png'
import dod002 from '../../img/dod002.png'
import dod003 from '../../img/dod003.png'
import dod004 from '../../img/dod004.png'
import dod005 from '../../img/dod005.png'
import dod006 from '../../img/dod006.png'
import dod007 from '../../img/dod007.png'
import dod008 from '../../img/dod008.png'
import nft from '../../img/nft.png'
//styles
import './Card.css'

class Card extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name:((props.name==undefined)?"":props.name),
            img:((props.img==undefined)?dod003:props.img),
            text:((props.text==undefined)?"Sell":props.text),
            dogid:((props.dogid==undefined)?0:props.dogid),
            price:((props.price==undefined)?"":props.price),
            isOnSale:((props.isOnSale==undefined)?false:props.isOnSale),
            convertPage : props.convertShowPage,
            isMarket: props.isMarket
            
        };
        /*this.setState({
            name:((props.name==undefined)?props.name:"")
          });*/
    } 
    componentDidMount() {
        // fire your action here
    }
    componentWillReceiveProps(nextProps) {
        this.setState( {name:((nextProps.name==undefined)?"":nextProps.name)});
         this.setState( {img:((nextProps.img==undefined)?dod003:nextProps.img)});
         this.setState( {text:((nextProps.text==undefined)?"Sell":nextProps.text)});
         this.setState( {dogid:((nextProps.dogid==undefined)?0:nextProps.dogid)});
         this.setState( {price:((nextProps.price==undefined)?"":nextProps.price)});
         this.setState( {isOnSale:((nextProps.isOnSale==undefined)?false:nextProps.isOnSale)});
        
      }
   
 render(){
    return (
        this.props.dogPage?
    <>
     <div className="card">
        
            <div className="card-img-bg">
                <div style={this.props.isNFT?{}:{display:"none"}} className="ready2nft">
                    <img src={nft} alt=""/>
                </div>
                <img src={this.state.img} className="card_img" alt="..."/>
            </div>
        
        <div className="card-body">
            <div className="cBodyLeft">
                
                    <h5 className="card-title">{this.state.name}</h5>
               
                <p className="card-text">{this.state.text}</p>
                <div className="priceBottom">
                    <div style={this.state.isOnSale?{}:{display:"none"}} className="regPrice">{"hello"}</div>
                    
                </div>
            </div>
            <div className="cBoryRight ">
                <a href={"/dog-page/"+this.state.dogid} dog_id={this.state.dogid} className="dodRound">
                    <i className="fas fa-arrow-left"></i>
                </a>
            </div>
        </div>
    </div> 
    </>
    :
    <>
    <div className="col-md"><div className="card">
        <a href={"/dog-page/"+this.state.dogid} dog_id={this.state.dogid}>
            <div className="card-img-bg">
                <div style={this.props.isNFT?{}:{display:"none"}} className="ready2nft">
                    <img src={nft} alt=""/>
                </div>
                <img src={this.state.img} className="card_img" alt="..."/>
            </div>
        </a>
        <div className="card-body">
            <div className="cBodyLeft">
                <a href={"/dog-page/"+this.state.dogid} dog_id={this.state.dogid}>
                    <h5 className="card-title">{this.state.name}</h5>
                </a>
                <p className="card-text">{this.state.text}</p>
                <div className="priceBottom">
                    <div style={this.state.isOnSale?{}:{display:"none"}} className="regPrice">{this.state.price}</div>

                </div>
            </div>

            <div className="cBoryRight">

                {
                    this.state.convertPage?
                        <a href={"/convertNTF/"+this.state.dogid} className="dodRound">
                          <i className="fas fa-arrow-right"></i>
                        </a>: (this.state.isMarket === true) ? 
                        <a href={`https://opensea.io/assets/0xcaac1c40780a5fe642fd216d54d8eb44f76a51a0/${this.state.dogid}`} className="dodRound">
                            <i className="fas fa-arrow-right"></i>
                        </a>:
                        <a href={"/dog-page/"+this.state.dogid} dog_id={this.state.dogid} className="dodRound">
                        {/* <a href={"/convertNTF/"+this.state.dogid} className="dodRound"> */}
                            <i className="fas fa-arrow-right"></i>
                        </a>
                }
            </div>
        </div>
    </div></div>
    </>
    
        )
    }

}

export default Card