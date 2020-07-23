import React, {Component} from 'react'
import {Link} from "react-router-dom";

class WhyMatter extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="discDet-main-whyMatter">
                <div className="whyMatter-heading"><h3>WHY THEY MATTER</h3></div>
                <div className="whyMatter-image"><img src={process.env.PUBLIC_URL + `${this.props.image.imgUrl}`} alt="Animal Image Why Matter"/></div>
                <div className="whyMatter-text">{this.props.text}</div>
                <div className="whyMatter-donate">
                    <Link to="/donate">
                        <button type="submit">DONATE</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default WhyMatter