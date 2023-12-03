import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Partners from '../components/Partners'
import Features from '../components/Features'
import Facilities from '../components/Facilities'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div> <Navbar/>
    <Banner/>
    <Partners/>
    <Features/>
    <Facilities/>
    <Testimonials/>
    <Newsletter/>
   <Footer/></div>
  )
}

export default Home