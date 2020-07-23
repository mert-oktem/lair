import React, {Component} from 'react'
import HomeMain from "./homeMain/HomeMain";
import Header from "../header/Header";
import Footer from "../footer/Footer";

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