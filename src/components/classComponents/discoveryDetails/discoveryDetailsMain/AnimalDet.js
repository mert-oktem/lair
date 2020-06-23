import React, {Component} from 'react'
import AnimalName from "./animalDetails/AnimalName";
import AnimalSciName from "./animalDetails/AnimalSciName";
import AnimalStatus from "./animalDetails/AnimalStatus";
import AnimalAvg from "./animalDetails/AnimalAvg";
import AnimalThreats from "./animalDetails/AnimalThreats";
import AnimalDescription from "./animalDetails/AnimalDescription";



class AnimalDet extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return (
            <div className="discDet-main-animalDet">
                <h3 className="animalDet-heading">OVERVIEW</h3>
                <AnimalName />
                <AnimalSciName />
                <AnimalStatus />
                <AnimalAvg />
                <AnimalThreats />
                <AnimalDescription />
            </div>
        )
    }
}
export default AnimalDet