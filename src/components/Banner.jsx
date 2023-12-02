import React from 'react'

const Banner = () => {
  return (<>
<section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt="Party"
          src="../../public/3895239.jpg"
        />
      </div>

      <div class="lg:py-24">
        <h2 class="text-3xl font-bold sm:text-4xl">  99 problems but pitch ain't one</h2>

        <p class="mt-4 text-gray-600">
        Sportify is a sportsground and outdoor playground booking portal that provides easy booking facility for schools, clubs and other sports organizations across India. Enabling them to easily book a turf playground online - anytime, anywhere.
        </p>

        <a
          href="#"
          class="mt-8 inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none "
        >
         Book Your ground now
        </a>
      </div>
    </div>
  </div>
</section>

</>
  )
}

export default Banner
