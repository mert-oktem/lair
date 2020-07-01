import React, {Component} from 'react'
import Chart from "./Chart";

class PopulationChart extends Component {
    constructor(){
        super();
        this.state={
            chartData:{}
        }
    }
    componentWillMount() {
        this.getChartData();
    }

    getChartData(){
        // api call here

        this.setState({
            chartData:{
                labels:['2005', '2008', '2012' , '2015', '2017', '2019'],
                dataSets:[
                    {
                        label:'Population',
                        data:[20,
                            14,
                            10,
                            12,
                            20,
                            14],
                        backgroundColor:'green'
                        // backgroundColor:[
                        //     'rgba(255,99,132,0.6)',
                        //     'rgba(54,162,235,0.6)',
                        //     'rgba(255,206,86,0.6)',
                        //     'rgba(75,192,192,0.6)',
                        //     'rgba(153,102,255,0.6)',
                        //     'rgba(255,159,64,0.6)',
                        //     'rgba(255,99,132,0.6)'
                        //
                        // ]

                    }
                ]

            }
        });
    }
    render() {
        return (
            <div className="discDet-main-popChart">
                <div className="popChart-heading"><h3>POPULATION GROWTH</h3></div>
                <div className="popChart-text"><p>Population trend : Decreasing</p></div>
                <div className="popChart-graph"><Chart chartData={this.state.chartData} legendPosition="top" /></div>
            </div>
        )
    }
}

export default PopulationChart