import React from 'react'
import CloseButton from './closeButton/CloseButton'
import Logo from '../Logo'

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
                        <li><a href="/">Home</a></li>
                        <li><a href="/discovery">Explore</a></li>
                        <li><a href="/articles">Articles</a></li>
                        <li><a href="/aboutUs">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li className="donate-button"><a href="/donate">Donate</a></li>
                    </ul>
                </nav>
        </div>
    )
}

export default MobileMenu