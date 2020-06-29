import React, {Component} from 'react'
import AboutUsImg from '../../../img/img1/atlantic_bluefin_tuna.jpg'

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