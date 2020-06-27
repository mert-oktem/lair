import React, {Component} from 'react'
import {Link} from "react-router-dom";

class DonateNav extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="nav-donate">
                <Link to="/donate"><h3>Donate</h3></Link>
            </div>
        )
    }
}

export default DonateNav