import React, {Component} from 'react'
import ArtImg from '../../../img/banners/Fox.jpg'

class ArticlesImage extends Component {

    render() {
        return (
            <div className="articles-image">
                <img src={ArtImg} alt="Article"/>
            </div>
        )
    }
}
export default ArticlesImage