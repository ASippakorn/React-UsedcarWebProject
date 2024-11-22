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
        <article className="car-title">
          <h3>McLaren P1 GTR</h3>
        </article>

        <section className="car-info">
          <div>
            <p>
              <strong>2015</strong>
            </p>
            <p>Year</p>
          </div>
          <div>
            <p>
              <strong>278 Mi</strong>
            </p>
            <p>Mileage</p>
          </div>
          <div>
            <p>
              <strong>Twin Turbocharged V8</strong>
            </p>
            <p>Engine</p>
          </div>
          <div>
            <p>
              <strong>Petrol</strong>
            </p>
            <p>Fuel type</p>
          </div>
          <div>
            <p>
              <strong>$1.5M</strong>
            </p>
            <p>Price</p>
          </div>
        </section>

        <section className="car-images">
          <img src="car-image1.jpg" alt="McLaren P1 GTR Image 1" />
          <img src="car-image2.jpg" alt="McLaren P1 GTR Image 2" />
        </section>

        <section className="car-description">
          <p>
            The McLaren P1, one of only 58 ever built, was designed to
            commemorate the marque's 1995 victory at the 24 Hours of Le Mans.
            Unveiled in 2013 as the world's first hybrid hypercar, it showcases
            McLaren's racing excellence. Designed by Frank Stephenson, the P1 is
            lighter and more powerful than its street-legal counterpart, with a
            sleek aerodynamic body, a drag-reducing rear wing, and a "push to
            pass" energy recovery system. Weighing just 3,280 lbs., it boasts an
            impressive power-to-weight ratio, allowing it to reach 0-60 mph in
            under 2.8 seconds and a top speed of 217 mph. Powered by a 3.8-liter
            twin-turbo V-8 and an electric motor generating 986 hp, the P1 also
            features a race-tuned suspension, 19-inch alloy wheels, and
            carbon-fiber accents.
          </p>
        </section>

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