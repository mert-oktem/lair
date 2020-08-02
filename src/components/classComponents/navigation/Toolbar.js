import React from 'react';
import HamburgerButton from './Hamburger'
import { NavLink } from 'react-router-dom'
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
            {/* <div className="spacer" /> */}
            <div>
                <HamburgerButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar-nav-items">
                <ul>
                    <li><NavLink activeClassName="active" className="discNav" to="/discovery">Explore</NavLink></li>
                    <li><NavLink activeClassName="active" className="articlesNav" to="/articles">Articles</NavLink></li>
                    <li><NavLink activeClassName="active" className="aboutUsNav" to="/aboutUs">About Us</NavLink></li>
                    <li><NavLink activeClassName="active" className="contactNav" to="/contact">Contact</NavLink></li>
                    <li className="donate-desktop-button"><NavLink activeClassName="active" className="donateNav" to="/donate">Donate</NavLink></li>
                </ul> 
            </div>
        </nav>
    </header>
)

export default toolbar