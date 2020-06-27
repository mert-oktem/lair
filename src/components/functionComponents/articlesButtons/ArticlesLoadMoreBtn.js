import React from "react"

function handleLoadMore() {
    console.log("Load More clicked")
}

function ArticlesLoadMoreBtn() {
    return (
        <div className="articles-LoadMore-button">
            <button onClick={handleLoadMore}>Load More</button>
        </div>
    )
}

export default ArticlesLoadMoreBtn