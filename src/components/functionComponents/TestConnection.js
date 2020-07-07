import React, { useState, useEffect} from 'react'
import AnimalImage from "../classComponents/discoveryDetails/discoveryDetailsMain/AnimalImage";
import AnimalDet from "../classComponents/discoveryDetails/discoveryDetailsMain/AnimalDet";
import PopulationChart from "../classComponents/discoveryDetails/discoveryDetailsMain/PopulationChart";
import WhyMatter from "../classComponents/discoveryDetails/discoveryDetailsMain/WhyMatter";
import RelatedAnimals from "../classComponents/discoveryDetails/discoveryDetailsMain/RelatedAnimals";
import AnimalCard from "../classComponents/discovery/discoveryMain/AnimalCard";

function TestConnection({ match }) {

    useEffect(()=>{
        fetchItem();
        console.log(match);
    },[]);

    const [item, setItem] = useState({});

    const fetchItem = async ()=> {
        const fetchItem = await fetch(`http://localhost:3011/api/species/${match.params.id}`);
        const item = await fetchItem.json();
        console.log(item);
        setItem(item);
    }

    return(
        <div className="site-discDet">

            <main className="site-discDet-main">

                <AnimalImage />
                <AnimalDet key={item.speciesID}
                           species={{name:`${item.name}`,
                               sciName:`${item.scientificName}`,
                               avgAge: `${item.averageAge}`,
                               avgWe: `${item.averageWeight}`,
                               avgHe: `${item.averageHeight}`,
                               threat: `${item.threats}` ,
                               desc: `${item.description}`,
                               status:`${item.statusID}`,
                               imgUrl: `${item.image2}`,
                               aniId:`${item.speciesID}`
                           }}/>
                <PopulationChart />
                <WhyMatter text={item.speciesSignificance}/>
                <RelatedAnimals />

            </main>

        </div>
    )

}

export default TestConnection