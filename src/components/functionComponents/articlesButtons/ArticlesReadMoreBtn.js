import React from "react"
import {Link } from "react-router-dom";

function handleReadMore() {
    console.log("Read More clicked")
}

function ArticlesReadMoreBtn() {
    return (
        <div className="artCard-more-button">
            {/*<Link to="/DiscDetails">*/}
            <button id="artReadMoreBtn" onClick={handleReadMore}>Read More</button>
            {/*</Link>*/}
        </div>
    )
}

export default ArticlesReadMoreBtn