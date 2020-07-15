import React, {Component} from 'react'
import CanadaMap from "../CanadaMap";
import MapClick from "../MapClick";

class HomeMap extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="home-main-map">
                <div className="home-main-map-title">
                    <div className="home-main-map-title-heading"><h2>Discover where endangered
                        species live in Canada</h2>
                    </div>
                    <div className="home-main-map-title-text"><p>Click on a province or territory to learn more about
                        endangered species in that area.</p>
                    </div>
                </div>
                <div className="home-main-map-canada">
                    <CanadaMap/>
                </div>


            </div>
        )
    }
}

export default HomeMap