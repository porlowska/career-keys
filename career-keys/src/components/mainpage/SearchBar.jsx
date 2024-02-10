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
        className="flex flex-col gap-2" id="searchForm">
            <div className="flex flex-col md:flex-row gap-1 md:gap-3 p-5 justify-center">

                <div className="grid grid-cols-3">
                <input
                className="rounded col-span-2"
                type="text"
                placeholder="job title, location"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                required
                />
                
                <select onChange={(e)=>setRadius(e.target.value)} name="radius" id="radius" className=" rounded ml-3 px-3 cols-span-1">
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
                className={`px-4 py-2 rounded-md hover:bg-rose-500 ${
                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-rose-400 text-rose-950"
                }`}
                >
                {loading ? "Searching..." : "Find jobs"}</button>
            </div>

            <div className="flex flex-wrap md:flex-row gap-3 md:gap-5 justify-center">
                <select onChange={(e)=>setDatePosted(e.target.value)} name="datePosted" id="datePosted">
                    <option value="">Date Posted</option>
                    <option value="all">All</option>
                    <option value="today">Today</option>
                    <option value="3days"> 3 days ago </option>
                    <option value="week"> Week ago </option>
                    <option value="month">Month Ago</option>
                </select>


                <select onChange={(e)=>setEmploymentType(e.target.value)} name="employment" id="employment">
                    <option value="">Employment Type</option>
                    <option value="FULLTIME"> Full Time </option>
                    <option value="CONTRACTOR">Contractor</option>
                    <option value="PARTTIME"> Part Time </option>
                    <option value="INTERN"> Intern </option>
                </select>

                <div onChange={(e)=>setTitle(e.target.checked)}
                className="flex items-center me-4">
                    <input id="default-checkbox" type="checkbox" value={remote} className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 "/>
                    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900">Remote Jobs Only</label>
                </div>
            </div>
        </form>
    </>
    )}