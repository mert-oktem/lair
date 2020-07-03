import React, {Component} from 'react'

class ArtDetCard extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="articlesDet-card">
                <div className="articlesDet-card-image">
                    <img src={this.props.article.imgUrl} alt="Article Details Card Image"/>
                </div>
                <div className="articlesDet-card-name">
                    <h2>{this.props.article.name}</h2>
                </div>
                <div className="articlesDet-card-author">
                    <p>{this.props.article.author}</p>
                </div>
            </div>
        )
    }
}

export default ArtDetCard