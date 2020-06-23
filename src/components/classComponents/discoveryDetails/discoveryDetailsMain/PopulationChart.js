import React, {Component} from 'react'

class PopulationChart extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="discDet-main-popChart">
                <div className="popChart-heading"><h3>POPULATION GROWTH</h3></div>
                <div className="popChart-text"><p>Population trend : Decreasing</p></div>
                <div className="popChart-graph">Line Graph goes here through Chart.js</div>
            </div>
        )
    }
}

export default PopulationChart