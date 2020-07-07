import React from "react"
import {Link } from "react-router-dom";

function handleReadMore() {
    console.log("Read More clicked")
}

function ReadMoreBtn(props) {
    return (
        <div className="aniCard-more-button">
            <Link to={`/discovery/${props.aniID}`}>

                <button id="readMoreBtn" onClick={handleReadMore}>Read More</button>
            </Link>
        </div>
    )
}

export default ReadMoreBtn