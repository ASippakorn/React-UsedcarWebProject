import React from "react";
import Header from "../Components/header";
import Loginform from "../components/Loginform";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Login =()=>(
    <>
        <Header />
        <Loginform/>
        <a href="javascript:history.back()">Back</a>
        <Footer/>
    </>
)
export default Login;