import React, {Component} from 'react'

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
                    <img alt="Social Links 1"/>
                    <img alt="Social Links 2"/>
                </div>
            </div>
        )
    }
}

export default AboutUsCard