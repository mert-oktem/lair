import React, {Component} from 'react'
import RelatedArticles from "./RelatedArticles";
import ArticlesDetInfo from "./ArticlesDetInfo";
import ArticlesDetImage from "./ArticlesDetImage";
import ArticlesDetIntro from "./ArticlesDetIntro";

class ArticlesDet extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return (
            <div className="site-articlesDet">
                <ArticlesDetIntro />
                <ArticlesDetImage />
                <ArticlesDetInfo />
                <RelatedArticles />
            </div>
        )
    }

}
export default ArticlesDet