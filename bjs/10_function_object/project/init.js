const generate = (bool) => {
    if (bool) {
        const initPerson = personGenerator.getPerson();
        document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
        document.querySelector('#surNameOutput').innerText = initPerson.surName;
        document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
        document.querySelector('#genderOutput').innerText = initPerson.gender;
        document.querySelector('#birthYearOutput').innerText = initPerson.birthYear;
        document.querySelector('#professionOutput').innerText = initPerson.profession;
    } else {
        document.querySelector('#firstNameOutput').innerText = "";
        document.querySelector('#surNameOutput').innerText = "";
        document.querySelector('#patronymicOutput').innerText = "";
        document.querySelector('#genderOutput').innerText = "";
        document.querySelector('#birthYearOutput').innerText = "";
        document.querySelector('#professionOutput').innerText = "";
    }
        
};

window.onload = function() {
    generate(true);
};

document.querySelector('#refresh').addEventListener('click', function(){
    generate(true);
});

document.querySelector('#clear').addEventListener('click', function(){
    generate(false);
});
