import {  createContext, useEffect, useState } from "react"

export const MyContext= createContext()
const DataContext = ({children}) => {

  const [data,setData]=useState([]);
  


const info={
data,
setData,

}
useEffect(()=>{
    fetch(`./src/Data/Data.json`)
    .then(res=> res.json())
    .then(tansen=>setData(tansen))
},[])


  return (
    
    <MyContext.Provider value={info}>
      {children}
    </MyContext.Provider>
    
  )
}

export default DataContext