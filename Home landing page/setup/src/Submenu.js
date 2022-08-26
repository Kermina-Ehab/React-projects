import React, { useState, useRef, useEffect } from 'react'
import {useGlopal} from './context'
const Submenu = () => {
const {submenuopen,location,page:{page,links}}=useGlopal()
const [columns,setcolumns]=useState('col-2')
const item=useRef(null)
const {bottom,center}=location
useEffect(()=>{
item.current.style.left=`${center}px`
item.current.style.top=`${bottom}px`  
if (links.length == 3) {
    setcolumns('col-3')
}
if (links.length > 3) {
    setcolumns('col-4')
}

},[location,links])

return(<aside  className={`${submenuopen?'submenu show':'submenu'}`} ref={item}>
<h4>{page}</h4>
<div className={`submenu-center ${columns} `}>
    {links.map((link,index)=>{
      const {url,icon,label}=link  
    return <a key={index} href={url}>{icon}{label}</a>
    })}
</div>
</aside>)
}
export default Submenu
