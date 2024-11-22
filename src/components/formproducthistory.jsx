import React from 'react'

const Formproducthistory = () => (
      <div>
        <header>
          <h1>ABC USED CAR</h1>
          <h3>Admin Product Management History</h3>
        </header>
  
        {/* Navigation Links */}
        <nav>
          <a href="/">Home</a>
          <a href="/">Back</a> {/* Replace with actual navigation logic if needed */}
          <a href="/userManagementOverview">User Management</a>
          <a href="/productManagement">Product Management</a>
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
  
        {/* Product Cards */}
        <div className="product">
          <img src="mclaren.jpg" alt="McLaren P1 GTR" />
          <p>McLaren P1 GTR</p>
          <div className="actions">
            <button className="delete" aria-label="Delete McLaren P1 GTR">
              Delete
            </button>
          </div>
        </div>
  
        <div className="product">
          <img src="mclaren.jpg" alt="McLaren P1 GTR" />
          <p>McLaren P1 GTR</p>
          <div className="actions">
            <button className="delete" aria-label="Delete McLaren P1 GTR">
              Delete
            </button>
          </div>
        </div>
      </div>
    );

export default Formproducthistory;