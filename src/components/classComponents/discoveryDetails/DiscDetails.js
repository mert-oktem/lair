import React, {Component} from 'react'
import AnimalImage from "./discoveryDetailsMain/AnimalImage";
import AnimalDet from "./discoveryDetailsMain/AnimalDet";
import PopulationChart from "./discoveryDetailsMain/PopulationChart";
import WhyMatter from "./discoveryDetailsMain/WhyMatter";
import RelatedAnimals from "./discoveryDetailsMain/RelatedAnimals";




class DiscDetails extends Component{
    constructor(props){
        super(props);

        console.log(this.props.match.params.id );
        this.state = {
            item: {},
            isLoaded : false,
        }
    }
    componentDidMount() {
        fetch(`http://localhost:3011/api/species/${this.props.match.params.id}`)
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

                    <AnimalImage image={{imgUrl: '../../../' + `${this.state.item.image1}` + '.jpg'}}/>
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
                    <PopulationChart id = {this.props.match.params.id} trend={this.state.item.trendDescription}/>
                    <WhyMatter text={this.state.item.speciesSignificance} image={{imgUrl: '../../../' + `${this.state.item.image2}` + '.jpg'}}/>
                    <RelatedAnimals id = {this.props.match.params.id}/>

                </main>

            </div>
        )
    }

}
export default DiscDetails