//components

import Features from "../components/Features/Features";
import HeroSection from "../components/HeroSection/HeroSection";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import LastBlock from "../components/LastBlock/LastBlock";
import LearnBlock from "../components/LearnBlock/LearnBlock";
import TodayMarket from "../components/TodayMarket/TodayMarket";
import { AuthProvider, AuthContext } from "../App";
import React, { useState, Component } from "react";
import { price, unity } from "../constants/Price"
import { dogsByOwnerURL, dogsURL, settingsURL } from "../constants/URLs"

const axios = require('axios');


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogsHeroSection: [],
      dogsRandomSection: []
    };
    this.getAllDogs();


  }

  componentDidMount() {
    // fire your action here
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
    arr.map((el) => {
      let quality = parseInt(this.getQuality(el.TopBreedComposition_FullInfo));
      el.Quality = quality;
      el.Price = price[quality] + " " + unity;
      el.PriceNum = price[quality];
    });
    arr = arr.sort((a, b) => a.Quality < b.Quality ? 1 : -1);
    return arr;

  }
 
  async getAllDogs() {
    try {
      axios.get(dogsURL).then((resp) => {
        let alldogs = this.setQuality(resp.data);
        let dogs = [];
        let dogsHeroSection = [];
        let dogsRandomSection = [];
        alldogs.map((dog) => {
          if (dog.IsOnSale == 1) {
            dogs.push(dog);
          }
        });
        let dogsPrice = dogs.sort((a, b) => { return b.PriceNum - a.PriceNum });
        dogsHeroSection.push(dogsPrice[0]);
        dogsHeroSection.push(dogsPrice[1]);
        for (let i = 2; i < 10; i++) {
          dogsRandomSection.push(dogsPrice[i]);
        }
        this.setState({ dogsHeroSection: dogsHeroSection });
        this.setState({ dogsRandomSection: dogsRandomSection });

      });
    } catch (error) {
      console.error(error)
    }

  }

  render() {
    //const { state, dispatch } = useContext(AuthContext);
    return (
      <>
        <HeroSection dogs={this.state.dogsHeroSection} />
        <Features />
        <HowItWorks />
        <TodayMarket dogs={this.state.dogsRandomSection} />
        <div className="container">
          <LearnBlock
            textPosition="left"
            title="Your Dog can be worth Gold !"
            content="Our Token Dogs can be worth gold after breeding them well, adding some cool accessories, converting them into NFTs and selling them to the world."
            link="#"
          />
          <LearnBlock
            textPosition="right"
            title="How to buy a Token Dog NFT"
            content="ETH is the cryptocurrency used for all transactions on the Ethereum blockchain network, and it’s the currency you use to buy NFTs on Token Dog, in addition to our native token DOG Token $DOG"
            link="#"
          />
        </div>
        <LastBlock />
      </>
    );
  }
}

export default Index;
