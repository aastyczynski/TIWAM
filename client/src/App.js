import React, { useState } from "react";
import Register from "./components/register/register";
import FButton from "./components/fButton/fButton";
import Login from "./components/login/login";
import Logged from "./components/logged/logged";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [page, setPage] = useState({
    isLogin: false,
    isRegister: false,
    isLogged: false,
  });

  const showLogin = () => {
    setPage({
      isLogin: true,
      isRegister: false,
      isLogged: false,
    });
  };

  const showRegister = () => {
    setPage({
      isLogin: false,
      isRegister: true,
      isLogged: false,
    });
  };

  const showMain = () => {
    setPage({
      isLogin: false,
      isRegister: false,
      isLogged: false,
    });
  };

  const showLogged = () => {
    setPage({
      isLogin: false,
      isRegister: false,
      isLogged: true,
    });
  };

  return (
    <div className="App">
      {!page.isLogin & !page.isRegister & !page.isLogged ? (
        <FButton showLogin={showLogin} showRegister={showRegister} />
      ) : page.isLogin ? (
        <Login showMain={showMain} showLogged={showLogged} />
      ) : page.isRegister ? (
        <Register showMain={showMain} />
      ) : page.isLogged ? (
        <Logged showMain={showMain} />
      ) : (
        <App />
      )}
    </div>
  );
}

export default App;
