import React from 'react'
import Comusermanagement from '../components/Comusermanagement'
import Header from '../Components/header';
import Footer from '../components/Footer';
import AdminNavbar from '../components/Adminnavbar';


const UserManagement = () => {
  return (
    <>
    <Header/>
    <AdminNavbar/>
    <Comusermanagement/>
    <Footer/>
   </>
  )
}

export default UserManagement;