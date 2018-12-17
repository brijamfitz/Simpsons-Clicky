import React from "react";
import characters from "./characters.json";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";

const App = () => (
  <Wrapper>
    <Navbar />
    <Header />
    <CharacterCard characters={characters} />
  </Wrapper>
);

export default App;
