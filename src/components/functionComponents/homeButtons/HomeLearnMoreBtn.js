import React from "react"

function handleLearnMore() {
    console.log("Donate Now clicked")
}

function HomeLearnMoreBtn() {
    return (
        <div className="home-LearnMore-button">
            <button onClick={handleLearnMore}>LEARN MORE</button>
        </div>
    )
}

export default HomeLearnMoreBtn