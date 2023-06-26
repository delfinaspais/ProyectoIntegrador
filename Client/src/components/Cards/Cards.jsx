import Card from '../Card/Card';
import { CardsContainer } from "./styledComponents";

const Cards = ({characters, onClose}) => {
console.log(characters);
   return (

      <CardsContainer>
         {characters.map(({ id, type, location, name, species, gender, image }) => { // Lo que reciba es una funcion que mapea cada char y devuelve el char
            return (

               <Card                   
               id={id}
               type={type}
               location={location}
               name={name}
               species={species}
               gender={gender}
               image={image} 
               onClose={onClose}
               />
               )
         })}
         
      </CardsContainer>
      
      )
     
   };
       

export default Cards;