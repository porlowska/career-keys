import React from "react";

export default function Nav() {
    return <>
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Career Keys</span>
        </a>
        
        <div className="w-full sm:block sm:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 sm:space-x-8 rtl:space-x-reverse  sm:mt-0 sm:border-0 sm:bg-transparent dark:bg-gray-800 sm:dark:bg-transparent ">
            <li>
              <a href="#" className="block py-2 px-3 sm:p-0 text-white rounded " aria-current="page">Saved</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
}
