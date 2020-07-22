import React, {Component} from 'react'
import DiscIntro from "./DiscIntro";
import DiscImage from "./DiscImage";
import AnimalCard from "./AnimalCard";
import FilterIconImg from "../../../../img/ui_icons/PNG/ui_icons_filter.png";
import SearchIconImg from "../../../../img/ui_icons/PNG/ui_icons_search.png";


class DiscMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            filteredItems : [],
            isFilter:false,
            isLoaded: false,
            isMammals: false,
            isBirds: false,
            isFish: false,
            isReptiles: false,
            isCriticallyEndangered: false,
            isEndangered: false,
            lessItems:[],
            isMore:false,
            search: '',
            searchLoad: false,
            searchedItems: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleLoadMore = this.handleLoadMore.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }
    async handleChange(event) {
        let el = event.target;
        const {name, value, type, checked} = event.target;
        await new Promise( async ( r , rej ) => {

            if( el.getAttribute('type') === "checkbox" ){
                this.setState({ [name]: el.checked })
            }else{
                this.setState({ [name]: value })
            }
            r();
        } );
    }
    handleSubmit(event){
        event.preventDefault()
        let newJson = [] ;
        for( let value of this.state.items ){
            if( value.familyDescription == "Mammal" && this.state.isMammals ){
                newJson.push( value );
            }
            if(value.familyDescription == "Bird" && this.state.isBirds){
                newJson.push( value );
            }
            if(value.familyDescription == "Reptile" && this.state.isReptiles){
                newJson.push( value );
            }
            if(value.familyDescription == "Fish" && this.state.isFish){
                newJson.push( value );
            }
            if(value.statusDescription == "Critically Endangared" && this.state.isCriticallyEndangered){
                newJson.push( value );
            }
            if(value.statusDescription == "Endangared" && this.state.isEndangered){
                newJson.push( value );
            }
        }
        this.setState( {
            filteredItems : newJson,
            isFilter:true
        } );
    }
    handleClear(e){
        e.preventDefault()
        document.getElementById("isMammals").checked = false;
        document.getElementById("isBirds").checked = false;
        document.getElementById("isReptiles").checked = false;
        document.getElementById("isFish").checked = false;
        document.getElementById("isEndangered").checked = false;
        document.getElementById("isCriticallyEndangered").checked = false;
        this.setState( {
            isMammals : false,
            isBirds : false,
            isReptiles : false,
            isFish : false,
            isEndangered : false,
            isCriticallyEndangered : false,
            isFilter:false
        } );
    }
    handleLoadMore(e){
        e.preventDefault()
        this.setState({
            isMore:true,
            isFilter:false
        })
    }

    handleInput(event){
        event.preventDefault()
        console.log(event.target.value);
        let value = event.target.value;
        let name = event.target.name;
        this.setState(  {
                [name]: value,
                searchLoad: true

            }
        )
        console.log(this.state.search)
        let itemSearch = this.state.items.filter((item) => {
            return item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });
        this.setState({
            searchedItems: itemSearch

        })

        console.log(this.state.searchedItems)

        //this.setState({search: e.target.value})
    }
    componentDidMount() {
        fetch('https://lair.wmdd.ca/api/species')
            .then(res => res.json())
            .then(json => {
                // filter json based on selection
                const less = json.slice(0,8)
                this.setState({
                    isLoaded: true,
                    items: json,
                    filteredItems: json,
                    lessItems: less
                })
            })
    }
    render() {


        var {isLoaded, items, filteredItems, isFilter, lessItems, isMore, searchLoad, searchedItems} = this.state;



        if (!isLoaded) {
            return <div>Loading...</div>
        } else if(isFilter && isLoaded){
            return (
                <main className="site-disc-main">
                    <DiscIntro/>
                    <DiscImage/>
                    <div className="disc-main-navigation">
                        <div className="disc-navigation">
                            <form className="disc-nav-search">
                                <div className="navigation-search-icon"><img src={SearchIconImg} alt="Search icon Image"/></div>

                                <div className="disc-nav-search-type">
                                    <input
                                        type="text"
                                        value={this.state.search}
                                        name="search"
                                        placeholder="Search for an animal"
                                        onChange={this.handleInput}
                                    />

                                </div>

                            </form>
                            <div className="navigation-filter">
                                <div className="navigation-filter-icon">
                                    <a href = "/">
                                        <img src={FilterIconImg} alt="Filter icon Image" />
                                        <p>Filter</p>
                                    </a>
                                </div>
                                <div className="navigation-filter-items">
                                    <form className="form-filter" >
                                        <ul>
                                            <li className="navigation-filter-list-head-species"><a href="/">Species</a></li>
                                            <li className="filter-species-items">
                                                <div className="filter-species-items-child1">
                                                    <label>Mammals</label>
                                                    <input
                                                        type="checkbox"
                                                        name="isMammals"
                                                        id="isMammals"
                                                        checked={this.state.isMammals}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div className="filter-species-items-child2">
                                                    <label>Birds</label>
                                                    <input
                                                        type="checkbox"
                                                        name="isBirds"
                                                        id="isBirds"
                                                        checked={this.state.isBirds}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div className="filter-species-items-child3">
                                                    <label>Fish</label>
                                                    <input
                                                        type="checkbox"
                                                        name="isFish"
                                                        id="isFish"
                                                        checked={this.state.isFish}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div className="filter-species-items-child4">
                                                    <label>Reptiles</label>
                                                    <input
                                                        type="checkbox"
                                                        name="isReptiles"
                                                        id="isReptiles"
                                                        checked={this.state.isReptiles}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </li>
                                            <li className="navigation-filter-list-head-risks"><a href="/">Extinction Risk</a></li>
                                            <li className="filter-risks-items">
                                                <div className="filter-risks-items-child1">
                                                    <label>Endangered</label>
                                                    <input
                                                        type="checkbox"
                                                        name="isEndangered"
                                                        id="isEndangered"
                                                        checked={this.state.isEndangered}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div className="filter-risks-items-child2">
                                                    <label>Critically Endangered</label>
                                                    <input
                                                        type="checkbox"
                                                        name="isCriticallyEndangered"
                                                        id="isCriticallyEndangered"
                                                        checked={this.state.isCriticallyEndangered}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </li>
                                        </ul>
                                        <button type="button" onClick={this.handleSubmit}>APPLY FILTER</button>
                                        <button type="button" onClick={this.handleClear}>Clear FILTER</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-disc-main-animalCards">
                        {filteredItems.map(item => (
                            <AnimalCard key={item.speciesID}
                                        animal={{
                                            name: `${item.name}`,
                                            location: `${item.habitat}`,
                                            population: `${item.speciesCount}`,
                                            status: `${item.statusDescription}`,
                                            imgUrl: `${item.image1}` + '.jpg',
                                            aniId: `${item.speciesID}`
                                        }}
                            />
                        ))}
                    </div>
                </main>
            )
        }
        else if(isMore && isLoaded){
            return (
                <main className="site-disc-main">
                    <DiscIntro/>
                    <DiscImage/>
                    <div className="disc-main-navigation">
                        <div className="disc-navigation">
                            <form className="disc-nav-search">
                                <div className="navigation-search-icon"><img src={SearchIconImg} alt="Search icon Image"/></div>

                                <div className="disc-nav-search-type">
                                    <input
                                        type="text"
                                        value={this.state.search}
                                        name="search"
                                        placeholder="Search for an animal"
                                        onChange={this.handleInput}
                                    />

                                </div>

                            </form>
                            <div className="navigation-filter">
                                <div className="navigation-filter-icon">
                                    <a href = "/">
                                        <img src={FilterIconImg} alt="Filter icon Image" />
                                        <p>Filter</p>
                                    </a>
                                </div>
                                <div className="navigation-filter-items">
                                    <form className="form-filter" >
                                        <ul>
                                            <li className="navigation-filter-list-head-species"><a href="/">Species</a></li>
                                            <li className="filter-species-items">
                                                <div className="filter-species-items-child1">
                                                    <label>Mammals</label>
                                                    <input

                                                        type="checkbox"
                                                        name="isMammals"
                                                        id="isMammals"
                                                        checked={this.state.isMammals}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div className="filter-species-items-child2">
                                                    <label>Birds</label>
                                                    <input
                                                        type="checkbox"
                                                        name="isBirds"
                                                        id="isBirds"
                                                        checked={this.state.isBirds}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div className="filter-species-items-child3">
                                                    <label>Fish</label>
                                                    <input
                                                        type="checkbox"
                                                        name="isFish"
                                                        id="isFish"
                                                        checked={this.state.isFish}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div className="filter-species-items-child4">
                                                    <label>Reptiles</label>
                                                    <input
                                                        type="checkbox"
                                                        name="isReptiles"
                                                        id="isReptiles"
                                                        checked={this.state.isReptiles}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </li>
                                            <li className="navigation-filter-list-head-risks"><a href="/">Extinction Risk</a></li>
                                            <li className="filter-risks-items">
                                                <div className="filter-risks-items-child1">
                                                    <label>Endangered</label>
                                                    <input
                                                        type="checkbox"
                                                        name="isEndangered"
                                                        id="isEndangered"
                                                        checked={this.state.isEndangered}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div className="filter-risks-items-child2">
                                                    <label>Critically Endangered</label>
                                                    <input
                                                        type="checkbox"
                                                        name="isCriticallyEndangered"
                                                        id="isCriticallyEndangered"
                                                        checked={this.state.isCriticallyEndangered}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </li>
                                        </ul>
                                        <button type="button" onClick={this.handleSubmit}>APPLY FILTER</button>
                                        <button type="button" onClick={this.handleClear}>Clear FILTER</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-disc-main-animalCards">
                        {items.map(item => (
                            <AnimalCard key={item.speciesID}
                                        animal={{
                                            name: `${item.name}`,
                                            location: `${item.habitat}`,
                                            population: `${item.speciesCount}`,
                                            status: `${item.statusDescription}`,
                                            imgUrl: `${item.image1}` + '.jpg',
                                            aniId: `${item.speciesID}`
                                        }}
                            />
                        ))}
                    </div>
                </main>
            )
        }
        else if(searchLoad && isLoaded){
            return (
                <main className="site-disc-main">
                    <DiscIntro/>
                    <DiscImage/>
                    <div className="disc-main-navigation">
                        <div className="disc-navigation">
                            <form className="disc-nav-search">
                                <div className="navigation-search-icon"><img src={SearchIconImg} alt="Search icon Image"/></div>

                                <div className="disc-nav-search-type">
                                    <input
                                        type="text"
                                        value={this.state.search}
                                        name="search"
                                        placeholder="Search for an animal"
                                        onChange={this.handleInput}
                                    />

                                </div>

                            </form>
                            <div className="navigation-filter">
                                <div className="navigation-filter-icon">
                                    <a href = "/">
                                        <img src={FilterIconImg} alt="Filter icon Image" />
                                        <p>Filter</p>
                                    </a>
                                </div>
                                <div className="navigation-filter-items">
                                    <form className="form-filter" >
                                        <ul>
                                            <li className="navigation-filter-list-head-species"><a href="/">Species</a></li>
                                            <li className="filter-species-items">
                                                <div className="filter-species-items-child1">
                                                    <label>Mammals</label>
                                                    <input

                                                        type="checkbox"
                                                        name="isMammals"
                                                        id="isMammals"
                                                        checked={this.state.isMammals}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div className="filter-species-items-child2">
                                                    <label>Birds</label>
                                                    <input
                                                        type="checkbox"
                                                        name="isBirds"
                                                        id="isBirds"
                                                        checked={this.state.isBirds}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div className="filter-species-items-child3">
                                                    <label>Fish</label>
                                                    <input
                                                        type="checkbox"
                                                        name="isFish"
                                                        id="isFish"
                                                        checked={this.state.isFish}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div className="filter-species-items-child4">
                                                    <label>Reptiles</label>
                                                    <input
                                                        type="checkbox"
                                                        name="isReptiles"
                                                        id="isReptiles"
                                                        checked={this.state.isReptiles}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </li>
                                            <li className="navigation-filter-list-head-risks"><a href="/">Extinction Risk</a></li>
                                            <li className="filter-risks-items">
                                                <div className="filter-risks-items-child1">
                                                    <label>Endangered</label>
                                                    <input
                                                        type="checkbox"
                                                        name="isEndangered"
                                                        id="isEndangered"
                                                        checked={this.state.isEndangered}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div className="filter-risks-items-child2">
                                                    <label>Critically Endangered</label>
                                                    <input
                                                        type="checkbox"
                                                        name="isCriticallyEndangered"
                                                        id="isCriticallyEndangered"
                                                        checked={this.state.isCriticallyEndangered}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </li>
                                        </ul>
                                        <button type="button" onClick={this.handleSubmit}>APPLY FILTER</button>
                                        <button type="button" onClick={this.handleClear}>Clear FILTER</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-disc-main-animalCards">
                        {searchedItems.map(item => (
                            <AnimalCard key={item.speciesID}
                                        animal={{
                                            name: `${item.name}`,
                                            location: `${item.habitat}`,
                                            population: `${item.speciesCount}`,
                                            status: `${item.statusDescription}`,
                                            imgUrl: `${item.image1}` + '.jpg',
                                            aniId: `${item.speciesID}`
                                        }}
                            />
                        ))}
                    </div>
                </main>
            )
        }
        else{
            return (
                <main className="site-disc-main">
                    <DiscIntro/>
                    <DiscImage/>
                    <div className="disc-main-navigation">
                        <div className="disc-navigation">
                            <form className="disc-nav-search">
                                <div className="navigation-search-icon"><img src={SearchIconImg} alt="Search icon Image"/></div>

                                <div className="disc-nav-search-type">
                                    <input
                                        type="text"
                                        value={this.state.search}
                                        name="search"
                                        placeholder="Search for an animal"
                                        onChange={this.handleInput}
                                    />

                                </div>

                            </form>
                            <div className="navigation-filter">
                                <div className="navigation-filter-icon">
                                    <a href = "/">
                                        <img src={FilterIconImg} alt="Filter icon Image" />
                                        <p>Filter</p>
                                    </a>
                                </div>
                                <div className="navigation-filter-items">
                                    <form className="form-filter" >
                                        <ul>
                                            <li className="navigation-filter-list-head-species"><a href="/">Species</a></li>
                                            <li className="filter-species-items">
                                                <div className="filter-species-items-child1">
                                                    <label>Mammals</label>
                                                    <input

                                                        type="checkbox"
                                                        name="isMammals"
                                                        id="isMammals"
                                                        checked={this.state.isMammals}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div className="filter-species-items-child2">
                                                    <label>Birds</label>
                                                    <input
                                                        type="checkbox"
                                                        name="isBirds"
                                                        id="isBirds"
                                                        checked={this.state.isBirds}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div className="filter-species-items-child3">
                                                    <label>Fish</label>
                                                    <input
                                                        type="checkbox"
                                                        name="isFish"
                                                        id="isFish"
                                                        checked={this.state.isFish}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div className="filter-species-items-child4">
                                                    <label>Reptiles</label>
                                                    <input
                                                        type="checkbox"
                                                        name="isReptiles"
                                                        id="isReptiles"
                                                        checked={this.state.isReptiles}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </li>
                                            <li className="navigation-filter-list-head-risks"><a href="/">Extinction Risk</a></li>
                                            <li className="filter-risks-items">
                                                <div className="filter-risks-items-child1">
                                                    <label>Endangered</label>
                                                    <input
                                                        type="checkbox"
                                                        name="isEndangered"
                                                        id="isEndangered"
                                                        checked={this.state.isEndangered}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                                <div className="filter-risks-items-child2">
                                                    <label>Critically Endangered</label>
                                                    <input
                                                        type="checkbox"
                                                        name="isCriticallyEndangered"
                                                        id="isCriticallyEndangered"
                                                        checked={this.state.isCriticallyEndangered}
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </li>
                                        </ul>
                                        <button type="button" onClick={this.handleSubmit}>APPLY FILTER</button>
                                        <button type="button" onClick={this.handleClear}>Clear FILTER</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="site-disc-main-animalCards">
                        {lessItems.map(item => (
                            <AnimalCard key={item.speciesID}
                                        animal={{
                                            name: `${item.name}`,
                                            location: `${item.habitat}`,
                                            population: `${item.speciesCount}`,
                                            status: `${item.statusDescription}`,
                                            imgUrl: `${item.image1}` + '.jpg',
                                            aniId: `${item.speciesID}`
                                        }}
                            />
                        ))}
                    </div>
                    <div className="discLoadMore-button">
                        <button type="button" onClick={this.handleLoadMore}>Load More</button>
                    </div>
                </main>
            )
        }
    }
}

export default DiscMain
