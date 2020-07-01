import React, {Component} from 'react'
import AnimalCard from "../../discovery/discoveryMain/AnimalCard";

class RelatedAnimals extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="discDet-main-relatedAnimals">
                <h2 className="discDet-main-relatedAnimals-heading">SEE RELATED ANIMALS</h2>
                <div className="discDet-main-relatedAnimals-cards">
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
            </div>
        )
    }
}

export default RelatedAnimals