import React from "react";

const Header = () => (
  <header className="bg-blue-600 text-white py-6">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold">ABC USED CAR</h1>
      <h1>
        Hello <span id="checkusername" />
      </h1>
      <h1>
        Email : <span id="checkemail" />
      </h1>
      <p>Welcome to the home page</p>
      <p className="text-lg mt-2">Your trusted car marketplace</p>
    </div>
  </header>
);

export default Header;