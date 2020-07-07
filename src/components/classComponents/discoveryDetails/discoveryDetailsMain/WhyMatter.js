import React, {Component} from 'react'
import WhyMatterImg from '../../../../img/img2/long_billed_curlew.jpg'

class WhyMatter extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="discDet-main-whyMatter">
                <div className="whyMatter-heading"><h3>WHY THEY MATTER</h3></div>
                <div className="whyMatter-image"><img src={WhyMatterImg} alt="Animal Image Why Matter"/></div>
                <div className="whyMatter-text">{this.props.text}</div>
                <div className="whyMatter-donate"><button type="submit">DONATE</button></div>
            </div>
        )
    }
}

export default WhyMatter