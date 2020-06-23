import React, {Component} from 'react'

class WhyMatter extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="discDet-main-whyMatter">
                <div className="whyMatter-heading"><h3>WHY THEY MATTER</h3></div>
                <div className="whyMatter-image"><img src="" alt="Animal Image Why Matter"/></div>
                <div className="whyMatter-text">The Amur leopard is important ecologically,
                    economically and culturally. Conservation
                    of its habitat benefits other species,
                    including Amur tigers and prey species like
                    deer. With the right conservation efforts,
                    we can bring them back and ensure longterm
                    conservation of the region.</div>
                <div className="whyMatter-donate"><button type="submit">DONATE</button></div>
            </div>
        )
    }
}

export default WhyMatter