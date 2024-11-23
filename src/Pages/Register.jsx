import React from "react";
import Registerform from "../components/Registerform";
import Footer from "../components/Footer";
import Header from "../Components/header";

const Register =()=>(
    <>
        <Header/>
        <Registerform/>
        <a href="javascript:history.back()">Back</a>
        <Footer/>
    </>
)
export default Register;