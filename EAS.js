const container = document.getElementById("grid-container");


//Function to create row's and column's
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      
      container.appendChild(cell).className = "grid-item";
    };
  };



//Function to edit number of rows on button click

function changeRows() {
  let text;
  let rows = prompt("Please enter the number of rows you'd like (Between 1-100)");
  if (rows == null || rows == NaN || rows == 0) {
    text = "Incorrect Value, please enter a number between 1-100"
  } else {
    function reset() {
      document.querySelectorAll(".grid-item").forEach((e) => e.parentNode.removeChild(e));
    }
    reset()
    makeRows(rows, rows);
  }
}
  

  //Add event listener to make div's black on mouseover

  let test = document.getElementById("grid-container")

 
  test.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.background = "black";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.background = "";
    }, 500);
  }, false);


  