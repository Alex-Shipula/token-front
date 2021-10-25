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
                <div className="blockTitle">Man's best friend in NFT</div>
                <div className="fooText">
                NFTs are shaking up the concept of buying digital assets with secure ownership on a blockchain. It’s also making waves through in-game purchases across different games. With our dogs’ uniqueness and the new accessories added each month, you can create a great canine digital collection! 
                </div>
                <ColoredButton link='#' color='orange'>Get your Token Dog now!</ColoredButton>
            </div>
                <div className="container lfBottom">
                <div className="row landingFooterBottom">
                    <div className="cRight">
                    Copyright © 2021 My Puppy Company LTD
                    </div>
                    <div className="footerMenu">
                        <NavLink to='/faq'>FAQ</NavLink>
                        <NavLink to='/about'>About us</NavLink>
                        <NavLink to='/terms'>Terms & Conditions</NavLink>
                        <NavLink to='/privacy'>Privacy Policy</NavLink>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastBlock