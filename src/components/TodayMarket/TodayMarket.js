//components
import Card from "../Card/Card"
import ColoredButton from "../ColoredButton/ColoredButton"
import OverlayedTitle from "../OverlayedTitle/OverlayedTitle"
import React, { useState, Component } from "react";
//styles
import './TodayMarket.css'

class TodayMarket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: [{}, {}, {}, {}, {}, {}, {}, {}]
        };


    }

    componentDidMount() {
        // fire your action here
        if ((this.props.dogs != undefined) && (this.props.dogs.length > 0)) {
            //console.log(this.props.dogs);
            this.setState({ dogs: this.props.dogs });
        }
    }
    componentWillReceiveProps(nextProps) {
        if ((nextProps.dogs != undefined) && (nextProps.dogs.length > 0)) {
            //console.log(nextProps.dogs);
            this.setState({ dogs: nextProps.dogs });
        }

    }

    render() {
        return (
            <div className="container-fluid todayMarket">
                <OverlayedTitle>LIMITED EDITION SALE</OverlayedTitle>

                {/* <div className="row row-cols-2">
            <Card isOnSale={(this.state.dogs[0].IsOnSale==1)} price={this.state.dogs[0].Price} isNFT={(this.state.dogs[0].IsNFT==1)} convertShowPage={false} dogid={this.state.dogs[0].DogID} name={this.state.dogs[0].Name} img={this.state.dogs[0].CurImage} text={this.state.dogs[0].TopBreedComposition_FullInfo} />
            <Card isOnSale={(this.state.dogs[1].IsOnSale==1)} price={this.state.dogs[1].Price} isNFT={(this.state.dogs[1].IsNFT==1)} convertShowPage={false} dogid={this.state.dogs[1].DogID} name={this.state.dogs[1].Name} img={this.state.dogs[1].CurImage} text={this.state.dogs[1].TopBreedComposition_FullInfo} />
            <Card isOnSale={(this.state.dogs[2].IsOnSale==1)} price={this.state.dogs[2].Price} isNFT={(this.state.dogs[2].IsNFT==1)} convertShowPage={false} dogid={this.state.dogs[2].DogID} name={this.state.dogs[2].Name} img={this.state.dogs[2].CurImage} text={this.state.dogs[2].TopBreedComposition_FullInfo} />
            <Card isOnSale={(this.state.dogs[3].IsOnSale==1)} price={this.state.dogs[3].Price} isNFT={(this.state.dogs[3].IsNFT==1)} convertShowPage={false} dogid={this.state.dogs[3].DogID} name={this.state.dogs[3].Name} img={this.state.dogs[3].CurImage} text={this.state.dogs[3].TopBreedComposition_FullInfo} />
            
            </div>
            <div className="row todaySecondRow">
            <Card isOnSale={(this.state.dogs[4].IsOnSale==1)} price={this.state.dogs[4].Price} isNFT={(this.state.dogs[4].IsNFT==1)} convertShowPage={false} dogid={this.state.dogs[4].DogID} name={this.state.dogs[4].Name} img={this.state.dogs[4].CurImage} text={this.state.dogs[4].TopBreedComposition_FullInfo} />
            <Card isOnSale={(this.state.dogs[5].IsOnSale==1)} price={this.state.dogs[5].Price} isNFT={(this.state.dogs[5].IsNFT==1)} convertShowPage={false} dogid={this.state.dogs[5].DogID} name={this.state.dogs[5].Name} img={this.state.dogs[5].CurImage} text={this.state.dogs[5].TopBreedComposition_FullInfo} />
            <Card isOnSale={(this.state.dogs[6].IsOnSale==1)} price={this.state.dogs[6].Price} isNFT={(this.state.dogs[6].IsNFT==1)} convertShowPage={false} dogid={this.state.dogs[6].DogID} name={this.state.dogs[6].Name} img={this.state.dogs[6].CurImage} text={this.state.dogs[6].TopBreedComposition_FullInfo} />
            <Card isOnSale={(this.state.dogs[7].IsOnSale==1)} price={this.state.dogs[7].Price} isNFT={(this.state.dogs[7].IsNFT==1)} convertShowPage={false} dogid={this.state.dogs[7].DogID} name={this.state.dogs[7].Name} img={this.state.dogs[7].CurImage} text={this.state.dogs[7].TopBreedComposition_FullInfo} />
            
            </div> */}
                <div className="row row-cols-2">
                    <Card isOnSale={(this.state.dogs[0].IsOnSale == 1)} price={"100 ETH"} isNFT convertShowPage={false} dogid={2921} name="Kibbles Kate" img="https://token.dog:8010/public/uploadImages/dog-2921-nft.svg" text="French Bulldog 100%" />
                    <Card isOnSale={(this.state.dogs[1].IsOnSale == 1)} price={"100 ETH"} isNFT convertShowPage={false} dogid={324} name="Kenshi Kermit" img="https://token.dog:8010/public/uploadImages/dog-324-nft.svg" text="Golder Retriever 100%" />
                    <Card isOnSale={(this.state.dogs[2].IsOnSale == 1)} price={"50 ETH"} isNFT convertShowPage={false} dogid={377} name="Dudley Daffy" img="https://token.dog:8010/public/uploadImages/dog-377-nft.svg" text="German Shepard 100%" />
                    <Card isOnSale={(this.state.dogs[3].IsOnSale == 1)} price={"50 ETH"} isNFT convertShowPage={false} dogid={2911} name="Betsy Boris" img="https://token.dog:8010/public/uploadImages/dog-2911-nft.svg" text="Dachshund 100%" />

                </div>
                <div className="row todaySecondRow">
                    <Card isOnSale={(this.state.dogs[4].IsOnSale == 1)} price={"20 ETH"} isNFT convertShowPage={false} dogid={2898} name="Cisco Chamberlain" img="https://token.dog:8010/public/uploadImages/dog-2898-nft.svg" text="Beagle 100%" />
                    <Card isOnSale={(this.state.dogs[5].IsOnSale == 1)} price={"10 ETH"} isNFT convertShowPage={false} dogid={522} name="Snowflake Scruffy" img="https://token.dog:8010/public/uploadImages/dog-522-nft.svg" text="Border Collie 100%" />
                    <Card isOnSale={(this.state.dogs[6].IsOnSale == 1)} price={"10 ETH"} isNFT convertShowPage={false} dogid={2114} name="Snop Speed Bump" img="https://token.dog:8010/public/uploadImages/dog-2114-nft.svg" text="Corgi 100%" />
                    <Card isOnSale={(this.state.dogs[7].IsOnSale == 1)} price={"10 ETH"} isNFT convertShowPage={false} dogid={1885} name="Waffles Wesley" img="https://token.dog:8010/public/uploadImages/dog-1885-nft.svg" text="Boxer 100%" />
                </div>
                {/* <ColoredButton color='gradient'>
                    View all <a style={{ textDecoration: "none" }} className="material-icons" href="/Market">arrow_forward</a>
                </ColoredButton> */}
            </div>
        )
    }
}
export default TodayMarket