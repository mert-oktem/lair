import React, {Component} from 'react'
import DiscMain from "./discoveryMain/DiscMain";


class Discovery extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return (
            <div className="site-discovery"> {/*change name for css*/}

                <DiscMain />

            </div>
        )
    }

}
export default Discovery