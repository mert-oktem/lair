import React, {Component} from 'react'
import {Link} from "react-router-dom";

class DiscoveryNav extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="nav-discovery">
                <Link to="/discovery"><h3>Explore</h3></Link>
            </div>
        )
    }
}

export default DiscoveryNav