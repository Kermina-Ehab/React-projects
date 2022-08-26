import React,{useState,useEffect} from "react";

export const Alert=({type,msg,settime,list})=>{
useEffect(()=>{
const timeout=setTimeout(settime,2000)
return ()=>clearTimeout(timeout)

},[list])

  return(
  <p className={`alert alert-${type} `}> {msg}</p>
)

}
//export  Alert