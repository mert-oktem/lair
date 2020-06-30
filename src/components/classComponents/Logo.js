import React, {Component} from 'react'
import LogoImage from '../../img/lair-logo.png'
import {Link} from "react-router-dom";

class Logo extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="site-logo">
                <Link to="/"><img src={LogoImage} alt="Logo"/></Link>
            </div>
        )
    }
}

export default Logo