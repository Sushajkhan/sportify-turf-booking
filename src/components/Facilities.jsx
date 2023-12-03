import React from 'react'

const Facilities = () => {
  return (
    <><section class="bg-white dark:bg-gray-900">
    <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img class="w-full dark:hidden rounded-[50px]" src="https://img.freepik.com/free-photo/young-boy-with-soccer-ball-doing-flying-kick_155003-1819.jpg?w=1060&t=st=1701589534~exp=1701590134~hmac=b4af43df1b67e622a5f6156977791330b761705180455295b04443295906c4b2" alt="dashboard image"/>
        <img class="w-full hidden dark:block " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"/>
        <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight  text-gray-900 dark:text-white">Revolutionize Your <p>Sports Experience</p></h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Sportify offers a seamless experience for sports enthusiasts to find and book the perfect facility for their activities. Elevate yor sports game and make the most out of your daily life with our convenient and reliable service.</p>
            <a href="#" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                Get started
                <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </div>
</section></>
  )
}

export default Facilities;
