//libraries
import { NavLink } from 'react-router-dom'
//components
import ColoredButton from "../ColoredButton/ColoredButton"
//styles
import './LastBlock.css'

const LastBlock = () => {
    return(
        <div className="foo">
            <div className="container fooLastBlock">
                <div className="blockTitle">Human best friend in NFT</div>
                <div className="fooText">
                NFTs are shaking up the concept of buying digital assets with secure ownership on a blockchain. It’s also making waves as in-game purchases across different games. With our dog uniqueness and constantly new accessories added each month, you can create a great canine digital collection!
                </div>
                <ColoredButton link='#' color='orange'>Get your Token Dog now!</ColoredButton>
            </div>
                <div className="container lfBottom">
                <div className="row landingFooterBottom">
                    <div className="cRight">
                        Copyright 2019 coindogs.co
                    </div>
                    <div className="footerMenu">
                        <NavLink to='/about'>FAQ</NavLink>
                        <NavLink to='/about'>About us</NavLink>
                        <NavLink to='/about'>Privacy Policy</NavLink>
                        <NavLink to='/about'>Terms of Use</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastBlock