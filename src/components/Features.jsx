import React from 'react'
import { TbMapSearch } from "react-icons/tb";
import { IoMdFootball } from "react-icons/io";
import { TbCalendarCheck } from "react-icons/tb";



const Features = () => {
  return (
  <>
  <section class="bg-white dark:bg-gray-900 ">
    <div class="container px-6 py-12 mx-auto flex items-center">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
            <TbMapSearch size='40px' />


                <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Search</h1>

                <p class="mt-2 text-gray-500 dark:text-gray-400">Are you looking to play after work, organize your Sunday Five's football match? Explore the largest network of sports facilities whole over the India.</p>
            </div>

            <div>
            <TbCalendarCheck size='40px' />


                <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Book</h1>

                <p class="mt-2 text-gray-500 dark:text-gray-400">Once you’ve found the perfect ground, court or gym, Connect with the venue through the Book Now Button to make online booking & secure easier payment</p>
            </div>

            <div>
            <IoMdFootball size='40px' />
                <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Play</h1>

                <p class="mt-2 text-gray-500 dark:text-gray-400">You’re the hero, you’ve found a stunning turf or court, booked with ease and now its time to play. The scene is set for your epic match.</p>
            </div>
        </div>
    </div>
</section></>
  )
}

export default Features