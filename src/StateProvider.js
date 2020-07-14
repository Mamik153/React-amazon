import React, {createContext, useContext, useReducer} from 'react'

//DATA LAYER
export const StateContext = createContext();

//Create provider to wrap the entire app inside
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider> 
 
);

//This is how we use it inside a component
export const useStateValue = () => useContext(StateContext);