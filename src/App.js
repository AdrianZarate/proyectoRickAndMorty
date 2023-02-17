import React, { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import {Routes, Route} from 'react-router-dom'

function App () {

  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            // logica para que no se repitan las card          
            let confirmar = true;
            characters.forEach((item) => {
              if (item.id == character) { // creo que character es string
                confirmar = false;
              }
            })
            if (confirmar) {
              setCharacters((oldChars) => [...oldChars, data]);
            } else {
              window.alert('La carta ya esta en pantalla')
            }
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter(item => item.id !== id))
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch}/>

      <Cards
        characters={characters}
        onClose={onClose}
      />
    </div>
  )
}

export default App
