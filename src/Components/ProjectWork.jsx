

const ProjectWork = ({tansen}) => {
  return (
    <>
       
            
             <div className=" p-4" >
                <div className=" bg-transparent w-96 h-80 p-4 border border-red-300 border-opacity-10 rounded-md text-center">
                    <img src={tansen.image} alt="" style={{height:170 ,width:400}} className=" rounded-md"/>
                    <p className="text-slate-600 pt-3" >{tansen.name}</p>
                    <h5 className=" text-white pt-3">{tansen.title}</h5>
                    <div className=" pt-5">
                  <a href={tansen.demo} target="_blank" rel="noopener noreferrer">
                  <button className=" bg-slate-600 text-white mr-5 px-5  rounded-md hover:bg-red-400">Demo</button>
                  </a>
                    <a href={tansen.ripo} target="_blank" rel="noopener noreferrer">
                    <button className="  bg-slate-600 text-white px-5 rounded-md hover:bg-red-400">Repo</button>
                    </a>
                    </div>
                </div>
             </div> 
           
         
    </>
  )
}

export default ProjectWork