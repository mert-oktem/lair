import React, {Component} from 'react'
import ContactIntro from "./ContactIntro";
import ContactImage from "./ContactImage";
import ContactDesc from "./ContactDesc";
import ContactForm from "./ContactForm";
import ContactLocation from "./ContactLocation";


class Contact extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return (
            <div className="site-contact">
                <ContactIntro />
                <ContactImage />
                <ContactDesc />
                <ContactForm />
                <ContactLocation />
            </div>
        )
    }

}
export default Contact