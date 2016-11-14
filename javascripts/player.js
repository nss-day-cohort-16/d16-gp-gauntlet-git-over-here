"use strict";

var Gauntlet = (function(oldGauntlet) {

  oldGauntlet.Combatants = {};

  /*
    Define the base object for any player of Gauntlet,
    whether a human player or a monster.
   */
  oldGauntlet.Combatants.Player = function(name) {
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

  oldGauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
    this.weapon = newWeapon;
  };

  oldGauntlet.Combatants.Player.prototype.setHealth = function() {
    this.health = Math.floor(Math.random() * 40 + 50);
  };


  oldGauntlet.Combatants.generateCharacter = function(calledChar) {
    var random = Math.round(Math.random() * (charArr.length - 1));

    var randomCharacter = charArr[random];
    calledChar = new Gauntlet.Combatants[randomCharacter]();
    return calledChar;

  };


  return oldGauntlet;


})(Gauntlet || {});























