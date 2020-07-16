import React from "react"
import {Link } from "react-router-dom";

function ArticlesReadMoreBtn(props) {

    return (
        <div className="artCard-more-button">
            <Link to={{ pathname: `${props.item}` }} target="_blank">
            <button id="artReadMoreBtn">Read More</button>
            </Link>
        </div>
    )
}

export default ArticlesReadMoreBtn