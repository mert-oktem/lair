import React from 'react'
import CloseButton from './closeButton/CloseButton'
import Logo from '../Logo'
import {Link} from 'react-router-dom'

const MobileMenu = props => {

    let mobileMenuClasses = 'mobile-menu'
    if (props.show) {
        mobileMenuClasses = 'mobile-menu open'
    }

    

    return(
        <div className={mobileMenuClasses}>
            <div className="mobile-menu-head">
                <Logo />
            </div>
                <nav className="mobile-menu-nav">
                    <ul>
                        <li><Link to="/" onClick={props.close}>Home</Link></li>
                        <li><Link to="/discovery" onClick={props.close}>Explore</Link></li>
                        <li><Link to="/articles" onClick={props.close}>Articles</Link></li>
                        <li><Link to="/aboutUs" onClick={props.close}>About Us</Link></li>
                        <li><Link to="/contact" onClick={props.close}>Contact</Link></li>
                        <li className="donate-button" onClick={props.close}><Link to="/donate">Donate</Link></li>
                    </ul>
                </nav>
        </div>
    )
}

export default MobileMenu