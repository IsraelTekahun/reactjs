import React from "react";

const styles = {
  fontSize: 10,
  color: "green",
};

function Nav() {
  let time = "morning";
  if (new Date().getHours() >= 17) {
    time = "night";
    styles.color = "red";
  } else {
    time = "afternoon";
    styles.color = "green";
  }

  return (
    <header>
      <h3 className="navbar">Good {time}</h3>
      <h3 className="navbar" style={styles}>
        Good {time}
      </h3>
    </header>
  );
}

export default Nav;
