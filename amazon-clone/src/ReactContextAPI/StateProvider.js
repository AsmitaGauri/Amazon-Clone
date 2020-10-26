

import React,{useContext,createContext,useReducer} from 'react'
//setting up data layer
export const StateContext=createContext();
// build a provider
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)
// this is how we use it inside a component
export const useStateValue=()=> useContext(StateContext);