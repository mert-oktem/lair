import React, {Component} from 'react'

class DonateCard extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="donate-card">
                <div className="donate-card-image">
                    <img src={this.props.donate.imgUrl} alt="Donate Image"/>
                </div>
                <div className="donate-card-name">
                    <h3>{this.props.donate.name}</h3>
                </div>
                <div className="donate-card-desc">
                    <p>{this.props.donate.desc}</p>
                </div>
            </div>
        )
    }
}

export default DonateCard