import React from "react";

const styles = {
  header: {
    height: "250px",
    textAlign: "center",
    backgroundColor: "blue",
    color: "gold"
  },
  h: {
    paddingTop: "70px"
  },
  img: {
      width: "250px",
      paddingTop: "20px"
  }
};

const Header = () => (
  <div style={styles.header}>
    <img alt="simpsons logo" src="./images/simpsons-logo.png" style={styles.img} />
    <h3>
      Click on a character to earn points &ndash; but don't click on any more
      than once!
    </h3>
  </div>
);

export default Header;
