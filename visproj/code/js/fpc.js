/**
 *
    Author: Kahin Akram
    Date: Jan 24, 2020
    TNM048 Lab 1 - Visual Information-Seeking Mantra
    Focus+Context file
 *
*/
d3.csv("tweetdata.csv", type, function focusPlusContext(data) {

    // Creating margins and figure sizes
    var margin = { top: 20, right: 20, bottom: 150, left: 40 },
        margin2 = { top: 100, right: 20, bottom: 50, left: 40 },
        width = $("#scatterplot").parent().width() - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom,
        height2 = 200 - margin2.top - margin2.bottom;

    /**
     * Select Scatter plot div and append svg tag to it.
     * Set position to relative and width to 100% and an arbitrary height
     * Then add the clipping area with clipPath -
     * The clipping path restricts the region to which paint can be applied.
     * After that, append the two g tags we will be using for drawing the focus plus context graphs
     */
    var svg = d3.select("#scatterplot").append("svg")
        .attr("postion", "relative")
        .attr("width", "100%")
        .attr("height", height + margin.top + margin.bottom);

    svg.append("defs").append("clipPath")
        .attr("id", "clip")
        .append("rect")
        .attr("width", width)
        .attr("height", height);

    var focus = svg.append("g")
        .attr("class", "focus")
        .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

    var context = svg.append("g")
        .attr("class", "context")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //<------------my idea on search function  take a look---------------------------------------------------------------------------------------->



const searchbar = document.getElementById('searchbar')

const listofmovies = document.getElementById('listofmovies')
let movielist = [];

searchbar.addEventListener('keyup', ("e") => {

    const filteredmovies = movielist.filter((movies) => {
        return (
            movies.name.includes(searchbar) 
           
        );
    });
   showMovie(filteredmovies);
});


const loadMovies = async () => {
    try {
        const res = await fetch('Harry Potter');
        movielist = await res.json();
        showMovie(movielist);
    } catch (err) {
        console.error(err);
    }
};



const showMovie = (movies) => {
        movielist.map((movies) => {
            return movies.name.includes(searchbar);
             })
        .join('');
    movielist.innerHTML = movielist;
};

loadMovies();


//<---------OLD------------------------------------------------------------------------------------------->



    var thisone = myFunction(4, 3);
    document.getElementById("demo").innerHTML = thisone;

    function myFunction(a, b) {
      return a * b;
    }
    /**
     * Task 1 - Parse date with timeParse to year-month-day
     */
     //this has  to be called parseDate???
     // code below calls it, weird that its not mentioned in lab pdf
    var parseDate = d3.timeParse("%Y-%m-%d");

    /**
     * Task 2 - Define scales and axes for scatterplot
     */
    var xScale = d3.scaleTime().range([0, width]),
        xAxis = d3.axisBottom(xScale),
        yScale = d3.scaleLinear().range([height, 0]),
        yAxis = d3.axisLeft(yScale);

    /**
     * Task 3 - Define scales and axes for context (Navigation through the data)
     */

     var navXScale = d3.scaleTime().range([0, width]),
         navXAxis = d3.axisBottom(xScale),
         navYScale =  d3.scaleLinear().range([height2, 0]);
    /**
     * Task 4 - Define the brush for the context graph (Navigation)
     */
     // https://bl.ocks.org/bumbeishvili/6c54d3f0e202aa7004a669a768369c5d
     // where they define brush
     var brush = d3.brushX()
         .extent([[0, 0],[width, height2]])
         .on("brush end", brushed);


    //Setting scale parameters
    var maxDate = d3.max(data.features, function (d) { return parseDate(d.properties.Date) });
    var minDate = d3.min(data.features, function (d) { return parseDate(d.properties.Date) });
    var maxMag = d3.max(data.features, function (d) { return d.properties.EQ_PRIMARY });
    var minMag = d3.min(data.features, function (d) { return d.properties.EQ_PRIMARY })

    //Calculate todays date.
    maxDate_plus = new Date(maxDate.getTime() + 300 * 144000000)

    /**
     * Task 5 - Set the axes scales, both for focus and context.
     */
     xScale.domain([minDate, maxDate]);
     yScale.domain([minMag, maxMag]);
     navXScale.domain([minDate, maxDate]);
     navYScale.domain([minMag, maxMag]);




     d3.csv("tweetdata.csv", type, function(error, data) {
        if (error) throw error;
      
        x.domain(d3.extent(data, function(d) { return d.date; }));
        y.domain([0, d3.max(data, function(d) { return d.price; })]);
        x2.domain(x.domain());
        y2.domain(y.domain());

     }

    


    //<---------------------------------------------------------------------------------------------------->

   

            /**
             * Task 13 - Update information in the "tooltip" by calling the tooltip function.
             */
            points.tooltip(d)

            //Rescale the dots onhover
            d3.select(this).attr('r', 15)

            //Rescale the dots on the map.
            curent_id = d3.select(this)._groups[0][0].__data__.id.toString()
            d3.selectAll(".mapcircle")
                .filter(function (d) { return d.id === curent_id; })
                .attr('r', 15)

            //Call map hover function if implemented!
            //world_map.hovered(d.id);
        });
    }

    //Mouse out function
    function mouseOut(selected_dots){
        selected_dots
            .on("mouseout", function () {
                //Returning to original characteristics
                d3.select(this)
                    .transition()
                    .duration(500)
                    .attr("r", function (d) {
                        if (d.properties.DEATHS == null) {
                            return 3
                        }
                        else {
                            return scaleQuantRad(d.properties.DEATHS);
                        }
                    })

                //Reset all the dots on the map
                d3.selectAll(".mapcircle")
                    .filter(function (d) { return d.id === curent_id; })
                    .transition()
                    .duration(500)
                    .attr("r", function (d) {
                        if (d.properties.DEATHS == null) {
                            return 3
                        }
                        else {
                            return scaleQuantRad(d.properties.DEATHS);
                        }
                    })
            });
    }
    //<---------------------------------------------------------------------------------------------------->

    /**
     * Task 9 - Append the brush.
     * Brush must come last because we changes places of the focus and context plots.
     * The brush function is trying to access things in scatter plot which are not yet
     * implmented if we put the brush before.
     */

    //here..
    //brush is defnied in task 4
    //similar to task 6
    //https://www.geeksforgeeks.org/d3-js-brush-move-function/
    //range must return some sort of array
    context.append("g")
        .attr("class", "brush")
        .call(brush)
        .call(brush.move, xScale.range())
    //<---------------------------------------------------------------------------------------------------->

    //Brush function for filtering through the data.
    function brushed(){
        //Function that updates scatter plot and map each time brush is used
        var s = d3.event.selection || navXScale.range();
        xScale.domain(s.map(navXScale.invert, navXScale));
        focus.selectAll(".dot")
            .filter(function (d) { return d.properties.EQ_PRIMARY != null })
            .attr("cx", function (d) {
                return xScale(parseDate(d.properties.Date));
            })
            .attr("cy", function (d) {
                return yScale(d.properties.EQ_PRIMARY);
            })

        focus.select(".axis--x").call(xAxis);

        if (d3.event.type == "end") {
            var curr_view_erth = []
            d3.selectAll(".dot").each(
                function (d, i) {
                    if (parseDate(d.properties.Date) >= xScale.domain()[0] &&
                        parseDate(d.properties.Date) <= xScale.domain()[1]) {
                        curr_view_erth.push(d.id.toString());
                    }
                });
            /**
             * Remove comment for updating dots on the map.
             */
            curr_points_view = world_map.change_map_points(curr_view_erth)
        }
    }

    //<---------------------------------------------------------------------------------------------------->

    /**
     * Function for hovering the points, implement if time allows.
     */
    this.hovered = function(){
        console.log("If time allows you, implement something here!");
    }

}
