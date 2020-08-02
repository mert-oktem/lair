import React, {Component} from 'react'
import DonateHowImg from '../../../img/banners/Donation Matter.jpg'

class DonateHowImage extends Component {
    render() {
        return (
            <div className="donate-how-image">
                <img src={DonateHowImg} alt="Donate How"/>
            </div>
        )
    }
}

export default DonateHowImage