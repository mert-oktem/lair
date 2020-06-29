import React, {Component} from 'react'
import Header from '../header/Header'
import Footer from "../footer/Footer";
import DiscDetMain from "./discoveryDetailsMain/DiscDetMain";


class DiscDetails extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return (
            <div className="site-discDet">

                <DiscDetMain />

            </div>
        )
    }

}
export default DiscDetails