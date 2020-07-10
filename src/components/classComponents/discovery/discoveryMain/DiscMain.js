import React, {Component, useState, useEffect} from 'react'
import DiscIntro from "./DiscIntro";
import DiscImage from "./DiscImage";
import AnimalCard from "./AnimalCard";
import DiscLoadMore from "./DiscLoadMore";
import DiscNavigation from "./DiscNavigation";





class DiscMain extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded : false,
        }
    }
    componentDidMount() {
        fetch('http://localhost:3011/api/species')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items:json
                })
            })
    }

    render(){

        var {isLoaded, items } = this.state;

        if(!isLoaded){
            return <div>Loading...</div>
        }

        else{
            // let url = '../../../../' + `${items.image1}`
            console.log(items);
            return (
                <main className="site-disc-main">
                    <DiscIntro />
                    <DiscImage />
                    <DiscNavigation />
                    <div className="site-disc-main-animalCards">

                        {items.map(item =>(
                            <AnimalCard key={item.speciesID}
                                        animal={{name:`${item.name}`,
                                            location:`${item.habitat}`,
                                            population:`${item.speciesCount}`,
                                            status:`${item.statusDescription}`,
                                            imgUrl: require('../../../../' + `${item.image1}` + '.jpg'),
                                            aniId:`${item.speciesID}`
                                        }}
                            />
                        ))}

                    </div>
                    <DiscLoadMore />
                </main>
            )


        }


    }
}
export default DiscMain
