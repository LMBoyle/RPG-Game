// VARIABLES
var obi = {
  name: "Obi-Wan Kenobi",
  image: "assets/images/Obi-wan.png",
  lightsaber: {"box-shadow" : "0 0 8px 3px rgb(148, 167, 231)"},
  health: 120,
  attack: 8,
  stronger: 8,
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

  switch (img.target.id) {
    case "obi":
      // Show character under "user"
      user.attr("src", obi.image).attr("alt", obi.name).css(obi.lightsaber);
      // Show other characters under "enemiesLeft"
      one.attr("id", "one").attr("src", luke.image).attr("alt", luke.name).css(luke.lightsaber).appendTo("#enemy1");
      two.attr("id", "two").attr("src", sidious.image).attr("alt", sidious.name).css(sidious.lightsaber).appendTo("#enemy2");
      three.attr("id", "three").attr("src", maul.image).attr("alt", maul.name).css(maul.lightsaber).appendTo("#enemy3");
      break;

    case "luke":
      // Show character under "user"
      user.attr("src", luke.image).attr("alt", luke.name).css(luke.lightsaber);
      // Show other characters under "enemiesLeft"
      one.attr("id", "one").attr("src", obi.image).attr("alt", obi.name).css(obi.lightsaber).appendTo("#enemy1");
      two.attr("id", "two").attr("src", sidious.image).attr("alt", sidious.name).css(sidious.lightsaber).appendTo("#enemy2");
      three.attr("id", "three").attr("src", maul.image).attr("alt", maul.name).css(maul.lightsaber).appendTo("#enemy3");
      break;
    
    case "sid":
      // Show character under "user"
      user.attr("src", sidious.image).attr("alt", sidious.name).css(sidious.lightsaber);
      // Show other characters under "enemiesLeft"
      one.attr("id", "one").attr("src", obi.image).attr("alt", obi.name).css(obi.lightsaber).appendTo("#enemy1");
      two.attr("id", "two").attr("src", luke.image).attr("alt", luke.name).css(luke.lightsaber).appendTo("#enemy2");
      three.attr("id", "three").attr("src", maul.image).attr("alt", maul.name).css(maul.lightsaber).appendTo("#enemy3");
      break;

    case "maul":
      // Show character under "user"
      user.attr("src", maul.image).attr("alt", maul.name).css(maul.lightsaber);
      // Show other characters under "enemiesLeft"
      one.attr("id", "one").attr("src", obi.image).attr("alt", obi.name).css(obi.lightsaber).appendTo("#enemy1");
      two.attr("id", "two").attr("src", luke.image).attr("alt", luke.name).css(luke.lightsaber).appendTo("#enemy2");
      three.attr("id", "three").attr("src", sidious.image).attr("alt", sidious.name).css(sidious.lightsaber).appendTo("#enemy3");
      break;
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

  switch (img.target.alt) {
    case luke.name:
      // Show character under "user"
      defender.attr("src", luke.image).attr("alt", luke.name).css(luke.lightsaber);
      // Grey them out under "available to attack"
      waiting();
      break;
    
    case obi.name:
      // Show character under "user"
      defender.attr("src", obi.image).attr("alt", obi.name).css(obi.lightsaber);
      // Grey them out under "available to attack"
      waiting();
      break;

    case sidious.name:
      // Show character under "user"
      defender.attr("src", sidious.image).attr("alt", sidious.name).css(sidious.lightsaber);
      // Grey them out under "available to attack"
      waiting();
      break;

    case maul.name:
      // Show character under "user"
      defender.attr("src", maul.image).attr("alt", maul.name).css(maul.lightsaber);
      // Grey them out under "available to attack"
      waiting();
      break;
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
function fight() {
  // If user chooses obi
  if (user.attr("alt") === obi.name) {
    // If enemy is Luke
    if (defender.attr("alt") === luke.name) {
      if (luke.health <= 0) {
        one.attr("src", luke.image).attr("alt", luke.name).appendTo("#enemy1");
        defeatedOne();
      }
      else {
      // Take health from enemy based on user attack value
      luke.health = luke.health - obi.stronger;
      console.log('luke.health :',  luke.health);
      // Take health from user based on enemy counter attack value
      obi.health = obi.health - luke.counterAttack;
      console.log('obi.health:', obi.health);
      // Add to user attack value
      obi.stronger = obi.stronger + obi.attack;
      console.log('obi.stronger:', obi.stronger);
      }
    }
    // If enemy is Darth Sidious
    else if (defender.attr("alt") === sidious.name) {
      if (sidious.health <= 0) {
        two.attr("src", sidious.image).attr("alt", sidious.name).appendTo("#enemy2");
        defeatedTwo();
      }
      else {
        // Take health from enemy based on user attack value
        sidious.health = sidious.health - obi.stronger;
        console.log('sidious.health :',  sidious.health);
        // Take health from user based on enemy counter attack value
        obi.health = obi.health - sidious.counterAttack;
        console.log('obi.health:', obi.health);
        // Add to user attack value
        obi.stronger = obi.stronger + obi.attack;
        console.log('obi.stronger:', obi.stronger);
      }
    }
    // If enemy is Darth Maul 
    else if (defender.attr("alt") === maul.name) {
      if (maul.health <= 0) {
        three.attr("src", maul.image).attr("alt", maul.name).appendTo("#enemy3");
        defeatedThree();
      }
      else {
        // Take health from enemy based on user attack value
        maul.health = maul.health - obi.stronger;
        console.log('maul.health :',  maul.health);
        // Take health from user based on enemy counter attack value
        obi.health = obi.health - maul.counterAttack;
        console.log('obi.health:', obi.health);      
        // Add to user attack value
        obi.stronger = obi.stronger + obi.attack;
        console.log('obi.stronger:', obi.stronger);
      }
    }
  }
}

// Take health from user based on enemy counter attack value

// Add base attack value to new attack value of user

// Loop until one health is 0 or below

// ==============================================
// WIN/LOSE
// If defeated enemy, loop to choose an enemy
function defeatedOne() {
  one.removeClass("ready").addClass("defeated").css(loader.lightsaber).css({"pointer-events" : "none"}).appendTo("#enemy1");
  defender.attr("src", loader.image).css(loader.lightsaber).appendTo("#defender");
}

function defeatedTwo() {
  two.removeClass("ready").addClass("defeated").css(loader.lightsaber).css({"pointer-events" : "none"}).appendTo("#enemy2");
  defender.attr("src", loader.image).css(loader.lightsaber).appendTo("#defender");
}

function defeatedThree() {
  three.removeClass("ready").addClass("defeated").css(loader.lightsaber).css({"pointer-events" : "none"}).appendTo("#enemy3");
  defender.attr("src", loader.image).css(loader.lightsaber).appendTo("#defender");
}
// If lose, loop to reset

// ==============================================
// RESET
// ==============================================
// CALL FUNCTIONS
$(document).ready(function() {
  $(".choose").click(startGame);
  $(".ready").click(chooseEnemy);
  $("button").click(fight);
});