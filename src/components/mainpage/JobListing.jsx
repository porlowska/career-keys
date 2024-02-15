import { useState } from 'react';
import JobDetails from './JobDetails';

export default function JobListing({jobSearch}) {
    {/*UseStates so that Desc and Keywords can be dynamically set based on received data */}
    const [jDesc, setjDesc]=useState([])
    const [keywords, setKeywords] = useState("");
    const [showDetails, setshowDetails] = useState(false)

    {/* Function to extract keywords using OpenAI API call */}
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
                }, /* This is the 'prompt' being given to the NLP AI (in this case GPT-3.5-turbo is the model used. We set a specific desire to include attributes and skills for jobseekers and instruct the bot to not include information diluting the purpose and nature of the keywords*/
                {
                  "role": "user",
                  "content": text, /*The variable we pass in, which updates when a user clicks on a certain job listing, taking the corresponding description*/
                }
              ],
            
            temperature: 0.5, /* Temperature and top_p are used together to control the 'creativity' of the response. They are set fairly conservatively here while allowing some liberty so the response skews close to original job description*/
            max_tokens: 30, /*The maximum number of words generated. Set at 30 to catch edge cases with long job descriptions or densely-written ones*/
            top_p: 0.9, 
            frequency_penalty: 0.8, /*Avoids repetition in the generated text. We allow some repition for similar phrases and words*/
            presence_penalty: 0.2, /*A flat penalty(as opposed to using the rate of occurence in generated text like frequency penalty) to prevent inclusion of unwanted words and phrases. */
          }),
        };
    
        try {
          const response = await fetch(
            import.meta.env.VITE_OpenURL,
            options
          );
          let keyData = await response.json()
          setKeywords(keyData.choices[0].message.content);
          setshowDetails(true)
        } catch (error) {
          console.error(error);
        }
      };
return ( 
    <>
    <div className='md:grid md:grid-cols-2 px-10'>
    <div className='mb-2 p-5 w-full m-2 md:col-span-1'>
    <ul className="max-h-[350px] md:max-h-[700px] overflow-y-auto divide-y divide-gray-200">
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
   {showDetails ? <JobDetails job={jDesc} words={keywords}/>: null} {/*Conditional formatting so that the details display after jDesc and keywords have been set using useState */}
   </div>
   
   </>
)
}

