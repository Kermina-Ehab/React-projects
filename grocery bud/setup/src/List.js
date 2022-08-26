import React,{useState,useEffect} from "react";
import {FaEdit,FaTrash}from "react-icons/fa"
const List=({iteems,removee,editee})=>{
return(
  <div className="grocery-list">
{iteems.map((item)=>{
  
  const {id,title}=item;
  return(
  <section key={id} className="grocery-item">
    <p className="title">{title}</p>
  <div className="btn-container">
    <button type="button" className="edit-btn" onClick={()=>{editee(id)}}>
      <FaEdit/>
    </button>
    <button type="button" className="delete-btn" onClick={()=>{removee(id)}}>
      <FaTrash/>
    </button>

  </div>
  
  
  </section>)
})}
  </div>
)

}
export default List