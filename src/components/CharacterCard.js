import React, { Component } from "react";
// import characters from "./characters.json";
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

const shuffleArray = array => {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

class CharacterCard extends Component {
  state = {
    score: 0,
    highScore: 0
  };

  handleIncrement = () => {
    this.setState({
      score: this.state.score + 1,
      highScore: this.state.highScore + 1
    });
  };

  render() {
    const shuffledCharacters = shuffleArray(this.props.characters);

    return (
      <div>
        <nav className="navbar fixed-top" style={styles.navbar}>
          <ul className="nav navbar-nav navbar-left">
            <li>Simpsons Clicky!</li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              Score: {this.state.score} | High Score: {this.state.highScore}
            </li>
          </ul>
        </nav>

        {shuffledCharacters.map(character => (
          <div className="card" style={styles.container} key={character.id}>
            <div
              className="img-container"
              onClick={this.scoreCheck}
              style={styles.card}
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
