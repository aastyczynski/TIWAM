import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Login({ showMain, showLogged }) {
  const [user, changeUser] = useState({
    nazwa_uzytkownia: "",
    haslo: "",
  });

  const Back = (event) => {
    event.preventDefault();
    showMain();
  };

  const changeUserName = (event) => {
    changeUser({ ...user, nazwa_uzytkownika: event.target.value });
  };

  const changePass = (event) => {
    changeUser({ ...user, haslo: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const loginData = {
      nazwa_uzytkownika: user.nazwa_uzytkownika,
      haslo: user.haslo,
    };
    console.log(loginData);

    axios
      .post("http://localhost:5000/api/user/login", loginData)
      .then((response) => {
        console.log("Response:");
        console.log(response.data);
        alert("Logged in !");
        showLogged();
      })
      .catch((error) => {
        console.log("Eror:");
        console.log(error.response);
        alert("Wrong username or password !");
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
            placeholder="Haslo"
            onChange={changePass}
            value={user.haslo}
            className="form-control form-group"
          />

          <input
            type="submit"
            className="btn btn-danger btn-block"
            value="Submit"
          />
          <button onClick={Back}>Back</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
