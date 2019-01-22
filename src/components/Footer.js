import React from "react";

const styles = {
  p: {
    marginBottom: "0px"
  }
};

const Footer = () => (
  <div>
    <nav className="navbar bottom navbar-light bg-light">
      <p style={styles.p}>
        Simpsons Clicky &mdash; Powered by React
      </p>
    </nav>
  </div>
);

export default Footer;
