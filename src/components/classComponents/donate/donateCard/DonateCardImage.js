import React, {Component} from 'react'
import DonateCardImg from '../../../../img/ngos/iucnredlist.png'

class DonateCardImage extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="donate-card-image">
                <img src={DonateCardImg} alt="Donate Image"/>
            </div>
        )
    }
}

export default DonateCardImage