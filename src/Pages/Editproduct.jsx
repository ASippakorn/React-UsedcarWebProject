import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Components/header';
import Footer from '../components/Footer';

const Editproduct = () => {

  const { id } = useParams();
  const [form, setForm] = useState({
    image: null,
    cartype: '',
    brand: '',
    model: '',
    mileage: '',
    year: '',
    description: '',
    carcondition: '',
    fuel: '',
    insurance: '',
    price: '',
    certified: false,
  });

  // Fetch car details and populate the form
  useEffect(() => {
    axios
      .get(`http://localhost:3030/edit/car/${id}`)
      .then((res) => {
        setForm(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  const navigate = useNavigate();
  // Handle file input change
  const handleFileChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const key in form) {
        formData.append(key, form[key]);
      }

      await axios.put(`http://localhost:3030/edit/car/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Car details updated successfully!');
      
      navigate('/')
    } catch (error) {
      console.error('Error updating car details:', error);
      alert('Failed to update car details.');
    }
  };

  return (
    <>
        <Header/>
        <h1>EDIT PRODUCT</h1> 
        <button onClick={() => navigate(-1)}>Back</button>

      <div className="form-container">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input type="file" name="image" onChange={handleFileChange} />
          </div>
          <div className="form-group">
            <label htmlFor="cartype">Type of car:</label>
            <select name="cartype" id="cartype" value={form.cartype} onChange={handleChange}>
              <option value="Sport">SPORT CAR</option>
              <option value="Super">SUPER CAR</option>
              <option value="Hyper">HYPER CAR</option>
              <option value="Suv">SUV</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="brand">Brand:</label>
            <select name="brand" id="brand" value={form.brand} onChange={handleChange}>
              <option value="BMW">BMW</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="Bugatti">Bugatti</option>
              <option value="Porsche">Porsche</option>
              <option value="Bentley">Bentley</option>
              <option value="Ferrari">Ferrari</option>
              <option value="McLaren">McLaren</option>
              <option value="Rolls-Royce">Rolls-Royce</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="model">Model</label>
            <input
              type="text"
              id="model"
              name="model"
              value={form.model}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="mileage">Mileage</label>
            <input
              type="number"
              id="mileage"
              name="mileage"
              value={form.mileage}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="year">Year</label>
            <input
              type="number"
              id="year"
              name="year"
              value={form.year}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              style={{ width: '100%', height: '80px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="carcondition">Condition</label>
            <select
              name="carcondition"
              id="carcondition"
              value={form.carcondition}
              onChange={handleChange}
            >
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="fuel">Fuel type</label>
            <input
              type="text"
              id="fuel"
              name="fuel"
              value={form.fuel}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="insurance">Insurance(YRS)</label>
            <input
              type="number"
              id="insurance"
              name="insurance"
              value={form.insurance}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price($)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={form.price}
              onChange={handleChange}
            />
          </div>
          <label className="checkbox">
            <input
              type="checkbox"
              name="certified"
              onChange={handleChange}
              checked={form.certified}
            />{' '}
            Certified used car
          </label>{' '}
          <br />
          <button type="submit">Update</button>
        </form>
      </div>
      <Footer/>
    </>
  );
};



export default Editproduct;
