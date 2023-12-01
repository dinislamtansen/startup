
import BodyLeft from './Components/BodyLeft'
import BodyRight from './Components/BodyRight'
import Navbar from './Components/Navbar'



const Home = () => {
  return (
    <>
  <Navbar/>
    <div className=' grid grid-cols-2'>
        <div>
            <BodyLeft/>
        </div>
        <div >
           <BodyRight/>
        </div>
        
    </div>
    <div className=' mt-14 flex justify-center'>
      <button type="button download" className=" bg-slate-100">Download cv</button>
    </div>
    </>
  )
}

export default Home