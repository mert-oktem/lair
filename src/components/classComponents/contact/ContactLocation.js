import React, {Component} from 'react'
import ContactLocationImg from "../../../img/langara-map.png";
import LocIcon from '../../../img/ui_icons/PNG/ui_icons_location.png'
import PhoneIcon from '../../../img/ui_icons/PNG/ui_icons_phone.png'

class ContactLocation extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="contact-location">
                <div className="contact-location-heading"><h2>Contact us</h2></div>
                <div className="contact-location-text"><p>You are welcome to contact us if you have any questions
                    about wildlife.</p></div>
                <div className="contact-location-map"><img src={ContactLocationImg} alt="Contact Location Map"/></div>
                <div className="contact-location-info">
                    <div className="contact-location-info-add">
                        <div className="contact-location-info-add-icon"><img src={LocIcon} alt="Location Icon"/></div>
                        <div className="contact-location-info-add-text"><p>100 West 49th Avenue Vancouver
                            B.C. Canada V5Y 2Z6</p></div>
                    </div>
                    <div className="contact-location-info-phone">
                        <div className="contact-location-info-phone-icon"><img src={PhoneIcon} alt="Phone Icon"/></div>
                        <div className="contact-location-info-phone-text"><p>(604) 323 - 5511</p></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactLocation