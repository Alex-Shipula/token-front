import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

const Faq = () => {
  return (
    <>
      <Header />
      <div class="bodyWrapper" style={{ height: "1110px" }}>
        <div class="container bodyWrapper__text">
          <h1 class="text-center">FAQ</h1>
          <h3>
            What is Token Dog ?
          </h3>
          <p>It is a collection of more than 10.000 unique Dogs NFTs on Ethereum Blockchain. Each one is thoughtfully designed, specifically picked.
          </p>
          <h3>
            How much does each Token Dog cost?
          </h3>
          <p>It depend rarity of the Token Dog, most expensive at class #0 to #10</p>
          <h3>Why is my Token Dog NFT not showing up?</h3>
          <p>Once a NFT is minted give 8 to 12 hours to be revealed.On OpenSea wait for metadata refresh at their end.</p>
          <h3>How to avoid high gas fees?</h3>
          <p>Gas fees varies based on network activity. Try minting at a different time.</p>
          <h3>Where can I view my Token Dog NFT?</h3>
          <p>You can view it in the profile page in your account or in the public profil of the Token Dog</p>
          <h3>Can this NFT be listed on OpenSea after minting?</h3>
          <p>Yes.</p>
        </div> 
      </div>
      <Footer parentPage="faq" />
    </>
  )
}

export default Faq