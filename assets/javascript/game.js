// VARIABLES
var characters = ["assets/images/Obi-wan.png", "assets/images/Luke.jpg", "assets/images/Darth_Sidious.jpg", "assets/images/Darth_Maul.png" ]

// ==============================================
// CHOOSE YOUR FIGHTER
function startGame() {
// On click, choose a character
document.addEventListener ('click', function(img) {
  if (img.target.id === "obi") {
    // Show character under "user"
    document.getElementById("user").src = characters[0];
    // Show other characters under "enemiesLeft"
    document.getElementById("one").src = characters[1];
    document.getElementById("two").src = characters[2];
    document.getElementById("three").src = characters[3];
  }
  else if (img.target.id === "luke") {
    document.getElementById("user").src = characters[1];
    document.getElementById("one").src = characters[0];
    document.getElementById("two").src = characters[2];
    document.getElementById("three").src = characters[3];
  }
  else if (img.target.id === "sid") {
    document.getElementById("user").src = characters[2];
    document.getElementById("one").src = characters[0];
    document.getElementById("two").src = characters[1];
    document.getElementById("three").src = characters[3];
  }
  else if (img.target.id === "maul") {
    document.getElementById("user").src = characters[3];
    document.getElementById("one").src = characters[0];
    document.getElementById("two").src = characters[1];
    document.getElementById("three").src = characters[2];
  }
})

// Show fight arena
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