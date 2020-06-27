import React, {Component} from 'react'
import ArtCardImg from '../../../../img/img2/long_billed_curlew.jpg'

class ArticleCardImage extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="artCard-image">
                <img src={ArtCardImg} alt="Article Card Image"/>
            </div>
        )
    }
}

export default ArticleCardImage