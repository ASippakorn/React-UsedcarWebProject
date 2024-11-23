import React from 'react'
import axios from 'axios';
import {useState ,useEffect} from 'react'

const Panel = () => {
    const[detail,setDetail]= useState([])

    const getDetail = async()=>{
        try{
            const response = axios.get('http:/localhost:3030/detail/')
            setDetail(response.data)
        }catch(error){
            console.log('error',error)
        }
    }
    useEffect(()=>{
        getDetail();
    },[])
    return (
        detail.map((item,index)=>(
            <div key={index}>
                {item.brand} {item.price} 
                <button>Edit</button>
                <button>Delete</button>
            </div>
        ))
        
    )
}

export default Panel