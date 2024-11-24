import React from 'react'
import axios from 'axios'

import { useState, useEffect } from 'react'

const Panel = () => {
    const [detail, setDetail] = useState([])
    const [search, setSearch] = useState("")

    const getDetail = async () => {
        try {
            const response = await axios.get(`http://localhost:3030/search`)

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

                    {filteredDetails.length > 0 ? (
                        <ul>
                            {filteredDetails.map((item, index) => (
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
                                    <button>Contact Owner</button>
                                </li>
                               
                            ))}
                        </ul>
                    ) : (
                        <p>No results found</p>
                    )

                    }
                </form>
                // detail && Array.isArray(detail) ? detail.map((item, key) => {
                //     return <div key={key}>
                //         {car.image ? (
                //             <img src={`/pic/noimage.jpg`} alt="Car" />
                //         ) : (
                //             <p>
                //                 <img
                //                     src="/pic/noimage.jpg"
                //                     alt="No Image Available"
                //                     width="500"
                //                 />
                //             </p>
                //         )}
                //         <strong>{item.brand}</strong> {item.model} <br />
                //         <button > Contact Owner </button>
                //     </div>
                // }) : "No data"
            }
        </>
    )
}

export default Panel;
