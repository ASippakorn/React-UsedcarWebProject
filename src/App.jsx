import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Aboutus from "./Pages/Aboutus";
import Addproductpage from "./Pages/Addproductpage";
import Adduserpage from "./Pages/Adduserpage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/team" element={<Aboutus />} />
        <Route path="/addproduct" element={<Addproductpage />} />
        <Route path="/adduser" element={<Adduserpage/>}/>     
      </Routes>
    </>
  );
};

export default App;