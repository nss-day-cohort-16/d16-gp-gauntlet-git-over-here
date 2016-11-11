"use strict";

Gauntlet.Combatants.LiuKang = function() {
  this.name = "Liu Kang";
  this.image = "https://s-media-cache ak0.pinimg.com/originals/fe/cd/17/fecd17548617f2a268aeeabdb6c828aa.png";
  this.costume = ["black pants", "white shoes", "red headband"];
  this.weapon = new Weapon();
  this.health = this.health + 30; 
};

Gauntlet.Combatants.LiuKang.prototype = new Gauntlet.Combatants.Player();

Gauntlet.Combatants.Raiden = function() {
  this.name = "Raiden";
  this.image = "https://s-media-cache-ak0.pinimg.com/236x/4d/0d/87/4d0d87102b0d25a36ab2c4e076293f02.jpg";
  this.costume = ["Hat", "blue vest", "white pants", "white shirt", "white shoes"];
  this.weapon = new Weapon();
  this.health = this.health + 10; 
};

Gauntlet.Combatants.Raiden.prototype = new Gauntlet.Combatants.Player();

Gauntlet.Combatants.KungLao = function() {
  this.name = "Kung Lao";
  this.image = "http://www.fightersgeneration.com/characters2/kunglao-dec.jpg";
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
  this.image = "http://vignette3.wikia.nocookie.net/jadensadventures/images/8/88/Cook_kirby.gif/revision/latest";
};
Gauntlet.Combatants.Kirby.prototype = new Gauntlet.Combatants.Player();


Gauntlet.Combatants.NaziTeddyBear = function() {
	this.name = "Nazi Teddy Bear";
	this.health = this.health + 15;
	this.weapon = new MachineGun();
	this.strength = 40;
	this.intelligence = 20;
	this.image = "http://vignette2.wikia.nocookie.net/conker/images/9/90/Classic_Tedi.jpg/revision/latest";
};
Gauntlet.Combatants.NaziTeddyBear.prototype = new Gauntlet.Combatants.Player();


Gauntlet.Combatants.BernieSanders = function() {
	this.name = "Bernie Sanders";
	this.health = this.health + 30;
	this.weapon = new TruthBomb();
	this.strength = 30;
	this.intelligence = 250;
	this.image = "https://img1.steemit.com/0x0/http://moonbattery.com/graphics/BERNIE-SANDERS.jpg";
};
Gauntlet.Combatants.NaziTeddyBear.prototype = new Gauntlet.Combatants.Player();

Gauntlet.Combatants.MightyPoo = function() {
  this.name = "The Great and Mighty Poo";
  this.health = this.health + 30;
  this.weapon =  new FecalFedora();
  this.image = "http://vignette1.wikia.nocookie.net/conker/images/b/b6/Great_mighty_poo.png/revision/latest?cb=20160630162154";
};

Gauntlet.Combatants.MightyPoo.prototype = new Gauntlet.Combatants.Player();

Gauntlet.Combatants.Ryu = function() {
  this.health = this.health + 0;
  this.costume = "Karate Suit";
  this.weapon = new Hadooken();
  this.image =  "https://upload.wikimedia.org/wikipedia/en/e/e5/Ryu_TvC.png";
};

Gauntlet.Combatants.Ryu.prototype = new Gauntlet.Combatants.Player();

Gauntlet.Combatants.Tingle = function() {
  this.health = this.health + 0;
  this.costume = "Green Leotard";
  this.weapon = new TickleFingers();
  this.image = "http://vignette2.wikia.nocookie.net/zelda/images/d/d7/Tingle.png/revision/latest?cb=20081016220612";
};

Gauntlet.Combatants.Tingle.prototype = new Gauntlet.Combatants.Player();

Gauntlet.Combatants.Woodman = function() {
    this.name = "Woodman";
    this.health = this.health + 15;
    this.weapon = new LeafShield();
    this.image = "http://3.bp.blogspot.com/-JvpRyOkx3sY/TuNXmLBp1nI/AAAAAAAAFG0/Z6IdH85ochk/s1600/woodman.jpg";
};


Gauntlet.Combatants.Woodman.prototype = new Gauntlet.Combatants.Player();

Gauntlet.Combatants.Heatman = function() {
    this.name = "Heatman";
    this.health = this.health + 30;
    this.weapon = new AtomicFire();
    this.image = "http://orig14.deviantart.net/4415/f/2015/071/c/c/heatman___megaman_2_by_profanum16-d8lgoxr.png";
}

Gauntlet.Combatants.Heatman.prototype = new Gauntlet.Combatants.Player();

Gauntlet.Combatants.Cutman = function() {
    this.name = "Cutman";
    this.health = this.health + 25;
    this.weapon = new Scissors();
    this.image = "http://piq.codeus.net/static/media/userpics/piq_21576_400x400.png";
}

Gauntlet.Combatants.Cutman.prototype = new Gauntlet.Combatants.Player();