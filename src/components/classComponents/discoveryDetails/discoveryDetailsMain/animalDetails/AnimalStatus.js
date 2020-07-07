import React, {Component} from 'react'

class AnimalStatus extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return (
            <div className="animalDet-status">
                <p className="animalDet-status-text">{this.props.status}</p>
            </div>
        )
    }
}
export default AnimalStatus