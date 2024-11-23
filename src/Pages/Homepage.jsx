import React from "react";
import Header from "../Components/header";
import Welcome from "../components/Welcome";
import Navbar from "../components/Navbar";
import Mainhome from "../Components/mainhome";
import Footer from "../components/Footer";
import Checkuser from "../components/checkuser";

const HomePage = () => (
  <>
    <Header />
    <Navbar />
    <Checkuser />
    <Welcome />
    <Mainhome />
    <Footer />
  </>
);

export default HomePage;