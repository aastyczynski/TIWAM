import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./logged.css";
import $ from "jquery";

function logged({ showMain, userInfo }) {
  const Back = (event) => {
    event.preventDefault();
    showMain();
  };

  const onLoad = (event) => {
    var selected = $("#inputGroupSelect04").val();
    console.log(selected);

    if (selected == "Select") {
      $("#user").html("Wybierz dane");
    } else {
      switch (selected) {
        case "imie":
          $("#user").html(`Imię > ${userInfo.imie}`);
          break;
        case "nazwisko":
          $("#user").html(`Nazwisko > ${userInfo.nazwisko}`);
          break;
        case "nazwa_uzytkownika":
          $("#user").html(`Nazwa użytkownika > ${userInfo.nazwa_uzytkownika}`);
          break;
        case "email":
          $("#user").html(`Email > ${userInfo.email}`);
          break;
        case "pesel":
          $("#user").html(`Pesel > ${userInfo.pesel}`);
          break;
        case "wiek":
          $("#user").html(`Wiek > ${userInfo.wiek}`);
          break;
        case "ulica":
          $("#user").html(`Ulica > ${userInfo.adres_zamieszkania.ulica}`);
          break;
        case "miejscowosc":
          $("#user").html(
            `Miejscowość > ${userInfo.adres_zamieszkania.miejscowosc}`
          );
          break;
        case "kod_pocztowy":
          $("#user").html(
            `Kod pocztowy > ${userInfo.adres_zamieszkania.kod_pocztowy}`
          );
          break;
        case "kraj":
          $("#user").html(`Kraj > ${userInfo.adres_zamieszkania.kraj}`);
          break;
      }
    }
  };
  console.log(userInfo);

  return (
    <div className="container">
      <div>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="ele">
                Nazwa użytkownika: {userInfo.nazwa_uzytkownika}
              </div>
            </div>
            <div class="carousel-item">
              <div className="ele">Email: {userInfo.email}</div>
            </div>
            <div class="carousel-item">
              <div className="ele">Imię: {userInfo.imie}</div>
            </div>
            <div class="carousel-item">
              <div className="ele">Nazwisko: {userInfo.nazwisko}</div>
            </div>
            <div class="carousel-item">
              <div className="ele">Pesel: {userInfo.pesel}</div>
            </div>
            <div class="carousel-item">
              <div className="ele">Wiek: {userInfo.wiek}</div>
            </div>
            <div class="carousel-item">
              <div className="ele">
                Ulica: {userInfo.adres_zamieszkania.ulica}
              </div>
            </div>
            <div class="carousel-item">
              <div className="ele">
                Miejscowość: {userInfo.adres_zamieszkania.miejscowosc}
              </div>
            </div>
            <div class="carousel-item">
              <div className="ele">
                Kod Pocztowy: {userInfo.adres_zamieszkania.kod_pocztowy}
              </div>
            </div>
            <div class="carousel-item">
              <div className="ele">
                Kraj: {userInfo.adres_zamieszkania.kraj}
              </div>
            </div>

            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

          <div class="input-group">
            <select
              class="custom-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
            >
              <option value="Select">Wybierz dane...</option>
              <option value="imie">Imię</option>
              <option value="nazwisko">Nazwisko</option>
              <option value="nazwa_uzytkownika">Nazwa użytkownika</option>
              <option value="email">Email</option>
              <option value="pesel">Pesel</option>
              <option value="wiek">Wiek</option>
              <option value="ulica">Ulica</option>
              <option value="miejscowosc">Miejscowość</option>
              <option value="kod_pocztowy">Kod pocztowy</option>
              <option value="kraj">Kraj</option>
            </select>
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                onClick={onLoad}
              >
                Load
              </button>
            </div>
          </div>

          <div id="user"></div>

          <button className="btn btn-warning btn-block" onClick={Back}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default logged;
