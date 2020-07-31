import React, { Component } from 'react';
import * as d3 from 'd3'
import * as topojson from 'topojson-client';
import MapClick from "./MapClick";
import {Link} from "react-router-dom";


class CanadaMap extends Component {
   constructor() {
      super()
      this.myRef = React.createRef()
      this.aniIcons = React.createRef()
      this.handleClick = this.handleClick.bind(this)
      this.scrollToMyRef = this.scrollToMyRef.bind(this)
      this.state = {
         data: false,
         mapClick:false,
         items:[],
      }
      this.mapAdded = false;
      this.myRef2 = React.createRef()
   }

   handleClick(d){
      fetch(`https://lair.wmdd.ca/api/locations/${d.properties.name}`)
      .then(res => res.json())
      .then(json => {
         this.setState( {
            mapClick: true,
            items:json
         } )
         this.scrollToMyRef()
      })
   }

   scrollToMyRef = () => window.scrollTo(0, this.myRef2.current.offsetTop)

   componentDidMount() {
      var files = ["https://gist.githubusercontent.com/Brideau/2391df60938462571ca9/raw/f5a1f3b47ff671eaf2fb7e7b798bacfc6962606a/canadaprovtopo.json"];

      Promise.all(files.map(url => d3.json(url))).then(values => this.setState({ data: values[0]}))
   }


   componentDidUpdate() {
      var margin = { top: 0, left: 0, right: 0, bottom: 0}
      var height = 700 - margin.top - margin.bottom
      var width = 1200 - margin.left - margin.right


      var svg = d3.select(this.myRef.current)
      .append("svg")
      .attr("height", height + margin.top + margin.bottom)
      .attr("width", width + margin.left + margin.right)
      .attr("viewBox", "0 0 " + width + " " + height )
      .attr("preserveAspectRatio", "xMinYMin")
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

      var projection = d3.geoOrthographic().clipAngle(90).rotate([98, -60]).scale(600).translate([500,200])
          .scale(800)
          .translate([width / 2, height / 2]);

      var path = d3.geoPath()
          .projection(projection)

      var data = this.state.data

      var states = topojson.feature(data, data.objects.canadaprov).features
         
      svg.selectAll(".state")
         .data(states)
         .enter().append("path")
         .attr("class", "state")
         .attr("d", path)
         .on("mouseover", function(d) {
            d3.select(this).classed("selected", true)
         })
         .on("mouseout", function(d) {
            d3.select(this).classed("selected", false)
         })
         .on("click", (d) => this.handleClick(d) )

      svg.selectAll(".state-label")
         .data(states)
         .enter().append("svg:text")
         .text(function(d){
            return d.properties.name;
         })
         .attr("x", function(d){
            return path.centroid(d)[0];
         })
         .attr("y", function(d){
            if (d.properties.name == "Prince Edward Island") {
               return  path.centroid(d)[1] - 15;
            }
            else if (d.properties.name == "Nova Scotia") {
               return  path.centroid(d)[1] + 40;
            }
            else if (d.properties.name == "New Brunswick") {
               return  path.centroid(d)[1] + 10;
            }
            else {
               return path.centroid(d)[1];
            }
         })
         .attr("text-anchor","middle")
   }

   render() {
      if (!this.state.data) {
         return null;
      }
      else if (this.state.mapClick != false) {
         let items = this.state.items

         return (
             <div className="canada-map-click-active">
                   <div className="canada-map-click-habitat">
                      <p ref={this.myRef2} >Endangered Species in {items[0].habitat}</p>
                   </div>
                   <div className="canada-map-click-icons">
                      {items.map(item => (
                          <Link to={`/discovery/${item.speciesID}`}>
                          <MapClick key={item.speciesID}
                                    animal={{
                                       name: `${item.name}`,
                                       habitat: `${item.habitat}`,
                                       imgUrl: require('../../../' + `${item.icon}` + '.png'),
                                       aniId: `${item.speciesID}`,
                                       population:`${item.speciesCount}`
                                    }}  test={this.myRef2}   />
                          </Link>
                      )
                      )}
                   </div>
             </div>
         )
      }
      else if (this.state.data) {
         this.mapAdded = true;

         return (
            <div className="canada-map">
               <div style={{ height: 700 }} ref={this.myRef}></div>
            </div>
         )
      }
   }
}
export default CanadaMap