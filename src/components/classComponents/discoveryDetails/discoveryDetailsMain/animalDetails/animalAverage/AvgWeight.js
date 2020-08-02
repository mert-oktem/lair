import React, {Component} from 'react'

class AvgWeight extends Component{
    render(){
        return (
            <div className="animalDet-average-weight">
                <div className="average-weight-heading"><h3>Avg. Weight</h3></div>
                <div className="average-weight-text"><p>{this.props.weight}</p></div>
            </div>
        )
    }
}
export default AvgWeight