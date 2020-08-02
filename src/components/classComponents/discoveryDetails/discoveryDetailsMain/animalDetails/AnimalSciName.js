import React, {Component} from 'react'

class AnimalSciName extends Component{
    render(){
        return (
            <div className="animalDet-sciName">
                <p className="animalDet-sciName-text">{this.props.sciName}</p>
            </div>
        )
    }
}
export default AnimalSciName