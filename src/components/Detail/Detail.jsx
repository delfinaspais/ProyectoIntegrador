import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {

    const {detailId} = useParams ();

    const [character, setCharacter] = useState({});

    useEffect (() => {          // Cuando el componente se monta
    
    const URL_BASE = "https://rickandmortyapi.com/api"
    axios(`${URL_BASE}/character/${detailId}`)
    .then((response) => setCharacter(response.data))

    }, []) 

    return (
        <div>

            {
                character.name ?

               ( <>
                <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
            <img src={character.imagen} alt="img" />
                </>)

                : (<h3> Loading... </h3>)

            }

            </div>
    )
}

export default Detail;

// pregunta ? positiva : negativa = ternario