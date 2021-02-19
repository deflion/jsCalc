function generate(bool){
    if (bool) {
        const initPerson = personGenerator.getPerson();
        document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
        document.querySelector('#surNameOutput').innerText = initPerson.surName;
        document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
        document.querySelector('#genderOutput').innerText = initPerson.gender;
        document.querySelector('#birthYearOutput').innerText = initPerson.birthYear;
        document.querySelector('#professionOutput').innerText = initPerson.profession;
        document.querySelector('#photo').setAttribute('src', `img/${initPerson.genderPhoto}.jpg`);
        document.querySelector('#photo').setAttribute('alt', `Photo for ${initPerson.genderPhoto} card`);
    } else {
        document.querySelector('#firstNameOutput').innerText = "";
        document.querySelector('#surNameOutput').innerText = "Нет данных";
        document.querySelector('#patronymicOutput').innerText = "";
        document.querySelector('#genderOutput').innerText = "Нет данных";
        document.querySelector('#birthYearOutput').innerText = "Нет данных";
        document.querySelector('#professionOutput').innerText = "Нет данных";
        document.querySelector('#photo').setAttribute('src', `img/nophoto.jpg`);
        document.querySelector('#photo').setAttribute('alt', `nophoto`);
    }
        
};

/* Генерация карточки персонажа при загрузке страницы */
window.onload = generate;

/* Генерация карточки персонажа по нажатию button#refresh */
document.querySelector('#refresh').addEventListener('click', generate, false);

/* Очистка карточки персонажа по нажатию button#clear */
document.querySelector('#clear').addEventListener('click', () => {generate(false)}, false);
