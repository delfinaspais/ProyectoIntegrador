import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types.js"

export const addFav = (character) => { // Recibe un personaje por parametro
    return {
        type: ADD_FAV,
        payload: character             // Esto recibe el reducer, se lo llama igual que al param
    }
}

export const removeFav = (id) => { // Tiene que estar habilitada para recibir un id
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export const filterCards = (gender) => { // Tiene que estar habilitada para recibir un id
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (order) => { 
    return {
        type: ORDER,
        payload: order
    }
}









// Actions instrucciones que llegan del reducer para ejecutar cambios de estados, son obketos,
// propiedad mas imiortante es type

// action = {
//     type:
//     payload:
// }