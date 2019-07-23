// VARIABLES
var obi = {
  name: "Obi-Wan Kenobi",
  image: "assets/images/Obi-wan.png",
  lightsaber: {"box-shadow" : "0 0 8px 3px rgb(148, 167, 231)"},
  health: 120,
  attack: 8,
  counterAttack: 10,
}
var luke = {
  name: "Luke Skywalker",
  image: "assets/images/Luke.jpg",
  lightsaber: {"box-shadow" : "0 0 8px 3px green"},
  health: 100,
  attack: 10,
  counterAttack: 15,
}
var sidious = {
  name: "Darth Sidious",
  image: "assets/images/Darth_Sidious.jpg",
  lightsaber: {"box-shadow" : "0 0 8px 3px red"},
  health: 150,
  attack: 15,
  counterAttack: 20,
}
var maul = {
  name: "Darth Maul",
  image: "assets/images/Darth_Maul.png",
  lightsaber: {"box-shadow" : "0 0 8px 3px red"},
  health: 110,
  attack: 20,
  counterAttack: 25,
}
var loader = {
  image: "assets/images/starwars-loader.gif",
  lightsaber: {"box-shadow" : "0 0 8px 3px grey"},
}
var user = $("#user");
var defender = $("#defender");
var one = $("<img>");
var two = $("<img>");
var three = $("<img>");
// ==============================================
// CHOOSE YOUR FIGHTER
// On click, choose a character
function startGame(img) {

  if (img.target.id === "obi") {
    // Show character under "user"
    user.attr("src", obi.image).attr("alt", obi.name).css(obi.lightsaber);
    // Show other characters under "enemiesLeft"
    one.attr("id", "one").attr("src", luke.image).attr("alt", luke.name).css(luke.lightsaber).appendTo("#enemy1");
    two.attr("id", "two").attr("src", sidious.image).attr("alt", sidious.name).css(sidious.lightsaber).appendTo("#enemy2");
    three.attr("id", "three").attr("src", maul.image).attr("alt", maul.name).css(maul.lightsaber).appendTo("#enemy3");
  }
  else if (img.target.id === "luke") {
    // Show character under "user"
    user.attr("src", luke.image).attr("alt", luke.name).css(luke.lightsaber);
    // Show other characters under "enemiesLeft"
    one.attr("id", "one").attr("src", obi.image).attr("alt", obi.name).css(obi.lightsaber).appendTo("#enemy1");
    two.attr("id", "two").attr("src", sidious.image).attr("alt", sidious.name).css(sidious.lightsaber).appendTo("#enemy2");
    three.attr("id", "three").attr("src", maul.image).attr("alt", maul.name).css(maul.lightsaber).appendTo("#enemy3");
  }
  else if (img.target.id === "sid") {
    // Show character under "user"
    user.attr("src", sidious.image).attr("alt", sidious.name).css(sidious.lightsaber);
    // Show other characters under "enemiesLeft"
    one.attr("id", "one").attr("src", obi.image).attr("alt", obi.name).css(obi.lightsaber).appendTo("#enemy1");
    two.attr("id", "two").attr("src", luke.image).attr("alt", luke.name).css(luke.lightsaber).appendTo("#enemy2");
    three.attr("id", "three").attr("src", maul.image).attr("alt", maul.name).css(maul.lightsaber).appendTo("#enemy3");
  }
  else if (img.target.id === "maul") {
    // Show character under "user"
    user.attr("src", maul.image).attr("alt", maul.name).css(maul.lightsaber);
    // Show other characters under "enemiesLeft"
    one.attr("id", "one").attr("src", obi.image).attr("alt", obi.name).css(obi.lightsaber).appendTo("#enemy1");
    two.attr("id", "two").attr("src", luke.image).attr("alt", luke.name).css(luke.lightsaber).appendTo("#enemy2");
    three.attr("id", "three").attr("src", sidious.image).attr("alt", sidious.name).css(sidious.lightsaber).appendTo("#enemy3");
  }


// Show fight arena
  $(".arena").toggle();

// Hide character select
  $(".charSelect").toggle();
}


// ==============================================
// CHOOSE AN ENEMY
// On click, choose an enemy
function chooseEnemy(img) {
// Show enemy under "defender"
  if (img.target.alt === luke.name) {
    // Show character under "user"
    defender.attr("src", luke.image).attr("alt", luke.name).css(luke.lightsaber);
    // Grey them out under "available to attack"
    waiting();
  }
  else if (img.target.alt === obi.name) {
    // Show character under "user"
    defender.attr("src", obi.image).attr("alt", obi.name).css(obi.lightsaber);
    // Grey them out under "available to attack"
    waiting();
  }
  else if (img.target.alt === sidious.name) {
    // Show character under "user"
    defender.attr("src", sidious.image).attr("alt", sidious.name).css(sidious.lightsaber);
    // Grey them out under "available to attack"
    waiting();
  }
  else if (img.target.alt === maul.name) {
    // Show character under "user"
    defender.attr("src", maul.image).attr("alt", maul.name).css(maul.lightsaber);
    // Grey them out under "available to attack"
    waiting();
  }

  function waiting() {
    if (img.target.id === "one") {
      one.attr("src", loader.image).css(loader.lightsaber).appendTo("#enemy1");
    }
    else if (img.target.id === "two") {
      two.attr("src", loader.image).css(loader.lightsaber).appendTo("#enemy2");
    }
    else if (img.target.id === "three") {
      three.attr("src", loader.image).css(loader.lightsaber).appendTo("#enemy3");
    }
  }
// If enemy health = 0, show greyed out and make unclickable
}


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
function defeated() {
  $("#enemy2").removeClass("ready").addClass("defeated");
}
// If lose, loop to reset

// ==============================================
// RESET
// ==============================================
// CALL FUNCTIONS
$(document).ready(function() {
  $(".choose").click(startGame);
  $(".ready").click(chooseEnemy);
});