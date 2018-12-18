import React from "react";
import characters from "./characters.json";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";
import Footer from "./components/Footer";

let clickCount = 0;
let totalScore = 0;

const App = () => (
  <Wrapper>
    <Navbar clickCount={clickCount} totalScore={totalScore} />
    <Header />
    <CharacterCard characters={characters} />
    <Footer />
  </Wrapper>
);

export default App;
