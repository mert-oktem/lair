import React, {Component} from 'react'
import AboutUsIntro from "./AboutUsIntro";
import AboutUsImage from "./AboutUsImage";
import AboutUsDesc from "./AboutUsDesc";
import AboutUsTitle from "./AboutUsTitle";
import AboutUsCard from "./AboutUsCard";


class AboutUs extends Component{
    render(){
        return (
            <main className="site-aboutUs">

                    <AboutUsIntro />
                    <AboutUsImage />
                    <AboutUsDesc />
                    <AboutUsTitle />
                    <div className="aboutUs-block">
                        <AboutUsCard
                            about={{name:"Mert Oktem",
                                role:"Lead Developer",
                                desc:"Bachelor’s degree in Advertisement. 3+ years experience as a Product Manager. I love leading teams to build amazing stuff!",
                                imgUrl: require('../../../img/teamImg/Mert.jpg'),
                                socialIcon1: require('../../../img/ui_icons/PNG/ui_icons_linkedin.png'),
                                socialIcon2: require('../../../img/ui_icons/PNG/ui_icons_github.png'),
                                socialLink1:"https://www.linkedin.com/in/mert-oktem/",
                                socailLink2:"https://www.github.com/mert-oktem"

                            }}
                        />
                        <AboutUsCard
                            about={{name:"Chloe Bui",
                                role:"Lead UI/UX Designer",
                                desc:"Bachelor’s degree in Graphic Design. Had 5+ years of working experience as a Graphic Designer, an Illustrator and a freelance UI/UX Designer.",
                                imgUrl: require('../../../img/teamImg/Chloe.jpg'),
                                socialIcon1: require('../../../img/ui_icons/PNG/ui_icons_linkedin.png'),
                                socialIcon2: require('../../../img/ui_icons/PNG/ui_icons_behance.png'),
                                socialLink1:"https://www.linkedin.com/in/chloe-buii/",
                                socailLink2:"https://www.behance.net/chloebui"

                            }}
                        />
                        <AboutUsCard
                            about={{name:"Harmanpreet",
                                role:"Project Manager & UI/UX Designer",
                                desc:"Bachelor’s degree in Computer Science and Engineering. Analyzing, critical thinking, motivating to do better and dedicating to learn new things.",
                                imgUrl: require('../../../img/teamImg/Harman.jpg'),
                                socialIcon1: require('../../../img/ui_icons/PNG/ui_icons_linkedin.png'),
                                socialIcon2: require('../../../img/ui_icons/PNG/ui_icons_behance.png'),
                                socialLink1:"https://www.linkedin.com/in/harman-jhita/",
                                socailLink2:"https://www.behance.net/harmanjhita/"

                            }}
                        />
                        <AboutUsCard
                            about={{name:"Arjun Dhingra",
                                role:"Front-end Developer",
                                desc:"Bachelors of Technology in Electronics and Communication Engineering. Being a visual person, I decided to pursue my career in Frontend Development.",
                                imgUrl: require('../../../img/teamImg/Arjun.jpg'),
                                socialIcon1: require('../../../img/ui_icons/PNG/ui_icons_linkedin.png'),
                                socialIcon2: require('../../../img/ui_icons/PNG/ui_icons_github.png'),
                                socialLink1:"https://www.linkedin.com/in/arjun-dhingra-617749159/",
                                socailLink2:"https://github.com/arjund96"

                            }}
                        />
                        <AboutUsCard
                            about={{name:"Antriksh Saini",
                                role:"Full-stack Developer",
                                desc:"Bachelor’s Degree in Computer Science and Engineering. One year experience as Software Developer in India I never hesitate to learn new skills.",
                                imgUrl: require('../../../img/teamImg/Antrix.jpg'),
                                socialIcon1: require('../../../img/ui_icons/PNG/ui_icons_linkedin.png'),
                                socialIcon2: require('../../../img/ui_icons/PNG/ui_icons_github.png'),
                                socialLink1:"https://www.linkedin.com/in/antriksh-saini",
                                socailLink2:"https://github.com/antrikshsaini"

                            }}
                        />
                        <AboutUsCard
                            about={{name:"Milad Mokhtari",
                                role:"Quality Assurance & Developer",
                                desc:"A civil engineering graduate, I’m pursuing a post-baccalaureate diploma in Web and Mobile App Design and Development",
                                imgUrl: require('../../../img/teamImg/Milad.jpg'),
                                socialIcon1: require('../../../img/ui_icons/PNG/ui_icons_linkedin.png'),
                                socialIcon2: require('../../../img/ui_icons/PNG/ui_icons_github.png'),
                                socialLink1:"https://www.linkedin.com/in/milad-mokhtari/",
                                socailLink2:"https://github.com/PenultimateGeroy"

                            }}
                        />
                        <AboutUsCard
                            about={{name:"Bokai Hsu",
                                role:"UI/UX Designer",
                                desc:"Bachelor’s Degree in International Business. 5 year experience in a construction company. Now a student of Langara in hope of switching my career into IT industry.",
                                imgUrl: require('../../../img/teamImg/Kai.jpg'),
                                socialIcon1: require('../../../img/ui_icons/PNG/ui_icons_linkedin.png'),
                                socialIcon2: require('../../../img/ui_icons/PNG/ui_icons_behance.png'),
                                socialLink1:"https://www.linkedin.com/in/bokai-hsu",
                                socailLink2:"https://www.behance.net/bokaihsu"

                            }}
                        />
                        <AboutUsCard
                            about={{name:"Manpreet Kaur",
                                role:"UI/UX Designer",
                                desc:"Bachelor’s degree in Computer Science and Engineering. Passionate about learning new skills and gain design knowledge.",
                                imgUrl: require('../../../img/teamImg/Manpreet.jpg'),
                                socialIcon1: require('../../../img/ui_icons/PNG/ui_icons_linkedin.png'),
                                socialIcon2: require('../../../img/ui_icons/PNG/ui_icons_behance.png'),
                                socialLink1:"https://www.linkedin.com/in/manpreet-kaur-b42a21136/",
                                socailLink2:"https://www.behance.net/manpreetkaur24"

                            }}
                        />
                    </div>
            </main>
        )
    }

}
export default AboutUs