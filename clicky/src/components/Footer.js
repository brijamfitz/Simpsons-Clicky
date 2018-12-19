import React from "react";

const styles = {
  footer: {
    backgroundColor: "gold",
    color: "blue",
    height: "50px",
    fontSize: "14px"
  }
};

const Footer = () => (
  <div>
    <nav className="navbar bottom" style={styles.footer}>
      <a className="navbar-brand" href="/#">
        Simpsons Clicky &mdash; Powered by React
      </a>
    </nav>
  </div>
);

export default Footer;
