import React, {Component} from 'react'
import AboutUsCardImage from "./aboutUsCard/AboutUsCardImage";
import AboutUsCardName from "./aboutUsCard/AboutUsCardName";
import AboutUsCardRole from "./aboutUsCard/AboutUsCardRole";
import AboutUsCardDesc from "./aboutUsCard/AboutUsCardDesc";
import AboutUsCardSocial from "./aboutUsCard/AboutUsCardSocial";

class AboutUsCard extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="aboutUs-card">
                <AboutUsCardImage />
                <AboutUsCardName />
                <AboutUsCardRole />
                <AboutUsCardDesc />
                <AboutUsCardSocial />
            </div>
        )
    }
}

export default AboutUsCard