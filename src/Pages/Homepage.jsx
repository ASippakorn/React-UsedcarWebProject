import React from "react";
import Header from "../Components/header";
import Welcome from "../components/Welcome";
import Navbar from "../components/Navbar";
import Mainhome from "../Components/mainhome";
import Footer from "../components/Footer";

const HomePage = () => (
  <>
    <Header />
    <Navbar />
    <Welcome />
    <Mainhome />
    <Footer />
  </>
);

export default HomePage;