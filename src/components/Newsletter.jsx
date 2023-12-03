import React from 'react'

const Newsletter = () => {
  return (
    <><section class="bg-white dark:bg-gray-900 py-8 lg:py-16 mx-auto max-w-screen-xl px-4 mb-10">
    <div class="container px-4 py-16 mx-auto mx-auto lg:flex lg:items-center lg:justify-between">
        <h2 class="  tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            Join us and get the update from anywhere
        </h2>

        <div class="mt-8 lg:mt-0">
            <div class="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
                <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-lg sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email Address"/>

                <button class="px-6 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    Get Started
                </button>
            </div>

            <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 ml-2 ">Attention! Offer expires in 30 days. </p>
        </div>
    </div>
</section></>
  )
}

export default Newsletter;