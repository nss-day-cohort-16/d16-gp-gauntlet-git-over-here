"use strict";

var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  };
};

var Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Dagger.prototype = new Weapon();

var BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
BroadSword.prototype = new Weapon();

var WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
WarAxe.prototype = new Weapon();

var FryingPan = function() {
  this.name = "Frying Pan";
  this.damage = 2;
  this.hands = 1;

  this.toString = function() {
    return this.name;
  };
};
FryingPan.prototype = new Weapon();

var MachineGun = function() {
  this.name = "Machine Gun";
  this.damage = 15;
  this.hands = 2;
};
MachineGun.prototype = new Weapon();

var TruthBomb = function() {
  this.name = "Truth Bomb";
  this.damage = 30;
  this.hands = 2;
};
TruthBomb.prototype = new Weapon();

var FecalFedora = function() {
 this.name = "Fecal Fedora";
 this.damage = 39;
 this.hands = 1;
};

FecalFedora.prototype = new Weapon();

var TickleFingers = function() {
 this.name = "Tickle Fingers";
 this.damage = 12;
 this.hands = 3;
};

TickleFingers.prototype = new Weapon();


var Hadooken = function () {
 this.name = "Hadooken";
 this.damage = 27;
 this.hands = 4;
};

Hadooken.prototype = new weapon();

var LeafShield = function() {
    this.name = "leaf shield";
    this.damage = 8;
    this.hands = 3;
}

LeafShield.prototype = new Weapon();

var AtomicFire = function() {
    this.name = "atomic fire";
    this.damage = 9;
    this.hands = 4;
}

AtomicFire.prototype = new Weapon();


var Scissors = function() {
    this.name = "scissors";
    this.damage = 7;
    this.hands = 2;
}

Scissors.prototype = new Weapon();