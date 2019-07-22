// VARIABLES

// ==============================================
// CHOOSE YOUR FIGHTER
function startGame() {
// On click, choose a character

// Show fight arena
console.log("You clicked me!");

  var a = document.getElementById("showHide");

  if (a.style.display === "none") {
    a.style.display = "grid";
  } 
  else {
    a.style.display = "none";
  }

// Hide character select
  var f = document.getElementById("choose");

  if (f.style.display === "grid") {
    f.style.display = "none";
  }
  else {
    f.style.display = "grid";
  }
// Show character under "fighter"

// Show other characters under "enemiesLeft"
}
// ==============================================
// CHOOSE AN ENEMY
// On click, choose an enemy

// Show enemy under "defender"

// If enemy health = 0, show greyed out or with an v, and make unclickable

// ==============================================
// FIGHT
// On button click

// Take health from enemy based on user attack value

// Take health from user based on enemy counter attack value

// Add base attack value to new attack value of user

// Loop until one health is 0 or below

// ==============================================
// WIN/LOSE
// If defeated enemy, loop to choose an enemy

// If lose, loop to reset

// ==============================================
// RESET
// ==============================================