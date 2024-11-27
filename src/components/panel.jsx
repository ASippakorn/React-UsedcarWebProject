import React from 'react'
import axios from 'axios'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AdvancedSearch from '../Pages/AdvancedSearch'
const Panel = () => {
    const [detail, setDetail] = useState([])
    const [search, setSearch] = useState("")

    
    const getDetail = async () => {
        try {
            const response = await axios.get(`http://localhost:3030/search`)
            console.log(response)
            setDetail(response.data.car)

        } catch (error) {
            console.log('error', error)
        }
    }
    
    useEffect(() => {
        getDetail()

    }, [])
    const filteredDetails = detail.filter((item) => {
        if (search === '') {
            return item;
        } else if (item.model.toLowerCase().includes(search.toLowerCase())) {
            return item;
        }
        else if (item.brand.toLowerCase().includes(search.toLowerCase())) {
            return item;
        }
        return false;
    });
    console.log(detail);
    return (
        <>
            {

                <form >
                    <input
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Search Product"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} // Update state with input value
                    />
                    
                    <AdvancedSearch/>
                    {filteredDetails.length > 0 ? (
                        <ul>
                            {filteredDetails.map((item, index) => (//car img
                                <li key={index}>
                                    {item.image ? (
                                        <img src={`uploads/${item.image}`} alt="Car" 
                                        onError={(e) => {
                                            // Fallback to the direct URL if the first source fails
                                            e.target.onerror = null; // Prevent infinite loop
                                            e.target.src = item.image || "/img/noimage.jpg"; // Fall back to item.image or a placeholder
                                        }}/>
                                    ) : (
                                        <p>
                                            <img
                                                src="/pic/noimage.jpg"
                                                alt="No Image Available"
                                                width="500"
                                            />
                                        </p>
                                    )}
                                    {item.brand} - <strong>{item.model}</strong> <br/>
                                    <legend><strong>Price </strong>{item.price} $</legend>
                                    <Link to={`/detail/${item.carid}`}>Description..</Link>
                                </li>
                               
                            ))}
                        </ul>
                    ) : (
                        <p>No results found</p>
                    )

                    }
                </form>

            }
        </>
    )
}

export default Panel;
