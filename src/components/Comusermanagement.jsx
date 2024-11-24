import React, { useState,useEffect } from 'react'
import axios from "axios"
const Comusermanagement = () => {//Onedit + Ondelete func missing!
  const [userdetail, setUserdetail] = useState([])

  const getuserdetail = async () => {
    try {
      const response = await axios.get(`http://localhost:3030/UserManagementOverview`)
      
      setUserdetail(response.data.user)
      console.log(response.data.user)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    getuserdetail();
  }, [])


  return (// Email Username password Phonenum edit delete
    <>
    <div>
      {userdetail && Array.isArray(userdetail) && userdetail.length > 0 ? (
        <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>Email</th>
              <th>Username</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userdetail.map((item, key) => (
              <tr key={key}>
                <td>{item.email}</td>
                <td>{item.username}</td>
                <td>{item.phonenum}</td>
                <button onClick={() => onEdit(item)}>Edit</button>
                <button onClick={() => onDelete(item)}>Delete</button>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data</p>
      )}
    </div>
    </>
  )

}

export default Comusermanagement