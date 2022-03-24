import searchActionTypes from "./search.types";
import { search } from "./search.actions";
const INITIAL_STATE = {
    term:null,
}
const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case searchActionTypes.SET_SEARCH:
            return {
                ...state,
                term:action.term,
            }
        case searchActionTypes.REMOVE_SEARCH:
            return {
                ...state,
            term:'',
            }
        
        default:
            return state;
    }
}

export default searchReducer