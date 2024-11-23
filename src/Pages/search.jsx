import React from "react";
import Searchbar from "../components/Searchbar";
import Panel from "../components/panel";
import Footer from "../components/Footer";
import Header from "../Components/header";
import Checkuser from "../components/checkuser";
const Search =()=>(
    <>
        <Header/>
        <Checkuser/>
        <Panel/>
        <Searchbar/>
        <Footer/>
    </>
)
export default Search;
