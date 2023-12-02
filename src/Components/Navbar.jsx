import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
    <div className="grid grid-cols-2 px-10 py-5">
      <div>
        <p><span className=" text-6xl text-yellow-500 ">T</span ><span className="text-xl text-gray-300">ansen</span></p>
      </div>
      <div >
        <ul className=" flex justify-around text-gray-300 pt-7 text-l">
          <li><Link to={'./'}>Home</Link></li>
          <li><Link to={'./testimonial'}>Testimonial</Link></li>
          <Link to={'./projects'}><li>Projects</li></Link>
          <Link to={'./resume'}><li>Resume</li></Link>
          <li>Contact</li>
        </ul>
      </div>
    </div>
    <hr className=" mx-5 opacity-10" />
    
    </>
  )
}

export default Navbar