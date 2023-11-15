import Card from '../Card/Card';
import { CardsContainer } from "./styledComponents";

const Cards = ({characters, onClose}) => {
console.log("HOLAA", characters);
   return (

      <CardsContainer>
         {characters.map(({ id, type, location, name, status, origin, species, gender, image }) => { 
            return (

               <Card                   
               id={id}
               type={type}
               location={location}
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
