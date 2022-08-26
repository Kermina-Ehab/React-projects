import React,{useContext,useState} from "react"
import sublinks from "./data"
const appcontext =React.createContext();

export const Approvider=({children})=>{
const[sidebar,setsidebar]=useState(true)
const[submenuopen,setsubmenu]=useState(false)
const [location,setlocation]=useState({});
const [page,setpage]=useState({page:"",links:[]});


const opensubmenu=(page,cordinates)=>{
const pagee=sublinks.find((link)=>{return link.page==page})
setpage(pagee) 
setlocation(cordinates)
  setsubmenu(true)
}

const closesubmenu=()=>{
 setsubmenu(false)
}
const opensidebar=()=>{
  setsidebar(true)
  }
  const closesidebar=()=>{
    setsidebar(false)
    }

return <appcontext.Provider value={{sidebar,submenuopen,
closesubmenu,opensidebar,closesidebar,opensubmenu,location,page}} >
{children}
</appcontext.Provider>

}




export const useGlopal=()=>{
return useContext(appcontext)
}
