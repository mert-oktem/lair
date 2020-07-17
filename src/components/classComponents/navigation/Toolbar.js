import React from 'react';
import HamburgerButton from './Hamburger'
import LogoImage from '../../../img/lair-logo.png'
import {Link} from "react-router-dom";

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div className="site-logo">
                <Link to="/"><img src={LogoImage} /></Link>    
            </div>
            <div className="spacer" />
            <div>
                <HamburgerButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar-nav-items">
                <ul>
                    {/* <li><a href="/">Home</a></li> */}
                    <li><a href="/discovery">Explore</a></li>
                    <li><a href="/articles">Articles</a></li>
                    <li><a href="/aboutUs">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li className="donate-desktop-button"><a href="/donate">Donate</a></li>
                </ul> 
            </div>
        </nav>
    </header>
)

export default toolbar