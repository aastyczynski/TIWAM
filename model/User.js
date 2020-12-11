const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    nazwa_uzytkownika: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    haslo: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    imie: {
        type: String,
        required: true
    },
    nazwisko: {
        type: String,
        required: true
    },
    pesel: {
        type: String,
        required: true
    },
    adres_zamieszkania: {
        ulica: {
            type: String,
            required: true,
        },
        kod_pocztowy: {
            type: String,
            required: true,
        },
        miejscowosc: {
            type: String,
            required: true,
        },
        kraj: {
            type: String,
            required: true,
        }
    },
    wiek: {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);