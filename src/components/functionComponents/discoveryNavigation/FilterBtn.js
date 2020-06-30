import React from "react"
import FilterIconImg from '../../../img/ui_icons/PNG/ui_icons_filter.png'

function handleFilter() {
    console.log("Filter clicked")
}

function FilterBtn() {
    return (
        <div className="navigation-filter">
            <div className="navigation-filter-icon"><img src={FilterIconImg} alt="Filter icon Image"/></div>
            <button onClick={handleFilter}>FILTER</button>
        </div>
    )
}

export default FilterBtn
