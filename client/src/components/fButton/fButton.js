import e from "cors";
import React, { Component, useState } from "react";

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
      <button onClick={onClickLogin}>Login</button>
      <button onClick={onClickRegister}>Register</button>
    </div>
  );
}

export default fButton;
