import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  
  const {id}=useParams()
  const [loading,setloading]=React.useState(false)
  const [cocktail,setcocktail]=React.useState(null)
  
  React.useEffect(()=>{
    setloading(true)
  async function getitem(){
try {
  const response=await fetch(`${url}${id}`)
const data=await response.json()
console.log(data)
if (data.drinks) {
  const {strDrink:name,strDrinkThumb:image,strAlcoholic:info,strCategory:cat
    ,strGlass:glass,strInstructions:instruct,
    strIngredient1:ingred1,
    strIngredient2:ingred2,
    strIngredient3:ingred3,
    strIngredient4:ingred4
}=data.drinks[0] 
const ingredients=[ingred1,ingred2,ingred3,ingred4]
const newCocktails={name,image,info,glass,cat,instruct,ingredients}
setcocktail(newCocktails)
}

} catch (error) {
  console.log(error)
  setloading(false)
} setloading(false)
  } 
  getitem()
  },[id])
  if (loading) {
    return <Loading/>
  }
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail
  console.log(name)
  return (<section className='section cocktail-section'>
  <Link to='/' className='btn btn-primary'>
    back home
  </Link>
  <h2 className='section-title'>{name}</h2>
  <div className='drink'>
    <img src={image} alt={name}></img>
    <div className='drink-info'>
      <p>
        <span className='drink-data'>name :</span> {name}
      </p>
      <p>
        <span className='drink-data'>category :</span> {category}
      </p>
      <p>
        <span className='drink-data'>info :</span> {info}
      </p>
      <p>
        <span className='drink-data'>glass :</span> {glass}
      </p>
      <p>
        <span className='drink-data'>instructons :</span> {instructions}
      </p>
      <p>
        <span className='drink-data'>ingredients :</span>
        {ingredients.map((item, index) => {
          return item ? <span key={index}> {item}</span> : null
        })}
      </p>
    </div>
  </div>
</section>)}
    
  
}

export default SingleCocktail
