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

// class Nav extends React.Component {
//     constructor(props) {
//         super(props)
//     }
    
//     render () {
//         return (
//         <div>

//             <SearchBar onSearch={this.props.onSearch}/>

//         </div>

//         )}
// }

                                       

//                                        // onSearch esta en las PROPS de Nav : SearchBar onSearch = {props.onSearch}
// export const Nav = ({onSearch}) => {   // Este componente esta entre App y SearchBar. Ahora Nav tendra que recibir de App Nav y Nav pasarle el on search a searchbar. Es ahroa el intermediario
//     return 
//     <div className="styled.container">
//         <h1>Navbar</h1>
//         <SearchBar on Search={(characterID) => window.alert(characterID)} />
//     </div>
// }
