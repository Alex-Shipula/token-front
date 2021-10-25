import { Component } from 'react';
import './Step_Section.css';
import './Step_Section_2.css'

class Step_Section_2 extends Component {
    render() {
        return (

            <div class="container">
                <div class="convert-page__top-line">
                    <div class="step">
                        <div class="step__number active_step_done">
                            <span><i class="fas fa-check"></i></span>
                        </div>
                        <div class="step__info">
                            Select a dog
                        </div>
                        <div class="step__line">
                        </div>
                    </div>
                    <div class="step">
                        <div class="step__number active_step_done">
                            <span>2</span>
                        </div>
                        <div class="step__info">
                            Convert to NFT
                        </div>
                        <div class="step__line">
                        </div>
                    </div>
                    <div class="step">
                        <div class="step__number">
                            <span>3</span>
                        </div>
                        <div class="step__info">
                            Sell/Save
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Step_Section_2