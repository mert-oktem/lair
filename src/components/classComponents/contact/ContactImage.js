import React, {Component} from 'react'
import ContactImg from '../../../img/img1/atlantic_bluefin_tuna.jpg'

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