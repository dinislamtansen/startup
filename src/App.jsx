import { Routes,Route } from 'react-router-dom'
import './App.css'
import Resume from './Components/Resume'
import Projects from './Components/Projects'
import Home from './Home'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
