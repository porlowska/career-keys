import React from "react";

export default function Nav() {
    return <>
    <nav className="border-rose-50 bg-rose-50">
      <div className="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="././images/logo.png" className="h-12" alt="Career Keys logo" />
        </a>
        
        <div className=" block w-auto " id="navbar-solid-bg flex">
          <button className="flex font-medium m-3 rounded-lg  space-x-8 rtl:space-x-reverse mr-10 border-2 border-rose-400 bg-transparent  p-1 py-2 px-3 text-rose-950 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" /></svg>
                Favourites
            </button>
          
        </div>
      </div>
    </nav>
    </>
}
