import React, {Component} from 'react'
import HomeNewsletter from "./HomeNewsletter";
import HomeAction from "./HomeAction";
import HomeMap from "./HomeMap";
import HomeIntro from "./HomeIntro";

class HomeMain extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return (
                <main className="site-home-main">
                    <HomeIntro />
                    <HomeMap />
                    <HomeAction />
                    <HomeNewsletter />
                </main>
        )
    }
}
export default HomeMain