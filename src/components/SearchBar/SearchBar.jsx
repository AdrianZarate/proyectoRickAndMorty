import React, { useState } from 'react';
import style from './SearcBar.module.css'

function SearchBar({onSearch}) {

   const [character, setCharacter] = useState('');

   const handleInputChange = (event) => {
      setCharacter(event.target.value)
   } 

   return (
      <div>
         <button 
            onClick={() => onSearch(Math.floor(Math.random() * 826) + 1)}
            className={style.boton}   
            >random</button>
         <input 
            type='search' 
            className={style.input} 
            value={character} 
            onChange={handleInputChange}/>
         <button 
            onClick={() => onSearch(character)} 
            className={style.boton}>Agregar</button>
      </div>
   );
}

export default SearchBar;