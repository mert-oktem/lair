import React, {Component} from 'react'
import ArtImg from '../../../img/banners/Fox.jpg'

class ArticlesImage extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="articles-image">
                <img src={ArtImg} alt="Articles Image"/>
            </div>
        )
    }
}

export default ArticlesImage