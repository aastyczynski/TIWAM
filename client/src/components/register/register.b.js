import React, { Component } from "react";
import "./register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class register extends Component {
  constructor() {
    super();
    this.state = {
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
    };
    this.changeUserName = this.changeUserName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePass = this.changePass.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeSurname = this.changeSurname.bind(this);
    this.changePesel = this.changePesel.bind(this);
    this.changeStreet = this.changeStreet.bind(this);
    this.changePostcode = this.changePostcode.bind(this);
    this.changeCity = this.changeCity.bind(this);
    this.changeCountry = this.changeCountry.bind(this);
    this.changeAge = this.changeAge.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.Back = this.Back.bind(this);
  }
  changeUserName(event) {
    this.setState({
      nazwa_uzytkownika: event.target.value,
    });
  }
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changePass(event) {
    this.setState({
      haslo: event.target.value,
    });
  }
  changeName(event) {
    this.setState({
      imie: event.target.value,
    });
  }
  changeSurname(event) {
    this.setState({
      nazwisko: event.target.value,
    });
  }
  changePesel(event) {
    this.setState({
      pesel: event.target.value,
    });
  }
  changeStreet(event) {
    this.setState({
      ulica: event.target.value,
    });
  }
  changePostcode(event) {
    this.setState({
      kod_pocztowy: event.target.value,
    });
  }
  changeCity(event) {
    this.setState({
      miejscowosc: event.target.value,
    });
  }
  changeCountry(event) {
    this.setState({
      kraj: event.target.value,
    });
  }
  changeAge(event) {
    this.setState({
      wiek: event.target.value,
    });
  }

  Back(event) {
    event.preventDefault();
  }

  onSubmit(event) {
    event.preventDefault();
    // const test = {
    //   nazwa_uzytkownika: "admin",
    //   email: "admin@test.com",
    //   haslo: "admin",
    //   imie: "Adam",
    //   nazwisko: "Styczynski",
    //   pesel: "1234567",
    //   adres_zamieszkania: [
    //     {
    //       ulica: "Ulica",
    //       kod_pocztowy: "80-130",
    //       miejscowosc: "Gdansk",
    //       kraj: "Polska",
    //     },
    //   ],
    //   wiek: "23",
    // };

    const registered = {
      nazwa_uzytkownika: this.state.nazwa_uzytkownika,
      email: this.state.email,
      haslo: this.state.haslo,
      imie: this.state.imie,
      nazwisko: this.state.nazwisko,
      pesel: this.state.pesel,
      adres_zamieszkania: {
        ulica: this.state.ulica,
        kod_pocztowy: this.state.kod_pocztowy,
        miejscowosc: this.state.miejscowosc,
        kraj: this.state.kraj,
      },
      wiek: this.state.wiek,
    };
    console.log(registered);

    axios
      .post("http://localhost:5000/api/user/register", registered)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });

    this.setState({
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
  }

  render() {
    return (
      <div className="container">
        <div className="form-div">
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Nazwa uzytkownika"
              onChange={this.changeUserName}
              value={this.state.nazwa_uzytkownika}
              className="form-control form-group"
            />
            <input
              type="text"
              placeholder="Email"
              onChange={this.changeEmail}
              value={this.state.email}
              className="form-control form-group"
            />
            <input
              type="text"
              placeholder="Haslo"
              onChange={this.changePass}
              value={this.state.haslo}
              className="form-control form-group"
            />
            <input
              type="text"
              placeholder="Imie"
              onChange={this.changeName}
              value={this.state.imie}
              className="form-control form-group"
            />
            <input
              type="text"
              placeholder="Nazwisko"
              onChange={this.changeSurname}
              value={this.state.nazwisko}
              className="form-control form-group"
            />
            <input
              type="text"
              placeholder="Pesel"
              onChange={this.changePesel}
              value={this.state.pesel}
              className="form-control form-group"
            />
            <input
              type="text"
              placeholder="Ulica"
              onChange={this.changeStreet}
              value={this.state.ulica}
              className="form-control form-group"
            />
            <input
              type="text"
              placeholder="Kod Pocztowy"
              onChange={this.changePostcode}
              value={this.state.kod_pocztowy}
              className="form-control form-group"
            />
            <input
              type="text"
              placeholder="Miejscowosc"
              onChange={this.changeCity}
              value={this.state.miejscowosc}
              className="form-control form-group"
            />
            <input
              type="text"
              placeholder="Kraj"
              onChange={this.changeCountry}
              value={this.state.kraj}
              className="form-control form-group"
            />
            <input
              type="text"
              placeholder="Wiek"
              onChange={this.changeAge}
              value={this.state.wiek}
              className="form-control form-group"
            />

            <input
              type="submit"
              className="btn btn-danger btn-block"
              value="Submit"
            />
            <button onClick={this.Back}>Back</button>
          </form>
        </div>
      </div>
    );
  }
}

export default register;
