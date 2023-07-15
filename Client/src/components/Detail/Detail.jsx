import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {

    const {id} = useParams ();

    const [character, setCharacter] = useState({});

    useEffect (() => {         
    
     axios(`http://localhost:3001/rickandmorty/character/${id}`)
    .then(( {data} ) => {
        if (data.name) {
            setCharacter(data)
        } else {
            window.alert("no hay personajes con ese id")
        }
    });
    return setCharacter({})
    }, [id]) 

    return (
        <div>

            {/* {
                character.id ?

               ( <> */}
               
                <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.origin}</p>
            <img src={character.image} alt="img" />
                {/* </> ) */}
{/* 
                // : (<h3> Loading... </h3>)

            } */}

            </div>
    )
//     )
}

export default Detail;



