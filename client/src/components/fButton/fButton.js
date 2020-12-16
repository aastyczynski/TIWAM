import React from "react";

function fButton({ showLogin, showRegister }) {
  const onClickLogin = (event) => {
    event.preventDefault();
    showLogin();
  };

  const onClickRegister = (event) => {
    event.preventDefault();
    showRegister();
  };

  return (
    <div className="container">
      <div className="form-div">
        <button className="btn btn-warning btn-block" onClick={onClickLogin}>
          Login
        </button>
        <button className="btn btn-warning btn-block" onClick={onClickRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

export default fButton;
