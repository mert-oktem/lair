import React, {Component} from 'react'
import ActionBlock from "./HomeActionComponents/ActionBlock";
import ActionHeading from "./HomeActionComponents/ActionHeading";
import {Link} from "react-router-dom";

class HomeAction extends Component {

    render() {
        return (
            <div className="home-main-action">
                <ActionHeading />
                <div className="action-block">
                    <Link to="/discovery">
                        <ActionBlock
                            action={{title:"Explore",
                                desc:"Learn more about endangered species.",
                                imgUrl: require('../../../../img/feature_icons/Illustration_Discovery.png')}}
                        />
                    </Link>
                    <Link to="/articles">
                        <ActionBlock
                            action={{title:"Articles",
                                desc:"Read the latest on Canadian wildlife.",
                                imgUrl: require('../../../../img/feature_icons/Illustration_Articles.png')}}
                        />
                    </Link>
                    <Link to="/donate">
                        <ActionBlock
                            action={{title:"Donation",
                                desc:"Make a difference in the fight to save wildlife.",
                                imgUrl: require('../../../../img/feature_icons/Illustration_Donate.png')}}
                        />
                    </Link>
                </div>
            </div>
        )
    }
}

export default HomeAction