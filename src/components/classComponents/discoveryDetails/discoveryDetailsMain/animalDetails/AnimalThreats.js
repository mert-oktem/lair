import React, {Component} from 'react'

class AnimalThreats extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return (
            <div className="animalDet-threats">
                <h3>Threats:</h3>
                <p className="animalDet-threats-text">{this.props.threat}</p>
            </div>
        )
    }
}
export default AnimalThreats