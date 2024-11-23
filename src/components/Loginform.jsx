import React from "react";

const Loginform = ()=>(
    <main>
      {/* const handleLogin = async (event) => {
    event.preventDefault();
    const response = await fetch('/form-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.success) {
        // Redirect manually
        window.location.href = data.redirect;
    } else {
        alert(data.msg); // Show error message
    }
}; */}
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