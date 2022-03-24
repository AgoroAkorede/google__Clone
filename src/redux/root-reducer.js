import { combineReducers } from 'redux';
import searchReducer from '../redux/search/search.reducer'

const rootReducer = combineReducers({
    search: searchReducer  
})

export default rootReducer;