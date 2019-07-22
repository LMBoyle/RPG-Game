// VARIABLES
var characters = ["assets/images/Obi-wan.png", "assets/images/Luke.jpg", "assets/images/Darth_Sidious.jpg", "assets/images/Darth_Maul.png"];
var user = document.getElementById("user");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
// ==============================================
// CHOOSE YOUR FIGHTER
// On click, choose a character
$(".choose").click(function(img) {

  console.log("you clicked me")


  if (img.target.id === "obi") {
    // Show character under "user"
    user.src = characters[0];
    // Show other characters under "enemiesLeft"
    one.src = characters[1];
    two.src = characters[2];
    three.src = characters[3];
  }
  else if (img.target.id === "luke") {
    user.src = characters[1];
    one.src = characters[0];
    two.src = characters[2];
    three.src = characters[3];
  }
  else if (img.target.id === "sid") {
    user.src = characters[2];
    one.src = characters[0];
    two.src = characters[1];
    three.src = characters[3];
  }
  else if (img.target.id === "maul") {
    user.src = characters[3];
    one.src = characters[0];
    two.src = characters[1];
    three.src = characters[2];
  }


// Show fight arena
  $(".arena").toggle();

// Hide character select
  $(".charSelect").toggle();

/*
  var a = document.getElementById("showHide");

  if (a.style.display === "none") {
    a.style.display = "grid";
  } 
  else {
    a.style.display = "none";
  }
*/



/*
  var f = document.getElementById("choose");

  if (f.style.display === "grid") {
    f.style.display = "none";
  }
  else {
    f.style.display = "grid";
  }
*/
})


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