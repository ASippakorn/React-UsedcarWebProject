import React from 'react'

const Detail = () => {
  return (
    <div>
      <header className="header">
        <h1>ABC USED CAR</h1>
      </header>
      
      <nav>
        <a href="/">Home</a>
        <a href="/search">Choose New Car</a>
        <a href="/productManagementAddproduct">Sell Car with US</a>
        <a href="/">Back</a> {/* Adjust to handle actual navigation logic */}
      </nav>

      <main className="content">
        <section className="car-table">
          <table>
            <thead>
              <tr>
                <th>Model</th>
                <th>Price</th>
                <th>Mileage</th>
                <th>Brand</th>
                <th>Engine</th>
                <th>Description</th>
                <th>Fuel type</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, index) => (
                <tr key={index}>
                  <td>{car.Model}</td>
                  <td>{car.Price}</td>
                  <td>{car.Mileage}</td>
                  <td>{car.Brand}</td>
                  <td>{car.Engine}</td>
                  <td>{car.Description}</td>
                  <td>{car.Fueltype}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="contact-dealer">
          <textarea className="message-box" placeholder="Message to dealer"></textarea>
          <button className="cancel-button">Cancel</button>
          <button className="send-button">Send</button>
        </section>
      </main>
    </div>
  );
};

export default Detail;