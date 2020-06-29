import React, {Component} from 'react'
import DonateHowImg from '../../../img/img1/atlantic_bluefin_tuna.jpg'

class DonateHowImage extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="donate-how-image">
                <img src={DonateHowImg} alt="Donate How Image"/>
            </div>
        )
    }
}

export default DonateHowImage