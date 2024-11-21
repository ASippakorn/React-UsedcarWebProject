import React from "react";

const Navigation = () => (
  <nav className="bg-white shadow-md py-4">
    <div className="container mx-auto flex justify-center space-x-4">
      <a href="/productManagementAddproduct" className="text-blue-600 hover:underline">
        Sell car with us
      </a>
      <form action="/form-search" method="get">
        <input type="text" id="search" name="search" placeholder="Search" />
        <button type="submit">Search</button>
      </form>
    </div>
  </nav>
);

export default Navigation;