/**
 * GUESSING GAME:
 *
 * Created By: Jamell Winn
 * Date: Dec 7 2013
 * 
 * GUESSING GAME
 */

//Game variables
(function (){

    var createNum = Math.floor(Math.random()*10);

    var mainObj = {};
    mainObj.input = document.getElementById('input');
    mainObj.output = document.getElementById('output');
    mainObj.magicNum = createNum;
    mainObj.status = document.getElementById('status');

    console.log(mainObj.magicNum)

    var chance = 3;
    console.log(chance)

    var runApp = function(){
        checkNum();
    };

    var checkChance = function(){
        if (chance === 0){
            playBtn.removeEventListener('click', runApp, false);
            mainObj.output.innerHTML = '';
            mainObj.status.innerHTML = "You're out of trys. The magic number was: " + mainObj.magicNum;
        }
    };

    var checkNum = function(){
        var gameInfo = [mainObj.input.value, mainObj.output, mainObj.magicNum, mainObj.status];

            if(gameInfo[0] == gameInfo[2]){
                chance--;
                gameInfo[1].innerHTML = 'You Win. The Magic Number is: ' + gameInfo[2];

                checkChance()

            }else if (gameInfo[0] < gameInfo[2]){
                chance--;
                gameInfo[1].innerHTML = 'Wrong. Your number is to low.';
                gameInfo[3].innerHTML = "You have " + chance +" chances left.";

                checkChance()

            }else if (gameInfo[0] > gameInfo[2]){
                chance--;
                gameInfo[1].innerHTML = 'Wrong. Your number is to high';
                gameInfo[3].innerHTML = "You have " + chance +" chances left.";

                checkChance()
            }
            return

    }

    var playBtn = document.getElementById('guessBtn');
    playBtn.addEventListener('click', runApp, false);

})();