var healthPoints;
var attack;
var counterAtk;
var dead;
var index;
var attackFactor = 4;
var characterArray = [];
var player = null;
var defender = null;

$(document).ready(function () {

    function CreateCharacter(hp, atk, catk) {
        this.healthPoints = hp;
        this.attack = atk;
        this.counterAtk = catk;
        this.dead = false;

        this.changeHealth = function (hp) {
            this.healthPoints = hp;
        }
        this.changeAttack = function (atk) {
            this.attack = atk;
        }
        this.checkForDeath = function (hp) {
            if (hp <= 0) {
                this.dead = true;
            }
        }

    }

    function game() {
        characterArray.push(new CreateCharacter(100, 7, 5));
        characterArray.push(new CreateCharacter(120, 9, 9));
        characterArray.push(new CreateCharacter(150, 4, 7));
        characterArray.push(new CreateCharacter(180, 6, 8));

    }

    function checkIfDead() {
        if (player.healthPoints <= 0) {
            player.dead = true;
            console.log("player dead: " + player.dead)
        }
        if (defender.healthPoints <= 0) {
            defender.dead = true;
            console.log("defender dead: " + defender.dead)
        }
        if (player.dead) {
            // game over logic here
        } else if (defender.dead) {
            //make defender disappear

            if (characterArray.length > 0) {
                console.log("pick new defender")
                defender = null;

            }

        }
    }

    //don't allow set to dead, or set to self
    function setPlayerDefender(v) {
        if (player == null) {
            player = characterArray[v];
            player.index = v;

            //move player jq

            console.log(player);

        } else if ((player != null) && (defender == null)) {
            defender = characterArray[v];
            defender.index = v;

            //move defender jq

            console.log(defender);
            //move remaining characters (if any) to enemies area jq
        }
    }

    $("#char1").on("click", function () {
        var v = $("#char1").val();
        setPlayerDefender(v);
    });

    $("#char2").on("click", function () {
        var v = $("#char2").val();
        setPlayerDefender(v);
    });

    $("#char3").on("click", function () {
        var v = $("#char3").val();
        setPlayerDefender(v);
    });

    $("#char4").on("click", function () {
        var v = $("#char4").val();
        setPlayerDefender(v);
    });


    //disable this button at approprite times
    $("#attackBtn").on("click", function () {
        defender.healthPoints -= player.attack;
        console.log(defender.healthPoints)
        player.healthPoints -= defender.counterAtk;
        console.log(player.healthPoints)
        player.attack += attackFactor;
        checkIfDead();


    });



});





