import React from "react";

export default function Nav() {
    return <>
    <nav className="border-rose-50 bg-white-50">
      <div className="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-4">
        <a onClick={()=>window.location.reload()} className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/images/logo.png" className="h-12" alt="Career Keys logo" />
        </a>
        </div>
    </nav>
    </>
}
