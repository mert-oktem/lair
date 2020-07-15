import React, {Component} from 'react'
import Chart from "./Chart";

class PopulationChart extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render() {
        return (
            <div className="discDet-main-popChart">
                <div className="popChart-heading"><h3>POPULATION GROWTH</h3></div>
                <div className="popChart-text">
                    <div className="popChart-text-trend">
                        <h2>Population trend: </h2><p>{this.props.trend}</p>
                    </div>
                    <div className="popChart-text-threat">
                        <h2>Threats: </h2><p>{this.props.threat}</p>
                    </div>
                </div>
                <div className="popChart-graph"><Chart id={this.props.id}/></div>
            </div>
        )
    }
}

export default PopulationChart