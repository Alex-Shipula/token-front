import { Component } from 'react';
import './Convert_Card.css'


class Convert_Card extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
            <div className="image_block">
                <img src={this.props.link}></img>
            </div>
            </>
        )
    }
}

export default Convert_Card;