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
                <div className="site-disc-main-animalCards">
                    <AnimalCard
                        animal={{name:"Vancouver Marmot",
                            location:"Yucatan Peninsula",
                            population:"2000+",
                            status:"Critical Endangered",
                            imgUrl: require('../../../../img/img1/atlantic_bluefin_tuna.jpg')}}
                    />
                    <AnimalCard
                        animal={{name:"Bluefin Tuna",
                            location:"Yucatan Peninsula",
                            population:"2000+",
                            status:"Critical Endangered",
                            imgUrl: require('../../../../img/img1/atlantic_bluefin_tuna.jpg')}}
                    />
                    <AnimalCard
                        animal={{name:"White Rhinoceros",
                            location:"Yucatan Peninsula",
                            population:"2000+",
                            status:"Critical Endangered",
                            imgUrl: require('../../../../img/img1/atlantic_bluefin_tuna.jpg')}}
                    />
                    <AnimalCard
                        animal={{name:"Callophrys",
                            location:"Yucatan Peninsula",
                            population:"2000+",
                            status:"Critical Endangered",
                            imgUrl: require('../../../../img/img1/atlantic_bluefin_tuna.jpg')}}
                    />
                </div>
                <DiscLoadMore />
            </main>
        )
    }
}
export default DiscMain