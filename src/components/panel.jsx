import React from 'react'
import axios from 'axios'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
                    <Link to="/advancedsearch" > ADVANCED SEARCH</Link>
                    {filteredDetails.length > 0 ? (
                        <ul>
                            {filteredDetails.map((item, index) => (//car img
                                <li key={index}>
                                    {item.image ? (
                                        <img src={`/pic/noimage.jpg`} alt="Car" />
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
                                    {/* <button onSubmit = {handleDescrip(item.carid)}>Description..</button> */}
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
