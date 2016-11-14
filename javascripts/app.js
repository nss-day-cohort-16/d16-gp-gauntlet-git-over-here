"use strict";


// var Gauntlet = (function(oldGauntlet) {
/*
  Test code to generate a human player and an orc player
 */
  var userChar;
  var enemyChar;
  var playerName;
  let charArr = ["Kirby", "NaziTeddyBear", "BernieSanders", "LiuKang", "Raiden", "KungLao", "Woodman", "Heatman", "Cutman", "Ryu", "MightyPoo", "Tingle"];
  let begin = new Audio("sound/opening.mp3");
  let MKmusic = new Audio("sound/MKmusic.mp3");
  var userCharHealth;
  var enemyCharHealth;

  begin.play()


  // $(document).ready(function() {

  if (annyang) {
  
    var commands = {
      'attack': function() {
        console.log("Attack!");
        attack();
      }
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    annyang.start();
  }

    /*
      Show the initial view that accepts player name
     */
    $("#player-setup").show();

    /*
      When any button with card__link class is clicked,
      move on to the next view.
     */
    $(".card__link").click(function(e) {
      var nextCard = $(this).attr("next");
      var moveAlong = false;

      switch (nextCard) {
        case "card--class":
          moveAlong = ($("#player-name").val() !== "");
          playerName = $("#player-name").val();
          console.log("playerName", playerName);
          break;
        case "card--weapon":
          moveAlong = ($("#player-name").val() !== "");
          break;
        case "card--battleground":
          moveAlong = ($("#player-name").val() !== "");
          break;
      }

      if (moveAlong) {
        $(".card").hide();
        $("." + nextCard).show();
      }
    });

    /*
      When the back button clicked, move back a view
     */
    $(".card__back").click(function(e) {
      var previousCard = $(this).attr("previous");
      $(".card").hide();
      $("." + previousCard).show();
    });

  // });



  //select character event handler. Assigns an instance of a character to the userChar object
  $(document).on("click", ".charBtn", function() {
    userChar = new Gauntlet.Combatants[this.id]();
    console.log(Gauntlet.Combatants[this.id]);
    userChar.playerName = playerName;
    userCharHealth = userChar.health;
    begin.pause();
    let brave = new Audio("sound/brave.wav");
    brave.play();
  });



    $(document).on("click", ".weaponBtn", function() {
    userChar.weapon = new Gauntlet.Weapons[this.id]();
    console.log(Gauntlet.Weapons[this.id]);
    console.log("userChar", userChar);
    let brave = new Audio("sound/brave.wav");
    brave.play();
  });





  $("#randomBtn").on("click", function() {
    userChar = Gauntlet.Combatants.generateCharacter();
    userChar.playerName = playerName;
    userCharHealth = userChar.health;
    console.log("userChar", userChar);
    begin.pause();
    let brave = new Audio("sound/brave.wav");
    brave.play();

  });






  $("#fightBtn").on("click", function() {
    enemyChar = Gauntlet.Combatants.generateCharacter();
    enemyCharHealth = enemyChar.health;
    updateStats();
    console.log("enemyChar", enemyChar);
    let shootFood = new Audio("sound/dontshootfood.wav");
    shootFood.play();
    MKmusic.play();
    $("body").attr("id", "battleview");
    $("#game-main").remove();
  });

   function updateStats() {
    let userHealthPercent = Math.round((userChar.health / userCharHealth) * 100);
    let enemyCharPercent = Math.round((enemyChar.health / enemyCharHealth) * 100);
    console.log("userHealthPercent", userHealthPercent);
    console.log("enemyCharPercent", enemyCharPercent);
    $("#player").find("p").html(`${userChar.playerName}`);
    $("#enemy").find("p").html(`${enemyChar.name}`);
    // old version
    // $("#playerHealth").html(` Health: ${userChar.health} `);

    // new version, using #playerHealth to represent player weapon
    $("#playerHealth").html(`Weapon: ${userChar.weapon}`);



    $("#userImage").attr("src", ` ${userChar.image} `);

    // old version
    // $("#enemyHealth").html(` Health: ${enemyChar.health} `);

    // new version using #enemyHealth to represent enemy weapon
    $("#enemyHealth").html(`Weapon: ${enemyChar.weapon}`);



    $("#enemyImage").attr("src", ` ${enemyChar.image} `);
    $("#playerBar").attr("style", `width:${userHealthPercent}%`);
    $("#enemyBar").attr("style", `width:${enemyCharPercent}%`);
    $("#playerBar").html(`${userHealthPercent}%`);
    $("#enemyBar").html(`${enemyCharPercent}%`);


    //weapon icons
    $("#enemyWeapon").attr("src", ` ${enemyChar.weapon.image} `);
    $("#playerWeapon").attr("src", ` ${userChar.weapon.image} `);


    }



  //////////////////BATTLEGROUND LOGIC******************************

  function attack() {



    //attack sound logic
    let userAttackSound = new Audio(userChar.weapon.sound);
    let enemyAttackSound = new Audio(enemyChar.weapon.sound);
    if (Math.random() < 0.5) {
      userAttackSound.play();
    } else {
      enemyAttackSound.play();
    }



    //player attacks enemy with varying levels of success
    
    enemyChar.health -= Math.ceil(userChar.weapon.damage * Math.random());
    //enemy attacks player with varying levels of success
    userChar.health -= Math.ceil(enemyChar.weapon.damage * Math.random());
    //trigger function that updates the DOM
    updateStats();
    console.log("enemyChar.health", enemyChar.health);
    console.log("userChar.health", userChar.health);
    if (enemyChar.health <= 0) {
        MKmusic.pause();
        $(".card").hide();
        $("body").removeAttr("id", "battleview");
        $("#victoryPage").show();
        $('h1').animate({ 
          'font-size' : '4em'
        },1000);

        let loseSound = new Audio("sound/needsfood.wav");
        loseSound.play();
    } else if (userChar.health <= 0) {
        MKmusic.pause();
        $(".card").hide();
        $("#defeatPage").show();
        $("body").removeAttr("id", "battleview");
        $('h1').animate({ 
          'font-size' : '4em'
        },1000);
        let loseSound = new Audio("sound/needsfood.wav");
        loseSound.play();
    }
    // losing sound
  }


  //attack function to process attacks and trigger function to update DOM with new health values
  //version with random percentage of damage inflicted
  $(document).on("click", "#attackbtn", attack);



  $("#tryAgain").click(function() {
    $("#defeatPage").hide();
  });


  $("#nextRound").click(function() {
    userChar.health = userChar.maxHealth;
    enemyChar = Gauntlet.Combatants.generateCharacter();
    enemyCharHealth = enemyChar.health;
    updateStats();
    console.log("enemyChar", enemyChar);
    let shootFood = new Audio("sound/dontshootfood.wav");
    shootFood.play();
    MKmusic.play();
    $("body").attr("id", "battleview");
    $("#game-main").remove();
    $("#victoryPage").hide();
  });

  // return oldGauntlet;


// })(Gauntlet || {});

























