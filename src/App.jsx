import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Aboutus from "./Pages/Aboutus";
import Addproductpage from "./Pages/Addproductpage";
import Adduserpage from "./Pages/Adduserpage";

import Detail from "./Pages/Detail";

import Editpage from "./Pages/Edit";
import Producthisotrypage from "./Pages/ProductHistorypage";
import ProductManagement from "./Pages/ProductManagement";

import UserManagement from "./Pages/UserManagement";

import Edit from "./Pages/Edit";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/team" element={<Aboutus />} />
        <Route path="/adduser" element={<Adduserpage/>}/> 
        <Route path="/edit" element={<Edit/>}/> 
        <Route path="/usermanagement" element={<UserManagement/>}/> 
        <Route path="/useredit" element={<Editpage/>}/> 
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/addproduct" element={<Addproductpage />} />
        <Route path="/producthistory" element={<Producthisotrypage/>}/>     
        <Route path="/productmanagement" element={<ProductManagement/>}/>   
      </Routes>
    </>
  );
};

export default App;