import React, {Component} from 'react'
import ArticlesIntro from "./ArticlesIntro";
import ArticlesImage from "./ArticlesImage";
import ArticlesCard from "./ArticlesCard";
import ArticlesLoadMoreBtn from "../../functionComponents/articlesButtons/ArticlesLoadMoreBtn";
import TestArticles from "../TestArticles";

class Articles extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         item: {},
    //         isLoaded: false,
    //     }
    // }
    // componentDidMount() {
    //     fetch('https://www.retainable.io/assets/retainable/rss-embed/retainable-rss-embed.js')
    //         .then(res => res.json())
    //         .then(json => {
    //             console.log(json);
    //             this.setState({
    //                 isLoaded: true,
    //                 item: json
    //             })
    //         })
    // }

    render(){
        return (
            <div className="site-articles">

                <ArticlesIntro />
                <ArticlesImage />
                <TestArticles />
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