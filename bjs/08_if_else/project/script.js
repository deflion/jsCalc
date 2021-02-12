/*

Функция начала игры

*/

function GameStart() {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));  

    if (!isNaN(minValue)){
        minValue = minValue < -999 ? -999 : minValue;
    } else {
        minValue = 0;
    } 

    if (!isNaN(maxValue)){
        maxValue = maxValue > 999 ? 999 : maxValue;
    } else {
        maxValue = 100;
    } 

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    
    orderNumberField = document.querySelector('#orderNumberField');
    answerField = document.querySelector('#answerField');
    
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
}

/*

Функция перевода числа в текст

*/

function numToText(number){

}

/*

Функция выбора ответа
при положительном('success'), либо отрицательном('fail') исходе
Math.trunc отсекает целую часть от Math.random,
а множитель 8 предпологает более широкий выбор фраз

*/

function answer(answerType){
    phraseRandom = Math.trunc((Math.random() * 8));
    answerPhrase = "";

    if (answerType == 'fail'){
        if (phraseRandom <=2) {
            answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
        } else if (phraseRandom > 2 & phraseRandom <=5) {
            answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
        } else {
            answerPhrase = `Я так не играю\n\u{1F615}`;
        }
    }

    if (answerType == "success"){
        if (phraseRandom <=2) {
            answerPhrase = `Да это легко! Ты загадал\n`;
        } else if (phraseRandom > 2 & phraseRandom <=5) {
            answerPhrase = `Наверное, это число\n`;
        } else {
            answerPhrase = `Ну естественно\n`;
        }
    }

    return answerPhrase;
}

document.addEventListener('DOMContentLoaded', () =>{
    GameStart();
})

document.querySelector('#btnRetry').addEventListener('click', function () {
    GameStart();
})

document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            answerField.innerText = answer('fail');
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber}?`;
        }
    }
})

document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (maxValue === minValue){
            answerField.innerText = answer('fail');
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber}?`;
        }
    }
})

document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `${answer('success')} ${answerNumber}`
        gameRun = false;
    }
})

