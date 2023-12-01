import {  createContext, useState } from "react"

export const MyContext= createContext()
const DataContext = ({children}) => {

  const [data,setData]=useState(["tansen"])
  console.log(data)

const info={

}


  return (
    
    <MyContext.Provider value={info}>
      {children}
    </MyContext.Provider>
    
  )
}

export default DataContext