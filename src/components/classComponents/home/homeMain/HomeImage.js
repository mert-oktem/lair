import React, {Component} from 'react'
import HomeImg from '../../../../img/banners/Cow.jpg'

class HomeImage extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="home-main-image">
                <img src={HomeImg} alt="Home Image"/>
            </div>
        )
    }
}

export default HomeImage