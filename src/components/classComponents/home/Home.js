import React, {Component} from 'react'
import Header from '../header/Header'
import Footer from "../footer/Footer";
import HomeMain from "./homeMain/HomeMain";

class Home extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return (
            <div className="site-home">
                <Header />
                <HomeMain />
                <Footer />
            </div>
        )
    }

}
export default Home