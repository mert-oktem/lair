import React, {Component} from 'react'
import AnimalCard from "../../discovery/discoveryMain/AnimalCard";

class RelatedAnimals extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded : false,
        }
    }
    componentDidMount() {
        fetch(`https://lair.wmdd.ca/api/relatedspecies/${this.props.id}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items:json
                })
            })
    }
    render() {
        var {isLoaded, items } = this.state;

        if(!isLoaded){
            return <div>Loading...</div>
        }
        else{
            return (
                <div className="discDet-main-relatedAnimals">
                            <h2 className="discDet-main-relatedAnimals-heading">SEE RELATED ANIMALS BY EXTINCTION RISKS</h2>
                            <div className="discDet-main-relatedAnimals-cards">

                                {items.map(item =>(
                                    <AnimalCard key={item.speciesID}
                                                animal={{name:`${item.name}`,
                                                    location:`${item.habitat}`,
                                                    population:`${item.speciesCount}`,
                                                    status:`${item.statusDescription}`,
                                                    imgUrl: require('../../../../' + `${item.image1}` + '.png'),
                                                    aniId:`${item.speciesID}`
                                                }}
                                    />
                                ))}
                            </div>
                </div>
            )
        }
    }
}

export default RelatedAnimals