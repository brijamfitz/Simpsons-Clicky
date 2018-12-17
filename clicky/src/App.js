import React from "react";
import characters from "./characters.json";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";
import Footer from "./components/Footer"

const App = () => (
  <Wrapper>
    <Navbar />
    <Header />
    <CharacterCard characters={characters} />
    <Footer />
  </Wrapper>
);

export default App;
