import React from 'react'

const formeditproduct = () => {
    return (
      <div>
        <header>
          <h1>ABC USED CAR</h1>
        </header>
        <nav>
          <a href="/">Home</a>
          <a href="/productManagementAddproduct">Add Car</a>
          <a href="/productManagementHistory">View History</a>
          <a href="/">Back</a> {/* Adjust for navigation logic as needed */}
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
  
        {/* Product Cards Section */}
        <section>
          <h2>Admin Product Management</h2>
          <button className="add">Add Car</button>
          
          {/* Product Card for McLaren P1 GTR */}
          <article className="product-card">
            <img src="mclaren.jpg" alt="McLaren P1 GTR" />
            <h2>McLaren P1 GTR</h2>
            <div className="actions">
              <label className="switch">
                <input type="checkbox" id="mclaren1" />
                <span className="onoff"></span>
              </label>
              <button className="edit">Edit</button>
              <button className="verify">Verify</button>
              <button className="delete">Delete</button>
            </div>
          </article>
  
          {/* Product Card for Pagani Huayra R */}
          <article className="product-card">
            <img src="pagani.jpg" alt="Pagani Huayra R" />
            <h2>Pagani Huayra R</h2>
            <div className="actions">
              <label className="switch">
                <input type="checkbox" id="pagani1" />
                <span className="onoff"></span>
              </label>
              <button className="edit">Edit</button>
              <button className="verify">Verify</button>
              <button className="delete">Delete</button>
            </div>
          </article>
        </section>
      </div>
    )
  }

export default formeditproduct;