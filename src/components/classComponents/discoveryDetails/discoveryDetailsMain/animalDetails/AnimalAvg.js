import React, {Component} from 'react'
import AvgAge from "./animalAverage/AvgAge";
import AvgHeight from "./animalAverage/AvgHeight";
import AvgWeight from "./animalAverage/AvgWeight";

class AnimalAvg extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return (
            <div className="animalDet-average">
                <AvgAge age={this.props.avg.avgAge}/>
                <AvgHeight height={this.props.avg.avgHe}/>
                <AvgWeight weight={this.props.avg.avgWe}/>
            </div>
        )
    }
}
export default AnimalAvg