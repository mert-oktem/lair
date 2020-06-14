import React, {Component} from 'react'

class Header extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return (
            <header className="site-header">
                <img src = "./images/lair-logo.png" alt="Logo"/>
                <h1>lair</h1>
            </header>
        )
    }

}
export default Header