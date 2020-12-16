import React from "react";

function logged({ showMain }) {
  const Back = (event) => {
    event.preventDefault();
    showMain();
  };
  return (
    <div>
      Logged in!
      <button className="btn btn-warning btn-block" onClick={Back}>
        Logout
      </button>
    </div>
  );
}

export default logged;
