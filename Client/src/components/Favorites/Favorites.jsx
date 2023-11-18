import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { removeFav, filterCards, orderCards, cleanFilters } from "../../redux/actions/actions";
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

        const handleCleanFilter = () => {
            dispatch(cleanFilters());
          };


    return (
        <div>
        <div className={styles.favConteiner}>
                           
                <select className={styles.button} name="" id="" onChange={handleFilter}>
                    <option value="" selected disabled>Filter by</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="Unknow">Unknow</option>
                </select>
            

                <select className={styles.button} name="" id="" onChange={handleOrder}>
                    <option value="" selected disabled>Sort by</option>
                    <option value="A">Ascendent</option>
                    <option value="D">Descendent</option>
                </select>

                <button className={styles.buttonFilter} onClick={handleCleanFilter}>CLEAN FILTER</button>

                </div>

                <div className={styles.cardDiv}> 

                {favorites.map(({id, name, status, species, gender, image, origin, onClose}) => {
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
                        onClose={onClose}
                        />
                     )
                })}

            </div>
            </div>
    )
}

export default Favorites;