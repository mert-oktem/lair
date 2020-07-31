import React, {Component} from 'react'



class MapClick extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="canada-map-click-card">
                <div className="canada-map-click-card-icon">
                    <img src={process.env.PUBLIC_URL + `${this.props.animal.imgUrl}`} alt="Animal Icon Image"/>
                </div>
                <div className="canada-map-click-card-name">
                    <p>{this.props.animal.name}</p>
                    <p>{this.props.animal.population}</p>
                </div>
            </div>
        )
    }

}
export default MapClick