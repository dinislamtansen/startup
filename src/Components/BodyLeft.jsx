

import Animate from "../Animation/Animate"


const BodyLeft = () => {
  return (
    <>
    <div className=' pt-20  pl-10'>
     <p className=' text-gray-300 text-2xl'>Welcome to my world</p><br />
      <h1 className=" text-5xl font-semibold text-white">Hi ,I am <span className=' text-rose-600'>Din Islam Tansen</span></h1><br />
      <h1></h1>
      <Animate/><br /><br />
      <p className=" text-gray-300">I am a professional web developer with 5 years of experience.I have experiences in HTML5, CSS, JAVASCRIPT, BOOTSTRAP, TAILWINDCSS, REACT, MONGODB, EXPRESS JS</p>
    </div>
    <div className="grid grid-cols-2 pl-10 pt-10">
      <div>
          <p className=" text-white">FINE ME IN</p><br />
          
      </div>
      <div>
        <p className=" text-white">BEST SKILL ON</p>
      </div>
    </div>
   </>
  )
}

export default BodyLeft