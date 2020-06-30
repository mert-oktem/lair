import React, {Component} from 'react'
import DiscImg from '../../../../img/banners/Owl.jpg'

class DiscImage extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="disc-main-image">
                <img src={DiscImg} alt="Discovery Image"/>
            </div>
        )
    }
}

export default DiscImage