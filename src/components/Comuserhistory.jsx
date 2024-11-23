import React from 'react'

const Comuserhistory = () => {
  return (
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
  )
}

export default Comuserhistory