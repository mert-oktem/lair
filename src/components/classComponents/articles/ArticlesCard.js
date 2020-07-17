import React, {Component} from 'react'
import ArticlesReadMoreBtn from "../../functionComponents/articlesButtons/ArticlesReadMoreBtn";

class ArticlesCard extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (



                <div className="articles-artCard">
                    <div className="artCard-image">
                        <img src={this.props.article.imgUrl} alt="Article Card Image"/>
                    </div>
                    <div className="artCard-name">
                        <h2>{this.props.article.name}</h2>
                    </div>
                    <div className="artCard-author">
                        <p>{this.props.article.author}</p>
                    </div>
                    <div className="artCard-description">
                        {/*<div dangerouslySetInnerHTML={{ __html: this.props.article.content }} />*/}
                        <p>{this.props.article.desc}</p>
                    </div>
                    <ArticlesReadMoreBtn item={this.props.article.link} />
                </div>


        )
    }
}

export default ArticlesCard