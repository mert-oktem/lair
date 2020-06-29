import React, {Component} from 'react'
import ArtImg from '../../../img/img1/atlantic_bluefin_tuna.jpg'

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