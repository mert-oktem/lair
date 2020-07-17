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
                            desc:"Bachelor’s degree in Advertisement. Worked as a Product Manager / Game Designer in a company back in Istanbul, Turkey for 3 years.",
                            imgUrl: require('../../../img/teamImg/Mert.jpg')}}
                    />
                    <AboutUsCard
                        about={{name:"Chloe Bui",
                            role:"Lead Designer",
                            desc:"Bachelor’s degree in Graphic Design. Had 5+ years of working experience as a Graphic Designer, an Illustrator and a freelance UI/UX Designer.",
                            imgUrl: require('../../../img/teamImg/Chloe.jpg')}}
                    />
                    <AboutUsCard
                        about={{name:"Harmanpreet",
                            role:"Project Manager & Designer",
                            desc:"Bachelor’s degree in Computer Science and Engineering. Analyzing, critical thinking, motivating to do better and dedicating to learn new things.",
                            imgUrl: require('../../../img/teamImg/Harman.jpg')}}
                    />
                    <AboutUsCard
                        about={{name:"Arjun Dhingra",
                            role:"Front-end Developor",
                            desc:"Bachelors of Technology in Electronics and Communication Engineering. Being a visual person, I decided to pursue my career in Frontend Development.",
                            imgUrl: require('../../../img/teamImg/Arjun.jpg')}}
                    />
                    <AboutUsCard
                        about={{name:"Antriksh Saini",
                            role:"Full-stack Developer",
                            desc:"Bachelor’s Degree in Computer Science and Engineering. One year experience as Software Developer in India I never hesitate to learn new skills.",
                            imgUrl: require('../../../img/teamImg/Antrix.jpg')}}
                    />
                    <AboutUsCard
                        about={{name:"Milad Mokhtari",
                            role:"Quality Assurance & Developer",
                            desc:"A civil engineering graduate, I’m pursuing a post-baccalaureate diploma in Web and Mobile App Design and Development",
                            imgUrl: require('../../../img/teamImg/Milad.jpg')}}
                    />
                    <AboutUsCard
                        about={{name:"Bokai Hsu",
                            role:"Designer",
                            desc:"Bachelor’s Degree in International Business. 5 year experience in a construction company. Now a student of Langara in hope of switching my career into IT industry.",
                            imgUrl: require('../../../img/teamImg/Kai.jpg')}}
                    />
                    <AboutUsCard
                        about={{name:"Manpreet Kaur",
                            role:"Designer",
                            desc:"Bachelor’s degree in Computer Science and Engineering. Passionate about learning new skills and gain design knowledge.",
                            imgUrl: require('../../../img/teamImg/Manpreet.jpg')}}
                    />
                </div>
            </div>
        )
    }

}
export default AboutUs