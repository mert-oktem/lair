import React, {Component} from 'react'
import Logo from '../Logo'
// import Navigation from "./Navigation";
import Toolbar from '../navigation/Toolbar'
import MobileMenu from '../navigation/MobileMenu'
import CloseButton from '../navigation/closeButton/CloseButton'

class Header extends Component{
    state = {
        mobileMenuOpen: false
    }

   drawerToggleClickHandler = () => {
       this.setState((prevState) => {
           return{mobileMenuOpen: !prevState.mobileMenuOpen}
       })
   }

   closeButtonClickHandler = () => {
       this.setState({mobileMenuOpen: false})
   }


    render(){
        let closeButton;

        if (this.state.mobileMenuOpen){
            closeButton = <CloseButton click={this.closeButtonClickHandler} />;
        }
        return (
            <header className="site-header" style={{height: '100%'}}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <MobileMenu show={this.state.mobileMenuOpen}/>
                {closeButton}
            </header>
        )
    }

}
export default Header