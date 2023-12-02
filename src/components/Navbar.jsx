import React from 'react'

const Navbar = () => {
  return (
    <header class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="md:flex md:items-center md:gap-12">
          <a class="block text-black-600 flex items-center" href="/">
           
            <svg  width="65" height="40" viewBox="0 0 65 56" fill="" xmlns="http://www.w3.org/2000/svg" >
<g id="Frame 1">
<path id="Vector 1" d="M4.22461 38L20.2246 14H43.7246L31.7246 27L25.7246 28.5H30.2246H45.7246L1.72461 56L16.7246 36L4.22461 38Z" fill="#2563eb"/>
<path id="Vector 2" d="M0.224609 0L43.7246 14L21.7246 21L0.224609 0Z" fill="#2563eb"/>
<path id="Vector 3" d="M35.7246 26L46.7246 15L64.7246 22L35.7246 26Z" fill="#2563eb"/>
<path id="Ellipse 1" d="M27.6549 5.41157C27.9948 4.41751 28.5272 3.50013 29.2217 2.71181C29.9161 1.9235 30.7591 1.27969 31.7023 0.817134C32.6456 0.354582 33.6707 0.0823497 34.7192 0.0159801C35.7677 -0.0503896 36.819 0.0904035 37.813 0.430321C38.8071 0.770238 39.7245 1.30262 40.5128 1.99708C41.3011 2.69153 41.9449 3.53446 42.4075 4.47772C42.87 5.42099 43.1423 6.44613 43.2086 7.4946C43.275 8.54308 43.1342 9.59436 42.7943 10.5884L35.2246 8L27.6549 5.41157Z" fill="#2563eb"/>
</g>
</svg>
<svg width="100" height="30" viewBox="0 0 195 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Sportify">
<path d="M9.37826 47.2128C5.85826 47.2128 3.40749 46.2456 2.02597 44.3112C0.653831 42.3338 0.366768 39.5182 1.16478 35.8643L1.72808 33.2851H8.59208L7.91612 36.3801C7.27771 39.3032 8.21251 40.7648 10.7205 40.7648C11.9525 40.7648 12.9516 40.4209 13.7178 39.7331C14.5374 39.0023 15.1209 37.8417 15.4683 36.2512C15.8814 34.3597 15.8028 32.7048 15.2326 31.2862C14.6718 29.8246 13.4241 28.0837 11.4893 26.0633C9.06062 23.4841 7.47759 21.1628 6.74023 19.0995C6.01226 16.9931 5.93462 14.6288 6.50731 12.0066C7.28654 8.43875 8.81139 5.6876 11.0819 3.75319C13.3617 1.7758 16.2617 0.787109 19.7817 0.787109C23.2577 0.787109 25.6597 1.7758 26.9879 3.75319C28.3694 5.6876 28.6612 8.48173 27.8631 12.1356L27.4548 14.0055H20.5907L21.0977 11.6842C21.4357 10.1367 21.3718 9.01907 20.906 8.33128C20.4496 7.60051 19.6274 7.23512 18.4394 7.23512C16.0194 7.23512 14.4949 8.67517 13.8659 11.5553C13.5091 13.1888 13.6158 14.7148 14.186 16.1334C14.8002 17.5519 16.0747 19.2714 18.0094 21.2918C20.4821 23.871 22.0605 26.2138 22.7444 28.3201C23.4284 30.4265 23.4606 32.8982 22.8409 35.7353C22.0335 39.4322 20.4679 42.2693 18.1441 44.2467C15.8642 46.2241 12.9423 47.2128 9.37826 47.2128Z" fill="#2563eb"/>
<path d="M34.4955 1.43191H45.1875C48.7955 1.43191 51.2949 2.37762 52.6858 4.26904C54.0768 6.16045 54.3732 8.93309 53.5752 12.587L52.6035 17.0361C51.8055 20.69 50.298 23.4626 48.0809 25.354C45.8638 27.2454 42.9512 28.1911 39.3432 28.1911H35.9112L31.8977 46.568H24.6377L34.4955 1.43191ZM40.7515 21.7431C41.9395 21.7431 42.8899 21.4207 43.6027 20.7759C44.3596 20.1311 44.907 19.035 45.2449 17.4875L46.4138 12.1356C46.7518 10.5881 46.6832 9.49192 46.208 8.84712C45.7768 8.20232 44.9672 7.87992 43.7792 7.87992H40.3472L37.3195 21.7431H40.7515Z" fill="#2563eb"/>
<path d="M60.4499 47.2128C56.8859 47.2128 54.3738 46.2241 52.9137 44.2467C51.4535 42.2693 51.1178 39.4752 51.9064 35.8643L57.0888 12.1356C57.8774 8.52472 59.4336 5.73058 61.7575 3.75319C64.0814 1.7758 67.0253 0.787109 70.5893 0.787109C74.1533 0.787109 76.6654 1.7758 78.1255 3.75319C79.5856 5.73058 79.9214 8.52472 79.1328 12.1356L73.9504 35.8643C73.1618 39.4752 71.6055 42.2693 69.2817 44.2467C66.9578 46.2241 64.0139 47.2128 60.4499 47.2128ZM61.8581 40.7648C64.3661 40.7648 65.944 39.2817 66.5918 36.3156L71.9713 11.6842C72.6191 8.71816 71.689 7.23512 69.181 7.23512C66.673 7.23512 65.0951 8.71816 64.4473 11.6842L59.0678 36.3156C58.42 39.2817 59.3501 40.7648 61.8581 40.7648Z" fill="#2563eb"/>
<path d="M86.3802 1.43191H97.1382C100.878 1.43191 103.418 2.29164 104.759 4.01111C106.109 5.6876 106.399 8.28829 105.629 11.8132L105.023 14.5858C104 19.2714 101.768 22.2375 98.328 23.4841L98.2999 23.6131C99.9472 24.1289 100.949 25.1821 101.306 26.7726C101.706 28.3631 101.616 30.4909 101.034 33.1561L99.3015 41.0872C99.0199 42.3768 98.8338 43.4299 98.7435 44.2467C98.6625 45.0205 98.7135 45.7942 98.8965 46.568H91.5045C91.4001 45.8372 91.3743 45.1494 91.4271 44.5046C91.4799 43.8598 91.6894 42.6992 92.0556 41.0227L93.8581 32.7692C94.3088 30.7059 94.2713 29.2658 93.7457 28.4491C93.2641 27.6323 92.1872 27.2239 90.5152 27.2239H88.0072L83.7825 46.568H76.5225L86.3802 1.43191ZM92.0555 20.7759C93.5075 20.7759 94.6653 20.4106 95.5289 19.6798C96.4365 18.949 97.0781 17.7239 97.4536 16.0044L98.2141 12.5225C98.5708 10.889 98.521 9.70686 98.0646 8.97608C97.6522 8.24531 96.808 7.87992 95.532 7.87992H92.232L89.4155 20.7759H92.0555Z" fill="#2563eb"/>
<path d="M117.138 7.87992H109.548L110.956 1.43191H133.396L131.988 7.87992H124.398L115.949 46.568H108.689L117.138 7.87992Z" fill="#2563eb"/>
<path d="M136.911 1.43191H144.171L134.314 46.568H127.054L136.911 1.43191Z" fill="#2563eb"/>
<path d="M149.609 1.43191H168.815L167.407 7.87992H155.461L152.714 20.4535H162.086L160.678 26.9015H151.306L147.011 46.568H139.751L149.609 1.43191Z" fill="#2563eb"/>
<path d="M173.301 27.3529L170.184 1.43191H177.906L179.237 18.0033H179.369L187.938 1.43191H195L180.561 27.3529L176.365 46.568H169.105L173.301 27.3529Z" fill="#2563eb"/>
</g>
</svg>
      </a>
        </div>
  
        <div class="hidden md:block">
          <nav aria-label="Global">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> About </a>
              </li>
  
              <li>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Careers </a>
              </li>
  
              <li>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> History </a>
              </li>
  
              <li>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Services </a>
              </li>
  
              <li>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Projects </a>
              </li>
  
              <li>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Blog </a>
              </li>
            </ul>
          </nav>
        </div>
  
        <div class="flex items-center gap-4">
          <div class="sm:flex sm:gap-4">
            <a
              class="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow"
              href="/"
            >
              Login
            </a>
  
            <div class="hidden sm:flex">
              <a
                class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600"
                href="/"
              >
                Register
              </a>
            </div>
          </div>
  
          <div class="block md:hidden">
            <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Navbar