import React, {Component} from 'react'
import ContactImg from '../../../img/banners/Monkey.jpg'

class ContactImage extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="contact-image">
                <img src={ContactImg} alt="Contact Image"/>
            </div>
        )
    }
}

export default ContactImage