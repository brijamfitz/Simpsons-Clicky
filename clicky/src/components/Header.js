import React from "react";

const styles = {
  header: {
    height: "250px",
    textAlign: "center",
    backgroundColor: "skyblue",
    color: "yellow"
  },
  h: {
    paddingTop: "70px"
  }
};

const Header = () => (
  <div style={styles.header}>
    <h2 style={styles.h}>Simpsons Clicky!</h2>
    <h3>
      Click on a character to earn points &ndash; but don't click on any more
      than once!
    </h3>
  </div>
);

export default Header;
