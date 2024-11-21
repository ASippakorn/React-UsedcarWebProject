import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Aboutus from "./Pages/Aboutus";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/team" element={<Aboutus />} />

      </Routes>
    </>
  );
};

export default App;