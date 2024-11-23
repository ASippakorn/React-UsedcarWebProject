import React from 'react'

const Comdetail = () => {
    return (
        <div className="container">
          <main className="content">
            <article className="car-title">
              <h3>
                {car.brand + " " + car.model}{" "}
                {car.carcertified && (
                  <span className="verified-label">
                    <img src="/pic/verify.png" alt="Verified" width="30" />
                  </span>
                )}
              </h3>
              <h4>Cartype: {car.cartype}</h4>
              <div className="car">
                {car.image ? (
                  <img src={`/uploads/${car.image}`} alt="Car" />
                ) : (
                  <p>
                    <img
                      src="/pic/noimage.jpg"
                      alt="No Image Available"
                      width="500"
                    />
                  </p>
                )}
              </div>
            </article>
    
            <section className="car-info">
              <div>
                <p>
                  Mileage: <strong>{car.mileage}</strong>
                </p>
                <p>
                  Fueltype: <strong>{car.fuel}</strong>
                </p>
                <p>
                  Condition: <strong>{car.carcondition}</strong>
                </p>
                <p>
                  Insurance: <strong>{car.insurance}</strong>
                </p>
                <p>
                  Price: <strong>{car.price} $</strong>
                </p>
                <p>
                  Description: <strong>{car.description}</strong>
                </p>
              </div>
              <section className="contact-dealer">
                <textarea
                  className="message-box"
                  placeholder="Message to dealer"
                ></textarea>
                <button className="cancel-button">Cancel</button>
                <button className="send-button">Send</button>
              </section>
            </section>
          </main>
        </div>
      );
    };
export default Comdetail;