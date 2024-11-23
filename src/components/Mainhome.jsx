import React from "react";
import { Link } from "react-router-dom";

const Mainhome = () => (
  <main className="container mx-auto mt-8">
    <p className="text-center text-lg text-gray-700">
      Welcome to ABC USED CAR. Explore our collection!
    </p>
    <Link to="/search" className="text-center text-lg text-gray-700">
      Visit website
    </Link>
  </main>
);

export default Mainhome;