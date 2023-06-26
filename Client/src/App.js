import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav.jsx"
import {useState} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import Detail from './components/Detail/Detail.jsx';
import About from './components/About/About.jsx';
import Form from "./components/Form/Form.jsx"
import Favorites from './components/Favorites/Favorites.jsx';
import styles from './App.module.css';
// import characters from './data.js';

function App() {
   
   const [characters, setCharacters] = useState([]); // Este const sera la PROP del objeto characters en CARDS, en el array dentrotiene al personaje 1, personaje 2, etc
   //                                                   useState es un HOOK de react que me retorna UN ARRAY, que dentro tiene un ESTADO que tendra valor inicial (vi) y una funcion que sera la UNICA encargada de modificar el estado 
   
   const location = useLocation();                  // Trae un objeto con la info de la nav. Un forma de ver donde estamos parados                                         

   const onSearch = (id) => {
      
      // fetch(`http://rickandmortyapi.com/api/character/${character}`) 
      
      fetch(`http://localhost:3001/rickandmorty/character/${id}`) 
      .then((res) => res.json())
      .then((data) => {
      console.log(data);
   if (data.name) {
      setCharacters((oldChars) => [...oldChars, data])
           } else window.alert("no hay personajes con ese id")
        })

      }
      
                         
                                                     
   const onClose = (id) => {   // Filter NO MODIFICA el arr original, me retorna uno nuevo donde el personaje que tenia ese ID ya no esta 
      
      setCharacters(characters.filter((character) => character.id !== id));
      
   }
   
   return (
      <div className={styles.App}>
        {/* <Nav onSearch={onSearch}/> */}
        <div> 
        {location.pathname !== "/" && <Nav onSearch={onSearch}/>}
        <Routes>
         {/* <Route path = "/" element = {Nav} /> */}
         <Route path = "/home" element = {<Cards characters={characters} onClose={onClose} />} /> 
         <Route path = "/about" element = {<About />} />
         <Route path = "/detail/:id" element = {<Detail />} />
         <Route path = "/favorites" element = {<Favorites />} />
        </Routes>
         </div>
         <div>
         <Form/>
         </div>
         </div>
         );
};

export default App;

// style={{ padding: "25px"}}

// className = {style.nav}

// const onSearch = (id) => {   // Recibe un ID, hace el pedido a la API con ese id. Si recibio bien la rta, agrega el personaje recibido al estado character que es de App
//    const URL_BASE = "https://be-a-rym.up.railway.app/api"
//    const KEY = ""
//    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
//    .then(response=>response.json()) // Convierte la respuesta en un formato que se pueda trabajar
//    .then(data=>{
//       if(data.name & !characters.find((char) => char.id === data.id)){                // Pregunto si existe el personaje
//          setCharacters([...characters, data])            // Me quedo con lo que el array ya tenia ("...") y le AGREGO "characters..." 
//       // setCharacters((oldChars) => [...oldChard, data])   Pasamos una callback que recibe el valor viejo, y retorna el valor nuevo
//    } else {
//          alert("No hay personajes con ese ID")
//       }
//    })
// }