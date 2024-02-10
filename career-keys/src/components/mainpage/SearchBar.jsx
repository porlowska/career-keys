import React, { useState } from "react";

export default function SearchBar({onSearch}) {
    const[title, setTitle]=useState("")
    const[radius, setRadius]=useState("")
    const[datePosted, setDatePosted]=useState("")
    const[employmentType, setEmploymentType]=useState("")
    const[remote, setRemote]=useState(false)
    const [loading, setLoading] = useState(false);


const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    await onSearch(title, radius, datePosted, employmentType, remote)
    setLoading(false);
}

    return (
    <>
        <form onSubmit={handleSubmit}
        className="flex flex-col gap-2 py-5" id="searchForm">
            <div className="flex flex-col md:flex-row gap-1 md:gap-0 justify-center">

                <div className="grid grid-cols-3 border-2 border-rose-200 rounded-lg md:border-r-0 md:rounded-r-none">
                <input
                className="border-0 col-span-2 placeholder-rose-950 text-rose-950 focus:ring-pink-400 focus:rounded-l-lg pl-3"
                type="text"
                placeholder="Job title & Location"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                required
                />
                
                <select onChange={(e)=>setRadius(e.target.value)} name="radius" id="radius" 
                className=" border-0 cols-span-1 text-rose-950 focus:ring-pink-400 px-2">
                    <option value=""> Distance </option>
                    <option value="1">Exact location</option>
                    <option value="2">2 km </option>
                    <option value="3">3 km </option>
                    <option value="5">5 km</option>
                    <option value="10">10 km </option>
                    <option value="15">15 km </option>
                    <option value="20">20 km</option>
                    <option value="50">50 km</option>
                    <option value="100">100 km </option>
                    <option value=""> Anywhere </option>
                </select>
                
                </div>

                <button 
                type="submit" 
                className={`px-4 py-2 rounded-lg border-2 border-rose-200 md:border-l-0 md:rounded-l-none hover:bg-rose-400 
                ${ loading ? "bg-gray-200 cursor-not-allowed" : "bg-rose-200 text-rose-950"}`}>
                {loading ? "Searching..." : "Find jobs"}</button>
            </div>

            <div className="flex flex-wrap md:flex-row gap-3 md:gap-5 justify-center">
                <select onChange={(e)=>setDatePosted(e.target.value)} name="datePosted" id="datePosted" 
                className="bg-rose-200 border border-rose-200 text-rose-950 text-sm rounded-lg focus:ring-rose-400 focus:border-rose-400 block py-2 px-4">
                    <option value="">Date Posted</option>
                    <option value="all">All</option>
                    <option value="today">Today</option>
                    <option value="3days"> 3 days ago </option>
                    <option value="week"> Week ago </option>
                    <option value="month">Month Ago</option>
                </select>


                <select onChange={(e)=>setEmploymentType(e.target.value)} name="employment" id="employment"
                className="bg-rose-200 border border-rose-200 text-rose-950 text-sm rounded-lg focus:ring-rose-400 focus:border-rose-400 block py-2 px-4">
                    <option value="">Employment Type</option>
                    <option value="FULLTIME"> Full Time </option>
                    <option value="CONTRACTOR">Contractor</option>
                    <option value="PARTTIME"> Part Time </option>
                    <option value="INTERN"> Intern </option>
                </select>

                <div onChange={(e)=>setRemote(e.target.checked)}
                className="flex items-center me-4  bg-rose-200 border border-rose-200 text-rose-950 text-sm rounded-lg focus:ring-rose-400 focus:border-rose-400 py-2 px-4">
                    <input id="remote" type="checkbox" value={remote} className="w-4 h-4 text-rose-950 bg-gray-100 border-gray-300 rounded-lg focus:ring-rose-400 "/>
                    <label htmlFor="remote" className="ms-2 text-sm font-medium text-rose-950">Remote Jobs Only</label>
                </div>
            </div>
        </form>
    </>
    )}