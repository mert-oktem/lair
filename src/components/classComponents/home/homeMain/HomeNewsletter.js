import React, {Component} from 'react'
import NewsletterImg from '../../../../img/feature_icons/Illustration_Newsletter.png'
import NewsletterEmailForm from "./homeNewsletterComponents/NewsletterEmailForm";

class HomeNewsletter extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="home-main-newsletter">
                <div className="newsletter-intro">
                    <h2>Get the latest wildlife
                        updates</h2>
                    <p>Be in the loop by signing up for our monthly newsletter.</p>
                </div>
                <div className="newsletter-image">
                    <img src={NewsletterImg} alt="Newsletter Icon" />
                </div>
                <NewsletterEmailForm />
            </div>
        )
    }
}

export default HomeNewsletter