import React from "react";
import Searchbar from "../components/Searchbar";
import Panel from "../components/panel";
import Footer from "../components/Footer";
import Header from "../Components/header";
import Checkuser from "../components/Checkuser";
import Navbar from "../components/Navbar";
const Search =()=>(
    <>
        <Header/>
        <Navbar/>
        <Checkuser/>
        <Searchbar/>
        <Panel/>
        <Footer/>
    </>
)
export default Search;
