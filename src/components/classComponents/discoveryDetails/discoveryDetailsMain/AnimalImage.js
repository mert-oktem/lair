import React, {Component} from 'react'
import AnimalImg from '../../../../img/img2/long_billed_curlew.jpg'

class AnimalImage extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="discDet-main-image">
                <img src={process.env.PUBLIC_URL + `${this.props.image.imgurl}`} alt="Animal Image"/>
            </div>
        )
    }
}

export default AnimalImage