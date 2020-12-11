const router = require('express').Router();
const User = require('../model/User');
const {register_validation, login_validation} = require('../validation');
const bcrypt = require('bcryptjs');



router.post('/register',async (req, res) => {

    //Validate data
    const {error} = register_validation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //User checking
    const emailExist = await User.findOne({email: req.body.email});
    const usernameExist = await User.findOne({nazwa_uzytkownika: req.body.nazwa_uzytkownika});
    if(emailExist) return res.status(400).send("Email already exist");
    if(usernameExist) return res.status(400).send("Username already exist");

    //Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashPassoword = await bcrypt.hash(req.body.haslo, salt);


    //Create a new user
    const user = new User ({
        nazwa_uzytkownika: req.body.nazwa_uzytkownika,
        email: req.body.email,
        haslo: hashPassoword,
        imie: req.body.imie,
        nazwisko: req.body.nazwisko,
        pesel: req.body.pesel,
        adres_zamieszkania: req.body.adres_zamieszkania,
        wiek: req.body.wiek,
        data: req.body.data
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
});



module.exports = router;
