import React,{useState,useEffect} from "react";
import List from "./List"
import { Alert}  from "./Alert"


const App=()=>{

//getlocalstorage
const getmylist=()=>{
  let list =localStorage.getItem('mylist');
    if (list) {
   return  JSON.parse(localStorage.getItem('mylist'))
  } else {
    return []
  }
    
  }



const [name,setname]=useState('');
const [list,setlist]=useState(getmylist());
const [edit,setedit]=useState(false);
const [editid,seteditid]=useState(null);
const [alert,setalert]=useState({show:false,msg:"hello",type:"success"});


//localstorage
useEffect(()=>{ localStorage.setItem('mylist',JSON.stringify(list))},[list])


const handleSubmit = (e) => {
  e.preventDefault()
console.log('hello');
if (!name) {
  
  showalert(true,'please enter a name','danger')
} 
 else if (name && edit) {
   setlist(list.map((items)=>{
    if (items.id==editid) {
      return {items,title:name};
     
    }
    return items
   })
   
   )
    setedit(false)
    seteditid(null)
    showalert(true,'item is changed','success')
    setname('');
 }

else {
  
  const newitem ={id:new Date().getTime().toString(),title:name}
  setlist([...list,newitem]);
  setname("")
  showalert(true,'item added','success')
  }
   }
   const showalert=(show=false,msg='',type='')=>{ 
setalert({show,msg,type})

   }
   const clearlist=()=>{
    showalert(true,'list deleted','danger')
    
    setlist([]) 
   }
   const removeit=(id)=>{
    showalert(true,'item deleted','danger')
    
    setlist(list.filter((item)=>{ return item.id!==id}))
}

const editit=(id)=>{
  
  let newitem = list.find((item)=>{ return item.id==id})
setname(newitem.title)
setedit(true)
seteditid(id)
}





return (
  <section className="section-center">
    <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert  {... alert} settime={showalert} list={list}/>}

        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {edit ? 'edit' : 'submit'}
          </button>
        </div>
      </form>   
     
      <div className='grocery-container'>
          <List  iteems={list} removee={removeit} editee={editit} />
          <button onClick={clearlist} className='clear-btn' >
            clear items
          </button>
        </div>
    
  </section>
)
}
export default App;