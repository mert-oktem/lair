import React, {Component} from 'react'
import HomeImg from '../../../../img/banners/Cow.jpg'

class HomeImage extends Component {

    render() {
        return (
            <div className="home-main-image">
                <img src={HomeImg} alt="Home"/>
            </div>
        )
    }
}

export default HomeImage