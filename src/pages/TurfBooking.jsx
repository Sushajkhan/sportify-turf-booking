import React from 'react'
import Navbar from '../components/Navbar'
import TurfsHero from '../components/TurfsHero'
import SingleTurfHero from '../components/SingleTurfHero'
import { IoIosFootball } from "react-icons/io";
import { MdSportsCricket } from "react-icons/md";
import { MdOutlineCheckroom } from "react-icons/md";
import { LuGlassWater } from "react-icons/lu";
import Footer from '../components/Footer';
import DatePick from '../components/DatePick';



const TurfBooking = () => {
  return (
    <>
    <Navbar/>
    <SingleTurfHero/>
    

   <div class="flex flex-col items-center"> <h3 class="text-3xl mt-8">Quilon Arena, Kollam</h3>  <p class="text-gray-700   mt-4">Best place to have a lot of fun, it includes a grass football court, refreshment bar and a dressing room overall a good place to have a lot of fun.</p></div>

   
<div class="flex justify-center gap-32 mt-24">
    <div class="w-fit p-6 bg-white border border-gray-200 rounded-lg shadow ">
    <IoIosFootball size='50px' color='#2563eb' />
    <p>
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Football</h5>
    </p>
   
</div>

<div class="w-fit p-6 bg-white border border-gray-200 rounded-lg shadow ">
    <MdSportsCricket  size='50px' color='#2563eb' />
    <p>
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Football</h5>
    </p>
   
</div>

<div class="w-fit p-6 bg-white border border-gray-200 rounded-lg shadow ">
    <MdOutlineCheckroom size='50px' color='#2563eb' />
    <p>
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Football</h5>
    </p>
   
</div>
<div class="w-fit p-6 bg-white border border-gray-200 rounded-lg shadow ">
    <LuGlassWater size='50px' color='#2563eb' />
    <p>
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Football</h5>
    </p>
   
</div>
</div>
<DatePick/>
<Footer/>




</>
  )
}

export default TurfBooking