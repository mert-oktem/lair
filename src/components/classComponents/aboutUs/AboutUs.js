import React, {Component} from 'react'
import AboutUsIntro from "./AboutUsIntro";
import AboutUsImage from "./AboutUsImage";
import AboutUsDesc from "./AboutUsDesc";
import AboutUsTitle from "./AboutUsTitle";
import AboutUsCard from "./AboutUsCard";


class AboutUs extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return (
            <div className="site-aboutUs">

                <AboutUsIntro />
                <AboutUsImage />
                <AboutUsDesc />
                <AboutUsTitle />
                <AboutUsCard />

            </div>
        )
    }

}
export default AboutUs