import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./Nav.module.css"
import { Link } from "react-router-dom"
import logoImage from "./RICKIMOR.png";


const Nav = ({ onSearch }) => {

    return (
        <nav className={styles.container}>
        <img
          src={logoImage} // Reemplaza 'ruta_del_logo.png' con la ruta correcta de tu logo
          alt="Logo"
          className={styles.logo}
        />
        <Link to = "/home"> <button className={styles.navButton}> HOME </button> </Link>
        <Link to = "/about"> <button className={styles.navButton}> ABOUT </button> </Link>
        <Link to = "/favorites"> <button className={styles.navButton}> FAVORITES </button> </Link>
        <Link to = "/"> <button className={styles.navButton}> LOG OUT </button> </Link>
        <SearchBar onSearch={onSearch}/> 
        </nav>
    )
}

export default Nav;

