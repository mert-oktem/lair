import React, {Component} from 'react'
import ContactLocationImg from "../../../img/langara-map.png";

class ContactLocationMap extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (

                <div className="contact-location-map">
                    <img src={ContactLocationImg} alt="Contact Location Map"/>
                </div>

        )
    }
}

export default ContactLocationMap