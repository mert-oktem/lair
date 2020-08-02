import React, {Component} from 'react'
import DonateImg from '../../../img/banners/Monkey.jpg'

class DonateImage extends Component {
    render() {
        return (
            <div className="donate-image">
                <img src={DonateImg} alt="Donate"/>
            </div>
        )
    }
}

export default DonateImage