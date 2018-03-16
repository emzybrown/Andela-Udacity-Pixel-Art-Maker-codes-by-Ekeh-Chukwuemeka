$(function() {
  //Set the grid and current color to #000
  var theGrid = $("#pixel_canvas");
    var currentColor = "#000"
  

  // Prevent default submit behavior and call makeGrid function
  $("#sizePicker").submit(function(emeka) {
    emeka.preventDefault();
    makeGrid();
  });

  //select color value
$("#colorPicker").change(function() {
    currentColor= $(this).val();
});
  //If the user clicks or moves the mouse in the grid
  

  theGrid.on("click", "td", function(emeka) {
    $(this).css("background-color", currentColor); //Draw the td that the user clicks
  });

  //Build the grid
  function makeGrid() {
    //Set the grid dimensions;
    var gridHeight = $("#input_height").val();
    var gridWidth = $("#input_width").val();
    theGrid.empty(); //Empty the grid and start over
    //Loop -> Create rows
    for (x = 0; x < gridHeight; x++) {
      theGrid.append("<tr>"); //Start Row
      //Loop -> Create columns for each row
      for (y = 0; y < gridWidth; y++) {
        $("tr:eq(" + x + ")").append("<td></td>");
      }
      theGrid.append("</tr>"); //End Row
    }
  }
});


