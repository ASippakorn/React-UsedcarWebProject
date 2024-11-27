import React, { useState,useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
const Comusermanagement = () => {
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
 

  const onDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
   
    if (!confirmDelete) {
      return; // If the user cancels, exit the function
    }
    try {
      await axios.delete(`http://localhost:3030/delete/user/${id}`)
      .then(res=>window.location.reload())
      .catch(err=>console.log(err))
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };
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
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Username</th>
              <th>Phonenum</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userdetail.map((user, key) => (
              <tr key={key}>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.phonenum}</td>
        
                <td><Link to={`http://localhost:5173/edit/user/${user.UserID}`}>Edit</Link></td>
                <td> <button onClick={() => onDelete(user.UserID)}>Delete</button></td>
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