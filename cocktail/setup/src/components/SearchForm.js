import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const{setsearchTerm}=useGlobalContext()
  const searchvalue= React.useRef('')
 
  const getcocktail=()=>{
setsearchTerm(searchvalue.current.value)

  }
React.useEffect(() => {
searchvalue.current.focus()  
}, [])
  
const handlesubmit=(e)=>{
  e.preventDefault()
}

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handlesubmit} >
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchvalue}
            onChange={getcocktail}
          />
        </div>
      </form>
    </section>

  )
}

export default SearchForm
