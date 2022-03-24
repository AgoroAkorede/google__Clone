import searchActionTypes from './search.types';

export const searchAction = (search) => ({
    type: searchActionTypes.SET_SEARCH,
    payload:search
});