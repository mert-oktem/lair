import React, {Component} from 'react'
import AnimalImg from '../../../../img/img2/long_billed_curlew.jpg'

class AnimalImage extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="discDet-main-image">
                <img src={AnimalImg} alt="Animal Image"/>
            </div>
        )
    }
}

export default AnimalImage