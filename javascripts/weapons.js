"use strict";

var Gauntlet = (function(oldGauntlet) {

  oldGauntlet.Weapons = {};


  oldGauntlet.Weapons.Weapon = function() {
    this.name = "bare hands";
    this.damage = 1;
    this.hands = 2;
    this.image = "images/weapons/hand.jpg";
    this.sound = "sound/weapons/hands.mp3";

    this.toString = function() {
      return this.name;
    };
  };

  oldGauntlet.Weapons.Dagger = function() {
    this.name = "dagger";
    this.damage = 4;
    this.hands = 1;
    this.image = "images/weapons/dagger.png";
    this.sound = "sound/weapons/dagger.mp3";
  };
  oldGauntlet.Weapons.Dagger.prototype = new oldGauntlet.Weapons.Weapon();

  oldGauntlet.Weapons.BroadSword = function() {
    this.name = "broad sword";
    this.damage = 14;
    this.hands = 2;
    this.image = "images/weapons/broadsword.jpg";
    this.sound = "sound/weapons/broadsword.mp3";
  };
  oldGauntlet.Weapons.BroadSword.prototype = new oldGauntlet.Weapons.Weapon();

  oldGauntlet.Weapons.WarAxe = function() {
    this.name = "war axe";
    this.damage = 18;
    this.hands = 2;
    this.image = "images/weapons/waraxe.jpg";
    this.sound = "sound/weapons/waraxe.mp3";
  };
  oldGauntlet.Weapons.WarAxe.prototype = new oldGauntlet.Weapons.Weapon();

  oldGauntlet.Weapons.FryingPan = function() {
    this.name = "Frying Pan";
    this.damage = 2;
    this.hands = 1;
    this.image = "images/weapons/fryingpan.jpg";
    this.sound = "sound/weapons/fryingpan.mp3";
  };
  oldGauntlet.Weapons.FryingPan.prototype = new oldGauntlet.Weapons.Weapon();

  oldGauntlet.Weapons.MachineGun = function() {
    this.name = "Machine Gun";
    this.damage = 15;
    this.hands = 2;
    this.image = "images/weapons/machinegun.png";
    this.sound = "sound/weapons/machinegun.mp3";
  };
  oldGauntlet.Weapons.MachineGun.prototype = new oldGauntlet.Weapons.Weapon();

  oldGauntlet.Weapons.TruthBomb = function() {
    this.name = "Truth Bomb";
    this.damage = 30;
    this.hands = 2;
    this.image = "images/weapons/truth.png";
    this.sound = "sound/weapons/truthbomb.mp3";
  };
  oldGauntlet.Weapons.TruthBomb.prototype = new oldGauntlet.Weapons.Weapon();

  oldGauntlet.Weapons.FecalFedora = function() {
   this.name = "Fecal Fedora";
   this.damage = 39;
   this.hands = 1;
   this.image = "images/weapons/fecal.jpg";
   this.sound = "sound/weapons/fecalfedora.mp3";
  };
  oldGauntlet.Weapons.FecalFedora.prototype = new oldGauntlet.Weapons.Weapon();

  oldGauntlet.Weapons.TickleFingers = function() {
   this.name = "Tickle Fingers";
   this.damage = 12;
   this.hands = 3;
   this.image = "images/weapons/tickle.jpeg";
   this.sound = "sound/weapons/ticklefingers.mp3";
  };
  oldGauntlet.Weapons.TickleFingers.prototype = new oldGauntlet.Weapons.Weapon();


  oldGauntlet.Weapons.Hadooken = function () {
   this.name = "Hadooken";
   this.damage = 27;
   this.hands = 4;
   this.image = "images/weapons/hadooken.png";
   this.sound = "sound/weapons/hadooken.mp3";
  };
  oldGauntlet.Weapons.Hadooken.prototype = new oldGauntlet.Weapons.Weapon();

  oldGauntlet.Weapons.LeafShield = function() {
      this.name = "leaf shield";
      this.damage = 8;
      this.hands = 3;
      this.image = "images/weapons/leafshield.jpg";
      this.sound = "sound/weapons/wind.mp3";
  };
  oldGauntlet.Weapons.LeafShield.prototype = new oldGauntlet.Weapons.Weapon();

  oldGauntlet.Weapons.AtomicFire = function() {
      this.name = "atomic fire";
      this.damage = 9;
      this.hands = 4;
      this.image = "images/weapons/atomicfire.png";
      this.sound = "sound/weapons/atomicfire.mp3";
  };
  oldGauntlet.Weapons.AtomicFire.prototype = new oldGauntlet.Weapons.Weapon();


  oldGauntlet.Weapons.Scissors = function() {
      this.name = "scissors";
      this.damage = 7;
      this.hands = 2;
      this.image = "images/weapons/scissor.jpg";
      this.sound = "sound/weapons/scissors.wav";
  };
  oldGauntlet.Weapons.Scissors.prototype = new oldGauntlet.Weapons.Weapon();



  return oldGauntlet;




})(Gauntlet || {});