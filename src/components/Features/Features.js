//components
import FeatureCard from "../FeatureCard/Feature.Card"
import OverlayedTitle from "../OverlayedTitle/OverlayedTitle"
//styles
import './Features.css'

const Features = () => {
    return(
        <div className="features container-fluid">
            <div className="row">
            <OverlayedTitle>Furry, Reliable, Cuddly</OverlayedTitle>

            <div className="container">
                <div className="row featRow">
                    <FeatureCard
                        type='dog'
                        title='Unique'
                        text="Our Dogs have a unique DNA and appearance with up to 6+ Trillion Genetic Possibilities"
                    />
                    <FeatureCard
                        type='zamok'
                        title='Ownership'
                        text="With NFTs, the ownership of the assets has shifted to the actual buyer. NFTs can be bought and sold across many platforms with additional value"
                    />
                    <FeatureCard
                        type='charts'
                        title='Opportunity'
                        text="The NFT market is expanding daily, making this a great opportunity to acquire an asset that will rise in value. Be the first to get the rarest purebred!"
                    />
                </div>
            </div>
        
            </div>
        </div>
    )
}

export default Features