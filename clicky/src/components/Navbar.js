import React from "react";

const styles = {
  navbar: {
    backgroundColor: "gold",
    color: "blue",
    height: "70px",
    fontSize: "24px"
  }
};

const Navbar = (props) => (
  <div>
    <nav className="navbar fixed-top" style={styles.navbar}>
      <ul class="nav navbar-nav navbar-left">
        <li>Simpsons Clicky!</li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>Score: {props.clickCount} | Top Score: {props.totalScore}</li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
