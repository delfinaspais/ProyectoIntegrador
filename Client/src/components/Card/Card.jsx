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
<<<<<<< HEAD
         addFav({id, name, species, gender, status, origin, image, onClose, addFav, myFavorites})
=======
         addFav({id, name, species, gender, image, status, origin, onClose, addFav, myFavorites})
>>>>>>> f37931a03f0149429fa24439018b767ee70dc1be
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
         <Link className="no-underline" to={`/detail/${id}`}><h2> {name} </h2></Link>
         <img className={styles.image} src={image} alt='imagen'  style={{ borderRadius: '70%', width: "110px", padding:"1em"}} /> 
            <h2> Name: {name} </h2>
				<h2> Specie: {species} </h2>
				<h2> Gender: {gender} </h2>
<<<<<<< HEAD
				<h2> Status: {status} </h2>
				<h2> Origin: {origin} </h2>
=======
            <h2> Origin: {origin}</h2>
>>>>>>> f37931a03f0149429fa24439018b767ee70dc1be
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
                                           

