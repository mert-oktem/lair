import React, {Component} from 'react'
import DiscDetMain from "./discoveryDetailsMain/DiscDetMain";
import AnimalImage from "./discoveryDetailsMain/AnimalImage";
import AnimalDet from "./discoveryDetailsMain/AnimalDet";
import PopulationChart from "./discoveryDetailsMain/PopulationChart";
import WhyMatter from "./discoveryDetailsMain/WhyMatter";
import RelatedAnimals from "./discoveryDetailsMain/RelatedAnimals";
import TestConnection from "../../functionComponents/TestConnection";


class DiscDetails extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         items: [],
    //         isLoaded : false,
    //     }
    // }
    // componentDidMount() {
    //     fetch('http://localhost:3011/api/species')
    //         .then(res => res.json())
    //         .then(json => {
    //             this.setState({
    //                 isLoaded: true,
    //                 items:json
    //             })
    //         })
    // }
    render(){
        return (
            <div className="site-discDet">

                <main className="site-discDet-main">

                    <AnimalImage />
                    <AnimalDet />
                    <PopulationChart />
                    <WhyMatter />
                    <RelatedAnimals />

                </main>

            </div>
        )
    }

}
export default DiscDetails