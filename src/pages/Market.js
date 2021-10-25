//components
import React, { useState, Component } from "react"
import Card from "../components/Card/Card"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Pagination from "../components/Pagination/Pagination"
import Profile from "../components/Profile/Profile"
//images
import divider from "../img/hr-color.png"
import { dogsByOwnerURL, dogsURL, settingsURL } from "../constants/URLs"
import { price, unity } from "../constants/Price"
const axios = require('axios');
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
const pageRowsCount = 3;
const pageCellCount_small = 3;
const pageCellCount_normal = 4;

// async function getDogOpensea (){
//     const resp = await axios.default.get('https://opensea.io/assets/0xcaac1c40780a5fe642fd216d54d8eb44f76a51a0/1885');
//     const dom = new jsdom.JSDOM(resp.data)
//     const element = dom.window.document.querySelector("Overflowreact__OverflowContainer-sc-10mm0lu-0 gjwKJf Price--amount");
//     return element;
// }
//let obj;
//getDogOpensea().then(res => {obj = res})
//console.log(obj);


class Market extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alldogs: [],
            dogs: [],
            changeDogs: [],
            rowsCount: 0,
            rowsCountArr: [],
            currentUser: ((props.currentUser == undefined) ? 0 : props.currentUser),
            pageCount: 1,
            pageNumber: 1,
            curGen: -1,
            curBreed: "",
            dogsCount: 0,
            Owner_ID: ((props.currentUser == undefined) ? 0 : props.currentUser),
            isNFT: 0,
            settings: [],
            showElements: props.showElementsStatus,
            showConvertPage: props.ShowConvertPage
        };
        this.changePurityPer = this.changePurityPer.bind(this);
        this.changePurchasePrice = this.changePurchasePrice.bind(this);
        this.pageClick = this.pageClick.bind(this);
        this.changeGen = this.changeGen.bind(this);
        this.changeBreed = this.changeBreed.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeNFT = this.changeNFT.bind(this);
        //console.log(((props.currentUser==undefined)?0:((props.currentUser==undefined)?0:props.currentUser)));
        this.getAllDogs(1, this, ((props.currentUser == undefined) ? 0 : props.currentUser));
        this.getAllSettings();
    }
    componentDidMount() {
        // fire your action here
    }
    async getAllDogs(pageNumber, owner, ownerID) {
        try {
            let pageCellCount = (owner.props.showElementsStatus) ? pageCellCount_normal : pageCellCount_small;
            //console.log(pageCellCount);
            axios.get(dogsURL).then((resp) => {
                let alldogs = this.setQuality(resp.data);
                let dogs = [];
                if (ownerID > 0) {
                    alldogs.map((dog, i) => {

                        if (
                            dog.Owner_ID == ownerID
                        ) {
                            dogs[dogs.length] = dog;
                        }
                    });

                }
                else {
                    alldogs.map((dog) => {     // dogs = alldogs
                        if (dog.IsOnSale === 1) {
                            dogs.push(dog);
                        }
                    });
                    dogs.map((a) => {return a.PurchasePrice = Number(a.PurchasePrice.split(',').join('.'))});
                }

                //console.log(dogs);
                let rowsCount = Math.ceil(dogs.length / pageCellCount);
                let rowsCountArr = [];
                let rowsCountMax = (pageNumber - 1) * (pageRowsCount) + pageRowsCount;
                if (rowsCountMax > rowsCount) {
                    rowsCountMax = rowsCount;
                }
                for (var i = (pageNumber - 1) * (pageRowsCount); i < rowsCountMax; i++) {
                    rowsCountArr.push(i);
                    // ещё какие-то выражения
                }


                owner.setState({ dogs: dogs });
                owner.setState({ alldogs: alldogs });
                owner.setState({ pageNumber: pageNumber });
                owner.setState({ rowsCount: rowsCountMax });
                owner.setState({ rowsCountArr: rowsCountArr });
                owner.setState({ dogsCount: dogs.length });
                owner.setState({ pageCount: Math.ceil(dogs.length / (pageCellCount * pageRowsCount)) });
                //console.log(`this data ${resp.data}`);
            });
        } catch (error) {
            console.error(error)
        }

    }
    async getAllSettings() {
        try {

            axios.get(settingsURL).then((resp) => {


                this.setState({ settings: resp.data });

                //console.log(resp.data);
            });
        } catch (error) {
            console.error(error)
        }

    }

    reRenderPageDogs(pageNumber, owner, dogs) {
        let pageCellCount = (owner.props.showElementsStatus) ? pageCellCount_normal : pageCellCount_small;
        let rowsCount = Math.ceil(dogs.length / pageCellCount);
        let rowsCountArr = [];
        let rowsCountMax = (pageNumber - 1) * (pageRowsCount) + pageRowsCount;
        if (rowsCountMax > rowsCount) {
            rowsCountMax = rowsCount;
        }
        for (var i = (pageNumber - 1) * (pageRowsCount); i < rowsCountMax; i++) {
            rowsCountArr.push(i);
            // ещё какие-то выражения
        }
        owner.setState({ rowsCountArr: rowsCountArr });
        owner.setState({ rowsCount: rowsCountMax });
        owner.setState({ pageNumber: pageNumber });
        owner.setState({ dogsCount: dogs.length });
        owner.setState({ pageCount: Math.ceil(dogs.length / (pageCellCount * pageRowsCount)) });

    }
    reRenderGenDogs(gen, owner) {
        //console.log(gen);
        owner.setState({ curGen: gen });
        let dogs = [];
        //console.log(this.state.alldogs.length);
        this.state.dogs.map((dog, i) => {

            if (
                ((this.state.isNFT < 0) || ((((dog.IsNFT == undefined) ? 0 : dog.IsNFT) == this.state.isNFT) || (((dog.IsOnSale == undefined) ? 0 : dog.IsOnSale) == this.state.isNFT)))
                && ((gen < 0) || (dog.Generation == gen))
                && ((this.state.curBreed == "") || (dog.TopBreedComposition_FullInfo.indexOf(this.state.curBreed) > -1))
                && ((this.state.Owner_ID == 0) || (dog.Owner_ID == this.state.Owner_ID))

            ) {
                //console.log(dog);
                dogs[dogs.length] = dog;
            }
        });
        owner.setState({ changeDogs: dogs });

        this.reRenderPageDogs(1, owner, dogs)


    }
    reRenderBreedDogs(breed, owner) {

        owner.setState({ curBreed: breed });
        let dogs = [];
        this.state.dogs.map((dog, i) => {

            if (
                ((this.state.isNFT < 0) || ((((dog.IsNFT == undefined) ? 0 : dog.IsNFT) == this.state.isNFT) || (((dog.IsOnSale == undefined) ? 0 : dog.IsOnSale) == this.state.isNFT)))
                && ((this.state.curGen < 0) || (dog.Generation == this.state.curGen))
                && ((breed == "") || (dog.TopBreedComposition_FullInfo.indexOf(breed) > -1))
                && ((this.state.Owner_ID == 0) || (dog.Owner_ID == this.state.Owner_ID))
            ) {
                dogs[dogs.length] = dog;
            }
        });
        owner.setState({ changeDogs: dogs });
        this.reRenderPageDogs(1, owner, dogs)

    }
    reRenderNameDogs(name, owner) {

        let Owner_ID = 0;
        this.state.settings.map((setting, i) => {

            if (setting.Email == name) {
                Owner_ID = setting.UserID;
            }

        });
        owner.setState({ Owner_ID: Owner_ID });
        let dogs = [];
        this.state.dogs.map((dog, i) => {

            if (
                ((this.state.isNFT < 0) || ((((dog.IsNFT == undefined) ? 0 : dog.IsNFT) == this.state.isNFT) || (((dog.IsOnSale == undefined) ? 0 : dog.IsOnSale) == this.state.isNFT)))
                && ((this.state.curGen < 0) || (dog.Generation == this.state.curGen))
                && ((this.state.curBreed == "") || (dog.TopBreedComposition_FullInfo.indexOf(this.state.curBreed) > -1))
                && ((Owner_ID == 0) || (dog.Owner_ID == Owner_ID))
            ) {
                dogs[dogs.length] = dog;
            }
        });
        owner.setState({ changeDogs: dogs });
        this.reRenderPageDogs(1, owner, dogs)

    }

    reRenderNFTDogs(isNFT, owner) {


        owner.setState({ NFT: isNFT });
        let dogs = [];
        this.state.dogs.map((dog, i) => {

            if (
                ((isNFT < 0) || ((((dog.IsNFT == undefined) ? 0 : dog.IsNFT) == isNFT) || (((dog.IsOnSale == undefined) ? 0 : dog.IsOnSale) == isNFT)))
                && ((this.state.curGen < 0) || (dog.Generation == this.state.curGen))
                && ((this.state.curBreed == "") || (dog.TopBreedComposition_FullInfo.indexOf(this.state.curBreed) > -1))
                && ((this.state.Owner_ID == 0) || (dog.Owner_ID == this.state.Owner_ID))
            ) {
                dogs[dogs.length] = dog;
            }
        });
        owner.setState({ changeDogs: dogs });
        this.reRenderPageDogs(1, owner, dogs)

    }

    reRenderPurchasePrice(val, owner) {
        if (Number(val) === -1) {
            this.state.dogs.sort((a, b) => {
                return Number(b.PurchasePrice) - Number(a.PurchasePrice)
            });
            this.reRenderPageDogs(1, owner, this.state.dogs);
        } if (Number(val) === 1) {
            this.state.dogs.sort((a, b) => {
                return Number(a.PurchasePrice) - Number(b.PurchasePrice)
            });
            this.reRenderPageDogs(1, owner, this.state.dogs);
        }
    }

    reRenderPurityPer(val, owner) {
        if (Number(val) === -1) {
            this.state.dogs.sort((a, b) => {
                return Number(b.PurityPer) - Number(a.PurityPer)
            });
            this.reRenderPageDogs(1, owner, this.state.dogs);
        } if (Number(val) === 1) {
            this.state.dogs.sort((a, b) => {
                return Number(a.PurityPer) - Number(b.PurityPer)
            });
            this.reRenderPageDogs(1, owner, this.state.dogs);
        }
    }

    pageClick(i) {

        this.reRenderPageDogs(i, this, this.state.dogs);
        //this.parent.getAllDogs(e.target.innerText)
        //   console.log(child.parent.getAllDogs(e.target.innerText));


    }

    changePurchasePrice(value) {

        this.reRenderPurchasePrice(value, this);
        //this.parent.getAllDogs(e.target.innerText)
        //   console.log(child.parent.getAllDogs(e.target.innerText));


    }
    changePurityPer(value) {

        this.reRenderPurityPer(value, this);
        //this.parent.getAllDogs(e.target.innerText)
        //   console.log(child.parent.getAllDogs(e.target.innerText));


    }
    changeGen(value) {

        this.reRenderGenDogs(value, this);
        //this.parent.getAllDogs(e.target.innerText)
        //   console.log(child.parent.getAllDogs(e.target.innerText));


    }
    changeBreed(value) {

        this.reRenderBreedDogs(value, this);
        //this.parent.getAllDogs(e.target.innerText)
        //   console.log(child.parent.getAllDogs(e.target.innerText));


    }
    changeName(value) {

        this.reRenderNameDogs(value, this);
        //this.parent.getAllDogs(e.target.innerText)
        //   console.log(child.parent.getAllDogs(e.target.innerText));


    }
    changeNFT(value) {

        this.reRenderNFTDogs(value, this);
        //this.parent.getAllDogs(e.target.innerText)
        //   console.log(child.parent.getAllDogs(e.target.innerText));


    }
    getQuality(str) {
        let result = "100";
        if (str.indexOf("%") > -1) {
            let last_index = str.lastIndexOf(" ");
            let end_index = str.lastIndexOf("%");
            result = str.substr(last_index + 1, (end_index - last_index - 1));
        }
        return result;

    }
    setQuality(arr) {
        arr.map((el, i) => {
            let quality = parseInt(this.getQuality(el.TopBreedComposition_FullInfo));
            el.Quality = quality;
            el.Price = price[quality] + " " + unity;
        });
        arr = arr.sort((a, b) => a.Quality < b.Quality ? 1 : -1);
        return arr;

    }

    render() {
        let pageCellCount = (this.props.showElementsStatus) ? pageCellCount_normal : pageCellCount_small;
        let page = [];
        if (this.state.pageCount > 1) {
            page.push(<Pagination pageClick={this.pageClick} curPage={this.state.pageNumber} pageCount={this.state.pageCount} />);
        }

        let dogs = [];
        //console.log(this.state.changeDogs);
        this.state.rowsCountArr.map((row, i) => {
            const cards = [];
            for (var j = 0; j < pageCellCount; j++) {
                var dog_j = row * pageCellCount + j;
                if ((dog_j < this.state.dogsCount)) {
                    cards.push(<Card isMarket={true} isOnSale={(this.state.dogs[dog_j].IsOnSale === 1)} price={`${this.state.dogs[dog_j].PurchasePrice} ETH`} isNFT={(this.state.dogs[dog_j].IsNFT == 1)} convertShowPage={this.state.showConvertPage} dogid={this.state.dogs[dog_j].DogID} name={this.state.dogs[dog_j].Name} img={this.state.dogs[dog_j].CurImage} text={this.state.dogs[dog_j].TopBreedComposition_FullInfo} />);
                }
            }
            dogs.push(<div className="row row-cols-2">
                {cards}
            </div>
            )

        })
        return (
            <>
                {
                    this.state.showElements ? <Header /> : null

                }

                <div className="bodyWrapper market">
                    <Profile changePurityPer={this.changePurityPer} changePurchasePrice={this.changePurchasePrice} />
                    <img src={divider} style={{ width: '100%' }} alt="" />

                    <div className="container-fluid todayMarket myDogs">


                        {dogs}

                    </div>



                    {page}

                    {
                        this.state.showElements ? <Footer /> : null
                    }
                </div>
            </>
        )

    }
}
export default Market