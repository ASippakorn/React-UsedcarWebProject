import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import { useState, useEffect } from 'react'

import styles from "../components/css/navbar.module.css"
import { FaHome, FaCar, FaInfoCircle, FaUser, FaSignInAlt, FaUserPlus, FaSignOutAlt, FaProductHunt } from 'react-icons/fa';



const Navbar = () => {
  axios.defaults.withCredentials = true // อนุญาติCookie
  const [isAuth, setisAuth] = useState(false)
  const [currentUser, setCurrentUser] = useState(null);

   // check status
  const getAuth = async () => {
    try {
      const response = await axios.post(`http://localhost:3030/auth`

      )

      setisAuth(response.data.isAuth)
      setCurrentUser(response.data.currentUser)
      console.log(response.data);
      console.log(response.data.currentUser)
    } catch (error) {
      console.log('Auth Check Failed', error)
    }
  }
  useEffect(() => {

    getAuth();
  }, [])
//user logout
  const handleLogout = async () => {
    try {
      await axios.post(`http://localhost:3030/logout`);
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <>
      <ul className={styles.container} >
        <li>
          <Link to="/" className={styles.content}> <FaHome /> Home</Link>
        </li>
        <li>
          <Link to="/Addproduct" className={styles.content}> <FaCar />Sell car with us</Link>
        </li>
        <li>
          <Link to="/team" className={styles.content}> <FaInfoCircle /> About US</Link>
        </li>

        {isAuth ? (
          <>
           
              
              <li>
                <button onClick={handleLogout} className={styles.content}> <FaSignOutAlt/>Logout </button>
              </li>
              <li>
                <Link to="/productmanagement" className={styles.content}> <FaProductHunt />Product Management</Link>
              </li>
              <li>
                <Link to="/usermanagement"className={styles.content}>  <FaUser />  User management</Link>

                
              </li>
              <li>Welcome, {currentUser.username || currentUser.email}!</li>
            
          </>
        ) : (
          <>
          
            <li>
              <Link to="/login" className={styles.content}> <FaSignInAlt />Log In</Link>
            </li>
            <li>
              <Link to="/register"className={styles.content}> <FaUserPlus />Register</Link>
            </li>
           
          </>
        )}
      </ul>


    </>
  );
}
export default Navbar
