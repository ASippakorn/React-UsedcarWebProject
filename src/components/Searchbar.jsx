import React from "react";

const Searchbar = () => (
    <form action="/form-search" method="get">
    <input
        type="text"
        id="search"
        name="productSearch"
        placeholder="Search Product"
    />
    <button type="submit">Search</button>
    </form>

);

export default Searchbar;