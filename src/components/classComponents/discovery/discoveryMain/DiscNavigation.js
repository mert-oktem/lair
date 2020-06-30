import React, {Component} from 'react'
import FilterBtn from "../../../functionComponents/discoveryNavigation/FilterBtn";
import DiscNavSearch from "./DiscNavSearch";

class DiscNavigation extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="disc-main-navigation">
               <div className="disc-navigation">
                       <DiscNavSearch />
                       <FilterBtn />
               </div>
            </div>
        )
    }

}

export default DiscNavigation