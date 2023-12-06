
import './App.css'
import Login from "./pages/Login"
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Features from './components/Features'
import Footer from './components/Footer'
import NotFound from './pages/404'
import Facilities from './components/Facilities'
import Partners from './components/Partners'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Home from './pages/Home'
import TurfsHero from './components/TurfsHero'
import TurfCard from './components/TurfCard'
import Turfs from './pages/Turfs'
import TurfBooking from './pages/TurfBooking'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
 <BrowserRouter>
 <Routes>
<Route path='/' element={<Home/>}/>
<Route path='404' element={<NotFound/>}/>
<Route path='/turfs' element={<Turfs/>}/>
<Route path='/turfs/:id' element={<TurfBooking/>}/>
<Route path='/login' element={<Login/>}/>



 </Routes>
 
 </BrowserRouter>


    </>
  )
}

export default App
