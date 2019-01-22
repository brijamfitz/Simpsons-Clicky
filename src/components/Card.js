import React from "react";

const styles = {
  container: {
    float: "left",
    width: "25%",
    textAlign: "center",
    paddingTop: "20px"
  },
  card: {
    textAlign: "center",
    paddingTop: "20px"
  },
  navbar: {
    backgroundColor: "gold",
    color: "blue",
    height: "70px",
    fontSize: "24px"
  }
};

const Card = props => {
  return (
    <div className="card" style={styles.container} onClick={() => props.onClick(props.id)}>
      <div className="img-container">
        <img src={props.image} alt={props.name} />
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default Card;
