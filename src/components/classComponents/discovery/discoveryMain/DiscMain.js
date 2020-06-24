import React, {Component} from 'react'
import DiscIntro from "./DiscIntro";
import DiscImage from "./DiscImage";
import AnimalCard from "./AnimalCard";
import DiscLoadMore from "./DiscLoadMore";
import DiscNavigation from "./DiscNavigation";


class DiscMain extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return (
            <main className="site-disc-main">
                <DiscIntro />
                <DiscImage />
                <DiscNavigation />
                <AnimalCard />
                <DiscLoadMore />
            </main>
        )
    }
}
export default DiscMain