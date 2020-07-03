import React from "react"

function handleSearch() {
    console.log("Search clicked")
}

function SearchBtn() {
    return (
        <div className="navigation-search">
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBtn
