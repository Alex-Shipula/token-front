//components
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Table from "../components/Table/Table"
import ColoredButton from "../components/ColoredButton/ColoredButton"
import React, { useState, Component } from "react";
import { transactionURL } from "../constants/URLs";
const axios = require('axios');

class Transactions extends Component {
    constructor() {
        super();
        this.state = {
            currentUser:localStorage.getItem('userID'),
            transactions:[]
        };
        this.getTransactions();
      }
      componentDidMount() {
        // fire your action here
    }
    async getTransactions() {
        try {
          axios.get(transactionURL +localStorage.getItem('userID')).then((resp) => {
           
            this.setState({ transactions: resp.data });

            console.log(resp.data);
          });
        } catch (error) {
          console.error(error);
        }
      }
    //console.log(parents);
    render(){
        let tr_data = [];
        
        this.state.transactions.map((trans, i) => {
            tr_data.push(
            
        <tr>
                <td>{trans.Guid}</td>
                <td>{trans.Amount+" "+ trans.Unity}</td>
                <td>{trans.Type}</td>
                <td>{trans.Status}</td>
            </tr>)
            

        })
        return(
        <>
            <Header></Header>
            <div className='bodyWrapper transaction-page'>
                <div className="container tRowTop">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            <h2>your transactions</h2>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <ColoredButton color='gradient' link=''>Deposite</ColoredButton>
                        </div>
                    </div>
                </div>
                <div className="container transactionClass">
            <table className="table table-bordered rounded">
                <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Type</th>
                    <th scope="col">Status</th>
                </tr>
                </thead>
                <tbody>
                {tr_data}
                
                
                </tbody>
            </table>
                
            </div>
            <Footer></Footer>
        </div>
        </>
        );
      }
    }
    

export default Transactions