// from data.js
var tableData = data;

// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#date");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(people);
  
    var filteredData = people.filter(person => person.bloodType === inputValue);
  
    console.log(filteredData);
});


//create table body variable
var tbody = d3.select("tbody");


//print the data to a log
data.forEach(function(data) {
console.log(data);
});

//Loop through the data and create the rows
data.forEach(function(data) {
console.log(data);
var row = tbody.append("tr");
})


//log the values
Object.entries(data).forEach(function([key, value]) {
console.log(key, value);
});


//Append a cell to the row for each value in the weather report object
Object.entries(data).forEach(function([key, value]) {
console.log(key, value);
var cell = tbody.append("td");
});


