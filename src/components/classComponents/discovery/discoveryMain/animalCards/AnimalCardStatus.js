import React, {Component} from 'react'

class AnimalCardStatus extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="aniCard-status">
                <div className="aniCard-status-icon"><img src="" alt="status icon Image"/></div>
                <div className="aniCard-status-text"><p>Critical Endangered</p></div>
            </div>
        )
    }
}

export default AnimalCardStatus