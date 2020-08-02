import React, {Component} from 'react'
import ContactImg from '../../../img/banners/Bird.jpg'

class ContactImage extends Component {
    render() {
        return (
            <div className="contact-image">
                <img src={ContactImg} alt="Contact"/>
            </div>
        )
    }
}
export default ContactImage