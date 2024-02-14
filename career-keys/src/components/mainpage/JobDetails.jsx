import "../../index.css";
import {Tabs, Button} from "flowbite-react";

export default function JobDetails ({job, words}) {
    return (
        <Tabs aria-label="Tabs with underline" style="underline" className="bg-rose-200 text-rose-950 border-rose-400 px-5 m-3 rounded-lg ">
        <Tabs.Item active title="Description" className="bg-rose-200" > 
          <h2>{job.job_title}</h2>
          <h3>{job.employer_name}</h3>
          <a href={job.job_apply_link} target="_blank">
          <Button pill className="bg-rose-700 m-5">Job Link</Button></a>
          <p>{job.job_description}</p>
        </Tabs.Item>
        <Tabs.Item title="Keywords" className="p-3" >
          <h3>{words}</h3>
        </Tabs.Item>

      </Tabs>
        
    )}
