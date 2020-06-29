import React, {Component} from 'react'
import ArticlesIntro from "./ArticlesIntro";
import ArticlesImage from "./ArticlesImage";
import ArticlesCard from "./ArticlesCard";
import ArticlesLoadMoreBtn from "../../functionComponents/articlesButtons/ArticlesLoadMoreBtn";

class Articles extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return (
            <div className="site-articles">

                <ArticlesIntro />
                <ArticlesImage />
                <ArticlesCard />
                <ArticlesLoadMoreBtn />

            </div>
        )
    }

}
export default Articles