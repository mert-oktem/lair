import React, {Component} from 'react'
import {Link} from "react-router-dom";

class AboutNav extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="nav-about">
                <Link to="/aboutUs"><h3>About Us</h3></Link>
            </div>
        )
    }
}

export default AboutNav