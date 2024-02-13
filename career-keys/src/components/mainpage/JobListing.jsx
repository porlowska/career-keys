import { useState } from "react"



export default function JobListing({jobSearch}) {
    const [currentPage, setcurrentPage]=useState(1)
    const itemsPerPage =10;
    const pageNumber = Math.ceil(jobSearch.length/itemsPerPage)

    const jobsToDisplsy = jobSearch.slice(currentPage*itemsPerPage, (currentPage + 1)*itemsPerPage)


return ( 
    <>
    <div className='container mb-2 '>
    <ul className="max-w-lg divide-y divide-rose-950 p-5 ml-10">
        {jobsToDisplsy.map((job, index) =>{
        return(
            <li key={index} className="pb-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                    <img className="w-9 h-9 m-2 rounded-full" src={job.employer_logo} alt={job.employer_name}/>
                </div>
                <div className="flex-1 min-w-0">
                <p className="text-lg font-bold text-rose-950 truncate ">
                {job.job_title}
                </p>
                <p className="text-sm text-gray-500 truncate ">
                {job.employer_name}
                </p>
            </div>
            <div className="inline-flex items-center text-base font-medium text-rose-300 ">
             {job.job_city} {job.job_country}
            </div>
            </div>
        </li>
        )
        })}
   </ul>
   <div className="flex justify-between">
          <button onClick={prevPage} disabled={currentPage === 0}>
            Previous
          </button>
          <button onClick={nextPage} disabled={currentPage === pageCount - 1}>
            Next
          </button>
        </div>
   </div>
   </>
)
}