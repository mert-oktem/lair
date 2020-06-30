import React, {Component} from 'react'
import CanadaMap from "../CanadaMap";

class HomeMap extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="home-main-map">
                    <CanadaMap />
            </div>
        )
    }
}

export default HomeMap