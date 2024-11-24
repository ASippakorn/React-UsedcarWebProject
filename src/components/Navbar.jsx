import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react'
const Navbar = () => {
  const [isAuth, setisAuth] = useState(false)
  const [currentUser, setCurrentUser] = useState(null);
  const getAuth = async () => {
    try {
      const response = await axios.get(`http://localhost:3030/auth`)

      setisAuth(response.data.isAuth)
      setCurrentUser(response.data.currentUser)
      console.log(response.data);
    } catch (error) {
      console.log('Auth Check Failed', error)
    }
  }
  useEffect(() => {
    console.log('useEffect triggered');
    getAuth();
  }, [])
 
  // const handleLogout = async () => {
  //   try {
  //     await axios.post(`/http://localhost:3030/logout`);
  //     window.location.href = "/";
  //   } catch (error) {
  //     console.error("Logout failed:", error);
  //   }
  // };
  return (
    <>
      <ul className="Navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Addproduct">Sell car with us</Link>
        </li>
        <li>
          <Link to="/team">About US</Link>
        </li>

      </ul>


      {typeof user != "undefined" ? (
        <>
          <ul>
            <li>Welcome, {currentUser.username || currentUser.email}!</li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </>
      ) : (
        <>
          <ul>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
              
            </li>
          </ul>
        </>
      )}
    </>
  );
}
export default Navbar
