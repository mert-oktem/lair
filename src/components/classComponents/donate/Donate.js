import React, {Component} from 'react'
import DonateIntro from "./DonateIntro";
import DonateImage from "./DonateImage";
import DonateDesc from "./DonateDesc";
import DonateHow from "./DonateHow";
import DonateCard from "./DoanteCard";
import Footer from "../footer/Footer";
import Header2 from "../header/Header2";



class Donate extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
    componentDidMount() {
        fetch('https://lair.wmdd.ca/api/ngos')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({
                    isLoaded: true,
                    items: json
                })
            })
    }
    render(){
        var { isLoaded, items } = this.state;
        if(!isLoaded){
            return (
                <div className="site-donate">
                    <Header2 />
                    <main>
                        <DonateIntro />
                        <DonateImage />
                        <DonateHow />
                        <div className="donate-main">
                            <DonateDesc />
                            <div className="donate-not-loading">
                                Loading......
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            )
        }
        else{
            return (
                <div className="site-donate">
                    <Header2 />
                    <main>
                        <DonateIntro />
                        <DonateImage />
                        <DonateHow />
                        <div className="donate-main">
                            <DonateDesc />
                            {items.map(item => (
                                <DonateCard key={item.ngoID}
                                            donate={{
                                                name: `${item.ngoName}`,
                                                desc: `${item.ngoDescription}`,
                                                ngoUrl: `${item.ngoLink}`,
                                                imgUrl: `${item.ngoImage}` + '.png',
                                                ngoId: `${item.ngoID}`
                                            }}
                                />
                            ))}
                        </div>
                    </main>
                    <Footer />
                </div>
            )
        }
    }

}
export default Donate