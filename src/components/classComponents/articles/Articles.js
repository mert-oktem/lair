import React, {Component} from 'react'
import ArticlesIntro from "./ArticlesIntro";
import ArticlesImage from "./ArticlesImage";
import ArticlesCard from "./ArticlesCard";
import ArticlesLoadMoreBtn from "../../functionComponents/articlesButtons/ArticlesLoadMoreBtn";

class Articles extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dataSets: [],
            isLoaded: false,
        }
    }
    componentDidMount() {
        fetch('http://localhost:3011/medium/rss')
            .then(res => res.json())
            .then(json => {
                // console.log(json);
                this.setState({
                    isLoaded: true,
                    dataSets: json.items

                })

            })

    }

    render(){
        var { isLoaded, dataSets } = this.state;

        if(!isLoaded){
            return (
                <div className="site-articles">

                    <ArticlesIntro />
                    <ArticlesImage />
                    <div className="articles-block">

                        Loading.....
                        {/*<ArticlesCard*/}
                        {/*    article={{name:"How to treat wild animals",*/}
                        {/*        author:"By Matthew Docs | 3 min read",*/}
                        {/*        desc:"Lorem ipsum dolore dolor sit amet, consectetur adipisci elit, sedre do eiusmod etru tempor incididunt ut labore et dolore magna aliqua",*/}
                        {/*        imgUrl: require('../../../img/img1/atlantic_bluefin_tuna.jpg')}}*/}
                        {/*/>*/}

                    </div>
                    <ArticlesLoadMoreBtn />

                </div>
            )
        }
        else {

            return (
                <div className="site-articles">

                    <ArticlesIntro />
                    <ArticlesImage />
                    <div className="articles-block">

                        {dataSets.map(item => (

                            <ArticlesCard
                                article={{name:`${item.title}`,
                                    author:`${item.creator}` + ' | 3 min read',
                                    desc:`${item.firstp}`,
                                    imgUrl: `${item.url}`,
                                    content: `${item.content}`,
                                    link:`${item.link}`
                                }}
                            />
                        ))}
                    </div>
                    {/*<ArticlesLoadMoreBtn />*/}

                </div>

            )
        }

    }

}
export default Articles