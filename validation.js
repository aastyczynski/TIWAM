//Validation

const Joi = require('@hapi/joi');

//Register Validation
const register_validation = (data) => {
    const validation_schema = Joi.object({
        nazwa_uzytkownika: Joi.string().min(4).required(),
        email: Joi.string().min(6).required().email(),
        haslo: Joi.string().min(4).required(),
        imie: Joi.string().min(1).required(),
        nazwisko: Joi.string().min(1).required(),
        pesel: Joi.string().min(6).required(),
        adres_zamieszkania: {
            ulica: Joi.string().min(1).required(),
            kod_pocztowy: Joi.string().min(1).required(),
            miejscowosc: Joi.string().min(1).required(),
            kraj: Joi.string().min(1).required(),
        },
        wiek: Joi.string().min(1).required(),
    });

    return validation_schema.validate(data);
}

//Login Validation
const login_validation = (data) => {
    const validation_schema = Joi.object({
        nazwa_uzytkownika: Joi.string().min(4).required(),
        haslo: Joi.string().min(4).required(),      
    });

    return validation_schema.validate(data);
}

module.exports.register_validation = register_validation;
module.exports.login_validation = login_validation;

