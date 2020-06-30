import React, {Component} from "react"

class ActionBlock extends Component{
    render(){
        return (
        <div className="home-main-action-block">
            <img className="action-block-image" src={this.props.action.imgUrl} alt="Action Image" />
            <h3 className="action-block-title">{this.props.action.title}</h3>
            <p className="action-block-desc">{this.props.action.desc}</p>
        </div>
        )
    }
}

export default ActionBlock