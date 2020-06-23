import React, {Component} from 'react'
import Header from '../header/Header'
import Footer from "../footer/Footer";
import DiscMain from "./discoveryMain/DiscMain";


class Discovery extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return (
            <div className="site-home">
                <Header />
                <DiscMain />
                <Footer />
            </div>
        )
    }

}
export default Discovery