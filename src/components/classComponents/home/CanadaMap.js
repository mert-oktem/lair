import React, { Component } from 'react';
import * as d3 from 'd3'
import * as topojson from 'topojson-client';


class CanadaMap extends Component {
   constructor() {
      super()
      this.myRef = React.createRef()
      this.state = {
         data: false
      }
   }

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
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


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
            // Add the class selected
            d3.select(this).classed("selected", true)
         })
         .on("mouseout", function(d) {
            // Remove class selected
            d3.select(this).classed("selected", false)
         })
      // .on("click", function(d) {
      //     d3.select(this).classed("selected", true)
      // })

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
            return  path.centroid(d)[1];
         })   
   }

   render() {
      if (!this.state.data) {
         return null;
      }
      return <div ref={this.myRef}/>;
   }
}
export default CanadaMap