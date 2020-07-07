import React, {Component} from 'react'

class AnimalName extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return (
            <div className="animalDet-name">
                <h1 className="animalDet-name-text">{this.props.name}</h1>
            </div>
        )
    }
}
export default AnimalName