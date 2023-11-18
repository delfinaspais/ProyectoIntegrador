import { useState } from "react";
import style from "./SearchBar.module.css"

const SearchBar = ( {onSearch} ) => {                // Viene de App.

   const [id, setId] = useState("")

   const handleChange = (event) => {
      setId(event.target.value)               
   }

    return (
       <div className={style.bar}>
            <input type='search' placeholder='Search character' className={style.searchInput} onChange={handleChange}/>
            <button className = {style.searchButton} onClick={() => onSearch(id)}> SEARCH </button>
       </div>
    );
 };
 
 export default SearchBar;

