import React, {Component} from 'react'
import {Link} from "react-router-dom";

class DonateCard extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="donate-card">
                <Link to={{ pathname: `${this.props.donate.ngoUrl}` }} target="_blank">
                <div className="donate-card-image">
                    <img src={process.env.PUBLIC_URL + `${this.props.donate.imgUrl}`} alt="Donate Image"/>
                </div>
                </Link>
                <Link to={{ pathname: `${this.props.donate.ngoUrl}` }} target="_blank">
                <div className="donate-card-name">
                    <h3>{this.props.donate.name}</h3>
                </div>
                </Link>
                <div className="donate-card-desc">
                    <p>{this.props.donate.desc}</p>
                </div>
                <div className="donate-card-link">
                    <Link to={{ pathname: `${this.props.donate.ngoUrl}` }} target="_blank">
                    <p>DONATE NOW</p></Link>
                </div>
            </div>
        )
    }
}

export default DonateCard