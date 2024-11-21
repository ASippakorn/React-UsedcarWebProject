import React from "react";

const Registerform = () => (
    <form action="/form-register" method="POST">
  <h3>Register</h3>
  <label htmlFor="fname">First name:</label>
  <br />
  <input
    type="text"
    id="fname"
    name="fname"
    placeholder="Enter your Firstname"
  />
  <br />
  <label htmlFor="lname">Last name:</label>
  <br />
  <input
    type="text"
    id="lname"
    name="lname"
    placeholder="Enter your Lastname"
  />
  <br />
  <br />
  <label htmlFor="email">Email:</label>
  <br />
  <input type="email" id="email" name="email" placeholder="Enter your Email" />
  <br />
  <label htmlFor="username">Username:</label>
  <br />
  <input
    type="text"
    id="username"
    name="username"
    placeholder="Enter your Username"
  />
  <br />
  <label htmlFor="password">Password:</label>
  <br />
  <input
    type="password"
    id="password"
    name="password"
    placeholder="Enter your Password"
  />
  <br />
  <br />
  <input type="submit" defaultValue="Submit" />
  <a href="javascript:history.back()">Back</a>
</form>

);
export default Registerform;