import React, {Component} from 'react'
import SearchBtn from "../../../functionComponents/discoveryNavigation/SearchBtn";
import FilterBtn from "../../../functionComponents/discoveryNavigation/FilterBtn";

class DiscNavigation extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="disc-main-navigation">
               <div className="disc-navigation">
                       <SearchBtn />
                       <FilterBtn />
               </div>
            </div>
        )
    }

}

export default DiscNavigation