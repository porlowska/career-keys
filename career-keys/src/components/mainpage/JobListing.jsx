
import { useState } from 'react';
import JobDetails from './JobDetails';


export default function JobListing({jobSearch}) {
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
              text +'',
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
    <div className='mb-2  p-5 w-full md:w-6/12 m-2 '>
    <ul className=" max-h-[500px] overflow-y-auto max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {jobSearch.map((job, index) =>{
        return(
            <a href="#description" onClick={(e) => {
                setjDesc(job);
                getKeywords(job.job_description);
            }}>
            <li className="pb-3 sm:pb-4" key={index}>
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
            <div className="inline-flex items-center font-medium text-rose-300 text-xs">
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