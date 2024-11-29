import React from 'react'
import axios from 'axios'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AdvancedSearch from '../Pages/AdvancedSearch'


const Panel = () => {
    const defaultFilters = {
        brand: "",
        cartype: "Other",
        year: "2014",
        price: "0",
        carcondition: "Good",
        insurance: "1",
        carcertified: false,
    };

    const [filters, setFilters] = useState(defaultFilters);
    const [originalDetail, setOriginalDetail] = useState([])
    const [detail, setDetail] = useState([])
    const [search, setSearch] = useState("")

    const getDetail = async () => {
        try {
            const response = await axios.get(`http://localhost:3030/search`)
            const carData = response.data.car
            setOriginalDetail(carData)
            setDetail(carData)
        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        getDetail()
    }, [])

    const filter = (e) => {
        const { value } = e.target
        setSearch(value)
        if (value === '') {
            setDetail(originalDetail)
            return
        }
        const newAr = originalDetail.filter((item) =>
            item.model.toLowerCase().includes(value.toLowerCase()) ||
            item.brand.toLowerCase().includes(value.toLowerCase())
        )
        
        setDetail(newAr)
    }
    return (
        <>
            {

                <form >
                    <input
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Search Product"
                        
                        onChange={filter} // Update state with input value
                    />

                    {/* Fetch advance search */}
                    <AdvancedSearch setFilters={setFilters} filters={filters} setDetail={setDetail}  />


                     {detail.length > 0 ? (
                        <ul>
                            {detail.map((item, index) => (//car img
                                <li key={index}>
                                    {item.image ? (
                                        <img src={`uploads/${item.image}`} alt="Car" 
                                        style={{ width: "60%", height: "auto" }}
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
