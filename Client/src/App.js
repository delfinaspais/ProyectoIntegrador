import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav.jsx"
import {useEffect, useState} from "react";
import {Route, Routes, useNavigate, useLocation} from "react-router-dom";
import Detail from './components/Detail/Detail.jsx';
import About from './components/About/About.jsx';
import Form from "./components/Form/Form.jsx"
import Favorites from './components/Favorites/Favorites.jsx';
import styles from './App.module.css';
import axios from "axios";


const URL = 'http://localhost:3001/rickandmorty/login';

function App() {
   
   const [characters, setCharacters] = useState([]);  // PROP de characters en CARDS
   
   const location = useLocation();                    
   const [access, setAccess] = useState(true)
   const navigate = useNavigate(); 


   const login = async (userData) => {

      try {
      const { email, password } = userData;
      const { data } = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
      
      setAccess(access);
      access && navigate('/home');
      }
      
      catch (error) {
         console.log("access", access)
         console.log("no entro a login", error.message);
   }

}
   
   useEffect(() => {
      !access && navigate("/")
   }, [access])

        const onSearch = async (id) => {
                try { 
                  const {data} = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)

                  console.log(data)

         if (data.name) {
                setCharacters((oldChars) => [...oldChars, data])
               } 
            } catch (error) { 

            alert("No hay personajes con este id")

              }
            }
                 
                         
                                                     
   const onClose = (id) => {    
      
      setCharacters(characters.filter((character) => character.id !== id));
      
   }
   
   return (
      <div className={styles.App}>
         <div> 
        {location.pathname !== "/" && <Nav onSearch={onSearch}/>}
      <Routes>
         <Route path = "/" element = {<Form login={login}/>} />
         <Route path = "/home" element = {<Cards characters={characters} onClose={onClose} />} /> 
         <Route path = "/about" element = {<About />} />
         <Route path = "/detail/:id" element = {<Detail />} />
         <Route path = "/favorites" element = {<Favorites />} />
      </Routes>         
         </div>
      </div>
   );
};



export default App;