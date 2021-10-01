import { Component } from 'react';
import './Step_Section.css';
import './Step_Section_2.css'

class Step_Section_3 extends Component {
    render() {
        return (

            <div className="container">
                <div className="convert-page__top-line">
                    <div className="step">
                        <div className="step__number active_step_done">
                            <span><i className="fas fa-check"></i></span>
                        </div>
                        <div className="step__info">
                            Select a dog
                        </div>
                        <div className="step__line">
                        </div>
                    </div>
                    <div className="step">
                        <div className="step__number active_step_done">
                            <span><i className="fas fa-check"></i></span>
                        </div>
                        <div className="step__info">
                            Convert to NFT
                        </div>
                        <div className="step__line">
                        </div>
                    </div>
                    <div className="step">
                        <div className="step__number active_step_done">
                            <span>3</span>
                        </div>
                        <div className="step__info">
                            Sell/Save
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step_Section_3