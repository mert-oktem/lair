import React, {Component} from 'react'
import ArticlesIntro from "./ArticlesIntro";
import ArticlesImage from "./ArticlesImage";
import ArticlesCard from "./ArticlesCard";
import ArticlesLoadMoreBtn from "../../functionComponents/articlesButtons/ArticlesLoadMoreBtn";
import Footer from "../footer/Footer";
import Header2 from "../header/Header2";

class Articles extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dataSets: [],
            isLoaded: false,
        }
    }
    componentDidMount() {
        fetch('https://lair.wmdd.ca/medium/rss')
            .then(res => res.json())
            .then(json => {
                // console.log(json);
                const less = json.items.slice(0,9)
                this.setState({
                    isLoaded: true,
                    dataSets: less

                })

            })

    }

    render(){
        var { isLoaded, dataSets } = this.state;

        if(!isLoaded){
            return (
                <div className="site-articles">
                    <Header2 />
                    <main>
                        <ArticlesIntro />
                        <ArticlesImage />
                        <div className="articles-block">

                            Loading.....

                        </div>
                        <ArticlesLoadMoreBtn />

                    </main>
                    <Footer />
                </div>
            )
        }
        else {

            return (
                <div className="site-articles">
                    <Header2 />
                    <main>
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
                    </main>
                    <Footer />
                </div>

            )
        }

    }

}
export default Articles