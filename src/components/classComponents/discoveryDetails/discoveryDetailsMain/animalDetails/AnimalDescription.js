import React, {Component} from 'react'

class AnimalDescription extends Component{
    render(){
        return (
            <div className="animalDet-description">
                <p className="animalDet-description-text">{this.props.desc}</p>
            </div>
        )
    }
}
export default AnimalDescription