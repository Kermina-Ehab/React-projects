import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const[loading,setloading]=useState(false)
  const[searchTerm,setsearchTerm]=useState('a')
  const[cocktails,setcocktails]=useState([])
  
  const fetchdrinks=useCallback(async()=>{
    setloading(true)
try {
        const response=await fetch(`${url}${searchTerm}`)
       const data =await response.json()
       console.log(data);
    const{drinks}=data
       if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
    
        })
        setcocktails(newCocktails)
      }
      else{
      setcocktails([])
    
    }
    setloading(false)  
      } 
catch (error) {
  console.log(error);
setloading(false)
}
  } ,[searchTerm])
  useEffect(()=>{
fetchdrinks()
  },[searchTerm,fetchdrinks])

  return <AppContext.Provider 
  value={{loading,searchTerm,cocktails,setsearchTerm}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
