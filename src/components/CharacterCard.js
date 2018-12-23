import React from "react";
// import Navbar from "./Navbar";

const styles = {
  container: {
    float: "left",
    width: "25%"
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
    clickCount: 0,
    highScore: 0
  };

  handleIncrement = () => {
    this.setState({
      clickCount: this.state.clickCount + 1,
      highScore: this.state.highScore + 1
    });
  };

  render() {
    const shuffledCharacters = shuffleArray(this.props.characters);

    return (
      <div>
        <nav className="navbar fixed-top" style={styles.navbar}>
          <ul class="nav navbar-nav navbar-left">
            <li>Simpsons Clicky!</li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              Score: {this.state.clickCount} | High Score: {this.state.highScore}              
            </li>
          </ul>
        </nav>

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

export default CharacterCard;
