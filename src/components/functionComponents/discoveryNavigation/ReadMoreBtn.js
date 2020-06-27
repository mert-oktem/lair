import React from "react"
import {Link } from "react-router-dom";

function handleReadMore() {
    console.log("Read More clicked")
}

function ReadMoreBtn() {
    return (
        <div className="aniCard-more-button">
            {/*<Link to="/DiscDetails">*/}
                <button id="readMoreBtn" onClick={handleReadMore}>Read More</button>
            {/*</Link>*/}
        </div>
    )
}

export default ReadMoreBtn