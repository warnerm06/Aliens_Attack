// from data.js
var tableData = data;

var userInput = function selectDates(inputDate) {

    return data.filter(inputDate)
};
 function main(data) {

    var tbody = d3.select("tbody");

    data.forEach((data) => {
        var row = tbody.append("tr");
        Object.entries(data).forEach(([key, value]) => {
            var cell = tbody.append("td").text(value);

        });
    })


 }

 main(tableData);


var submit = d3.select("#filter-btn");

submit.on("click", function () {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime").property("value");
     console.log(inputElement);
    // Get the value property of the input element
    // var inputValue = inputElement.property("value");

    var filteredData = data.filter(data => data.datetime === inputElement);

    var tbody = d3.select("tbody");

    tbody.html("")
    // clearTable.innerHTML = "";

    filteredData.forEach((filteredData) => {
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(([key, value]) => {
            var cell = tbody.append("td").text(value);
        });
    });
})

