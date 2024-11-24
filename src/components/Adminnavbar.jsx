import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = ({ user }) => (
  <>
    <ul className="Navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/productmanagement">Product management</Link>
      </li>
      <li>
        <Link to="/usermanagement">Usermanagement</Link>
      </li>
    </ul>

    {typeof user != 'undefined' ? (
  <>
    <ul>
      <li>
        <Link to="/logout">Logout</Link>
      </li>
    </ul>
  </>
) : (
  <>
    <ul>
      <li>
        <Link to="/login">Log In</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>
  </>
)}
</>
);
export default AdminNavbar;
