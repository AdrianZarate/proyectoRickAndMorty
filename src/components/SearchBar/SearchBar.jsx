import React, { useState } from 'react';
import style from './SearcBar.module.css'

function SearchBar({onSearch}) {

   const [character, setCharacter] = useState('');

   const handleInputChange = (event) => {
      setCharacter(event.target.value)
   } 

   const handleSearch = () => {
      if (character.trim()) {
         onSearch(character.trim());
         setCharacter(''); // Limpiar el input después de buscar
      }
   }

   const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
         handleSearch();
      }
   }

   return (
      <div className={style.container}>
         <button 
            className={style.btn} 
            onClick={() => onSearch(Math.floor(Math.random() * 826) + 1)}
         >RANDOM</button>
         <input 
            placeholder="ID o nombre del personaje..." 
            className={style.input} 
            value={character} 
            type='search'
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
         />
         <button 
            onClick={handleSearch} 
            className={style.btn}
         >AGREGAR</button>
      </div>
   );
}

export default SearchBar;