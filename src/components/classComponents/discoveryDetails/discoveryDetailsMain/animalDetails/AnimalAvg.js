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
                <AvgAge />
                <AvgHeight />
                <AvgWeight />
            </div>
        )
    }
}
export default AnimalAvg