import { useState } from 'react';
import JobDetails from './JobDetails';

export default function JobListing({jobSearch}) {

    const [jDesc, setjDesc]=useState([])

return ( 
    <>
    <div className='container mb-2'>
    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {jobSearch.map((job, index) =>{
        return(
            <a href="#description" onClick={(e) => {
                setjDesc(job);
            }}>
            <li className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0">
                    <img className="w-8 h-8 rounded-full" src={job.employer_logo}/>
                </div>
                <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-black">
                {job.job_title}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {job.employer_name}
                </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-black">
             {job.job_city} {job.job_country}
            </div>
            </div>
        </li>
        </a>
        )
        })}
   </ul>
   </div>
   <JobDetails job={jDesc}/>
   </>
)
}