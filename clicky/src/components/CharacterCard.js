import React from "react";

// Need to import React Component
// Need to extend class CharacterCard to Component
// Need state
// Need componentDidMount() function
// Need event handlers
  // Click even that does these things:
    // 1. Increases clickCount by 1
    // 2. Shuffles all charactercards and repaints the DOM
    // 3. Increases totalScore count by 1
    // 4. Remembers which charactercard has been clicked
      // Will need to push the clicked image (or it's ID/key) to an array so that I can loop over any to see if the user clicked any of those previously
    // 5. If a card is clicked again, game resets and clickCount goes to 0
    // 6. totalScore stays the same, and only ever changes if the clickCount ever goes greater than it
// Need render() function to paint the DOM with the correct elements
    

const styles = {
  container: {
    float: "left",
    width: "25%"
  },
  card: {
    textAlign: "center",
    paddingTop: "20px"
  }
};

// const handleClick = (event) => {

// }

const CharacterCard = props => (
  <div>
    {props.characters.map(character => (
      <div className="card" style={styles.container}>
        <div className="img-container" style={styles.card} key={character.id}>
          <img alt="character" src={character.image} id="character"/>
          <p>{character.name}</p>
        </div>
      </div>
    ))}
  </div>
);

export default CharacterCard;
