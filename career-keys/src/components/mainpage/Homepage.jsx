import React from 'react';
//import { useState } from 'react';
import SearchBar from "./SearchBar";
import Jumbotron from "./Jumbotron";
import JListing from './JobListing';
//const fetch = require('node-fetch');

export default function Homepage() {
  
  /*
  const handleSearch=async (query)=>{
    const url = `https://jsearch.p.rapidapi.com/search?query=${}&page=10&num_pages=10`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_jKey,
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }*/

  return (
    <>
    <Jumbotron/>
    <SearchBar/>
    
    
    
    </>
  )
}