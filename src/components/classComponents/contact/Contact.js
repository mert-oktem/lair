import React, {Component} from 'react'
import ContactIntro from "./ContactIntro";
import ContactImage from "./ContactImage";
import ContactDesc from "./ContactDesc";
import ContactForm from "./ContactForm";
import ContactLocation from "./ContactLocation";
import Header from "../header/Header";
import Footer from "../footer/Footer";


class Contact extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return (
            <div className="site-contact">
                <Header />
                <main>
                    <ContactIntro />
                    <ContactImage />
                    <ContactDesc />
                    <ContactForm />
                    <ContactLocation />
                </main>
                <Footer />
            </div>
        )
    }

}
export default Contact