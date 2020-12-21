const router = require("express").Router();
const User = require("../model/User");
const { register_validation, login_validation } = require("../validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Register
router.post("/register", async (req, res) => {
  //Validate data
  const { error } = register_validation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //User checking
  const emailExist = await User.findOne({ email: req.body.email });
  const usernameExist = await User.findOne({
    nazwa_uzytkownika: req.body.nazwa_uzytkownika,
  });
  if (emailExist) return res.status(400).send("Email already exist");
  if (usernameExist) return res.status(400).send("Username already exist");

  //Hashing password
  const salt = await bcrypt.genSalt(10);
  const hashPassoword = await bcrypt.hash(req.body.haslo, salt);

  //Create a new user
  const user = new User({
    nazwa_uzytkownika: req.body.nazwa_uzytkownika,
    email: req.body.email,
    haslo: hashPassoword,
    imie: req.body.imie,
    nazwisko: req.body.nazwisko,
    pesel: req.body.pesel,
    adres_zamieszkania: req.body.adres_zamieszkania,
    wiek: req.body.wiek,
    data: req.body.data,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

//Login
router.post("/login", async (req, res) => {
  //Validate data
  const { error } = login_validation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //User checking
  const user = await User.findOne({
    nazwa_uzytkownika: req.body.nazwa_uzytkownika,
  });
  if (!user) return res.status(400).send("Username is not found");

  //Password checking
  const validPass = await bcrypt.compare(req.body.haslo, user.haslo);
  if (!validPass) return res.status(400).send("Invalid password");

  //Create token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  //res.header("auth-token", token).send(token);

  res.send({ alert: "Logged in!", user: user });
});

module.exports = router;
