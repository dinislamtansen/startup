

const Resume = () => {
  return (
    <>
       <div className=" bg-gray-950 m-20 rounded-xl border border-blue-50 ">
         <div>
          <h1 className=" text-white flex justify-center pt-10 pb-10 text-4xl">Resume</h1>
         </div>  
          

                 <div className=" flex justify-around ">
                      
                      <div className=" p-5">
                          <div className=" flex  text-white text-3xl py-3">
                            <img src="/static/images/education icon.png" alt="" style={{width:35,height:35}} />
                            <p className=" pl-1">Education</p>
                          </div>
                          <div className=" bg-transparent border border-solid border-white w-80 h-24 text-white rounded-lg text-left border-opacity-10 pl-3 pt-3">
                                <p>2017-2021</p>
                                <p>Bsc in Textile Engineering</p>
                                <p className=" text-xs">Bgmea University Of Fashion And Technology</p>
                          </div>
                      </div>
                      

                      <div className=" p-5">
                              <div className=" flex text-white text-3xl py-3">
                                    <img src="/static/images/experience.png" alt="" style={{width:35,height:35}} />
                                    <p className=" pl-1">Experience</p>
                                </div>
                          <div className=" bg-transparent border border-solid border-white w-80 h-24 text-white rounded-lg text-left border-opacity-10 pl-3 pt-3">
                                <p>2018-2023</p>
                                <p>Full Stack Developer</p>
                                <p className=" text-xs">Shopelo Sourcing Ltd</p>
                          </div>
                      </div>
                      <div className=" p-5">
                            <div className=" flex text-white text-3xl py-3">
                                  <img src="/static/images/award logo.png" alt="" style={{width:35,height:35}} />
                                  <p className=" pl-1">Award</p>
                              </div>
                          <div className=" bg-transparent border border-solid border-white w-80 h-24 text-white rounded-lg text-left border-opacity-10 pl-3 pt-3">
                                <p>2017-2021</p>
                                <p>Bsc in Textile Engineering</p>
                                <p className=" text-xs">Bgmea University Of Fashion And Technology</p>
                          </div>
                      </div>
                 </div>

                 <div>
                      <h1 className=" text-white flex justify-center pt-10 pb-10 text-4xl">My Career</h1>
                 </div>
                      <div className=" px-10 py-5">
                           <div className=" bg-transparent border border-solid border-white w-full h-28 text-white rounded-lg text-left border-opacity-10 pl-3 pt-3 flex">
                              <div><img src="/static/images/shopelo.jpg" alt="" style={{width:80,height:80}} className=" rounded-lg"/></div>
                                <div className=" pl-10">
                                <p>Shopelo Sourcing Limited</p>
                                <p>React Intern</p>
                                <p className=" text-xs">2022-present</p>
                                </div>
                          </div>
                      </div>   
                      <div className=" px-10 py-5">
                      <div className=" bg-transparent border border-solid border-white w-full h-28 text-white rounded-lg text-left border-opacity-10 pl-3 pt-3 flex">
                              <div><img src="/static/images/shopelo.jpg" alt="" style={{width:80,height:80}} className=" rounded-lg"/></div>
                                <div className=" pl-10">
                                <p>Shopelo Sourcing Limited</p>
                                <p>React Intern</p>
                                <p className=" text-xs">2022-present</p>
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

export default Resume