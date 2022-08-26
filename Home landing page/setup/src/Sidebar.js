import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {useGlopal} from './context'
import sublinks from './data'


const Sidebar=()=>{
const {sidebar,closesidebar}=useGlopal();
return(
<aside className={`${sidebar ? 'sidebar-wrapper show':'sidebar-wrapper'}`}>
  <div className='sidebar'>
    <button onClick={closesidebar} className='close-btn'>
<FaTimes/>
    </button>
    <div className='sidebar-links'>
{sublinks.map((sublink,index)=>{
  const {page,links}=sublink;
  return(
    <article key={index}>
      <h4>{page}</h4>
      <div className='sidebar-sublinks'>
    {links.map((link,index)=>{
      const{label,icon,url}=link
      return(
  <a key={index} href={url}>{label}{icon} </a>

      )
    })}
    </div>
    </article>
  )
})}


    </div>
  </div>
</aside>


)



}
export default Sidebar