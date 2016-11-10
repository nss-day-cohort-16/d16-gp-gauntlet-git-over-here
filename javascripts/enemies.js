"use strict";

Gauntlet.Combatants.Orc = function() {
  this.health = this.health + 20;
  
};

Gauntlet.Combatants.Orc.prototype = new Gauntlet.Combatants.Player();

