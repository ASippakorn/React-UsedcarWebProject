import React from 'react'

const Comproductmanagement = () => {
  return (
    <div>
      <section>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>CarID</th>
              <th>Brand</th>
              <th>Model</th>
            </tr>
          </thead>
          <tbody>
            {car.map((car, index) => (
              <tr key={index}>
                <td>
                  {car.image ? (
                    <img
                      src={`/uploads/${car.image}`}
                      alt={`${car.brand} ${car.model}`}
                      width="100"
                    />
                  ) : (
                    <p>No image</p>
                  )}
                </td>
                <td>{car.carid}</td>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>
                  <button onClick={() => window.location.href = `/edit/${car.carid}`}>
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm("Delete this car?")) {
                        window.location.href = `/delete/${car.carid}`;
                      }
                    }}
                  > 
                    Delete
                  </button>
              </td>
              </tr>
              ))}
        </tbody>
      </table>
    </section>
      </div >
    );
  };

export default Comproductmanagement