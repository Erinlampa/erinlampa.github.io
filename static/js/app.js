// from data.js
var tableData = data;


//create table body variable
var tbody = d3.select("tbody");


// Table population using arrow functions
data.forEach((sightings) => {
    console.log(sightings);
    var row = tbody.append("tr");

    Object.entries(sightings).forEach(function([key, value]) {
        console.log(key, value);

        var cell = tbody.append("td");
        cell.text(value);
    });
});


// Select the submit button

var inputElement = d3.select("#filter-btn");
var submit = d3.select("#datetime");

// Filter the data by user input
submit.on("click", function (){
// Prevent page refresh
d3.event.preventDefault();


    // console.log the input value
    console.log(input.property("value"));
    
    // Create a new table with filtered data
    var filteredData = tableData.filter(sighting => sighting.datetime === inputElement.property("value"))
    console.log(filteredData);

        // Clear existing table
        d3.selectAll("tbody tr").remove();
        d3.selectAll("tbody td").remove();
        
        // Table population using arrow functions
        filteredData.forEach((sighting) => {
    
        // console.log(sightings);
        var row = tbody.append("tr");

        Object.entries(sighting).forEach(function([key, value]) {
         console.log(key, value);

            var cell = tbody.append("td");
            cell.text(value);
        })
    }) 
})