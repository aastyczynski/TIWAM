import React, { useState } from "react";
import "./register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Register({ showMain }) {
  const [user, changeUser] = useState({
    nazwa_uzytkownika: "",
    email: "",
    haslo: "",
    imie: "",
    nazwisko: "",
    pesel: "",
    ulica: "",
    kod_pocztowy: "",
    miejscowosc: "",
    kraj: "",
    wiek: "",
  });

  const changeUserName = (event) => {
    changeUser({ ...user, nazwa_uzytkownika: event.target.value });
  };
  const changeEmail = (event) => {
    changeUser({ ...user, email: event.target.value });
  };
  const changePass = (event) => {
    changeUser({ ...user, haslo: event.target.value });
  };
  const changeName = (event) => {
    changeUser({ ...user, imie: event.target.value });
  };
  const changeSurname = (event) => {
    changeUser({ ...user, nazwisko: event.target.value });
  };
  const changePesel = (event) => {
    changeUser({ ...user, pesel: event.target.value });
  };
  const changeStreet = (event) => {
    changeUser({ ...user, ulica: event.target.value });
  };
  const changePostcode = (event) => {
    changeUser({ ...user, kod_pocztowy: event.target.value });
  };
  const changeCity = (event) => {
    changeUser({ ...user, miejscowosc: event.target.value });
  };
  const changeCountry = (event) => {
    changeUser({ ...user, kraj: event.target.value });
  };
  const changeAge = (event) => {
    changeUser({ ...user, wiek: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const registered = {
      nazwa_uzytkownika: user.nazwa_uzytkownika,
      email: user.email,
      haslo: user.haslo,
      imie: user.imie,
      nazwisko: user.nazwisko,
      pesel: user.pesel,
      adres_zamieszkania: {
        ulica: user.ulica,
        kod_pocztowy: user.kod_pocztowy,
        miejscowosc: user.miejscowosc,
        kraj: user.kraj,
      },
      wiek: user.wiek,
    };
    console.log(registered);

    axios
      .post("http://localhost:5000/api/user/register", registered)
      .then((response) => {
        console.log(response.data);
        alert(`Registration successfull: ${response.data}`);
      })
      .catch((error) => {
        console.log(error.response.data);
        alert(`Registration failed: ${error.response.data}!`);
      });

    changeUser({
      nazwa_uzytkownika: "",
      email: "",
      haslo: "",
      imie: "",
      nazwisko: "",
      pesel: "",
      ulica: "",
      kod_pocztowy: "",
      miejscowosc: "",
      kraj: "",
      wiek: "",
    });
  };

  const Back = (event) => {
    event.preventDefault();
    showMain();
  };

  return (
    <div className="container">
      <div className="form-div">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Nazwa uzytkownika"
            onChange={changeUserName}
            value={user.nazwa_uzytkownika}
            className="form-control form-group"
          />
          <input
            type="text"
            placeholder="Email"
            onChange={changeEmail}
            value={user.email}
            className="form-control form-group"
          />
          <input
            type="text"
            placeholder="Haslo"
            onChange={changePass}
            value={user.haslo}
            className="form-control form-group"
          />
          <input
            type="text"
            placeholder="Imie"
            onChange={changeName}
            value={user.imie}
            className="form-control form-group"
          />
          <input
            type="text"
            placeholder="Nazwisko"
            onChange={changeSurname}
            value={user.nazwisko}
            className="form-control form-group"
          />
          <input
            type="text"
            placeholder="Pesel"
            onChange={changePesel}
            value={user.pesel}
            className="form-control form-group"
          />
          <input
            type="text"
            placeholder="Ulica"
            onChange={changeStreet}
            value={user.ulica}
            className="form-control form-group"
          />
          <input
            type="text"
            placeholder="Kod Pocztowy"
            onChange={changePostcode}
            value={user.kod_pocztowy}
            className="form-control form-group"
          />
          <input
            type="text"
            placeholder="Miejscowosc"
            onChange={changeCity}
            value={user.miejscowosc}
            className="form-control form-group"
          />
          <input
            type="text"
            placeholder="Kraj"
            onChange={changeCountry}
            value={user.kraj}
            className="form-control form-group"
          />
          <input
            type="text"
            placeholder="Wiek"
            onChange={changeAge}
            value={user.wiek}
            className="form-control form-group"
          />

          <input
            type="submit"
            className="btn btn-danger btn-block"
            value="Submit"
          />
          <button className="btn btn-warning btn-block" onClick={Back}>
            Back
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
