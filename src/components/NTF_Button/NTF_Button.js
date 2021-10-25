
import { Component } from 'react';
import './NTF_Button.css'


class NTF_Button extends Component {
     
     constructor(props){
      super(props);
     }


    render() {
        return (
            <>
               <a {...this.props} href={this.props.link} className="filled-button button_active">{this.props.text}</a>
            </>
        )
    }
}

export default NTF_Button