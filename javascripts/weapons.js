"use strict";

var Gauntlet = (function(oldGauntlet) {

  oldGauntlet.Weapons = {};


  oldGauntlet.Weapons.Weapon = function() {
    this.name = "bare hands";
    this.damage = 1;
    this.hands = 2;

    this.toString = function() {
      return this.name;
    };
  };

  oldGauntlet.Weapons.Dagger = function() {
    this.name = "dagger";
    this.damage = 4;
    this.hands = 1;
  };
  oldGauntlet.Weapons.Dagger.prototype = new oldGauntlet.Weapons.Weapon();

  oldGauntlet.Weapons.BroadSword = function() {
    this.name = "broad sword";
    this.damage = 14;
    this.hands = 2;
  };
  oldGauntlet.Weapons.BroadSword.prototype = new oldGauntlet.Weapons.Weapon();

  oldGauntlet.Weapons.WarAxe = function() {
    this.name = "war axe";
    this.damage = 18;
    this.hands = 2;
  };
  oldGauntlet.Weapons.WarAxe.prototype = new oldGauntlet.Weapons.Weapon();

  oldGauntlet.Weapons.FryingPan = function() {
    this.name = "Frying Pan";
    this.damage = 2;
    this.hands = 1;

    this.toString = function() {
      return this.name;
    };
  };
  oldGauntlet.Weapons.FryingPan.prototype = new oldGauntlet.Weapons.Weapon();

  oldGauntlet.Weapons.MachineGun = function() {
    this.name = "Machine Gun";
    this.damage = 15;
    this.hands = 2;
  };
  oldGauntlet.Weapons.MachineGun.prototype = new oldGauntlet.Weapons.Weapon();

  oldGauntlet.Weapons.TruthBomb = function() {
    this.name = "Truth Bomb";
    this.damage = 30;
    this.hands = 2;
  };
  oldGauntlet.Weapons.TruthBomb.prototype = new oldGauntlet.Weapons.Weapon();

  oldGauntlet.Weapons.FecalFedora = function() {
   this.name = "Fecal Fedora";
   this.damage = 39;
   this.hands = 1;
  };
  oldGauntlet.Weapons.FecalFedora.prototype = new oldGauntlet.Weapons.Weapon();

  oldGauntlet.Weapons.TickleFingers = function() {
   this.name = "Tickle Fingers";
   this.damage = 12;
   this.hands = 3;
  };
  oldGauntlet.Weapons.TickleFingers.prototype = new oldGauntlet.Weapons.Weapon();


  oldGauntlet.Weapons.Hadooken = function () {
   this.name = "Hadooken";
   this.damage = 27;
   this.hands = 4;
  };
  oldGauntlet.Weapons.Hadooken.prototype = new oldGauntlet.Weapons.Weapon();

  oldGauntlet.Weapons.LeafShield = function() {
      this.name = "leaf shield";
      this.damage = 8;
      this.hands = 3;
  };
  oldGauntlet.Weapons.LeafShield.prototype = new oldGauntlet.Weapons.Weapon();

  oldGauntlet.Weapons.AtomicFire = function() {
      this.name = "atomic fire";
      this.damage = 9;
      this.hands = 4;
  };
  oldGauntlet.Weapons.AtomicFire.prototype = new oldGauntlet.Weapons.Weapon();


  oldGauntlet.Weapons.Scissors = function() {
      this.name = "scissors";
      this.damage = 7;
      this.hands = 2;
  };
  oldGauntlet.Weapons.Scissors.prototype = new oldGauntlet.Weapons.Weapon();



  return oldGauntlet;




})(Gauntlet || {});