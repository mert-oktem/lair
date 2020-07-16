import React from "react"
import FilterIconImg from '../../../img/ui_icons/PNG/ui_icons_filter.png'

function handleFilter() {
    console.log("Filter clicked")
    return (
        <div>Hello Filter</div>
    )
}

function FilterBtn() {
    return (
        <div className="navigation-filter">
            <button onClick={handleFilter}>
                <img src={FilterIconImg} alt="Filter icon Image" />
                <p>FILTER</p>
            </button>
        </div>
    )
}

export default FilterBtn
