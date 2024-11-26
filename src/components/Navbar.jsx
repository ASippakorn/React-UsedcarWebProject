import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import { useState, useEffect } from 'react'



const Navbar = () => {
  axios.defaults.withCredentials = true
  const [isAuth, setisAuth] = useState(false)
  const [currentUser, setCurrentUser] = useState(null);
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
      <ul >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Addproduct">Sell car with us</Link>
        </li>
        <li>
          <Link to="/team">About US</Link>
        </li>

        {isAuth ? (
          <>
            <ul>
              
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
              <li>
                <Link to="/productmanagement">Product Management</Link>
              </li>
              <li>
                <Link to="/usermanagement">User management</Link>

                
              </li>
              <li>Welcome, {currentUser.username || currentUser.email}!</li>
            </ul>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>

          </>
        )}
      </ul>


    </>
  );
}
export default Navbar
