import React from 'react';
import { useState } from 'react';
import SearchBar from "./SearchBar";
import Jumbotron from "./Jumbotron";
import JListing from './JobListing';

export default function Homepage() {
  return (
    <>
    <Jumbotron/>
    <SearchBar/>
    <JListing/>
    </>
  )
}