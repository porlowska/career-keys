import React from "react";

export default function Nav() {
    return <>
    <nav className="border-rose-50 bg-rose-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="././images/logo.png" className="h-12" alt="Career Keys logo" />
        </a>
        
        <div className=" block w-auto " id="navbar-solid-bg">
          <ul className="flex flex-col font-medium m-3 rounded-lg  space-x-8 rtl:space-x-reverse mr-10 border-2 border-rose-400 bg-transparent  p-1">
            <li>
              <a href="#" className=" py-2 px-3 p-0 text-rose-950 rounded " aria-current="page">Saved</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
}
