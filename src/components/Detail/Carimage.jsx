import React from 'react'
//Not done
const Carimage = () => {
  return (
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
      </main>
  )
}

export default Carimage;