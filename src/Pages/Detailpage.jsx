import React from 'react'
import Comdetail from '../components/Detail/Cardetail'
import Footer from '../components/Footer';
import Header from '../Components/header';
import Navbar from '../components/Navbar';

const Detailpage = () => (
  <>
    <Header/>
    <Navbar/>
    <Comdetail/>
    <a href="javascript:history.back()">Back</a>
    <Footer/>
  </>
);

export default Detailpage