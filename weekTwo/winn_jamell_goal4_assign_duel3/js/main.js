/*
* Jamell winn
* Tuesday Dec 03 2013
* Duel 1*/

// self-executing function
(function(){

    // fighter one obj
    var fighterOne = {};
    fighterOne.name = "Kabal";
    fighterOne.health = 100;
    fighterOne.damage = 20;

    // fighter two obj
    var fighterTwo = {};
    fighterTwo.name = "Kratos";
    fighterTwo.health = 100;
    fighterTwo.damage = 20;

    var scoreOne = document.querySelector('#scores #kabal p');
    scoreOne.innerHTML = fighterOne.name + ": " + fighterOne.health;

    var scoreTwo = document.querySelector('#scores #kratos p');
    scoreTwo.innerHTML = fighterTwo.name + ": "+ fighterTwo.health;

    var display = document.getElementById('largeDisplay');

    var roundNum = document.getElementById('round')
    var round = 0;
    console.log(round);

    // fight function
    var fight = function(){

        scoreOne.innerHTML = fighterOne.name + ": " + fighterOne.health;
        scoreTwo.innerHTML = fighterTwo.name + ": " + fighterTwo.health;


        for(var i = 0; i < 10; i++){
            // random formula is - Math.floor(Math.random()* (max - min) + min);
            var minDamage1 = fighterOne.damage * .5;
            var minDamage2 = fighterTwo.damage * .5;

            var f1 = Math.floor(Math.random()*(fighterOne.damage - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random()*(fighterTwo.damage - minDamage2) + minDamage2);

            // inflict damage

            fighterOne.health -= f1; // same as (( playerOneHealth = playerOne Health - f1 ))
            fighterTwo.health -= f2;

            scoreOne.innerHTML = fighterOne.name + ": " + fighterOne.health;
            scoreTwo.innerHTML = fighterTwo.name + ": " + fighterTwo.health;
            round++; + 1;
            roundNum.innerHTML = "Round:" + round;
            console.log(fighterOne.name + ":" + fighterOne.health + " | " + round + " | " + fighterTwo.name + ":"
            + fighterTwo.health);

            //console.log("playerOne: " + playerOneHealth);
            //console.log("playerTwo: " + playerTwoHealth);

            var results = winnerCheck();
            //console.log(results);
            //break;
            if (results === "no winner"){
                //round++;

                scoreOne.innerHTML = fighterOne.health;
                scoreTwo.innerHTML = fighterTwo.health;
            }else{
                //alert(results);
                break;
            }
        };
    };

    // WinnerCheck Function
    var winnerCheck = function(){
        var result = "NO WINNER KEEP FIGHTING";
        display.innerHTML = result
        if (fighterOne.health < 1 && fighterTwo.health < 1){
            result = "You're Both Dead!!";
            display.innerHTML = result;

        }else if (fighterOne.health < 1 ){
            result = fighterTwo.name + " " + "Wins!!";
            display.innerHTML = result;

        }else if (fighterTwo.health < 1 ){
            result = fighterOne.name + " " + "Wins!!";
            display.innerHTML = result;

        };
        return result;
    };


    var fightBtn = document.getElementById('buttonblue');
    fightBtn.addEventListener('click', fight, false)



})();