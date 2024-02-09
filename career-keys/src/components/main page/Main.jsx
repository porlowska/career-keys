import React from 'react';
import SearchBar from "./SearchBar";
import Jumbotron from "./Jumbotron";
import JListing from './JobListing';

export default function Main() {
  return (
    <>
    <Jumbotron/>
    <SearchBar/>
    <JListing/>
    </>
  )
}