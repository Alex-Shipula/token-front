
import { Component } from 'react';
import './Step_Section.css';


class Step_Section extends Component {
    render() {
        return (

            <div class="container">
                <div class="convert-page__top-line">
                    <div class="step">
                        <div class="step__number active_step">
                            <span>1</span>
                        </div>
                        <div class="step__info">
                            Select a dog
                        </div>
                        <div class="step__line">
                        </div>
                    </div>
                    <div class="step">
                        <div class="step__number">
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

export default Step_Section