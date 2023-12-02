import { Routes,Route } from 'react-router-dom'
import './App.css'
import Testimonial from './Components/Testimonial'
import Resume from './Components/Resume'
import Projects from './Components/Projects'
import Home from './Home'
import Navbar from './Components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/testimonial' element={<Testimonial/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </>
  )
}

export default App
