import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Footer from "./components/Footer";
import characters from "./characters.json";

const clicked = [];
const score = 0;
const highScore = 0;

class App extends Component {
  state = {
    characters,
    clicked,
    score,
    highScore
  };

  shuffle = array => {
    let i = 0;
    let j = 0;
    let temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    this.setState({ characters: array });
  };

  onClick = name => {
    console.log(name);
    let localScore = this.state.score;
    let localClicked = this.state.clicked;
    let counter = 0;
    let localhighScore = this.state.highScore;
    this.state.clicked.forEach(function(clickId) {
      if (clickId === name) {
        counter++;
      }
    });
    if (counter > 0) {
      localScore = 0;
      localClicked = [];
      alert("Sorry, you already clicked on them! Try again!");
    } else {
      localScore += 1;
      localClicked.push(name);
      if (localScore > localhighScore) {
        localhighScore = localScore;
      }
      if (localScore === 16) {
        alert("Congratulations! You are a Simpsons wizard!");
        localScore = 0;
        localClicked = [];
      }
    }
    this.setState({ clicked: localClicked });
    this.setState({ score: localScore });
    this.setState({ highScore: localhighScore });
    this.shuffle(this.state.characters);
  };

  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} highScore={this.state.highScore} />
        <Header />
        {this.state.characters.map((character, index) => (
          <Card
            key={index}
            id={character.id}
            name={character.name}
            image={character.image}
            onClick={this.onClick}
          />
        ))}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
