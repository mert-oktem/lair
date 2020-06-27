import React, {Component} from 'react'
import {Link} from "react-router-dom";

class ContactNav extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="nav-contact">
                <Link to="/contact"><h3>Contact</h3></Link>
            </div>
        )
    }
}

export default ContactNav