import React, {Component} from 'react'
import Logo from '../Logo'

class Footer1 extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="site-footer1">
                <Logo/>
                <p className="footer1-text">
                    Lair is an interactive data-driven website that is dedicated to
                    protect endangered species in Canada.
                </p>
            </div>
        )
    }
}

export default Footer1