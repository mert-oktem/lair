import React, {Component} from 'react'
import DonateCardImage from "./donateCard/DonateCardImage";
import DonateCardName from "./donateCard/DonateCardName";
import DonateCardDesc from "./donateCard/DonateCardDesc";

class DonateCard extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="donate-card">
                <DonateCardImage />
                <DonateCardName />
                <DonateCardDesc />
            </div>
        )
    }
}

export default DonateCard