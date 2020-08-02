import React from 'react'
import Logo from '../Logo'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { render } from '@testing-library/react'

const MobileMenu = props => {

    // let discNavClasses = 'disc-nav'
    // if (this.state.discNavActive) {
    //     discNavClasses = 'disc-nav active'
    // }

    // let articlesNavClasses = 'articles-nav'
    // if (this.state.articlesNavActive) {
    //     articlesNavClasses = 'articles-nav active'
    // }

    // let aboutUsNavClasses = 'aboutUs-nav'
    // if (this.state.aboutUsNavActive) {
    //     aboutUsNavClasses = 'aboutUs-nav active'
    // }

    // let contactNavClasses = 'contact-nav'
    // if (this.state.contactNavActive) {
    //     contactNavClasses = 'contact-nav active'
    // }

    // let donateNavClasses = 'donate-button'
    // if (this.state.donateNavActive) {
    //     donateNavClasses = 'donate-button active'
    // }

    let mobileMenuClasses = 'mobile-menu'
    if (props.show) {
        mobileMenuClasses = 'mobile-menu open'
    }

    // logoClickHandler = () => {
    //     this.setState({ discNavActive: false })
    //     this.setState({ articlesNavActive: false })
    //     this.setState({ aboutUsNavActive: false })
    //     this.setState({ contactNavActive: false })
    //     this.setState({ donateNavActive: false })
    // }

    // exploreClickHandler = () => {
    //     this.setState({ discNavActive: true })
    //     this.setState({ articlesNavActive: false })
    //     this.setState({ aboutUsNavActive: false })
    //     this.setState({ contactNavActive: false })
    //     this.setState({ donateNavActive: false })
    // }

    // articlesClickHandler = () => {
    //     this.setState({ discNavActive: false })
    //     this.setState({ articlesNavActive: true })
    //     this.setState({ aboutUsNavActive: false })
    //     this.setState({ contactNavActive: false })
    //     this.setState({ donateNavActive: false })
    // }

    // aboutUsClickHandler = () => {
    //     this.setState({ discNavActive: false })
    //     this.setState({ articlesNavActive: false })
    //     this.setState({ aboutUsNavActive: true })
    //     this.setState({ contactNavActive: false })
    //     this.setState({ donateNavActive: false })
    // }

    // contactClickHandler = () => {
    //     this.setState({ discNavActive: false })
    //     this.setState({ articlesNavActive: false })
    //     this.setState({ aboutUsNavActive: false })
    //     this.setState({ contactNavActive: true })
    //     this.setState({ donateNavActive: false })
    // }

    // donateClickHandler = () => {
    //     this.setState({ discNavActive: false })
    //     this.setState({ articlesNavActive: false })
    //     this.setState({ aboutUsNavActive: false })
    //     this.setState({ contactNavActive: false })
    //     this.setState({ donateNavActive: true })
    // }


    function refreshPage() {
        window.location.reload(false);
    }
    return (
        <div className={mobileMenuClasses}>
            <div className="mobile-menu-head">
                <Logo />
            </div>
            <nav className="mobile-menu-nav">
                <ul>
                    <li onClick={refreshPage}><Link to="/">Home</Link></li>
                    <li><NavLink activeClassName="discNav-active" className="discNav" to="/discovery" onClick={props.close}>Explore</NavLink></li>
                    <li><NavLink activeClassName="active" className="articlesNav" to="/articles" onClick={props.close}>Articles</NavLink></li>
                    <li><NavLink activeClassName="active" className="aboutUsNav" to="/aboutUs" onClick={props.close}>About Us</NavLink></li>
                    <li><NavLink activeClassName="active" className="contactNav" to="/contact" onClick={props.close}>Contact</NavLink></li>
                    <li className="donate-button" onClick={props.close}><NavLink activeClassName="active" className="donateNav" to="/donate">Donate</NavLink></li>
                </ul>
            </nav>
        </div>
    )

}

export default MobileMenu