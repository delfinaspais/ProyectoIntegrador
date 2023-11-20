import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, CLEAN_FILTERS, SET_ORIGINAL_FAVS } from "../actions/types";

const initialState = {
    myFavorites: [],
    allCharacters: [],
    originalFavs: [],
    filter: null,
    order: null,
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

            
            case CLEAN_FILTERS:
                return {
                  ...state,
                  myFavorites: state.allCharacters, // Restaura myFavorites al estado original
                //   filter: null,
                //   order: null,
                };
          
            //   case SET_ORIGINAL_FAVS:
            //     return {
            //       ...state,
            //       originalFavs: payload,
            //     };
            
        default: return { ...state } // Sucede si no se cumple nada de lo anterior
            
    }

}

export default rootReducer;