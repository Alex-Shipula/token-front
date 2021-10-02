import React, { useState, useEffect } from "react";


const Buy = (props) => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const priceDog = 0.00004;
    const [count, setCount] = useState();
    const [price, setPrice] = useState();

    return (
        <div>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-center" id="staticBackdropLabel">
                            deposite
                        </h5>
                        <a type="button" className="btn-close" href={"/"} > </a>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label for="inputCounter" className="form-label">
                                DOG:
                            </label>
                            <input
                                type="number"
                                className="curr-input form-control"
                                id="inputCounter"
                                min="1"
                                onChange={() => {
                                    setPrice((Math.abs(priceDog * (Number(document.getElementById("inputCounter").value)))).toFixed(8));
                                    setCount(Number(document.getElementById("inputCounter").value));
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label for="inputPrice" className="form-label">
                                ETH:
                            </label>
                            <input
                                type="text"
                                className="curr-input form-control"
                                id="inputPrice"
                                placeholder="Search Currency"
                                value={price}
                            />
                        </div>

                    </div>
                    <div className="modal-footer amount-btn">
                        <a href="#modalWait"
                            className="btn grad-modal-button"
                            data-bs-toggle="modal"
                        >Continue</a>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="modalWait" aria-hidden="true"  >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                    id="modalWait" aria-hidden="true" tabindex="-1">
                    <div className="modal-content">
                        <div className="modal-header">
                            <a type="button" className="btn-close" href={"/"} > </a>
                        </div>
                        <div className="modal-body">
                            <h5 className="text-center"> Wait for transaction... </h5>
                        </div>
                        <div className="modal-footer amount-btn">
                            <a href="#modalFail"
                                className="btn grad-modal-button"
                                data-bs-toggle="modal"
                            >Если неудачно то...</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modalFail" aria-hidden="true"  >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                    aria-hidden="true" tabindex="-1">
                    <div className="modal-content">
                        <div className="modal-header">
                            <a type="button" className="btn-close" href={"/"} > </a>
                        </div>
                        <div className="modal-body">
                            <div className="amount-body">
                                <h1 className="text-danger"> FAIL! </h1>
                            </div>
                        </div>
                        <div className="modal-footer amount-btn">
                            <a href="#modalSuccess"
                                className="btn grad-modal-button"
                                data-bs-toggle="modal"
                            >Если удачно то...</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="modalSuccess" aria-hidden="true"  >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
                    aria-hidden="true" tabindex="-1">
                    <div className="modal-content">
                        <div className="modal-header">
                            <a type="button" className="btn-close" href={"/"} > </a>
                        </div>
                        <div className="modal-body">
                            <div className="amount-body">
                                <h1 className="text-success">Success</h1>
                            </div>
                        </div>
                        <div className="modal-footer amount-btn">
                            <a href={"/market"}
                                className="btn grad-modal-button"
                            >Continue</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Buy;



