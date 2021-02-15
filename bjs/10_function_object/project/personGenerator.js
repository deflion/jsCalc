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
    professionName: `{
        "count": 10,
        "list": {     
            "id_1": "",
            "id_2": "",
            "id_3": "",
            "id_4": "",
            "id_5": "",
            "id_6": "",
            "id_7": "",
            "id_8": "",
            "id_9": "",
            "id_10": ""
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

        // alert(this.randomIntNumber(1));

        if (this.randomIntNumber(1)) {
            gender = this.GENDER_MALE;
        } else {
            gender = this.GENDER_FEMALE;
        }

        return gender;
    },

    randomFirstName: function() {

        if (gender == `Мужчина`) {
            firstName = this.randomValue(this.firstNameMaleJson);
        } else {
            firstName = this.randomValue(this.firstNameFemaleJson);
        }

        return firstName;
    },

    randomSurname: function() {
        if (gender == this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + 'a';
        }
    },

    randomDate: function() {
        let year = this.randomIntNumber(1970,2021);

        const mounth30 = [4,6,9,11];

        let mounth = this.randomIntNumber(12,1);

        if (mounth == 29) {
            day = this.randomIntNumber(29,1);
        } else if (mounth in mounth30) {
            day = this.randomIntNumber(30,1);
        } else {
            day = this.randomIntNumber(31,1);
        }

        day.toString().length == 1 ? day = `0${day}` : day;
        
        mounth.toString().length == 1 ? mounth = `0${mounth}` : mounth
  

        return `${day}.${mounth}.${year}`;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.birthYear = this.randomDate();
        return this.person;
    }
};
