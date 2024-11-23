import React from 'react'

const Userhistory = () => {
  const handleDelete = (username) => {
    console.log(`Delete user: ${username}`);
    // Add delete logic here
  };

  return (
    <div>
      <header>
        <h1>ABC USED CAR</h1>
        <h3>Admin User Overview</h3>
      </header>
      <nav>
        <a href="/">Home</a>
        <a href="/productManagement">Product Management</a>
        <a href="/UserManagementAdduser">Add User</a>
        <a href="/UserManagementEdit">Edit User</a>
        <a href="/">Back</a> {/* Adjust for navigation logic */}
        <form action="/form-search" method="get">
          <input
            type="text"
            id="search"
            name="productSearch"
            placeholder="Search Product"
          />
          <button type="submit">Search</button>
        </form>
      </nav>
      <div className="table-container">

      {typeof user !== 'undefined' && user.length > 0 ? (
        <>
          <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Username</th>
              <th>Password</th>
              <th>Phone Number</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <tr key={index}>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.phoneNumber}</td>
                <td>
                  <button
                    className="delete"
                    onClick={() => handleDelete(user.username)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </>
      ):( //else
        <p>No user data available.</p>
      )}
      </div>
    </div>
    
  )}

export default Userhistory