
import { useState } from 'react';
import JobDetails from './JobDetails';


export default function JobListing({jobSearch}) {
    const [currentPage, setcurrentPage]=useState(1)
    const itemsPerPage =10;
    const pageNumber = Math.ceil(jobSearch.length/itemsPerPage)

    const jobsToDisplsy = jobSearch.slice(currentPage*itemsPerPage, (currentPage + 1)*itemsPerPage)


    const [jDesc, setjDesc]=useState([])
    const [keywords, setKeywords] = useState([]);
    const getKeywords = async(text) => {
        const url = "https://api.openai.com/v1/chat/completions";
        const options = {
            method: 'POST',
            headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_LKey}`, 
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",           
            prompt:
              'Extract keywords from this text. Make the first letter of every word uppercase and separate with commas:\n\n' +
              text +
              '',
            temperature: 0.5,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.8,
            presence_penalty: 0.0,
          }),
        };
        try {
          const response = await fetch(
            url,
            options
          );
          const json = await response.json();
          console.log(json.choices[0].text.trim());
          setKeywords(json.choices[0].text.trim());
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
    }

return ( 
    <>

   {/* <div className='container mb-2 '>
    <ul className="max-w-lg divide-y divide-rose-950 p-5 ml-10">
        {jobsToDisplsy.map((job, index) =>{
        return(
            <li key={index} className="pb-4"> */}

    <div className='container inline-block mb-2 w-2/6 pl-10'>
    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {jobSearch.map((job, index) =>{
        return(
            <a href="#description" onClick={(e) => {
                setjDesc(job);
                getKeywords(job.job_description);
            }}>
            <li className="pb-3 sm:pb-4">
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
        </a>
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
   <JobDetails job={jDesc}/>

   </>
)
}