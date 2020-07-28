import React, {Component} from 'react'
import LogoImage from '../../img/lair-logo.png'
import {Link} from "react-router-dom";

class Logo extends Component {

    render() {
        function refreshPage() {
            window.location.reload(false);
        }
        return (
            <div onClick={refreshPage} className="site-logo">
                <Link to="/"><img src={LogoImage} alt="Logo"/></Link>
            </div>
        )
    }
}

export default Logo