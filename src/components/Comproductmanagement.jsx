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
    try {
      await axios.delete(`http://localhost:3030/delete/car/${car.carid}`);
      // Update the state to remove the deleted car
      setCarDetails((prevCars) => prevCars.filter((car) => car.id !== id));
    } catch (err) {
      console.error('Error deleting car:', err);
    }
  };

  useEffect(() => {
    getCarDetails();
  }, []);

  return (
    <>
      <div>
        {carDetails && Array.isArray(carDetails) && carDetails.length > 0 ? (
          <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th>Brand</th>
                <th>Model</th>
                <th>Year</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {carDetails.map((car, key) => (
                <tr key={key}>
                  <td>{car.brand}</td>
                  <td>{car.model}</td>
                  <td>{car.year}</td>
                
                  <td>
                    <Link to={`http://localhost:5173/edit/car/${car.id}`}>Edit</Link>
                    <button onClick={() => onDelete(car.id)}>Delete</button>
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
