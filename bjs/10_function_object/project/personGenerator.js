const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    // patronymicJSON: `{  
    //     "count": 15,
    //     "list": {
    //         "id_1": "Иванов",
    //         "id_2": "Смирнов",
    //         "id_3": "Кузнецов",
    //         "id_4": "Васильев",
    //         "id_5": "Петров",
    //         "id_6": "Михайлов",
    //         "id_7": "Новиков",
    //         "id_8": "Федоров",
    //         "id_9": "Кравцов",
    //         "id_10": "Николаев",
    //         "id_11": "Семёнов",
    //         "id_12": "Славин",
    //         "id_13": "Степанов",
    //         "id_14": "Павлов",
    //         "id_15": "Александров",
    //         "id_16": "Морозов"
    //     }
    // }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Алиса",
            "id_2": "Вера",
            "id_3": "Дарья",
            "id_4": "Евгения",
            "id_5": "Жанна",
            "id_6": "Инна",
            "id_7": "Кира",
            "id_8": "Лана",
            "id_9": "Марина",
            "id_10": "Ника"
        }
    }`,
    professionMaleName: `{
        "count": 10,
        "list": {     
            "id_1": "Програмист",
            "id_2": "Врач",
            "id_3": "Маркетолог",
            "id_4": "Финансовый аналитик",
            "id_5": "Инженер",
            "id_6": "Физик",
            "id_7": "Электрик",
            "id_8": "Нефтяник",
            "id_9": "Автомеханик",
            "id_10": "Менеджер по продажам"
        }
    }`,
    professionFemaleName: `{
        "count": 10,
        "list": {     
            "id_1": "Фармацевт",
            "id_2": "Методист",
            "id_3": "Медсестра",
            "id_4": "Воспитатель",
            "id_5": "Врач-косметолог",
            "id_6": "Логопед",
            "id_7": "Секретарь",
            "id_8": "Библиотекарь",
            "id_9": "Швея",
            "id_10": "Лаборант"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {

        if (this.randomIntNumber(1)) {
            gender = this.GENDER_MALE;
        } else {
            gender = this.GENDER_FEMALE;
        }

        return gender;
    },

    randomFirstName: function() {

        if (gender == this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }

    },

    randomSurname: function() {
        if (gender == this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + 'a';
        }
    },

    randomPatronymic: function(){

        if (gender == this.GENDER_MALE) {
            return this.randomValue(this.surnameJson) + 'ич';
        } else {
            return this.randomValue(this.surnameJson) + 'на';
        }
    },

    randomDate: function() {
        let year = this.randomIntNumber(1970,2021);

        const mounth29 ={
            2: 'Февраль',
        }

        const mounth30 = {
            4: 'Апрель',
            6: 'Июнь',
            9: 'Сентябрь',
            11: 'Ноябрь'
        };

        const mounth31 = {
            1: 'Январь',
            3: 'Март',
            5: 'Май',
            7: 'Июль',
            8: 'Август',
            10: 'Октябрь',
            12: 'Декабрь'
        };

        let mounth = this.randomIntNumber(12,1);

        if (mounth in mounth29) {
            day = this.randomIntNumber(29,1);
        } else if (mounth in mounth30) {
            day = this.randomIntNumber(30,1);
        } else {
            day = this.randomIntNumber(31,1);
        }

        mounth in mounth29 ? mounth = mounth29[mounth].toString().slice(0,-1) + `я` : mounth ;

        mounth in mounth30 ? mounth = mounth30[mounth].toString().slice(0,-1) + `я` : mounth ;

        if (mounth in mounth31) {
            if (mounth == 3 || mounth == 8){
                mounth = mounth31[mounth].toString() + `а`;
            } else {
                mounth = mounth31[mounth].toString().slice(0,-1) + `я`;
            }
        }

        day.toString().length == 1 ? day = `0${day}` : day;

        return `${day} ${mounth.toLowerCase() } ${year}`;
    },

    randomProfession: function() {

        if (gender == this.GENDER_MALE){
            return this.randomValue(this.professionMaleName);
        } else {
            return this.randomValue(this.professionFemaleName);
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.birthYear = this.randomDate();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};
