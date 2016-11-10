"use strict";
/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.Combatants = {};

/*
  Define the base object for any player of Gauntlet,
  whether a human player or a monster.
 */
Gauntlet.Combatants.Player = function(name) {
  this.class = null;
  this.weapon = null;
  this.playerName = name || "unknown adventurer";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.strength = 90;
  this.intelligence = 90;

  this.toString = function() {
    var output = [this.playerName,
      " is ",
      this.class,
      " with ",
      this.health,
      " health. ",
      (this.class.magical) ? "Able to cast " : " Wielding a ",
      this.weapon.toString(),
      "!"
    ].join("");
    return output;
  };
};

Gauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
  this.weapon = newWeapon;
};

Gauntlet.generateCharacter = function(calledChar) {
  // Create character array called charArr.
  var random = Math.round(Math.random() * (charArr.length - 1));

  // Get the string at the index
  var randomCharacter = charArr[random];

  calledChar = new window[randomCharacter]();
  //calling function that will display character information in pop up window.
  charConfirm(calledChar);
};

