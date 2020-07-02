import React, {Component} from 'react'
import Chart from "./Chart";

class PopulationChart extends Component {
    // constructor(){
    //     super();
    //     this.state={
    //
    //     }
    // }

    render() {
        return (
            <div className="discDet-main-popChart">
                <div className="popChart-heading"><h3>POPULATION GROWTH</h3></div>
                <div className="popChart-text"><p>Population trend : Decreasing</p></div>
                <div className="popChart-graph"><Chart /></div>
            </div>
        )
    }
}

export default PopulationChart