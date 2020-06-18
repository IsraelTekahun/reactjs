import React from "react";

// #2
/*function Header(props) {
  return (
    <header>
      <p>Welcome, {props.username}!</p>
    </header>
  );
}

export default Header;*/

class Header extends React.Component {
  render(props) {
    return (
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    );
  }
}
export default Header;
