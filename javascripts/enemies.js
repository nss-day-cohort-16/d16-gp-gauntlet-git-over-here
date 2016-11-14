"use strict";
var Gauntlet = (function(oldGauntlet) {


	oldGauntlet.Combatants.LiuKang = function() {
	  this.name = "Liu Kang";
	  this.image = "../images/liukang.jpg";
	  this.costume = ["black pants", "white shoes", "red headband"];
	  this.weapon = new Gauntlet.Weapons.Weapon();
	  this.health = this.health + 30; 
	  this.maxHealth = this.health;
	};

	oldGauntlet.Combatants.LiuKang.prototype = new Gauntlet.Combatants.Player();

	oldGauntlet.Combatants.Raiden = function() {
	  this.name = "Raiden";
	  this.image = "images/raiden.jpg";
	  this.costume = ["Hat", "blue vest", "white pants", "white shirt", "white shoes"];
	  this.weapon = new Gauntlet.Weapons.Weapon();
	  this.health = this.health + 10; 
	  this.maxHealth = this.health;
	};

	oldGauntlet.Combatants.Raiden.prototype = new Gauntlet.Combatants.Player();

	oldGauntlet.Combatants.KungLao = function() {
	  this.name = "Kung Lao";
	  this.image = "../images/kunglao.jpg";
	  this.costume = ["blue pants", "black sleeveless shirt vest", "forearm and shin armor", "black hat", "red belt"];
	  this.weapon = new Gauntlet.Weapons.Weapon();
	  this.health = this.health + 5; 
	  this.maxHealth = this.health;
	};

	oldGauntlet.Combatants.KungLao.prototype = new Gauntlet.Combatants.Player();

	oldGauntlet.Combatants.Kirby = function() {
	  this.name = "Kirby";
	  this.health = this.health + 5;
	  this.maxHealth = this.health;
	  this.weapon = new Gauntlet.Weapons.FryingPan();
	  this.strength = 40;
	  this.intelligence = 110;
	  this.image = "../images/kirby.gif";
	};
	oldGauntlet.Combatants.Kirby.prototype = new Gauntlet.Combatants.Player();


	oldGauntlet.Combatants.NaziTeddyBear = function() {
		this.name = "Nazi Teddy Bear";
		this.health = this.health + 15;
		this.maxHealth = this.health;
		this.weapon = new Gauntlet.Weapons.MachineGun();
		this.strength = 40;
		this.intelligence = 20;
		this.image = "../images/naziteddy.jpg";
	};
	oldGauntlet.Combatants.NaziTeddyBear.prototype = new Gauntlet.Combatants.Player();


	oldGauntlet.Combatants.BernieSanders = function() {
		this.name = "Bernie Sanders";
		this.health = this.health + 30;
		this.maxHealth = this.health;
		this.weapon = new Gauntlet.Weapons.TruthBomb();
		this.strength = 30;
		this.intelligence = 250;
		this.image = "images/bernie.jpg";
	};
	oldGauntlet.Combatants.BernieSanders.prototype = new Gauntlet.Combatants.Player();

	oldGauntlet.Combatants.MightyPoo = function() {
	  this.name = "The Great and Mighty Poo";
	  this.health = this.health + 30;
	  this.maxHealth = this.health;
	  this.weapon =  new Gauntlet.Weapons.FecalFedora();
	  this.image = "images/poo.png";
	};

	oldGauntlet.Combatants.MightyPoo.prototype = new Gauntlet.Combatants.Player();

	oldGauntlet.Combatants.Ryu = function() {
	  this.name = "Ryu";
	  this.health = this.health + 0;
	  this.maxHealth = this.health;
	  this.costume = "Karate Suit";
	  this.weapon = new Gauntlet.Weapons.Hadooken();
	  this.image =  "images/ryu.png";
	};

	oldGauntlet.Combatants.Ryu.prototype = new Gauntlet.Combatants.Player();

	oldGauntlet.Combatants.Tingle = function() {
	  this.name = "Tingle";
	  this.health = this.health + 0;
	  this.maxHealth = this.health;
	  this.costume = "Green Leotard";
	  this.weapon = new Gauntlet.Weapons.TickleFingers();
	  this.image = "images/tingle.png";
	};

	oldGauntlet.Combatants.Tingle.prototype = new Gauntlet.Combatants.Player();

	oldGauntlet.Combatants.Woodman = function() {
	    this.name = "Woodman";
	    this.health = this.health + 15;
	    this.maxHealth = this.health;
	    this.weapon = new Gauntlet.Weapons.LeafShield();
	    this.image = "images/woodman.jpg";
	};


	oldGauntlet.Combatants.Woodman.prototype = new Gauntlet.Combatants.Player();

	oldGauntlet.Combatants.Heatman = function() {
	    this.name = "Heatman";
	    this.health = this.health + 30;
	    this.maxHealth = this.health;
	    this.weapon = new Gauntlet.Weapons.AtomicFire();
	    this.image = "images/heatman.png";
	};

	oldGauntlet.Combatants.Heatman.prototype = new Gauntlet.Combatants.Player();

	oldGauntlet.Combatants.Cutman = function() {
	    this.name = "Cutman";
	    this.health = this.health + 25;
	    this.maxHealth = this.health;
	    this.weapon = new Gauntlet.Weapons.Scissors();
	    this.image = "images/cutman.png";
	};

	oldGauntlet.Combatants.Cutman.prototype = new Gauntlet.Combatants.Player();

	return oldGauntlet;


})(Gauntlet || {});