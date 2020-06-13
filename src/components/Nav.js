import React from "react";

function Nav() {
  let time = "morning";
  if (new Date().getHours() >= 17) {
    time = "night";
  } else {
    time = "afternoon";
  }

  return (
    <header>
      <h3 className="navbar">Good {time}</h3>
    </header>
  );
}

export default Nav;
