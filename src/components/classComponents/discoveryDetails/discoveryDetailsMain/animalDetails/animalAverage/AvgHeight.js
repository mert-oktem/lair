import React, {Component} from 'react'

class AvgHeight extends Component{
    render(){
        return (
            <div className="animalDet-average-height">
                <div className="average-height-heading"><h3>Avg. Height</h3></div>
                <div className="average-height-text"><p>{this.props.height}</p></div>
            </div>
        )
    }
}
export default AvgHeight