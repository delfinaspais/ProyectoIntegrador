import style from "../Card/Card.module.css";
import { Link } from "react-router-dom";

const Card = ({id, name, status, species, gender, origin, image, onClose}) => { // Transformo de una funcion a una constante
   return ( // props es un objeto con muchas propiedades, los ponemos directamente en el parametro de la funcion
      <div className = {style.container}>
         <button onClick={() => onClose(id)} className = {style.closeButton} fontColour = {"white"} fontSize = {"1em"} fontWeight = {"bold"}>X</button> 
         {/* <h2>Key: {id}</h2> */}
         <Link to={`/detail/&{id}`}><h2 style={{fontSize: "1.5em"}}>{name} </h2></Link>
         <img src={image} alt='imagen'  style={{ borderRadius: '70%', width: "110px", padding:"1em"}} /> 
         <h2 style = {{fontSize: "1.2em"}}><strong>Status: </strong>{status}</h2>
         <h2 style = {{fontSize: "1.2em"}}><strong>Species: </strong>{species}</h2>
         <h2 style = {{fontSize: "1.2em"}}><strong>Gender: </strong>{gender}</h2>
         <h2 style = {{fontSize: "1.2em"}}><strong>Origin: </strong>{origin}</h2> 
      </div>
   );
};

export default Card;
