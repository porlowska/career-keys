import React from 'react';
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import Jumbotron from "./components/Jumbotron";
import Footer from './components/Footer';
import JListing from './components/JobListing';
import "./index.css";

export default function App() {
  return (
    <>
    <Nav/>
    <Jumbotron/>
    <SearchBar/>

    <Footer/>
    </>
  )
}


