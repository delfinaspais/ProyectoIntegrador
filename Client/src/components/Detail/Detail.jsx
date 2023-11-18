// Detail.js
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styles from "./Detail.module.css"; // Importa tus estilos

const Detail = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese id");
        }
      })
      .catch((error) => {
        console.error("Error al obtener los detalles del personaje:", error);
      });
  }, [id]);

  return (
    <div className={styles.detailContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={character.image} alt="Character" />
      </div>
      <div className={styles.detailsContainer}>
        <h2>{character.name}</h2>
        <h3>Status: {character.status}</h3>
        <h3>Specie: {character.species}</h3>
        <h3>Gender: {character.gender}</h3>
        <h3>Origin: {character.origin}</h3>
        <Link to = "/home"> <button className={styles.backButton}> Back </button> </Link>
      </div>
    </div>
  );
};

export default Detail;




