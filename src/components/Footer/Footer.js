//libraries
import { NavLink } from 'react-router-dom'
//styles
// import './Footer.css'

const Footer = (props) => {

    const aaditionalClassName = props.parentPage ? props.parentPage + '-' : ''

    return(
        <div className={`container-fluid ${aaditionalClassName}footer`}>
            <div className="container cont-footer">
                <div className="cRight">
                Copyright © 2021 My Puppy Company LTD            
                </div>
                <nav className="footerMenu">
                    <NavLink to="/faq">FAQ</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/terms">Terms & Conditions</NavLink>
                    <NavLink to="/privacy">Privacy Policy</NavLink>
                    
                </nav>
            </div>
        </div>
    )
}

export default Footer