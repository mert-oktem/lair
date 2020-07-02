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
            "name": "Years",
            "data": [
                {
                    "x":2014,
                    "y":345
                },
                {
                    "x":2015,
                    "y":540
                },
                {
                    "x":2016,
                    "y":640
                },
                {
                    "x":2017,
                    "y":940
                },
                {
                    "x":2018,
                    "y":40
                }      ,
                {
                    "x":2019,
                    "y":140
                }
            ]
        }
    ]
}

class Chart extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         chartData : props.chartData
    //     }
    // }





    render() {
        return (

            <div className="chart">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />

            </div>

        )
    }
}

export default Chart