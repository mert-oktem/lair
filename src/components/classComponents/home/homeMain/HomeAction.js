import React, {Component} from 'react'
import ActionHeading from "./HomeActionComponents/ActionHeading"
import ActionBlock from "./HomeActionComponents/ActionBlock"

class HomeAction extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="home-main-action">
                <ActionHeading />
                <ActionBlock />
            </div>
        )
    }
}

export default HomeAction