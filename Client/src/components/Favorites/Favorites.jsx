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

                {favorites.map(({id, name, status, species, gender, image, origin, onClose}) => {
                    return (
                        <Card
                        key={id}
                        id={id}
                        name={name}
                        species={species}
                        gender={gender}
                        image={image}
                        origin={origin}
                        status={status}
                        onClose={onClose}
                        />
                     )
                })}

            </div>

         </div> 
    )
}

export default Favorites;