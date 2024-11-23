import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'  

const Panel = () => {
    const [detail, setDetail] = useState([])
    const handleOwner =() =>{
        
    }
    const getDetail = async () => {
        try {
            const response = await axios.get(`http://localhost:3030/search`)

            setDetail(response.data.car)
        } catch (error) {
            console.log('error', error)
        }
    }
    useEffect(() => {
        getDetail();
    }, [])
    console.log(detail);
    return (
        <>
            {
                detail && Array.isArray(detail) ? detail.map((item, key) => {
                    return <div key={key}>
                        <strong>{item.brand}</strong> {item.model} <br/>
                        <button > Contact Owner </button>
                    </div>
                }) : "No data"
            }
        </>
    )
}

export default Panel;
