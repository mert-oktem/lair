import React, {Component} from 'react'
import {Link} from "react-router-dom";

class ArticlesNav extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="nav-articles">
                <Link to="/articles"><h3>Articles</h3></Link>
            </div>
        )
    }
}

export default ArticlesNav