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
                <div className="aboutUs-block">
                    <AboutUsCard
                        about={{name:"Mert Oktem",
                            role:"Lead Developor",
                            desc:"Lorem ipsum dolore dolor sit amet, consectetur adipisci elit, sedre do eiusmod etru tempor incididunt ut labore et dolore magna aliqua",
                            imgUrl: require('../../../img/teamImg/Mert.jpg')}}
                    />
                    <AboutUsCard
                        about={{name:"Chloe Bui",
                            role:"Lead Developor",
                            desc:"Lorem ipsum dolore dolor sit amet, consectetur adipisci elit, sedre do eiusmod etru tempor incididunt ut labore et dolore magna aliqua",
                            imgUrl: require('../../../img/teamImg/Chloe.jpg')}}
                    />
                    <AboutUsCard
                        about={{name:"Harmanpreet",
                            role:"Lead Developor",
                            desc:"Lorem ipsum dolore dolor sit amet, consectetur adipisci elit, sedre do eiusmod etru tempor incididunt ut labore et dolore magna aliqua",
                            imgUrl: require('../../../img/teamImg/Harman.jpg')}}
                    />
                    <AboutUsCard
                        about={{name:"Arjun Dhingra",
                            role:"Lead Developor",
                            desc:"Lorem ipsum dolore dolor sit amet, consectetur adipisci elit, sedre do eiusmod etru tempor incididunt ut labore et dolore magna aliqua",
                            imgUrl: require('../../../img/teamImg/Arjun.jpg')}}
                    />
                    <AboutUsCard
                        about={{name:"Antriksh Saini",
                            role:"Lead Developor",
                            desc:"Lorem ipsum dolore dolor sit amet, consectetur adipisci elit, sedre do eiusmod etru tempor incididunt ut labore et dolore magna aliqua",
                            imgUrl: require('../../../img/teamImg/Antrix.jpg')}}
                    />
                    <AboutUsCard
                        about={{name:"Milad Mokhtari",
                            role:"Lead Developor",
                            desc:"Lorem ipsum dolore dolor sit amet, consectetur adipisci elit, sedre do eiusmod etru tempor incididunt ut labore et dolore magna aliqua",
                            imgUrl: require('../../../img/teamImg/Milad.jpg')}}
                    />
                    <AboutUsCard
                        about={{name:"Bokai Hsu",
                            role:"Lead Developor",
                            desc:"Lorem ipsum dolore dolor sit amet, consectetur adipisci elit, sedre do eiusmod etru tempor incididunt ut labore et dolore magna aliqua",
                            imgUrl: require('../../../img/teamImg/Kai.jpg')}}
                    />
                    <AboutUsCard
                        about={{name:"Manpreet Kaur",
                            role:"Lead Developor",
                            desc:"Lorem ipsum dolore dolor sit amet, consectetur adipisci elit, sedre do eiusmod etru tempor incididunt ut labore et dolore magna aliqua",
                            imgUrl: require('../../../img/teamImg/Manpreet.jpg')}}
                    />
                </div>
            </div>
        )
    }

}
export default AboutUs