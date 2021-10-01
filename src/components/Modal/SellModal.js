import React, { useState } from "react";
import './Modal.css';



const SellModal = (props) => {
    const [price, setPrice] = useState(18);

    return (
        <React.Fragment>
            <a type="button" href="!#" className="filled-button button_active" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                Sell
            </a>
            <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="staticBackdropLabel">deposite</h5>
                        </div>
                        <div className="modal-body">
                            <div className="amount-body">
                                <div className="amonut-body__wrv">
                                    You will receive:
                                </div>
                                <div className="amount-body__dollars">
                                    {price} USD
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer amount-btn">
                            <a href="!#" className="btn change-amount-button" data-bs-dismiss="modal">Change amount</a>
                            <a href={"/market"}
                                className="btn grad-modal-button" 
                            >Continue</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


export default SellModal;

