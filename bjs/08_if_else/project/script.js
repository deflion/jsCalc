
/*
Функция начала игры 
после ввода в модальном окне значений минимума и максимума
и нажатия кнопки "Загадать"
*/

document.querySelector('#start').addEventListener('click', function() {
    document.querySelector('.button').setAttribute('style', 'display:none');
    document.querySelector('.game').setAttribute('style', 'display:block');
    gameStart();
})

/*
Функция начала игры
*/

function gameStart() {

    minValue = parseInt(document.querySelector('#minValue').value);
    maxValue = parseInt(document.querySelector('#maxValue').value);
    
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

для написания этой функции не хватает немного навыка
*/

function numToText(number){
    return;
}

/*
Функция выбора ответа
при положительном('success'), либо отрицательном('fail') исходе
Math.trunc отсекает целую часть от Math.random,
*/

function answer(answerType){
    phraseRandom = Math.trunc((Math.random() * 3));
    answerPhrase = "";

    if (answerType == 'fail'){

        switch(phraseRandom){
            case 0: 
                answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                break;
            case 1:
                answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
                break;
            default:
                answerPhrase = `На этом мои полномочия все...`;
        }
    }

    if (answerType == "success"){
        switch(phraseRandom){
            case 0: 
                answerPhrase = `Да это легко! Ты загадал\n`;
                break;
            case 1:
                answerPhrase = `Наверное, это число\n`;
                break;
            default:
                answerPhrase = `Изи! Это же\n`;
        }
    }

    return answerPhrase;
}

// Функция кнопки "Заново" 

document.querySelector('#btnRetry').addEventListener('click', function () {
    document.querySelector('.button').setAttribute('style', 'display:block');
    document.querySelector('.game').setAttribute('style', 'display:none');
    document.querySelector('#minValue').value = null;
    document.querySelector('#maxValue').value = null;
    gameStart();
})

// Функция кнопки "Больше" 

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

// Функция кнопки "Меньше" 

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

// Функция кнопки "Все верно"

document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `${answer('success')} ${answerNumber}`
        gameRun = false;
    }
})

//Изменение текста в span.min при заполнении input.minValue

document.querySelector('#minValue').addEventListener('keyup', function(){
    document.querySelector('.min').textContent = document.querySelector('#minValue').value;
})

//Изменение текста в span.max при заполнении input.maxValue

document.querySelector('#maxValue').addEventListener('keyup', function(){
    document.querySelector('.max').textContent = document.querySelector('#maxValue').value;
})