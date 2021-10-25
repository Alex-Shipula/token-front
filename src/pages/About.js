import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

const About = () => {
    return(
        <>
            <Header/>
            <div className="bodyWrapper">
                <div className="container aboutFirst">
                    <h1>about us</h1>
                    <h2>MY PUPPY COMPANY LLC</h2>
                    <p className="address">
                    4th Floor, Metroline House 118-122 <br />
                    College Road HARROW ENGLAND HA1 1BQ <br />
                    Company #13491195 <br /> 
                    info@token.dog 
                    </p>
                </div>
                
                <div className="social-links">
                    <a href="https://www.facebook.com/gaming/Token.Dogs" ><i className="fab fa-facebook-square"></i></a>
                    <a href=" https://twitter.com/TokenDog" ><i className="fab fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/company/20171544"  ><i class="fab fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/token_dog/"  ><i class="fab fa-instagram"></i></a>
                    <a href="https://discord.gg/dqxnRnBm" ><i class="fab fa-discord"></i></a>
                    <a href="https://t.me/tokendogs" ><i class="fab fa-telegram-plane"></i></a>
                </div>

                <div className="container aboutMainContent">
                    <h2>We want you to be confident Browsing Token.Dog knowing that:</h2>
                
                    <ul>
                        <li>We do not hold your funds—all Token/NFTs are sent to your wallet immediately</li>
                        <li>We do not use insider information to play bid against our customers</li>
                        <li>We value your privacy—you are anonymous while playing</li>
                        <li>We do not log your IP address or location</li>
                        <li>We do not share or sell your private data</li>
                    </ul>
                
                    <p>
                        Even though we do not consider Coin Dogs to be a gambling game, the dog racetrack section has some aspects of a game of skill and chance. Gambling laws vary from country to country. As a law-abiding citizen, you should consult an attorney as to whether playing this game can be interpreted as gambling and whether or not your country’s laws allow you to play this game. Please know that we are not able to provide a legal advice.
                    </p>
                    <p>
                        We want you to have the best chance to earn profit so we can sustain and grow this game in the long term.
                    </p>
                    <p>
                        We wish you bountiful profits and great fun. Enjoy playing!
                    </p>

                    <h2>Contacting Us</h2>

                    <p style={{textAlign: 'center'}}>Please read our <a href="/faq">FAQ</a> first, if you don't find an answer there please email us at: <a href="mailto:info@token.dog">info@token.dog</a></p>
                </div>

                <Footer/>
            </div>
        </>
    )
}

export default About