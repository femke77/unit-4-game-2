var healthPoints;
var attack;
var counterAtk;
var dead;
var attackFactor = 6;


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
        if (hp <= 0){
            this.dead = true;
        }
    }
    
}

function game(){
    var char1 = new CreateCharacter(100, 7, 5);
    var char2 = new CreateCharacter(120, 10, 8);
    var char3 = new CreateCharacter(150, 9, 7);
    var char4 = new CreateCharacter(180, 6, 10);
    
    
    
}










