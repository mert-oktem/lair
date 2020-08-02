import React from 'react'
import Logo from '../Logo'
import {Link} from 'react-router-dom'

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
    //     this.setState({articlesNavActive: false})
    //     this.setState({aboutUsNavActive: false})
    //     this.setState({contactNavActive: false})
    //     this.setState({donateNavActive: false})
    // }

    // exploreClickHandler = () => {
    //     this.setState({ discNavActive: true })
    //     this.setState({articlesNavActive: false})
    //     this.setState({aboutUsNavActive: false})
    //     this.setState({contactNavActive: false})
    //     this.setState({donateNavActive: false})
    // }

    // articlesClickHandler = () => {
    //     this.setState({ discNavActive: false })
    //     this.setState({articlesNavActive: true})
    //     this.setState({aboutUsNavActive: false})
    //     this.setState({contactNavActive: false})
    //     this.setState({donateNavActive: false})
    // }

    // aboutUsClickHandler = () => {
    //     this.setState({ discNavActive: false })
    //     this.setState({articlesNavActive: false})
    //     this.setState({aboutUsNavActive: true})
    //     this.setState({contactNavActive: false})
    //     this.setState({donateNavActive: false})
    // }

    // contactClickHandler = () => {
    //     this.setState({ discNavActive: false })
    //     this.setState({articlesNavActive: false})
    //     this.setState({aboutUsNavActive: false})
    //     this.setState({contactNavActive: true})
    //     this.setState({donateNavActive: false})
    // }

    // donateClickHandler = () => {
    //     this.setState({ discNavActive: false })
    //     this.setState({articlesNavActive: false})
    //     this.setState({aboutUsNavActive: false})
    //     this.setState({contactNavActive: false})
    //     this.setState({donateNavActive: true})
    // }


    function refreshPage() {
        window.location.reload(false);
    }

    return(
        <div className={mobileMenuClasses}>
            <div className="mobile-menu-head">
                <Logo />
            </div>
                <nav className="mobile-menu-nav">
                    <ul>
                        <li onClick={refreshPage}><Link to="/">Home</Link></li>
                        <li><Link to="/discovery" onClick={props.close}>Explore</Link></li>
                        <li><Link to="/articles" onClick={props.close}>Articles</Link></li>
                        <li><Link to="/aboutUs" onClick={props.close}>About Us</Link></li>
                        <li><Link to="/contact" onClick={props.close}>Contact</Link></li>
                        <li onClick={props.close}><Link to="/donate">Donate</Link></li>
                    </ul>
                </nav>
        </div>
    )
}

export default MobileMenu