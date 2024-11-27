import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Components/header';
import Footer from '../components/Footer';


const Edituser = () => {

  const { id } = useParams();

  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
  }, [id]);
  const navigate = useNavigate();

  // Fetch user details and populate the form
  useEffect(() => {
    axios
      .get(`http://localhost:3030/edit/user/${id}`)
      .then((res) => {
        setForm(res.data.user);

      }, [id])

      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    if (!form)
      return;
    const { name, value } = e.target;
    setForm(() => ({
      ...form,
      [name]: value, // Update only the changed field
    }));
  };

  // Handle form submission 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const key in form) {
        formData.append(key, form[key]);
      }

      await axios.put(`http://localhost:3030/edit/user/${id}`, formData, {
        headers: { "Content-Type": "application/json" },
      }

      );
      alert('User details updated successfully!');

      navigate('/')
    } catch (error) {
      console.error('Error updating user details:', error);
      alert('Failed to update user details.');
    }
  };
  return (
    <>
      <Header />
      <h3>Edit User</h3>
      <button onClick={() => navigate(-1)}>Back</button>
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
          <label htmlFor="phonenum">phonenum:</label>
          <br />
          <input
            type="text"
            id="phonenum"
            name="phonenum"
            placeholder="Enter your phonenum"
            value={form.phonenum}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="role">role</label>
          <select name="role" id="role" onChange={handleChange}>
            <option value="admin">admin</option>
            <option value="Customer">Customer</option>

          </select>
          <br />
          <br />
          <button type="submit">Update</button>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Edituser;
