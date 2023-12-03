
const Contact = () => {

  return (
    <>
        <div className=" bg-gray-950 m-20 rounded-xl border border-blue-50 ">

            <div className=" mt-10">
                <p className=" text-5xl text-center text-white">Contact</p>
            </div>

            <div className=" flex">
                <div className=" pl-10 mt-10">
                     <div className=" bg-gray-500 bg-opacity-10 w-96 h-20 mb-5 rounded-lg">
                           <div className=" text-white flex p-5">
                                <img src="/static/images/phon.png" alt="" />
                                <p className=" pl-3">Phone:<br/>
                                +8801953957138
                                </p>

                            </div>
                      </div> 
                      <div className=" bg-gray-500 bg-opacity-10 w-96 h-20 mb-5 rounded-lg">
                            <div className=" text-white flex p-5">
                                 <img src="/static/images/email.png" alt="" />
                                 <p className=" pl-3">Email:<br/>
                                 dinislamtansen11@gmail.com
                                 </p>
                            </div>
                      </div> 
                      <div className="  bg-gray-500 bg-opacity-10 w-96 h-20 mb-5 rounded-lg">
                            <div className=" text-white flex p-5">
                                <img src="/static/images/maps.png" alt="" />
                                <p className=" pl-3">Location:<br/>
                                Dumni,khilkhet,Dhaka-1229
                                </p>
                            </div>
                     </div> 
                </div>
                <div className=" bg-transparent ml-16 h-96 w-full m-10 border border-gray-400 border-opacity-10">

                    <div className=" p-10">
                        <p className=" text-white"> Please send your query here</p>

                        <div className=" pt-5">
                        <input type="text" placeholder="Name*" className=" bg-transparent py-1  " /><hr className=" p-5"/>
                        <input type="email" placeholder="Email*" className=" bg-transparent py-1 text-white "/><hr className=" p-5" />
                        <input type="text" placeholder="Messege*" className=" bg-transparent py-1 "/><hr className=" p-5"/>
                        <button type="submit" className=" text-white bg-transparent border border-solid px-3 py-1 rounded-md hover:bg-red-500">Submit</button>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div className=" text-center text-white p-5">
                       © 2023 Developed By Din Islam Tansen
            </div>
            
        </div>
               
         
     
        
    </>
  )
}

export default Contact