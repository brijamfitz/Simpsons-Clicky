import React from "react";

const styles = {
  navbar: {
    backgroundColor: "gold",
    color: "blue",
    height: "70px",
    fontSize: "24px"
  },
  container: {
    float: "left",
    width: "25%"
  },
  card: {
    textAlign: "center",
    paddingTop: "20px"
  }
};

const Navbar = props => (
  <div>
    <nav className="navbar fixed-top" style={styles.navbar}>
      <ul className="nav navbar-nav navbar-left">
        <li>Simpsons Clicky!</li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li>
          Score: {props.score} | High Score: {props.highScore}
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
