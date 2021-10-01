import React, { useState } from "react";
import './Modal.css';



const DepositeModal = (props) => {
    const priceDog = 18;
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(priceDog);

    return (
        <React.Fragment>
            <button
                type="button"
                style={props.style}
                className="gradientButton-modal"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
            >
                Sell no-NFT
            </button>
            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"

            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="staticBackdropLabel">
                                deposite
                            </h5>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label for="inputPrice" className="form-label">
                                    Choose Currency:
                                </label>
                                <input
                                    type="text"
                                    className="curr-input form-control"
                                    id="inputPrice"
                                    placeholder="Search Currency"
                                    value={price}

                                />
                            </div>
                            <div className="mb-3">
                                <label for="inputCounter" className="form-label">
                                    Amount:
                                </label>
                                <input
                                    type="number"
                                    className="curr-input form-control"
                                    id="inputCounter"
                                    min="0"
                                    max="1000"
                                    value={count}
                                    onChange={() => {
                                        setCount(Number(document.getElementById("inputCounter").value));
                                        setPrice(count !== 0 ? priceDog * (Number(document.getElementById("inputCounter").value)) : priceDog)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <a
                                href={"/market"}
                                className="btn grad-modal-button"
                            >  Yes
                            </a>
                            <div className="modal-footer">
                                <a
                                    href="!#"
                                    className="btn grad-modal-button"
                                    data-bs-dismiss="modal"
                                >
                                    No
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DepositeModal;