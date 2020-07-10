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
                <div className="articles-block">
                    <ArticlesCard
                        article={{name:"How to treat wild animals",
                            author:"By Matthew Docs | 3 min read",
                            desc:"Lorem ipsum dolore dolor sit amet, consectetur adipisci elit, sedre do eiusmod etru tempor incididunt ut labore et dolore magna aliqua",
                            imgUrl: require('../../../img/img1/atlantic_bluefin_tuna.jpg')}}
                    />
                    <ArticlesCard
                        article={{name:"Article 2 Title",
                            author:"By Matthew Docs | 3 min read",
                            desc:"Lorem ipsum dolore dolor sit amet, consectetur adipisci elit, sedre do eiusmod etru tempor incididunt ut labore et dolore magna aliqua",
                            imgUrl: require('../../../img/img1/atlantic_bluefin_tuna.jpg')}}
                    />
                    <ArticlesCard
                        article={{name:"Article 3 Title",
                            author:"By Matthew Docs | 3 min read",
                            desc:"Lorem ipsum dolore dolor sit amet, consectetur adipisci elit, sedre do eiusmod etru tempor incididunt ut labore et dolore magna aliqua",
                            imgUrl: require('../../../img/img1/atlantic_bluefin_tuna.jpg')}}
                    />
                    <ArticlesCard
                        article={{name:"Article 4 Title",
                            author:"By Matthew Docs | 3 min read",
                            desc:"Lorem ipsum dolore dolor sit amet, consectetur adipisci elit, sedre do eiusmod etru tempor incididunt ut labore et dolore magna aliqua",
                            imgUrl: require('../../../img/img1/atlantic_bluefin_tuna.jpg')}}
                    />
                </div>
                <ArticlesLoadMoreBtn />

            </div>
        )
    }

}
export default Articles