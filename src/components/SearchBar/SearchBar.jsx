import React, { useState } from 'react';
import style from './SearcBar.module.css'

function SearchBar({onSearch}) {

   const [character, setCharacter] = useState('');

   const handleInputChange = (event) => {
      setCharacter(event.target.value)
   } 

   return (
      <div className={style.container}>
         <button 
            className={style.btn} 
            onClick={() => onSearch(Math.floor(Math.random() * 826) + 1)}
         >RANDOM</button>
         <input 
            placeholder="Personaje..." 
            class={style.input} 
            value={character} 
            type='search'
            onChange={handleInputChange}/>
         <button 
            onClick={() => onSearch(character)} 
            className={style.btn}>AGREGAR</button>
      </div>
   );
}

export default SearchBar;