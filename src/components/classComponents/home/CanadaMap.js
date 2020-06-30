import React, { Component } from 'react'
import * as d3 from 'd3'
import topojson from 'canada.topojson'


class CanadaMap extends Component {
   render() {
      // const projection = geoMercator()
      // const pathGenerator = geoPath().projection(projection)
      // const provinces = canada.features
      //    .map((d,i) => <path
      //    key={'path' + i}
      //    d={pathGenerator(d)}
      //    className='provinces'
      //    />)

      var margin = { top: 0, left: 0, right: 0, bottom: 0},
          height = 700 - margin.top - margin.bottom,
          width = 1200 - margin.left - margin.right;


      var svg = d3.select(".home-main-map")
          .append("svg")
          .attr("height", height + margin.top + margin.bottom)
          .attr("width", width + margin.left + margin.right)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")")



      d3.queue()
          .defer(d3.json, "canada.topojson")
          // .defer(d3.csv, "capitals.csv")
          .await(ready)


      var projection = d3.geoOrthographic().clipAngle(90).rotate([98, -60]).scale(600).translate([500,200])
          .scale(800)
          .translate([width / 2, height / 2]);

      var path = d3.geoPath()
          .projection(projection)

      function ready(error, data) {
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

         var stateLabels = topojson.feature(data, data.objects.canadaprov).features


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






      // return <svg width={1500} height={1000}>
      return <svg />
   }
}
export default CanadaMap