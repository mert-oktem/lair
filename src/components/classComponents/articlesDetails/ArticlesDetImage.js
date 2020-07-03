import React, {Component} from 'react'
import ArtDetImg from '../../../img/banners/Fox.jpg'

class ArticlesDetImage extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="articlesDet-image">
                <img src={ArtDetImg} alt="Articles Details Image"/>
            </div>
        )
    }
}

export default ArticlesDetImage