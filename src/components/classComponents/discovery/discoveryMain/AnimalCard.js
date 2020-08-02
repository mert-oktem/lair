import React, {Component} from 'react'
import ReadMoreBtn from "../../../functionComponents/discoveryNavigation/ReadMoreBtn";
import LocationIconImg from '../../../../img/ui_icons/PNG/ui_icons_location.png'
import PopulationIconImg from '../../../../img/ui_icons/PNG/ui_icons_population.png'
import StatusIconImg from '../../../../img/ui_icons/PNG/ui_icons_risk status.png'
import {Link} from "react-router-dom";

class AnimalCard extends Component {
    render() {
        return (
            <div className="disc-main-aniCard">
                <Link to={`/discovery/${this.props.animal.aniId}`}>
                <div className="aniCard-image">
                    <img src={process.env.PUBLIC_URL + `${this.props.animal.imgUrl}`} alt="Animal Card"/>
                </div>
                </Link>
                <Link to={`/discovery/${this.props.animal.aniId}`}>
                <div className="aniCard-name">
                    <h2>{this.props.animal.name}</h2>
                </div>
                </Link>
                <div className="aniCard-location">
                    <div className="aniCard-location-icon"><img src={LocationIconImg} alt="location icon"/></div>
                    <div className="aniCard-location-text"><p>{this.props.animal.location}</p></div>
                </div>
                <div className="aniCard-population">
                    <div className="aniCard-population-icon"><img src={PopulationIconImg} alt="population icon"/></div>
                    <div className="aniCard-population-text"><p>{this.props.animal.population}</p></div>
                </div>
                <div className="aniCard-status">
                    <div className="aniCard-status-icon"><img src={StatusIconImg} alt="status icon"/></div>
                    <div className="aniCard-status-text"><p>{this.props.animal.status}</p></div>
                </div>
                <ReadMoreBtn aniID={this.props.animal.aniId} />
            </div>
        )
    }
}

export default AnimalCard
