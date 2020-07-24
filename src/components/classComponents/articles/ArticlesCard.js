import React, {Component} from 'react'
import ArticlesReadMoreBtn from "../../functionComponents/articlesButtons/ArticlesReadMoreBtn";
import {Link} from "react-router-dom";

class ArticlesCard extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (



                <div className="articles-artCard">
                    <Link to={{ pathname: `${this.props.article.link}` }} target="_blank">
                        <div className="artCard-image">
                            <img src={this.props.article.imgUrl} alt="Article Card Image"/>
                        </div>
                    </Link>
                    <Link to={{ pathname: `${this.props.article.link}` }} target="_blank">
                        <div className="artCard-name">
                            <h2>{this.props.article.name}</h2>
                        </div>
                    </Link>
                    <div className="artCard-author">
                        <p>{this.props.article.author}</p>
                    </div>
                    <div className="artCard-description">
                        <p>{this.props.article.desc}</p>
                    </div>
                    <ArticlesReadMoreBtn item={this.props.article.link} />
                </div>


        )
    }
}

export default ArticlesCard