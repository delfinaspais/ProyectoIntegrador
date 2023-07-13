import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "../actions/types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, {type, payload}) => {  
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload, 
                allCharacters: payload
            }
            
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload,
            }
  
        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacters.filter(char => char.gender === payload)
                
            }
        
        case ORDER:
            
            return {
                ...state,
                myFavorites: state.allCharacters.sort((a, b) => {
                    if (a.id < b.id) {
                        return payload === "A" ? -1 : 1;
                    }
                    if (a.id > b.id) {
                        return payload === "A" ? 1 : -1;
                    }
                    return 0;
                })
                
            }
            
        default: return { ...state } // Sucede si no se cumple nada de lo anterior
            
    }

}

export default rootReducer;