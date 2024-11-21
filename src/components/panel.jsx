import React from "react";
import axios from 'axios';
import {useState ,useEffect} from 'react'
function Panel(){
    const[detail,setDetail]= useState([])

    const fetchDetail = async()=>{
        try{
            const response = axios.get('http:/localhost:3030/detail/')
            setDetail(response.data)
        }catch(error){
            console.log('error',error)
        }
    }
    useEffect(()=>{
        fetchDetail();
    },[])
    return (
        detail.map((item,index)=>(
            <div key={index}>
                {item.id} {item.model} {item.brand}
                <button>Edit</button>
                <button>Delete</button>
            </div>
        ))
        
    )
}
export default panel