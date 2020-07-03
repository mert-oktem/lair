import React, {Component} from 'react'
import AboutUsImg from '../../../img/banners/Squirrel.jpg'

class AboutUsImage extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="aboutUs-image">
                <img src={AboutUsImg} alt="About Us Image"/>
            </div>
        )
    }
}

export default AboutUsImage