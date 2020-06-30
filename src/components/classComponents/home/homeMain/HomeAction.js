import React, {Component} from 'react'
import ActionHeading from "./homeActionComponents/ActionHeading"
import ActionBlock from "./homeActionComponents/ActionBlock"

class HomeAction extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="home-main-action">
                <ActionHeading />
                <ActionBlock
                    action={{title:"Discovery",
                            desc:"Get to learn detailed information of endangered species",
                            imgUrl: require('../../../../img/feature_icons/Illustration_Discovery.png')}}
                />
                <ActionBlock
                    action={{title:"Articles",
                            desc:"Read instructions and tips on how to treat wildlife animals",
                            imgUrl: require('../../../../img/feature_icons/Illustration_Articles.png')}}
                />
                <ActionBlock
                    action={{title:"Donation",
                            desc:"Make a difference today to help save wildlife",
                            imgUrl: require('../../../../img/feature_icons/Illustration_Donate.png')}}
                />
            </div>
        )
    }
}

export default HomeAction