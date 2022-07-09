// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");


//Build table data
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      //find tbody tag within the HTML and add a table row("tr")
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        //append each value of the object to a cell in the table
        let cell = row.append("td");
        //adding values
        cell.text(val);
        }
      );
    });
  }

  function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  };

  //Listen for the event
  //We'll assign a unique id to a button element in the HTML called "filter-btn".By adding this 
  //we are l  inking our code directly to the filter button
  //then, we're telling D3 to execute our handleClick() function when the button with an id of filter-btn is clicked.
  d3.selectAll("#filter-btn").on("click", handleClick);

  //Build the table when the page loads 
  buildTable(tableData);