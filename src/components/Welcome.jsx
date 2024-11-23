import React from "react";
import { Link } from "react-router-dom";


const Navigation = () => (
  <nav className="bg-white shadow-md py-4">
    <div className="container mx-auto flex justify-center space-x-4">
      
      <Link to="/addproduct" className="text-blue-600 hover:underline">
        Sell car with us
      </Link>
      <Link to="/Addproduct">Add car</Link>

      <form action="/form-search" method="get">
        <input type="text" id="search" name="search" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
    </div>
  </nav>
);

export default Navigation;