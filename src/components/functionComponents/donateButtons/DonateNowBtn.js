import React from "react"

function handleDonateNow() {
    console.log("Donate Now clicked")
}

function DonateNowBtn() {
    return (
        <div className="articles-LoadMore-button">
            <button onClick={handleDonateNow}>Donate Now</button>
        </div>
    )
}

export default DonateNowBtn