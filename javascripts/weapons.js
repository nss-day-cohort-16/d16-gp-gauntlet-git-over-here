"use strict";

var Gauntlet = Gauntlet || {};
Gauntlet.Weapons = {};


Gauntlet.Weapons.Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  };
};

Gauntlet.Weapons.Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Gauntlet.Weapons.Dagger.prototype = new Gauntlet.Weapons.Weapon();

Gauntlet.Weapons.BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
Gauntlet.Weapons.BroadSword.prototype = new Gauntlet.Weapons.Weapon();

Gauntlet.Weapons.WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
Gauntlet.Weapons.WarAxe.prototype = new Gauntlet.Weapons.Weapon();

Gauntlet.Weapons.FryingPan = function() {
  this.name = "Frying Pan";
  this.damage = 2;
  this.hands = 1;

  this.toString = function() {
    return this.name;
  };
};
Gauntlet.Weapons.FryingPan.prototype = new Gauntlet.Weapons.Weapon();

Gauntlet.Weapons.MachineGun = function() {
  this.name = "Machine Gun";
  this.damage = 15;
  this.hands = 2;
};
Gauntlet.Weapons.MachineGun.prototype = new Gauntlet.Weapons.Weapon();

Gauntlet.Weapons.TruthBomb = function() {
  this.name = "Truth Bomb";
  this.damage = 30;
  this.hands = 2;
};
Gauntlet.Weapons.TruthBomb.prototype = new Gauntlet.Weapons.Weapon();

Gauntlet.Weapons.FecalFedora = function() {
 this.name = "Fecal Fedora";
 this.damage = 39;
 this.hands = 1;
};
Gauntlet.Weapons.FecalFedora.prototype = new Gauntlet.Weapons.Weapon();

Gauntlet.Weapons.TickleFingers = function() {
 this.name = "Tickle Fingers";
 this.damage = 12;
 this.hands = 3;
};
Gauntlet.Weapons.TickleFingers.prototype = new Gauntlet.Weapons.Weapon();


Gauntlet.Weapons.Hadooken = function () {
 this.name = "Hadooken";
 this.damage = 27;
 this.hands = 4;
};
Gauntlet.Weapons.Hadooken.prototype = new Gauntlet.Weapons.Weapon();

Gauntlet.Weapons.LeafShield = function() {
    this.name = "leaf shield";
    this.damage = 8;
    this.hands = 3;
};
Gauntlet.Weapons.LeafShield.prototype = new Gauntlet.Weapons.Weapon();

Gauntlet.Weapons.AtomicFire = function() {
    this.name = "atomic fire";
    this.damage = 9;
    this.hands = 4;
};
Gauntlet.Weapons.AtomicFire.prototype = new Gauntlet.Weapons.Weapon();


Gauntlet.Weapons.Scissors = function() {
    this.name = "scissors";
    this.damage = 7;
    this.hands = 2;
};
Gauntlet.Weapons.Scissors.prototype = new Gauntlet.Weapons.Weapon();