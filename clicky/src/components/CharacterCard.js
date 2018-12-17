import React from "react";

const styles = {
  container: {
    float: "left",
    width: "25%"
  },
  card: {
    textAlign: "center"
  }
};

const CharacterCard = props => (
  <div>
    {props.characters.map(character => (
      <div className="card" style={styles.container}>
        <div className="img-container" style={styles.card} key={character.id}>
          <img alt="character" src={character.image} />
          <p>{character.name}</p>
        </div>
      </div>
    ))}
  </div>
);

export default CharacterCard;
