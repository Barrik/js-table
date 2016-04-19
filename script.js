console.log("Hello from the JavaScript file");

function createTable(numCols, numRows) {
  var begin = '<table class="theTable">';
  var middle = "";
  var end = "</table>";
  for (var r = 0; r < numRows; r++) {
    middle += '<tr class="row">';
    for (var c = 0; c < numCols; c++) {
      middle += '<td class="cell"></td>';
    };
    middle += "</tr>";
  }
  return begin + middle + end;
}

document.getElementsByTagName("body")[0].innerHTML = createTable(25, 15);

// document.createElement("table");
// var table = document.querySelector("table");
// table.createElement("tr");
