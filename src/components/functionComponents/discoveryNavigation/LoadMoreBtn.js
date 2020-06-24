import React from "react"

function handleLoadMore() {
    console.log("Load More clicked")
}

function LoadMoreBtn() {
    return (
        <div className="discLoadMore-button">
            <button onClick={handleLoadMore}>Load More</button>
        </div>
    )
}

export default LoadMoreBtn