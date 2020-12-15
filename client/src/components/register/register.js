import React, { Component } from "react";
import "./register.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
      adres_zamieszkania: {
        ulica: "",
        kod_pocztowy: "",
        miejscowosc: "",
        kraj: "",
      },
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
      ...this.state.adres_zamieszkania,
      ulica: event.target.value,
    });
  }
  changePostcode(event) {
    this.setState({
      ...this.state.adres_zamieszkania,
      kod_pocztowy: event.target.value,
    });
  }
  changeCity(event) {
    this.setState({
      ...this.state.adres_zamieszkania,
      miejscowosc: event.target.value,
    });
  }
  changeCountry(event) {
    this.setState({
      ...this.state.adres_zamieszkania,
      kraj: event.target.value,
    });
  }
  changeAge(event) {
    this.setState({
      wiek: event.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="form-div">
          <form>
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
              value={this.state.adres_zamieszkania.ulica}
              className="form-control form-group"
            />
            <input
              type="text"
              placeholder="Kod Pocztowy"
              onChange={this.changePostcode}
              value={this.state.adres_zamieszkania.kod_pocztowy}
              className="form-control form-group"
            />
            <input
              type="text"
              placeholder="Miejscowosc"
              onChange={this.changeCity}
              value={this.state.adres_zamieszkania.miejscowosc}
              className="form-control form-group"
            />
            <input
              type="text"
              placeholder="Kraj"
              onChange={this.changeCountry}
              value={this.state.adres_zamieszkania.kraj}
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
          </form>
        </div>
      </div>
    );
  }
}

export default register;
