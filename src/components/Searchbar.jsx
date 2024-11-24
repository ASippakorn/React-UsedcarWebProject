import React from "react";

import { useState } from "react";

const Searchbar = () => {
  const [query, setQuery] = useState("");


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Search query:", query);
  //   try{
  //     const response = await axios.get(`http://localhost:3030/search`),{
  //       params:{query},
  // };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search Product"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update state with input value
      />
      <button type="submit">Search</button>
    </form>
  );
    }
  


export default Searchbar;


