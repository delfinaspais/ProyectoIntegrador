import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styles from "./Nav.module.css"
import { Link } from "react-router-dom"



const Nav = ({ onSearch }) => {

    return (
        <nav className={styles.container}>
        <SearchBar onSearch={onSearch}/> 
        <Link to = "/home"> <button className={styles.navButton}> HOME </button> </Link>
        <Link to = "/about"> <button className={styles.navButton}> ABOUT </button> </Link>
        <Link to = "/favorites"> <button className={styles.navButton}> FAVORITES </button> </Link>
        </nav>
    )
}

export default Nav;

