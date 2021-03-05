(function()  {

var width = 1000;
var height = 1000;

var svg = d3.select("#chart").append("svg")
.attr("postion", "relative")
.attr("width", width)
.attr("height", height)
.append("g")

var simulation = d3.forceSimulation() //force("name" , definetheforce)


d3.queue()
.defer(d3.csv, "gems.csv")
.await(ready)

function ready (error, datapoints) 
{
var circles = svg.selectAll(".artist")
.data(datapoints)
    .enter().append("circle")
    .attr("class", "artist")
    .attr("r" , 10)
    .attr("fill", "lightblue")




simulation.nodes(datapoints)
.on('tick', ticked)

function ticked() {
    circles
    .attr("cx", function(d) {
        return d.x
            })
    .attr("cy", function(d) {
                return d.y
                    })                  
                }    

d3.select("#topic0").on('click', function(){
    console.log("you clicked here")
})
}
}





           




