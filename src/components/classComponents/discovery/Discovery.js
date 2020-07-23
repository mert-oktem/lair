import React, {Component} from 'react'
import DiscMain from "./discoveryMain/DiscMain";
import Header from "../header/Header";
import Footer from "../footer/Footer";


class Discovery extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return (
            <div className="site-discovery">
                <Header />
                <DiscMain />
                <Footer />
            </div>
        )
    }

}
export default Discovery