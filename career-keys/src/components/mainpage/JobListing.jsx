import { useState } from 'react';
import JobDetails from './JobDetails';

export default function JobListing({jobSearch}) {
    const [jDesc, setjDesc]=useState([])
    const [keywords, setKeywords] = useState("");
    const [showDetails, setshowDetails] = useState(false)

    const extractKeywords = async (text) => {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_LKey}`,
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            "messages": [
                {
                  "role": "system",
                  "content": "Identify the keywords of this job description. Provide keywords that a job-seeker can add to their cover letter. Include only personal attributes and skills. Do not include employment type. Ignore location names."
                },
                {
                  "role": "user",
                  "content": text,
                }
              ],
            
            temperature: 0.5,
            max_tokens: 30,
            top_p: 0.9,
            frequency_penalty: 0.8,
            presence_penalty: 0.0,
          }),
        };
    
        try {
          const response = await fetch(
            import.meta.env.VITE_OpenURL,
            options
          );
          let keyData = await response.json()
          console.log(keyData);
          console.log(keyData.choices[0].message.content);
          setKeywords(keyData.choices[0].message.content);
          console.log(keywords)
          setshowDetails(true)
        } catch (error) {
          console.error(error);
        }
      };
return ( 
    <>
    <div className='md:grid md:grid-cols-2'>
    <div className='mb-2 p-5 w-full m-2 md:col-span-1'>
    <ul className="max-h-[350px] md:max-h-[700px] overflow-y-auto max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {jobSearch.map((job, index) =>{
        return(
            <a href="#description" onClick={(e) => {
                setjDesc(job);
                extractKeywords(job.job_description)
                
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
   {showDetails ? <JobDetails job={jDesc} words={keywords}/>: null}
   </div>
   
   </>
)
}

