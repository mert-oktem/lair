import React, {Component} from 'react'
import ActionHeading from "./HomeActionComponents/ActionHeading";
import ActionBlock from "./HomeActionComponents/ActionBlock";
import {Link} from "react-router-dom";

class HomeAction extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="home-main-action">
                <ActionHeading />
                <Link to="/discovery">
                    <ActionBlock
                        action={{title:"Discovery",
                            desc:"Get to learn detailed information of endangered species",
                            imgUrl: require('../../../../img/feature_icons/Illustration_Discovery.png')}}
                    />
                </Link>
                <Link to="/articles">
                    <ActionBlock
                        action={{title:"Articles",
                            desc:"Read instructions and tips on how to treat wildlife animals",
                            imgUrl: require('../../../../img/feature_icons/Illustration_Articles.png')}}
                    />
                </Link>
                <Link to="/donate">
                    <ActionBlock
                        action={{title:"Donation",
                            desc:"Make a difference today to help save wildlife",
                            imgUrl: require('../../../../img/feature_icons/Illustration_Donate.png')}}
                    />
                </Link>

            </div>
        )
    }
}

export default HomeAction