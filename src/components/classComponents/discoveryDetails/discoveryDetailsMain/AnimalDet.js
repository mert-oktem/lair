import React, {Component} from 'react'
import AnimalName from "./animalDetails/AnimalName";
import AnimalSciName from "./animalDetails/AnimalSciName";
import AnimalStatus from "./animalDetails/AnimalStatus";
import AnimalAvg from "./animalDetails/AnimalAvg";
import AnimalThreats from "./animalDetails/AnimalThreats";
import AnimalDescription from "./animalDetails/AnimalDescription";



class AnimalDet extends Component{
    render(){
        return (
            <div className="discDet-main-animalDet">
                <h3 className="animalDet-heading">OVERVIEW</h3>
                <AnimalName name={this.props.species.name}/>
                <AnimalSciName sciName={this.props.species.sciName} />
                <AnimalStatus status={this.props.species.status}/>
                <AnimalAvg avg={{
                    avgAge: `${this.props.species.avgAge}`,
                    avgWe: `${this.props.species.avgWe}`,
                    avgHe: `${this.props.species.avgHe}`

                }}/>
                <AnimalThreats threat={this.props.species.threat}/>
                <AnimalDescription desc={this.props.species.desc} />
            </div>
        )
    }
}
export default AnimalDet