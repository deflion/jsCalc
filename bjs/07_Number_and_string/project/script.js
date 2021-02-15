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

document.querySelector('#btn_percent').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'percent';
    inputWindow.value = lastOperand / 100;
    calc = true;
})

document.querySelector('#btn_sqrt').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sqrt';
    inputWindow.value = Math.sqrt(lastOperand);
    calc = true;
})

document.querySelector('#btn_sum').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '0';

})

document.querySelector('#btn_substr').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'substrction';
    inputWindow.value = '0';

    // if (lastOperand == 0 || inputWindow.value === '0' ){
    //     inputWindow.value = "-";
    // } else {
    //     lastOperand = parseFloat(inputWindow.value);
    //     operation = 'substrction';
    //     inputWindow.value = '0';
    // }
    
})

document.querySelector('#btn_div').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'division';
    inputWindow.value = '0';
})

document.querySelector('#btn_mult').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'multiply';
    inputWindow.value = '0';
})

document.querySelector('#btn_result').addEventListener('click', function () {
    
    if (operation === 'sum'){
        result = lastOperand + parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;    
    }

    if (operation === 'substrction'){
        result = lastOperand - parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result
    }

    if (operation === 'division'){
        result = lastOperand / parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        int = Math.trunc(result);
        float = result - int ? parseFloat((result - int).toString().slice(0,-1)) : "";
        inputWindow.value = `${int+float}`;
    }

    if (operation === 'multiply'){
        result = lastOperand * parseFloat(inputWindow.value);
        operation = null;
        lastOperand = 0;
        int = Math.trunc(result);
        float = result - int ? parseFloat((result - int).toString().slice(0,-1)) : "";
        inputWindow.value = `${int+float}`;
        
    }

    calc = true;
    
})

// buttons 0-9 , dotte

document.querySelector('#btn_1').addEventListener('click', function () {
    if (calc || inputWindow.value === "0"){
        inputWindow.value = '1';
        calc = false;
    } else {
        inputWindow.value += '1';
    }

})

document.querySelector('#btn_2').addEventListener('click', function () {
    if (calc || inputWindow.value === "0"){
        inputWindow.value = '2';
        calc = false;
    } else {
        inputWindow.value += '2';
    }
})

document.querySelector('#btn_3').addEventListener('click', function () {
    if (calc || inputWindow.value === "0"){
        inputWindow.value = '3';
        calc = false;
    } else {
        inputWindow.value += '3';
    }
})

document.querySelector('#btn_4').addEventListener('click', function () {
    if (calc || inputWindow.value === "0"){
        inputWindow.value = '4';
        calc = false;
    } else {
        inputWindow.value += '4';
    }
})

document.querySelector('#btn_5').addEventListener('click', function () {
    if (calc || inputWindow.value === "0"){
        inputWindow.value = '5';
        calc = false;
    } else {
        inputWindow.value += '5';
    }
})

document.querySelector('#btn_6').addEventListener('click', function () {
    if (calc || inputWindow.value === "0"){
        inputWindow.value = '6';
        calc = false;
    } else {
        inputWindow.value += '6';
    }
})

document.querySelector('#btn_7').addEventListener('click', function () {
    if (calc || inputWindow.value === "0"){
        inputWindow.value = '7';
        calc = false;
    } else {
        inputWindow.value += '7';
    }
})

document.querySelector('#btn_8').addEventListener('click', function () {
    if (calc || inputWindow.value === "0"){
        inputWindow.value = '8';
        calc = false;
    } else {
        inputWindow.value += '8';
    }
})

document.querySelector('#btn_9').addEventListener('click', function () {
    if (calc || inputWindow.value === "0"){
        inputWindow.value = '9';
        calc = false;
    } else {
        inputWindow.value += '9';
    }
})

document.querySelector('#btn_0').addEventListener('click', function () {
    if (calc || inputWindow.value === "0"){
        inputWindow.value = '0';
        calc = false;
    } else {
        inputWindow.value += '0';
    }
})

document.querySelector('#btn_dot').addEventListener('click', function () {
    if (calc || inputWindow.value === ""){
        inputWindow.value='0.';
    } else if(inputWindow.value.includes('.')){
        inputWindow.value += '';
    } else {
        inputWindow.value += '.';
    }
})


console.log(calc);


