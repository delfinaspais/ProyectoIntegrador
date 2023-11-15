import Card from '../Card/Card';
import { CardsContainer } from "./styledComponents";

const Cards = ({characters, onClose}) => {
console.log("HOLAA", characters);
   return (

      <CardsContainer>
<<<<<<< HEAD
         {characters.map(({ id, type, location, name, status, origin, species, gender, image }) => { 
=======
         {characters.map(({ id, status, name, origin, species, gender, image }) => { 
            
>>>>>>> f37931a03f0149429fa24439018b767ee70dc1be
            return (

               <Card                   
               id={id}
               status={status}
               name={name}
               species={species}
               gender={gender}
               origin={origin}
               image={image} 
               status={status}
               onClose={onClose}
               />
               )
         })}
         
      </CardsContainer>
      
      )
      
   };
   
   export default Cards;
