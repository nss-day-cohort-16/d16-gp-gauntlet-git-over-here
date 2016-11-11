"use strict";

Gauntlet.Combatants.LiuKang = function() {
  this.name = "Liu Kang";
  this.image = "/images/liukang.jpg";
  this.costume = ["black pants", "white shoes", "red headband"];
  this.weapon = new Weapon();
  this.health = this.health + 30; 
};

Gauntlet.Combatants.LiuKang.prototype = new Gauntlet.Combatants.Player();

Gauntlet.Combatants.Raiden = function() {
  this.name = "Raiden";
  this.image = "/images/raiden.jpg";
  this.costume = ["Hat", "blue vest", "white pants", "white shirt", "white shoes"];
  this.weapon = new Weapon();
  this.health = this.health + 10; 
};

Gauntlet.Combatants.Raiden.prototype = new Gauntlet.Combatants.Player();

Gauntlet.Combatants.KungLao = function() {
  this.name = "Kung Lao";
  this.image = "/images/kunglao.jpg";
  this.costume = ["blue pants", "black sleeveless shirt vest", "forearm and shin armor", "black hat", "red belt"];
  this.weapon = new Weapon();
  this.health = this.health + 5; 
};

Gauntlet.Combatants.KungLao.prototype = new Gauntlet.Combatants.Player();

Gauntlet.Combatants.Kirby = function() {
  this.name = "Kirby";
  this.health = this.health + 5;
  this.weapon = new FryingPan();
  this.strength = 40;
  this.intelligence = 110;
  this.image = "/images/kirby.gif";
};
Gauntlet.Combatants.Kirby.prototype = new Gauntlet.Combatants.Player();


Gauntlet.Combatants.NaziTeddyBear = function() {
	this.name = "Nazi Teddy Bear";
	this.health = this.health + 15;
	this.weapon = new MachineGun();
	this.strength = 40;
	this.intelligence = 20;
	this.image = "/images/naziteddy.jpg";
};
Gauntlet.Combatants.NaziTeddyBear.prototype = new Gauntlet.Combatants.Player();


Gauntlet.Combatants.BernieSanders = function() {
	this.name = "Bernie Sanders";
	this.health = this.health + 30;
	this.weapon = new TruthBomb();
	this.strength = 30;
	this.intelligence = 250;
	this.image = "/images/bernie.jpg";
};
Gauntlet.Combatants.BernieSanders.prototype = new Gauntlet.Combatants.Player();

Gauntlet.Combatants.MightyPoo = function() {
  this.name = "The Great and Mighty Poo";
  this.health = this.health + 30;
  this.weapon =  new FecalFedora();
  this.image = "/images/poo.png";
};

Gauntlet.Combatants.MightyPoo.prototype = new Gauntlet.Combatants.Player();

Gauntlet.Combatants.Ryu = function() {
  this.health = this.health + 0;
  this.costume = "Karate Suit";
  this.weapon = new Hadooken();
  this.image =  "/images/ryu.png";
};

Gauntlet.Combatants.Ryu.prototype = new Gauntlet.Combatants.Player();

Gauntlet.Combatants.Tingle = function() {
  this.health = this.health + 0;
  this.costume = "Green Leotard";
  this.weapon = new TickleFingers();
  this.image = "/images/tingle.png";
};

Gauntlet.Combatants.Tingle.prototype = new Gauntlet.Combatants.Player();

Gauntlet.Combatants.Woodman = function() {
    this.name = "Woodman";
    this.health = this.health + 15;
    this.weapon = new LeafShield();
    this.image = "/images/woodman.jpg";
};


Gauntlet.Combatants.Woodman.prototype = new Gauntlet.Combatants.Player();

Gauntlet.Combatants.Heatman = function() {
    this.name = "Heatman";
    this.health = this.health + 30;
    this.weapon = new AtomicFire();
    this.image = "/images/heatman.png";
}

Gauntlet.Combatants.Heatman.prototype = new Gauntlet.Combatants.Player();

Gauntlet.Combatants.Cutman = function() {
    this.name = "Cutman";
    this.health = this.health + 25;
    this.weapon = new Scissors();
    this.image = "/images/cutman.png";
}

Gauntlet.Combatants.Cutman.prototype = new Gauntlet.Combatants.Player();