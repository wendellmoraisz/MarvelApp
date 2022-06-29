import React from 'react';
import CardsContainer from './components/cardsContainer';
import Footer from './components/footer';
import Header from './components/header';
import CharactersProvider from './providers/CharactersProvider';

function App() {
  return (
    <CharactersProvider>
    <Header/>
    <CardsContainer/>
    <Footer/>
    </CharactersProvider>
  );
}

export default App;
