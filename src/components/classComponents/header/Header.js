import React, {Component} from 'react'
import Logo from '../Logo'
import Navigation from "./Navigation";

class Header extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return (
            <header className="site-header">
                <Logo />
                <Navigation />
            </header>
        )
    }

}
export default Header