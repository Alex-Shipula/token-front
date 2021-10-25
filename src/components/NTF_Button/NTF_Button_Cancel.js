
import { Component } from 'react';
import './NTF_Button.css'


class NTF_Button extends Component {
     
     constructor(props){
      super(props);
     }


    render() {
        return (
            <>
               <a href="#" class="filled-button-cancel"><span class="outline_cancel">{this.props.text}</span></a>
            </>
        )
    }
}

export default NTF_Button