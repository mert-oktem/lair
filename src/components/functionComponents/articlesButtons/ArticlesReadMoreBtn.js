import React from "react"
import {Link } from "react-router-dom";

function handleReadMore(props) {
    console.log("Read More clicked")

}

function ArticlesReadMoreBtn(props) {

    return (
        <div className="artCard-more-button">
            <Link to={props.item}>
            <button id="artReadMoreBtn" onClick={handleReadMore}>Read More</button>
            </Link>
        </div>
    )
}

export default ArticlesReadMoreBtn