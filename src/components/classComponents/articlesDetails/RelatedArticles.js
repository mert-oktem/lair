import React, {Component} from 'react'
import ArtDetCard from "./ArtDetCard";
import ArticlesCard from "../articles/ArticlesCard";


class RelatedArticles extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="articlesDet-relatedArticles">
                <h2 className="articlesDet-relatedArticles-heading">SEE RELATED ARTICLES</h2>
                <div className="articlesDet-relatedArticles-cards">
                    <ArtDetCard
                        article={{name:"How to treat wild animals",
                            author:"By Matthew Docs | 3 min read",
                            desc:"Lorem ipsum dolore dolor sit amet, consectetur adipisci elit, sedre do eiusmod etru tempor incididunt ut labore et dolore magna aliqua",
                            imgUrl: require('../../../img/img1/atlantic_bluefin_tuna.jpg')}}
                    />
                    <ArtDetCard
                        article={{name:"Articles 2 Title",
                            author:"By Matthew Docs | 3 min read",
                            desc:"Lorem ipsum dolore dolor sit amet, consectetur adipisci elit, sedre do eiusmod etru tempor incididunt ut labore et dolore magna aliqua",
                            imgUrl: require('../../../img/img1/atlantic_bluefin_tuna.jpg')}}
                    />
                    <ArtDetCard
                        article={{name:"Articles 3 Title",
                            author:"By Matthew Docs | 3 min read",
                            desc:"Lorem ipsum dolore dolor sit amet, consectetur adipisci elit, sedre do eiusmod etru tempor incididunt ut labore et dolore magna aliqua",
                            imgUrl: require('../../../img/img1/atlantic_bluefin_tuna.jpg')}}
                    />
                </div>
            </div>
        )
    }
}

export default RelatedArticles