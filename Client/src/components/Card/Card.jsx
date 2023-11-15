import styles from "../Card/Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/actions";
import {connect} from "react-redux";
import { useState, useEffect } from "react";


function Card ({id, name, species, gender, status, origin, image, onClose, removeFav, addFav, myFavorites}) { 

   const [isFav, setIsFav] = useState(false) 

   const handleFavorite = (event) => {
      event.preventDefault();
      if (isFav) {
         setIsFav(false);
         removeFav(id)
      } else {
         setIsFav(true);
         addFav({id, name, species, gender, status, origin, image, onClose, addFav, myFavorites})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => { 
         if (fav.id === id) { // {id}
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   //[myFavorites, id]);
   

   return ( 
      <div className = {styles.container}>
         <div className={styles.buttonContainer}>
         <button onClick={() => onClose(id)}>X</button> 

         { isFav ? 
         ( <button onClick={handleFavorite}>❤️</button> )
         : (<button onClick={handleFavorite}>🤍</button> ) }


         </div>
         <div className={styles.dataContainer}>
         <Link to={`/detail/${id}`}><h2> {name} </h2></Link>
         <img className={styles.image} src={image} alt='imagen'  style={{ borderRadius: '70%', width: "110px", padding:"1em"}} /> 
            <h2> Name: {name} </h2>
				<h2> Specie: {species} </h2>
				<h2> Gender: {gender} </h2>
				<h2> Status: {status} </h2>
				<h2> Origin: {origin} </h2>
				</div>
      </div>
   );
};

export function mapDispatchToProps(dispatch) { 
return {
   addFav: (character) => dispatch(addFav(character)),
   removeFav: (id) => dispatch(removeFav(id))
}}


export function mapStateToProps(state) { 
return {
   myFavorites: state.myFavorites
}}

export default connect(mapStateToProps, mapDispatchToProps)(Card) 
                                           

