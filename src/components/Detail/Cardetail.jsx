import React from "react";

const Cardetail = () => {
  return (
        <section className="car-info">
          <div>
            {car && Object.keys(car).length > 0 ? (
              <>
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
                  Price: <strong>{car.price}</strong>
                </p>
                <p>
                  Description: <strong>{car.description}</strong>
                </p>
              </>
            ) : (
              <p>No car data available.</p>
            )}
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
  );
};
export default Cardetail;
