import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = React.createContext()

const initialstate={
loading:false,
cart:cartItems,
total:0,
amount:0

}


const AppProvider = ({ children }) => {
  const[state,dispatch]=useReducer(reducer,initialstate)// usereducer takes two arguments the reducer function and the initial state value

const clearcart=()=>{

 dispatch({type:'CLEAR-CART'})

}
const removeitem=(id)=>{

dispatch({type:'REMOVE-ITEM',payload:id})
}
const increseitem=(id)=>{

  dispatch({type:'INCREASE',payload:id})
}

const decreaseitem=(id)=>{

  dispatch({type:'DECREASE',payload:id})
}
useEffect(()=>{
 dispatch({type:'GET-TOTALS'})
},[state.cart])

  return (
    <AppContext.Provider
      value={{
      ...state,clearcart,removeitem,increseitem,decreaseitem
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
