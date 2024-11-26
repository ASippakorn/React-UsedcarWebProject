import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 



const Loginform = () => {//may add toastify later
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(() => ({
      ...form,
      [name]: value, // Update only the changed field
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Form:", form);
    try {
      const res = await axios.post(`http://localhost:3030/login`, form,{},
        { withCredentials: true }) // Include cookies in the request);
      console.log("Response from server:", res.data);
      // alert("Registration successful!");
      navigate("/");
    } catch (err) {
      console.error("Error during registration:", err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
    <h3>Login</h3>
      <form onSubmit={handleSubmit} className="login" >
      <div className="container" >
        
        <label htmlFor="username">Username:</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your Username"
          value={form.username}
          onChange={handleChange}
          // requiredxxxxxxx
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your Password"
          value={form.password}
          onChange={handleChange}
          required
          minLength="4"
        />
        <br />
        <br />
        <button type="submit">Login</button>
        </div>
      </form>
      
    </>
  );
};

export default Loginform;
