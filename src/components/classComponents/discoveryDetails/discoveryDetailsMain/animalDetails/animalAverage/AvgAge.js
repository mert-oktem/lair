import React, {Component} from 'react'

class AvgAge extends Component{
    render(){
        return (
            <div className="animalDet-average-age">
                <div className="average-age-heading"><h3>Avg. Age</h3></div>
                <div className="average-age-text"><p>{this.props.age}</p></div>
            </div>
        )
    }
}
export default AvgAge