import React from "react";

const styles = {
  navbar: {
    backgroundColor: "yellow",
    color: "skyblue",
    height: "70px",
    fontSize: "24px"
  }
};

const Navbar = () => (
  <div>
    <nav className="navbar" style={styles.navbar}>
      <ul class="nav navbar-nav navbar-left">
        <li>Simpsons Clicky!</li>
      </ul>
      <ul class="nav navbar-nav navbar-center">
        <li>Click an image to begin!</li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li>Score: 0 | Top Score: 0</li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
