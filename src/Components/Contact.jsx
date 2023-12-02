
const Contact = () => {
  return (
    <>
        <div className=" bg-gray-950 m-20 rounded-md border border-blue-50 ">

            <div className=" mt-10">
                <p className=" text-5xl text-center text-white">Contact</p>
            </div>

            <div className=" flex">
                <div className=" pl-10 mt-10">
                     <div className=" bg-gray-500 bg-opacity-10 w-96 h-20 mb-5">
                           <div className=" text-white flex p-5">
                                <img src="/static/images/phon.png" alt="" />
                                <p className=" pl-3">Phone:<br/>
                                +8801953957138
                                </p>

                            </div>
                      </div> 
                      <div className=" bg-gray-500 bg-opacity-10 w-96 h-20 mb-5">
                            <div className=" text-white flex p-5">
                                 <img src="/static/images/email.png" alt="" />
                                 <p className=" pl-3">Email:<br/>
                                 dinislamtansen11@gmail.com
                                 </p>
                            </div>
                      </div> 
                      <div className="  bg-gray-500 bg-opacity-10 w-96 h-20 mb-5">
                            <div className=" text-white flex p-5">
                                <img src="/static/images/maps.png" alt="" />
                                <p className=" pl-3">Location:<br/>
                                Dumni,khilkhet,Dhaka-1229
                                </p>
                            </div>
                     </div> 
                </div>
                <div className=" bg-transparent ml-16 h-96 w-full m-10 border border-gray-400 border-opacity-10">
                    
                </div>
            </div>
            
        </div>
               
         

        
    </>
  )
}

export default Contact