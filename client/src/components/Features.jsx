import React from 'react'
import { TbMapSearch } from "react-icons/tb";
import { IoMdFootball } from "react-icons/io";
import { TbCalendarCheck } from "react-icons/tb";



const Features = () => {
  return (
  <>
  <section class="bg-white py-8 lg:py-16 mx-auto max-w-screen-xl px-4 mb-10 ">
    <div class="container px-8  mx-auto  flex items-center">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div class='flex flex-col items-center text-justify'>
            <TbMapSearch size='40px' color='#2563eb' />


                <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Search</h1>

                <p class="mt-2 px-4 text-gray-500 dark:text-gray-400">Are you looking to play after work, organize your Sunday Five's football match? Explore the largest network of sports facilities whole over the India.</p>
            </div>

            <div class='flex flex-col items-center text-justify'>
            <TbCalendarCheck size='40px'color='#2563eb' />


                <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Book</h1>

                <p class="mt-2 px-4 text-gray-500 dark:text-gray-400">Once you’ve found the perfect ground, court or gym, Connect with the venue through the Book Now Button to make online booking & secure easier payment</p>
            </div>

            <div class='flex flex-col items-center text-justify'>
            <IoMdFootball size='40px' color='#2563eb' />
                <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Play</h1>

                <p class="mt-2 px-4 text-gray-500 dark:text-gray-400">You’re the hero, you’ve found a stunning turf or court, booked with ease and now its time to play. The scene is set for your epic match.</p>
            </div>
        </div>
    </div>
</section></>
  )
}

export default Features