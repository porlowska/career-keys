import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import SearchBar from "./SearchBar";
import Jumbotron from "./Jumbotron";
import JobListing from './JobListing';
import Body from './Body';



export default function Homepage() {
  //create useStates so that JobSearch and Listing can be dynamically updated based on user search
  const [jobSearch, setJobSearch]=useState([])
  const [showJobListing, setShowJobListing]=useState(false)
  const [errorMsg ,setErrorMsg] = useState('')
  
  
  const handleSearch=async(title, radius, datePosted, employmentType, remote)=>{
    let url = `https://jsearch.p.rapidapi.com/search?query=${title}&page=10&num_pages=10`;
    //If statements below set the query terms for JSearch API call 
    if(radius!==""){
      url += `&radius=${radius}`
    }
    if(datePosted!==""){
      url += `&date_posted=${datePosted}`
    }
    if(employmentType!==""){
      url += `&employment_types=${employmentType}`
    }
    if(remote){
      url += `&remote_jobs_only=true`
    }
    const options = {
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_jKey_PO,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
    };
    //API Call, the useStates are updated here using a promissory event
    try {
      const response = await axios.get(url, options);

        //If search is not completed it will display error messsage 
        if (response.data.data.length === 0) {
          setJobSearch([]);
          setShowJobListing(false);
          setErrorMsg('Please rephrase your search!');
        } else {
          setJobSearch(response.data.data);
          setShowJobListing(true);
          setErrorMsg('');
        }
    } catch (error) {
      console.error(error);
    }
  }
  // React elements rendered here in the return statement
  return (
    <>
    <Jumbotron/>

    <SearchBar onSearch={handleSearch} errorMessage={errorMsg}/>
    {showJobListing ? <JobListing jobSearch={jobSearch}/> : <Body/>} {/* Conditional to show the JobListing only once response is received from API, otherwise the 'Body' component with features will continue to display*/}
    </>
  )
}