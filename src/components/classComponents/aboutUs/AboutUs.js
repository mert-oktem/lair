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
                <AboutUsCard
                    about={{name:"Mert Oktem",
                        role:"Lead Developor",
                        desc:"Lorem ipsum dolore dolor sit amet, consectetur adipisci elit, sedre do eiusmod etru tempor incididunt ut labore et dolore magna aliqua",
                        imgUrl: require('../../../img/team/IMG_2234.jpeg')}}
                />
                <AboutUsCard
                    about={{name:"Mert Oktem",
                        role:"Lead Developor",
                        desc:"Lorem ipsum dolore dolor sit amet, consectetur adipisci elit, sedre do eiusmod etru tempor incididunt ut labore et dolore magna aliqua",
                        imgUrl: require('../../../img/team/IMG_2234.jpeg')}}
                />
                <AboutUsCard
                    about={{name:"Mert Oktem",
                        role:"Lead Developor",
                        desc:"Lorem ipsum dolore dolor sit amet, consectetur adipisci elit, sedre do eiusmod etru tempor incididunt ut labore et dolore magna aliqua",
                        imgUrl: require('../../../img/team/IMG_2234.jpeg')}}
                />
                <AboutUsCard
                    about={{name:"Mert Oktem",
                        role:"Lead Developor",
                        desc:"Lorem ipsum dolore dolor sit amet, consectetur adipisci elit, sedre do eiusmod etru tempor incididunt ut labore et dolore magna aliqua",
                        imgUrl: require('../../../img/team/IMG_2234.jpeg')}}
                />

            </div>
        )
    }

}
export default AboutUs