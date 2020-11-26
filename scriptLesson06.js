'use strict';




function playBot(){
    let num = prompt("Угадай число от 1 до 100");

    function guessNum(){
        let hidNum = 89;
        if (+num === +hidNum){
            alert("Поздравляю, Вы угадали!!!");
            return;
        } else if (num === null || num === undefined){
            alert("Игра окончена");
            return;
        } else if (num < 1 || num > 100){
            playBot();
        } else if (hidNum < num){
            num = prompt("Загаданное число меньше. Попробуйте ещё раз!");
            guessNum();
        } else if (hidNum > num){
            num = prompt("Загаданное число больше. Попробуйте ещё раз!");
            guessNum();
        }
    }
    console.dir(guessNum);
    return guessNum();
}

playBot();