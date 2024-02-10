import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import SearchBar from "./SearchBar";
import Jumbotron from "./Jumbotron";
import JobListing from './JobListing';



export default function Homepage() {
  const [jobSearch, setJobSearch]=useState([])
  
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
    console.log(url)
    const options = {
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_jKey,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.get(url, options);
      console.log(response.data.data);
      setJobSearch(response.data.data);
      console.log(jobSearch);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    <Jumbotron/>
    <SearchBar onSearch={handleSearch}/>
    <JobListing jobSearch={jobSearch}/>
    
    
    
    </>
  )
}