import React, {Component} from "react"
import SearchIconImg from "../../../../img/ui_icons/PNG/ui_icons_search.png";


class DiscNavSearch extends Component {
    constructor() {
        super()
        this.state = {
            search: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form className="disc-nav-search">
                <div className="navigation-search-icon"><img src={SearchIconImg} alt="Search icon Image"/></div>

                <div className="disc-nav-search-type">
                    <input
                        type="text"
                        value={this.state.search}
                        name="search"
                        placeholder="Search for an animal"
                        onChange={this.handleChange}
                    />

                </div>

            </form>
        )
    }
}

export default DiscNavSearch
