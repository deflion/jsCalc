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
    patronymicJson: `{  
        "count": 10,
        "list": {
            "id_1": "Иванов",
            "id_2": "Васильев",
            "id_3": "Петров",
            "id_4": "Михайлов",
            "id_5": "Федоров",
            "id_6": "Николаев",
            "id_7": "Семёнов",
            "id_8": "Степанов",
            "id_9": "Павлов",
            "id_10": "Александров"
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
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; 
        // this = personGenerator
        
        return obj.list[prop];
    },

    randomGender: function() {
        /* Генерация гендера*/

        gender = (this.randomIntNumber(1)) ? this.GENDER_MALE : this.GENDER_FEMALE;

        return gender;
    },

    randomFirstName: function() {
        /* Генерация имени с привязкой по гендеру */

        let firstNameJson = (gender == this.GENDER_MALE) ? this.firstNameMaleJson : this.firstNameFemaleJson;

        return this.randomValue(firstNameJson);

    },

    randomSurname: function() {
        /* Генерация фамилии с привязкой по гендеру */

        let surNameJson = (gender == this.GENDER_MALE) ? this.randomValue(this.surnameJson) : `${this.randomValue(this.surnameJson)}a`;

        return surNameJson;
    },

    randomPatronymic: function(){
        /* Генерация отчества с привязкой по гендеру */

        let randomPatronymic = (gender == this.GENDER_MALE) ? `${this.randomValue(this.patronymicJson)}ич` : `${this.randomValue(this.patronymicJson)}на`;
        
        return randomPatronymic;   
    },   
           
    randomDate: function() {
        /* 
            Генерация даты рождения с отображением месяца прописью 
            Версия ментора
        */

        let startDate = new Date(1950, 0, 1);
        let endDate = new Date(2005, 11, 31);
        let date = new Date( + startDate + Math.random() * (endDate - startDate))
        let options = {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }
       
       return date.toLocaleString("ru", options)
    },

    randomProfession: function() {
        /* Генерация професси с привязкой по гендеру */
        
        let professionName = (gender == this.GENDER_MALE) ? this.professionMaleName : this.professionFemaleName;

        return this.randomValue(professionName);

    },

    genderPhoto: function() {
        /* Генерация фото с привязкой по гендеру */

        let srcPhoto = (gender == this.GENDER_MALE) ? "man" : "woman";

        return srcPhoto;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.birthYear = this.randomDate();
        this.person.profession = this.randomProfession();
        this.person.genderPhoto = this.genderPhoto();
        
        return this.person;
    }
};
