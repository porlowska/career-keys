import OpenAI from "openai";
import {useState} from 'react';

export default function JobDetails (job) {

    return (
        <div id="description" className="w-3/6 inline-block	float-right pr-10">
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
                <li className="me-2">
                    <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="true" className="inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500">Description</button>
                </li>
                <li className="me-2">
                    <button id="services-tab" data-tabs-target="#services" type="button" role="tab" aria-controls="services" aria-selected="false" className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">Keywords</button>
                </li>
            </ul>
            <div id="defaultTabContent">
                <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
                    <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{job.job.job_title}</h2>
                    <h3 className="mb-3 text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">{job.job.employer_name}</h3>
                    <p className="mb-3 text-gray-900 dark:text-white">
                        {job.job.job_description}
                    </p>
                </div>
                <div className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="services" role="tabpanel" aria-labelledby="services-tab">
                    <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">Key Details</h2>
                    <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
                        <li className="flex space-x-2 rtl:space-x-reverse items-center">
                            <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span className="leading-tight"></span>
                        </li>
                        <li className="flex space-x-2 rtl:space-x-reverse items-center">
                            <svg className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            <span className="leading-tight"></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}


  