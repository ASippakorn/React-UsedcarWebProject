import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 


const Registerform = () => {//may add toastify later
  
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
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
      const res = await axios.post(`http://localhost:3030/register`, form);
      console.log("Response from server:", res.data);
      alert("Registration successful!");
      navigate("/");
    } catch (err) {
      console.error("Error during registration:", err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
        <h3>Register</h3>
      <form onSubmit={handleSubmit} className="login">
      <div className="container" >
        
        <label htmlFor="fname">First name:</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="Enter your Firstname"
          value={form.fname}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          placeholder="Enter your Lastname"
          value={form.lname}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="username">Username:</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your Username"
          value={form.username}
          onChange={handleChange}
          required
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
        <button type="submit">Register</button>
        </div>
      </form>
    </>
  );
};

export default Registerform;
