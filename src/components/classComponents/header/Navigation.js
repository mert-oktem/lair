import React, {Component} from 'react'
import DiscoveryNav from "../navigation/DiscoveryNav";
import DonateNav from "../navigation/DonateNav";
import ContactNav from "../navigation/ContactNav";
import ArticlesNav from "../navigation/ArticlesNav";
import AboutNav from "../navigation/AboutNav";

class Navigation extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="site-navigation">
                <nav className="site-nav">
                    <div className="menuToggle">
                        <input type="checkbox" />
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul className="nav-uo-list">
                            <li><DiscoveryNav /></li>
                            <li><ArticlesNav /></li>
                            <li><AboutNav /></li>
                            <li><ContactNav /></li>
                            <li><DonateNav /></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation