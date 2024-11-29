import React from "react";
import { Link } from "react-router-dom";


const Navigation = () => (
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
);

export default Navigation;