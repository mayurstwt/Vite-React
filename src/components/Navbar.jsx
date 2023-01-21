import React from 'react'
import svg from '../assets/devil-svgrepo-com.svg'

const Navbar = () => {
    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={svg} className="w-10"/>
                    <span class="ml-3 text-xl">Tailblocks</span>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center ">
                    <a class="mr-5 cursor-pointer hover:text-orange-500 hover:underline underline-offset-8 transition duration-0 hover:duration-150">Home</a>
                    <a class="mr-5 cursor-pointer hover:text-orange-500 hover:underline underline-offset-8 transition duration-0 hover:duration-150">About</a>
                    <a class="mr-5 cursor-pointer hover:text-orange-500 hover:underline underline-offset-8 transition duration-0 hover:duration-150">Services</a>
                    <a class="mr-5 cursor-pointer hover:text-orange-500 hover:underline underline-offset-8 transition duration-0 hover:duration-150">Contact</a>
                </nav>
                {/* <button class="inline-flex items-center bg-orange-500 border-0 py-1 px-3 focus:outline-none hover:bg-orange-500 rounded text-white mt-4 md:mt-0">Log In
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button> */}
            </div>
        </header>
    )
}

export default Navbar