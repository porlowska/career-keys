import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import SearchBar from "./SearchBar";
import Jumbotron from "./Jumbotron";
import JobListing from './JobListing';
import Body from './Body';


export default function Homepage() {
  const [jobSearch, setJobSearch]=useState([])
  const [showJobListing, setShowJobListing]=useState(false)
  
  const handleSearch=async(title, radius, datePosted, employmentType, remote)=>{
    let url = `https://jsearch.p.rapidapi.com/search?query=${title}&page=10&num_pages=10`;
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
  
    try {
      const response = await axios.get(url, options);
      setJobSearch(response.data.data);
      setShowJobListing(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    <Jumbotron/>
    <SearchBar onSearch={handleSearch}/>
    {showJobListing ? <JobListing jobSearch={jobSearch}/> : <Body/>}
    </>
  )
}