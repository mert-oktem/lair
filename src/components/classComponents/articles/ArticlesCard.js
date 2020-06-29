import React, {Component} from 'react'
import ArticleCardDesc from "./articlesCard/ArticleCardDesc";
import ArticleCardImage from "./articlesCard/ArticleCardImage";
import ArticleCardName from "./articlesCard/ArticleCardName";
import ArticleCardAuthor from "./articlesCard/ArticleCardAuthor";
import ArticlesReadMoreBtn from "../../functionComponents/articlesButtons/ArticlesReadMoreBtn";

class ArticlesCard extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="articles-artCard">
                <ArticleCardImage />
                <ArticleCardName />
                <ArticleCardAuthor />
                <ArticleCardDesc />
                <ArticlesReadMoreBtn />
            </div>
        )
    }
}

export default ArticlesCard