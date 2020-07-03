import React, {Component} from 'react'
import DonateImg from '../../../img/banners/Monkey.jpg'

class DonateImage extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="donate-image">
                <img src={DonateImg} alt="Donate Image"/>
            </div>
        )
    }
}

export default DonateImage