import React, {Component} from 'react'
import AboutUsCardImg from '../../../../img/team/IMG_2234.jpeg'

class AboutUsCardImage extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="aboutUs-card-image">
                <img src={AboutUsCardImg} alt="About Us Card Image"/>
            </div>
        )
    }
}

export default AboutUsCardImage