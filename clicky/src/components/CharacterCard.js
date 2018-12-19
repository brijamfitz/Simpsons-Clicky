import React from "react";
import Navbar from "./Navbar";
// console.log(characters);

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

let clickCount = 0;
let totalScore = 0;

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

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class CharacterCard extends React.Component {
  state = {
    clickCount: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ clickCount: this.state.count + 1 });
  };

  render() {
    const shuffledCharacters = shuffleArray(this.props.characters);
    console.log(shuffledCharacters);
    return (
      <div>
        <Navbar clickCount={clickCount} totalScore={totalScore} />

        {shuffledCharacters.map(character => (
          <div className="card" style={styles.container}>
            <div
              className="img-container"
              onClick={this.handleIncrement}
              style={styles.card}
              key={character.id}
            >
              <img alt="character" src={character.image} />
              <p>{character.name}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
// CharacterCard.propTypes = {
//   characters: React.PropTypes.array
// };

export default CharacterCard;
