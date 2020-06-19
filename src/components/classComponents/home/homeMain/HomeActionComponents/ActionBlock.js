import React from "react"
import ActionTitle from "./ActionBlockComponents/ActionTitle"
import ActionImage from "./ActionBlockComponents/ActionImage"
import ActionDesc from "./ActionBlockComponents/ActionDesc"

function ActionBlock(){
    return (
        <div>
            <ActionImage />
            <ActionTitle />
            <ActionDesc />
        </div>
    )
}

export default ActionBlock