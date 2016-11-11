"use strict";
/*
  Test code to generate a human player and an orc player
 */
var userChar;
var enemyChar;
var playerName;
let charArr = ["Kirby", "NaziTeddyBear", "BernieSanders", "LiuKang", "Raiden", "KungLao", "Woodman", "Heatman", "Cutman", "Ryu", "MightyPoo", "Tingle"];

// $(document).ready(function() {
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
  userChar.playerName = playerName;
  console.log("userChar", userChar);
});






$("#randomBtn").on("click", function() {
  userChar = Gauntlet.Combatants.generateCharacter();
  userChar.playerName = playerName;
  console.log("userChar", userChar);
});






$("#fightBtn").on("click", function() {
  enemyChar = Gauntlet.Combatants.generateCharacter();
  console.log("enemyChar", enemyChar);
});




//////////////////BATTLEGROUND LOGIC******************************



//attack function to process attacks and trigger function to update DOM with new health values
//version with random percentage of damage inflicted
$(document).on("click", "#attackbtn", function() {
  //player attacks enemy with varying levels of success
  enemyChar.health -= Math.ceil(userChar.weapon.damage * Math.random());
  //enemy attacks player with varying levels of success
  userChar.health -= Math.ceil(enemyChar.weapon.damage * Math.random());
  //trigger function that updates the DOM
  // statUpdate();
  console.log("enemyChar.health", enemyChar.health);
  console.log("userChar.health", userChar.health);

})


























