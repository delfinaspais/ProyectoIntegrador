import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { removeFav, filterCards, orderCards } from "../../redux/actions/actions";
import styles from "./Favorites.module.css";


const Favorites = () => {

    const favorites = useSelector((state) => state.myFavorites) 

    console.log("Favorites:", favorites)
    
    const [aux, setAux] = useState(false);
    
    const dispatch = useDispatch() 

    const onClose = (id) => {
        dispatch(removeFav(id))
    } 

   
    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(!aux);
       }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
        }


    return (
        <div className={styles.favConteiner}>
            <div>
                
                <select name="" id="" onChange={handleFilter}>
                    <option value="" selected disabled>Filter by</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="Unknow">Unknow</option>
                </select>
            
            </div>

            <div>
                
                <select name="" id="" onChange={handleOrder}>
                    <option value="" selected disabled>Sort by</option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>

<<<<<<< HEAD
                {favorites.map(({id, name, status, species, gender, image, origin, onClose}) => {
=======
                {favorites.map(({id, name, species, gender, image, origin, status, onClose}) => {
>>>>>>> f37931a03f0149429fa24439018b767ee70dc1be
                    return (
                        <Card
                        key={id}
                        id={id}
                        name={name}
                        status={status}
                        species={species}
                        gender={gender}
                        image={image}
                        origin={origin}
<<<<<<< HEAD
                        status={status}
=======
>>>>>>> f37931a03f0149429fa24439018b767ee70dc1be
                        onClose={onClose}
                        />
                     )
                })}

            </div>

         </div> 
    )
}

export default Favorites;