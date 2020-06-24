import React from "react"

function handleFilter() {
    console.log("Filter clicked")
}

function FilterBtn() {
    return (
        <div className="navigation-filter">
            <button onClick={handleFilter}>Filter</button>
        </div>
    )
}

export default FilterBtn
