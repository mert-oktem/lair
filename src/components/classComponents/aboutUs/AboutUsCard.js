import React, {Component} from 'react'
import {Link} from "react-router-dom";

class AboutUsCard extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="aboutUs-card">
                <div className="aboutUs-card-image">
                    <img src={this.props.about.imgUrl} alt="About Us Card Image"/>
                </div>
                <div className="aboutUs-card-name">
                    <h3>{this.props.about.name}</h3>
                </div>
                <div className="aboutUs-card-role">
                    <p>{this.props.about.role}</p>
                </div>
                <div className="aboutUs-card-desc">
                    <p>{this.props.about.desc}</p>
                </div>
                <div className="aboutUs-card-social">
                    <Link to={{ pathname: `${this.props.about.socialLink1}` }} target="_blank">
                        <img src={this.props.about.socialIcon1} alt="Social Links 1"/></Link>
                        <Link to={{ pathname: `${this.props.about.socailLink2}` }} target="_blank">
                            <img src={this.props.about.socialIcon2} alt="Social Links 2"/></Link>
                </div>
            </div>
        )
    }
}

export default AboutUsCard