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
                    Copyright 2021 coindogs.co            
                </div>
                <nav className="footerMenu">
                    <NavLink to="/">FAQ</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/">Privacy Policy</NavLink>
                    <NavLink to="/">Terms of Use</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Footer