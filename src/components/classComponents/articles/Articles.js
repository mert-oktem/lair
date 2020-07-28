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
                <main className="site-articles">
                        <ArticlesIntro />
                        <ArticlesImage />
                        <div className="articles-block">

                            Loading.....

                        </div>
                        <ArticlesLoadMoreBtn />
                </main>
            )
        }
        else {

            return (
                <main className="site-articles">
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

            )
        }

    }

}
export default Articles