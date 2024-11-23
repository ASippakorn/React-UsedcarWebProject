import React from "react";

const Loginform = ()=>(
    <main>
    <form action="/form-login" method="POST">
      <div>
        <input
          type="text"
          id="username"
          name="username"
          required=""
          placeholder="username"
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          name="password"
          required=""
          placeholder="password"
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            id="remember-password"
            name="remember-password"
          />
          Remember Password
        </label>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
    
  </main>
  
);
export default Loginform;