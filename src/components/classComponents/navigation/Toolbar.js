import React from 'react';
import HamburgerButton from './Hamburger'
import LogoImage from '../../../img/lair-logo.png'
import {Link} from "react-router-dom";

function refreshPage() {
    window.location.reload(false);
}

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div onClick={refreshPage} className="site-logo">
                <Link to="/"><img src={LogoImage} /></Link>
            </div>
            <div className="spacer" />
            <div>
                <HamburgerButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar-nav-items">
                <ul>
                    <li><Link to="/discovery">Explore</Link></li>
                    <li><Link to="/articles">Articles</Link></li>
                    <li><Link to="/aboutUs">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li className="donate-desktop-button"><Link to="/donate">Donate</Link></li>
                </ul> 
            </div>
        </nav>
    </header>
)

export default toolbar