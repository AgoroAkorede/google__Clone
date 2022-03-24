import React, { createContext, useState, useContext,useReducer } from 'react';
const url="https://google-search1.p.rapidapi.com/google-search?hl=en&q=Barcelona&gl=us"

const ResultContext = createContext();

export const ResultProvider = ({reducer,initialState, children }) => {
        return (
            <ResultContext.Provider value={useReducer(reducer,initialState)}>
                {children}
            </ResultContext.Provider>
        )
    };

export const useResultContext = () => useContext(ResultContext);
