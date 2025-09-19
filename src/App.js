import React, { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'

function App () {

  const [characters, setCharacters] = useState([]);

  const onSearch = async (searchTerm) => {
    // Para números directos (como el random), no validamos si está vacío
    if ((typeof searchTerm === 'string' && (!searchTerm || searchTerm.trim() === '')) || 
        (typeof searchTerm === 'number' && !searchTerm)) {
      window.alert('Por favor ingresa un ID o nombre válido');
      return;
    }

    try {
      let url;
      let data;
      
      // Verificar si es un número (búsqueda por ID) o texto (búsqueda por nombre)
      if (!isNaN(searchTerm) && !isNaN(parseFloat(searchTerm))) {
        url = `https://rickandmortyapi.com/api/character/${searchTerm}`;
        const response = await fetch(url);
        data = await response.json();
        
        if (data.error || !data.name) {
          window.alert('No hay personajes con ese ID');
          return;
        }
      } else {
        // Búsqueda por nombre
        url = `https://rickandmortyapi.com/api/character/?name=${searchTerm}`;
        const response = await fetch(url);
        data = await response.json();
        
        if (data.error || !data.results || data.results.length === 0) {
          window.alert('No hay personajes con ese nombre');
          return;
        }
        
        // Tomar el primer resultado de la búsqueda por nombre
        data = data.results[0];
      }

      // Verificar si el personaje ya está en la lista
      const isAlreadyAdded = characters.some((item) => item.id === data.id);
      
      if (isAlreadyAdded) {
        window.alert('Este personaje ya está en pantalla');
      } else {
        setCharacters((prevChars) => [...prevChars, data]);
      }
    } catch (error) {
      console.error('Error al buscar personaje:', error);
      window.alert('Error al buscar el personaje. Intenta nuevamente.');
    }
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
