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
                <DonateDesc />
                <DonateCard
                    donate={{name:"IUCN",
                        desc:"The IUCN Red List of Threatened Species is a critical indicator of the health of the world’s",
                        imgUrl: require('../../../img/ngos/iucnredlist.png')}}
                />
                <DonateCard
                    donate={{name:"WWF",
                        desc:"The IUCN Red List of Threatened Species is a critical indicator of the health of the world’s",
                        imgUrl: require('../../../img/ngos/iucnredlist.png')}}
                />
                <DonateCard
                    donate={{name:"WCS",
                        desc:"The IUCN Red List of Threatened Species is a critical indicator of the health of the world’s",
                        imgUrl: require('../../../img/ngos/iucnredlist.png')}}
                />
                <DonateCard
                    donate={{name:"ifaw",
                        desc:"The IUCN Red List of Threatened Species is a critical indicator of the health of the world’s",
                        imgUrl: require('../../../img/ngos/iucnredlist.png')}}
                />
                <DonateCard
                    donate={{name:"National Wildlife",
                        desc:"The IUCN Red List of Threatened Species is a critical indicator of the health of the world’s",
                        imgUrl: require('../../../img/ngos/iucnredlist.png')}}
                />
                <DonateCard
                    donate={{name:"Ontario Nature",
                        desc:"The IUCN Red List of Threatened Species is a critical indicator of the health of the world’s",
                        imgUrl: require('../../../img/ngos/iucnredlist.png')}}
                />
                <DonateHow />
                <DonateHowImage />
                <DonateNowBtn />

            </div>
        )
    }

}
export default Donate