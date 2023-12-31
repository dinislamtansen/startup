
import BodyLeft from './Components/BodyLeft'
import BodyRight from './Components/BodyRight'
import Navbar from './Components/Navbar'



const Home = () => {
  return (
    <>
    <div className=' grid grid-cols-2'>
        <div>
            <BodyLeft/>
        </div>
        <div >
           <BodyRight/>
        </div>
        
    </div>
    <div className=' mt-14 flex justify-center first-letter:'>
      <a href="/src/assets/Tansen resume.pdf" download ><button type="submit" className=" bg-transparent text-white border border-white px-2 py-2 rounded-md hover:bg-green-400" >Download Resume</button></a>
    </div>
    </>
  )
}

export default Home