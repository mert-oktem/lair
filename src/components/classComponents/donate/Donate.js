import React, {Component} from 'react'
import DonateIntro from "./DonateIntro";
import DonateImage from "./DonateImage";
import DonateDesc from "./DonateDesc";
import DonateHow from "./DonateHow";
import DonateHowImage from "./DonateHowImage";
import DonateNowBtn from "../../functionComponents/donateButtons/DonateNowBtn";
import DonateCard from "./DoanteCard";

class Donate extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return (
            <div className="site-donate">

                <DonateIntro />
                <DonateImage />
                <div className="donate-main">
                    <DonateDesc />
                    <DonateCard />
                </div>
                <DonateHow />
                <DonateHowImage />
                <DonateNowBtn />

            </div>
        )
    }

}
export default Donate