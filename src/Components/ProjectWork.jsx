
const ProjectWork = ({tansen}) => {
  return (
    <>
       
            
             <div className=" p-4" >
                <div className=" bg-transparent w-96 h-80 p-4 border border-red-300 border-opacity-10 rounded-md ">
                    <img src={tansen.image} alt="" style={{height:150 ,width:400}} className=" rounded-md"/>
                    <p className="text-slate-600 pt-3" >React project</p>
                    <h5 className=" text-white pt-3">{tansen.title}</h5>
                    <div className=" pt-5">
                    <button className=" bg-slate-600 text-white mr-5 px-5  rounded-md hover:bg-red-400">Demo</button>
                    <button className="  bg-slate-600 text-white px-5 rounded-md hover:bg-red-400">Repo</button>
                    </div>
                </div>
             </div> 
           
         
    </>
  )
}

export default ProjectWork