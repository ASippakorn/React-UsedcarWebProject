import React from "react";
import { Link } from "react-router-dom";
import "./css/welcome.css"

const Welcome = () => (
  <main className="container mx-auto mt-8 bg-cover bg-center" style={{ backgroundImage: '../../public/img/home.jpg' }}>
  <p className="text-center text-lg text-gray-100">
    Welcome to ABC USED CAR. Explore our collection!
  </p>



  <nav className="bg-white shadow-md py-4">
    <div className="container mx-auto flex justify-center space-x-4">
      
      <Link to="/addproduct" className="text-blue-600 hover:underline">
        Sell car with us
      </Link>
      <Link to="/search" className="text-center text-lg text-gray-700">
      Visit website
    </Link>
    </div>
  </nav>
  </main>
);

export default Welcome;