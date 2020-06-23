import React, {Component} from 'react'
import AnimalImage from "./AnimalImage";
import AnimalDet from "./AnimalDet";
import PopulationChart from "./PopulationChart";
import WhyMatter from "./WhyMatter";


class DiscDetMain extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return (
            <main className="site-discDet-main">
                <AnimalImage />
                <AnimalDet />
                <PopulationChart />
                <WhyMatter />

            </main>
        )
    }
}
export default DiscDetMain