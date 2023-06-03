import { useState } from "react";
import style from "./SearchBar.module.css"

const SearchBar = ( {onSearch} ) => { // Viene de su padre App.

   const [id, setId] = useState("")

   const handleChange = (event) => {
      setId(event.target.value)                      // Es quien ejecuta (el input) y el .value es lo que esta escrito
   }

    return (
       <div className={style.bar}>
            <input type='search' className={style.searchInput} onChange={handleChange}/>
            <button 
          className = {style.searchButton} 
          onClick={() => onSearch(id)}>
            <strong>AGREGAR</strong>
            </button>
       </div>
    );
 };
 
 export default SearchBar;

 // funcion que ejecuta a onsearch

 // <div className={style.bar}>