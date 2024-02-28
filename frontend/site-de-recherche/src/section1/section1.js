import React from "react";
import SearchBar from "../components/SearchBar";
import Header from "../components/header";
import JobList from "../components/JobList";
import Footer from "../components/footer";

function Chercheur() {
    return (
        <div>
            <Header/>
            <SearchBar/>
            <JobList/>
            <Footer/>
        </div>
    )
}

export default Chercheur;