import React, {Component} from 'react'
import DonateIntro from "./DonateIntro";
import DonateImage from "./DonateImage";
import DonateDesc from "./DonateDesc";
import DonateHow from "./DonateHow";
import DonateCard from "./DoanteCard";



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
        // return <div>got it</div>

        var { isLoaded, items } = this.state;

        console.log(items);
        //
        if(!isLoaded){
            return (
                <div className="site-donate">
                    <DonateIntro />
                    <DonateImage />
                    <DonateHow />
                    <div className="donate-main">
                        <DonateDesc />
                        <div className="donate-not-loading">
                            Loading......
                        </div>
                    </div>
                </div>
            )
        }
        else{
            console.log(items);
            return (
                // <div>Items</div>
                <div className="site-donate">
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
                </div>
            )
        }
    }

}
export default Donate