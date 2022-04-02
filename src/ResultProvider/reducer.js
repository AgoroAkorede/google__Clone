export const initialState = {
    term: null,
    location:null
};

export const actionTypes = {
    SET_SEARCH_TERM: 'SET_SEARCH_TERM',
    SET_LOCATION:'SET_LOCATION'
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term,
            };
        case actionTypes.SET_LOCATION:
            return {
                ...state,
                location: action.location
            }
            default:
                return state;
    }
};

export default reducer;
