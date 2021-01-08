let cells = document.querySelectorAll(".cell");
let cell = document.querySelector(".cell");

let span = document.querySelectorAll("span")


function clickCell() {
  let first_player = "+";
  let game_on = true;
  for (let cell of cells) {
      if (game_on === true) {
        cell.querySelector("span").textContent = "+";

        if (first_player !== "+" && first_player != cell && first_player.getAttribute("data-value") === cell.getAttribute("data-value")) {
          cell.querySelector("span").textContent = "o";
         
          
          game_on = false;
          first_player = cell;
        }
      }
  }
}


cell.addEventListener("click", function () {
clickCell();
});














/// ----------------

// let board = document.querySelector(".nr2");
// for (let i = 1; i <= 9; i++) {
//   let element = document.createElement("a");
//   element.classList.add("cell");
//   element.innerHTML = "<span></span>";

//   element.addEventListener("click", function () {
//     element.querySelector("span").textContent = "+";
    
//   });
  
//   board.append(element);
// }