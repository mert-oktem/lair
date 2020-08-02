import React, {Component} from 'react'
import AnimalImage from "./discoveryDetailsMain/AnimalImage";
import AnimalDet from "./discoveryDetailsMain/AnimalDet";
import PopulationChart from "./discoveryDetailsMain/PopulationChart";
import WhyMatter from "./discoveryDetailsMain/WhyMatter";
import RelatedAnimals from "./discoveryDetailsMain/RelatedAnimals";

class DiscDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            item: {},
            isLoaded : false,
        }
    }
    componentDidMount() {
        fetch(`https://lair.wmdd.ca/api/species/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    item:json
                })
            })
    }
    componentDidUpdate() {

        fetch(`https://lair.wmdd.ca/api/species/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    item:json
                })
            })
    }
    render(){
        return (

            <div className="site-discDet">
                <main className="site-discDet-main">
                    <div className="discDetails-overview">
                        <AnimalImage image={{imgUrl: '../../../' + `${this.state.item.image1}` + '.png'}}/>
                        <AnimalDet key={this.state.item.speciesID}
                                species={{name:`${this.state.item.name}`,
                                    sciName:`${this.state.item.scientificName}`,
                                    avgAge: `${this.state.item.averageAge}`,
                                    avgWe: `${this.state.item.averageWeight}`,
                                    avgHe: `${this.state.item.averageHeight}`,
                                    threat: `${this.state.item.threats}` ,
                                    desc: `${this.state.item.description}`,
                                    status:`${this.state.item.statusDescription}`,
                                    imgUrl: `${this.state.item.image2}`,
                                    aniId:`${this.state.item.speciesID}`
                                }}/>
                    </div>
                    <PopulationChart id = {this.props.match.params.id} trend={this.state.item.trendDescription} threat={this.state.item.threats}/>
                    <WhyMatter text={this.state.item.speciesSignificance} image={{imgUrl: '../../../' + `${this.state.item.image2}` + '.png'}}/>
                    <RelatedAnimals id = {this.props.match.params.id}/>

                </main>
            </div>
        )
    }
}
export default DiscDetails