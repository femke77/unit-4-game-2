var healthPoints;
var attack;
var counterAtk;
var dead;
var attackFactor = 6;
var characterArray = [];
var player = null;
var defender = null;


$(document).ready(game() ); 

function CreateCharacter(hp, atk, catk) {
    this.healthPoints = hp;
    this.attack = atk;
    this.counterAtk = catk;
    this.dead = false;
    
    this.changeHealth = function(hp){
        this.healthPoints = hp;
    }
    this.changeAttack = function(atk) {
        this.attack = atk;
    }
    this.checkForDeath = function(hp){
        if (hp <= 0) {
            this.dead = true;
        }
    }

}

function game(){
    characterArray[0] = new CreateCharacter(100, 7, 5);
    characterArray[1] = new CreateCharacter(120, 10, 8);
    characterArray[2] = new CreateCharacter(150, 9, 7);
    characterArray[3] = new CreateCharacter(180, 6, 10);
  
    
}

function checkIfDead(){
    if (player.healthPoints <= 0){
        player.dead = true;
        console.log(player.dead)
    }
    if (defender.healthPoints <= 0){
        defender.dead = true;
        console.log(defender.dead)
    }
    if (player.dead){
        // game over
    } else if (defender.dead) {
        //make defender disappear
        if (!characterArray || !characterArray.length){        
            defender = null;
        }
        
    }
}

function setPlayerDefender(v){    
    if (player == null){
        player = characterArray[v];
        //move player 
        console.log(player);
    } else if ((player != null) && (defender == null)) {
        defender = characterArray[v];
        //move defender
        console.log(defender);
    } 
}

$("#char1").on("click", function(){
    var v = $("#char1").val();
    setPlayerDefender(v);   
});

$("#char2").on("click", function(){
    var v = $("#char2").val();
    setPlayerDefender(v);
});

$("#char3").on("click", function(){
    var v = $("#char3").val();
    setPlayerDefender(v);
});

$("#char4").on("click", function(){
    var v = $("#char4").val();
    setPlayerDefender(v);
});

$("#attackBtn").on("click", function (){
    defender.healthPoints -= player.attack;
    console.log(defender.healthPoints)
    player.healthPoints -= defender.counterAtk;
    console.log(player.healthPoints)
    checkIfDead();
    

});








