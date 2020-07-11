import React, {Component} from 'react'


class HomeIntro extends Component {
    // constructor(){
    //     super()
    // }
    render() {
        return (
            <div className="home-main-intro">
                <h1 className="intro-heading">Protecting Species At Risks</h1>
                <p className="intro-text">
                    Taking sustainable actions can help reverse the decline
                    of wildlife across Canada.
                </p>
                {/*<HomeLearnMoreBtn />*/}
            </div>
        )
    }
}

export default HomeIntro