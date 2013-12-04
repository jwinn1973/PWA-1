/*
* Jamell winn
* Tuesday Dec 03 2013
* Duel 1*/

// self-executing function
(function(){

    console.log("Fight!!");

    //fighter name
    var playerOneName = "Kabal";
    var playerTwoName = "Kratos";

    //fighters health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    // fighters damage
    var playerOneDamage = 20;
    var playerTwoDamage = 20;

    var round = 0;

    // fight function
    var fight = function(){
        console.log("It's on!!!!");
        alert(playerOneName + ":" + playerOneHealth + " *START* " + playerTwoName + ":"
        + playerTwoHealth);

        for(var i = 0; i < 10; i++){
            // random formula is - Math.floor(Math.random()* (max - min) + min);
            var minDamage1 = playerOneDamage * .5;
            var minDamage2 = playerTwoDamage * .5;

            var f1 = Math.floor(Math.random()*(playerOneDamage - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwoDamage - minDamage2) + minDamage2);

            // inflict damage
            playerOneHealth -= f1; // same as (( playerOneHealth = playerOne Health - f1 ))
            playerTwoHealth -= f2;

            console.log(playerOneName + ":" + playerOneHealth + " | " + playerTwoName + ":"
            + playerTwoHealth);

            //console.log("playerOne: " + playerOneHealth);
            //console.log("playerTwo: " + playerTwoHealth);

            var results = winnerCheck();
            console.log(results);

            if (results === "no winner"){
                round++;
                alert(playerOneName + ":" + playerOneHealth + " ROUND " + round +" "+ playerTwoName + ":"
                    + playerTwoHealth);
            }else{
                alert(results);
                break;
            }
        };
    };

    // WinnerCheck Function
    var winnerCheck = function(){
        var result = "no winner";

        if (playerOneHealth < 1 && playerTwoHealth < 1){
            result = "You're Both Dead!!";
        }else if (playerOneHealth < 1 ){
            result = playerTwoName + " " + "Wins!!";
        }else if (playerTwoHealth < 1 ){
            result = playerOneName + " " + "Wins!!";
        };
        return result;
    };

    fight();

})();