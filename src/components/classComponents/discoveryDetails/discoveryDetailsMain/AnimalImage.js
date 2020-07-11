import React, {Component} from 'react'


class AnimalImage extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="discDet-main-image">
                <img src={process.env.PUBLIC_URL + `${this.props.image.imgUrl}`} alt="Animal Image"/>
            </div>
        )
    }
}

export default AnimalImage