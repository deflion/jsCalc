let lastOperand = 0;
let operation = null;
let calc = null;


const inputWindow = document.querySelector('#inputWindow');


document.querySelector('#btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
    result = null;
})

document.querySelector('#btn_del').addEventListener('click', function () {
    lastOperand = inputWindow.value;
    operation = 'delete';
    inputWindow.value = lastOperand.substr(0,lastOperand.length-1);
})

document.querySelector('#btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';

})

document.querySelector('#btn_substr').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'substrction';
    inputWindow.value = '';
})

document.querySelector('#btn_div').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'division';
    inputWindow.value = '';
})

document.querySelector('#btn_result').addEventListener('click', function () {
    
    if (operation === 'sum'){
        result = lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;    
    }

    if (operation === 'substrction'){
        result = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }

    if (operation === 'division'){
        result = lastOperand / parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }

    calc = true;
    
})

document.querySelector('#btn_1').addEventListener('click', function () {
    if (calc){
        inputWindow.value = '1';
        calc = false;
    } else {
        inputWindow.value += '1';
    }

})

document.querySelector('#btn_2').addEventListener('click', function () {
    if (calc){
        inputWindow.value = '2';
        calc = false;
    } else {
        inputWindow.value += '2';
    }
})

document.querySelector('#btn_3').addEventListener('click', function () {
    if (calc){
        inputWindow.value = '3';
        calc = false;
    } else {
        inputWindow.value += '3';
    }
})

document.querySelector('#btn_4').addEventListener('click', function () {
    if (calc){
        inputWindow.value = '4';
        calc = false;
    } else {
        inputWindow.value += '4';
    }
})

document.querySelector('#btn_5').addEventListener('click', function () {
    if (calc){
        inputWindow.value = '5';
        calc = false;
    } else {
        inputWindow.value += '5';
    }
})

document.querySelector('#btn_6').addEventListener('click', function () {
    if (calc){
        inputWindow.value = '6';
        calc = false;
    } else {
        inputWindow.value += '6';
    }
})

document.querySelector('#btn_7').addEventListener('click', function () {
    if (calc){
        inputWindow.value = '7';
        calc = false;
    } else {
        inputWindow.value += '7';
    }
})

document.querySelector('#btn_8').addEventListener('click', function () {
    if (calc){
        inputWindow.value = '8';
        calc = false;
    } else {
        inputWindow.value += '8';
    }
})

document.querySelector('#btn_9').addEventListener('click', function () {
    if (calc){
        inputWindow.value = '9';
        calc = false;
    } else {
        inputWindow.value += '9';
    }
})

document.querySelector('#btn_0').addEventListener('click', function () {
    if (calc){
        inputWindow.value = '0';
        calc = false;
    } else {
        inputWindow.value += '0';
    }
})

document.querySelector('#btn_dot').addEventListener('click', function () {
    if (inputWindow.value === ""){
        inputWindow.value='0.';
    } else if(inputWindow.value.includes('.')){
        inputWindow.value += '';
    } else {
        inputWindow.value += '.';
    }
})



