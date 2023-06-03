import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav"
import {useState} from "react";
import style from './App.module.css';
import imagenDeFondo from './imagenes/imagenDeFondo/2352.jpg';
import {Route, Routes, useLocation} from "react-router-dom";
import Detail from './components/Detail/Detail.jsx';
import About from './components/About/About.jsx';
import Form from "./components/Form/Form.jsx"
// import characters from './data.js';



function App() {
   
   const [characters, setCharacters] = useState([]); // Este const sera la PROP del objeto characters en CARDS, en el array dentrotiene al personaje 1, personaje 2, etc
                                                     //  useState es un HOOK de react que me retorna UN ARRAY, que dentro tiene un ESTADO que tendra valor inicial (vi) y una funcion que sera la UNICA encargada de modificar el estado 
   
   const location = useLocation();                                                  

const onSearch = (input) => {
   if (!isNaN(input)) {
      fetch(`https://rickandmortyapi.com/api/character/${input}`)
      .then((res) => res.json())
      .then((data) => {

   if (data.name) {
      setCharacters((oldChars) => [...oldChars, data])
           }
        })
      }
      
   else {
         
      fetch(`https://rickandmortyapi.com/api/character/?name=${input}`)
      .then((res) => res.json())
      .then((data) => {
    
      if (data.results) {
   setCharacters((oldChars) => [...oldChars, ...data.results])
       } 
     })
   }
 }

                                                     
                                                     
   const onClose = (id) => {   // Filter NO MODIFICA el arr original, me retorna uno nuevo donde el personaje que tenia ese ID ya no esta 
      
      setCharacters(characters.filter((char) => char.id !== id));
      
   }
   
   return (
      <div className='App' style={{ backgroundImage: `url(${imagenDeFondo})`, backgroundSize: 'cover',
      backgroundPosition: 'center center', backgroundRepeat: 'no-repeat',
      height: '100vh'}}>
        <div> 
         <Nav onSearch={onSearch}/>
        <Routes>
         <Route path = "/" element = {Nav} />
         <Route path = "/home" element = {<Cards characters={characters} onClose={onClose} />} /> 
         <Route path = "/about" element = {<About />} />
         <Route path = "/detail/:detailId" element = {<Detail />} />
        </Routes>
         </div>
         <div>
         <Form />
         </div>
         </div>
         );
};

export default App;

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