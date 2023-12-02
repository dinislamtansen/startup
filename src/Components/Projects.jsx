import { useContext } from "react"

import  { MyContext } from "../Context/DataContext"
import ProjectWork from "./ProjectWork"


const Projects = () => {
const {data}= useContext(MyContext);
console.log(data)


  return (
    <>
<section className=" m-10 bg-gray-950 rounded-md">
  
      
     <div className=" flex justify-center flex-wrap">
     {
        data.map((item)=>{return <ProjectWork key={item.id} tansen={item}/>})
      }
     </div>

</section>
<div className=" text-center text-white">
© 2023 Developed By Din Islam Tansen
</div>
    </>
  )
}

export default Projects