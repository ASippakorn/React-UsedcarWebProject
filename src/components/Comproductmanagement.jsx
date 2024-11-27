import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Comproductmanagement = () => {
  const [carDetails, setCarDetails] = useState([]);

  // Fetch car details
  const getCarDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3030/productManagement`);
      setCarDetails(response.data.car);
      console.log(response.data);
    } catch (error) {
      console.log('Error fetching car details:', error);
    }
  };



  // Delete car function
  const onDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this car?");
    if (!confirmDelete) {
      return; // If the user cancels, exit the function
    }
    try {
      await axios.delete(`http://localhost:3030/delete/car/${id}`)
        .then(res => window.location.reload())
        .catch(err => console.log(err))
    } catch (err) {
      console.error('Error deleting car:', err);
    }
  };

  useEffect(() => {
    getCarDetails();
  }, []);

  return (
    <>
      <h1>PRODUCT MANAGEMENT OVERVIEW</h1>
      <div>
        {carDetails && Array.isArray(carDetails) && carDetails.length > 0 ? (
          <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Year</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {carDetails.map((car, key) => (
                <tr key={key}>
                  <td>            <img
                    src={car.image || "/img/noimage.jpg"}
                    alt={car.model}
                    width="500"
                  /></td>
                  <td>{car.brand}</td>
                  <td>{car.model}</td>
                  <td>{car.year}</td>

                  <td>
                    <Link to={`http://localhost:5173/edit/car/${car.carid}`}>Edit</Link></td>
                  <td><button onClick={() => onDelete(car.carid)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No car data available</p>
        )}
      </div>
    </>
  );
};

export default Comproductmanagement;
