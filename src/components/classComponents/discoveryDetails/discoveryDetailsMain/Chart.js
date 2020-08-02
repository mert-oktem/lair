import React, {Component} from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
    "title": {
        "text": "Population trend: Decreasing",
        "align":"left"
    },
    "chart": {
        "type": "line",
        "backgroundColor": "#F3E9D9"
    },
    "xAxis": {
        type: "year",
        allowDecimals: false
    },
    "series": [
        {
            "name": "Population",
            "data": []
        }
    ],
    "yAxis": {
        title: {
            text: ''
        }
    }
}

class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            item: {},
            isLoaded : false,
            hOptions : {}
        }
    }
    componentDidMount() {
        fetch(`https://lair.wmdd.ca/api/species/population/${this.props.id}`)
            .then(res => res.json())
            .then(json => {
                options.series[0].data = json ;
                this.setState({
                    isLoaded: true,
                    item:json,
                    hOptions:options
                })
            })
    }
    render() {
        return (
            <div className="chart">
                { this.state.isLoaded &&
                <HighchartsReact
                    highcharts={Highcharts}
                    options={this.state.hOptions}
                />
                }
                { !this.state.isLoaded &&
                <div>Chart is loading</div>
                }
            </div>
        )
    }
}

export default Chart