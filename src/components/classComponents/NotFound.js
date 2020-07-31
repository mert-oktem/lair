import React, {Component} from 'react'
import NotFoundImg from "../../img/banners/404.jpg";
import {Link} from "react-router-dom";

class NotFound extends Component {

    render() {

        return (
            <main className="site-home-main">
                <div className="home-main-intro">
                    <h1 className="intro-heading">Lost In The Wood?</h1>
                    <h2 className="intro-sub-heading">Error 404</h2>
                    <p className="intro-text">
                        Oops, the page you are looking for is not available right now.
                        Just because your path is different does not mean you are lost.
                    </p>
                </div>
                <div className="home-main-image">
                    <img src={NotFoundImg} alt="404"/>
                </div>
                <div className="newsletter-form-submitBtn">
                    <Link to="/">
                        <button id="notFoundBtn">BACK TO HOME</button>
                    </Link>
                </div>
            </main>
        )
    }
}

export default NotFound