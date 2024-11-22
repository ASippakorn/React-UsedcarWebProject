import React from 'react'

const Useredit = () => {
    return (
        <div>
          <header>
            <h1>ABC USED CAR</h1>
            <h3>Admin User Manage</h3>
          </header>
          <nav>
            <a href="/">Home</a>
            <a href="/productManagement">Product Management</a>
            <a href="/UserManagementAdduser">Add User</a>
            <a href="/userManagementOverview">User Overview</a>
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
    
          <main>
            <section>
              <div className="table-container">
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
                    {users.map((user, index) => (
                      <tr key={index}>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        <td>{user.phoneNumber}</td>
                        <td>
                          <button className="edit">Edit</button>
                          <label className="switch">
                            <input type="checkbox" />
                            <span className="onoff"></span>
                          </label>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </main>
        </div>
      )
    }

export default Useredit;