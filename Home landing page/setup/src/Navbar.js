import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import {useGlopal}from './context'

const Navbar=()=>{
const{closesubmenu,opensidebar,opensubmenu}=useGlopal()
  
const submenuitems=(e)=>{
const text=e.target.textContent;
const loc=e.target.getBoundingClientRect() 
const center=((loc.left)+(loc.right))/2
const bottom=(loc.bottom)-2;
opensubmenu(text,{center,bottom})
}

const handlesubmit=(e)=>{
  if (!e.target.classList.contains('link-btn')) {
    closesubmenu()
  }
}


return<nav className='nav' onMouseOver={handlesubmit} >
  <div className='nav-center'>
    <div className='nav-header'>
      <img src={logo} className='nav-logo' alt='' />
      <button className='btn toggle-btn' onClick={opensidebar}>
        <FaBars />
      </button>
    </div>
    <ul className='nav-links'>
      <li>
        <button className='link-btn' onMouseEnter={submenuitems} >
          products
        </button>
      </li>
      <li>
        <button className='link-btn' onMouseEnter={submenuitems}>
          developers
        </button>
      </li>
      <li>
        <button className='link-btn' onMouseEnter={submenuitems} >
          company
        </button>
      </li>
    </ul>
    <button className='btn signin-btn'>Sign in</button>
  </div>
</nav>

}

export default Navbar