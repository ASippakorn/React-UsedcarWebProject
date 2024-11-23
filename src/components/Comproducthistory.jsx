import React from "react";

const Comproducthistory = ({ cars }) => {
  return (
    <div>
      {/* History */}
      <div className="car-list">
        {cars.map((car, index) => (
          <div className="car" key={index}>
            {car.image ? (
              <img
                src={`/uploads/${car.image}`}
                alt={`${car.brand} ${car.model}`}
                width="100"
              />
            ) : (
              <p>No image</p>
            )}
            <p>
              {car.brand} {car.model}
            </p>
            <div className="actions">
              <button
                className="delete"
                aria-label={`Delete ${car.model}`}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comproducthistory;
