import React, {Component} from 'react'
import AnimalCardImage from "./animalCards/AnimalCardImage";
import AnimalCardName from "./animalCards/AnimalCardName";
import AnimalCardLocation from "./animalCards/AnimalCardLocation";
import AnimalCardPopulation from "./animalCards/AnimalCardPopulation";
import AnimalCardStatus from "./animalCards/AnimalCardStatus";
import AnimalCardMoreButton from "./animalCards/AnimalCardMoreButton";

class AnimalCard extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="disc-main-aniCard">
                <AnimalCardImage />
                <AnimalCardName />
                <AnimalCardLocation />
                <AnimalCardPopulation />
                <AnimalCardStatus />
                <AnimalCardMoreButton />
            </div>
        )
    }
}

export default AnimalCard