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
              {cars.map((car, index) => (
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
                    <a href={`/edit/${car.carid}`}>Edit</a>
                    <a
                      href={`/delete/${car.carid}`}
                      onClick={() => window.confirm("Delete this car?")}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    );
  };

export default Comproductmanagement