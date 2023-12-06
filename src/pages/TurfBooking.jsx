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
import Slots from '../components/Slots';



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
<div class="mt-10 flex  justify-center gap-6"><DatePick/>
<Slots/></div>



<div class="flex justify-center items-center h-screen bg-blue-lightest">
        <div id="app" class="bg-white w-128 h-60 rounded shadow-md flex card text-grey-darkest">
            <img class="w-1/2 h-full rounded-l-sm" src="https://images.unsplash.com/photo-1566344412556-ff8fbf8aa7b2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Room Image"/>
            <div class="w-full flex flex-col">
                <div class="p-4 pb-0 flex-1">
                    <h3 class="font-light mb-1 text-grey-darkest">Quilon Arena</h3>
                    <div class="text-xs flex items-center mb-4">
                        <i class="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
                        Kollam, Kerala
                    </div>
                    <span class="text-5xl text-grey-darkest">₹1200<span class="text-lg">/hr</span></span>
                    <div class="flex items-center mt-4">
                        <div class="pr-2 text-xs">
                            <i class="fas fa-wifi text-green"></i> Dressing room
                        </div>
                        <div class="px-2 text-xs">
                            <i class="text-grey-darker far fa-building"></i> Drinking water
                        </div>
                    </div>
                </div>
                <button class="px-6 place-self-end  py-2 w-[180px] font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none  ">
    Book Now 
</button>
                
            </div>
        </div>
    </div>


<Footer/>




</>
  )
}

export default TurfBooking