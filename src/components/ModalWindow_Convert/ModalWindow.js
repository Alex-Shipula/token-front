import React, { Component, Fragment } from 'react';  
import { Modal } from 'react-bootstrap';
import Market from '../../pages/Market';
class ModalWindow extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            showModal: false  
        };  
    }  
  
    isShowModal = (status) => {  
        this.handleClose();  
        this.setState({ showModal: status });  
    }  
  
    handleClose = () => {  
        this.props.onPopupClose(false);  
    }  
  
  
    render() {  
        return (  
            <Fragment class="">  
                <Modal show={this.props.showModalPopup} onHide={this.handleClose}  
                    size="xl"  
                    aria-labelledby="contained-modal-title-vcenter"  
                    centered  
                >  
                    <Modal.Header closeButton>  
                        <Modal.Title id="sign-in-title">  
                           <h2 class="text-center">Select Dog from Market</h2>
                         </Modal.Title>  
                    </Modal.Header>  
                    <Modal.Body>  
                      <Market showElementsStatus = {false} ShowConvertPage={true} />
                    </Modal.Body>  
  
                </Modal >  
            </Fragment >  
  
        );  
    }  
}  
  
export default (ModalWindow); 