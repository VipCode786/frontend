import React from 'react'

import  "./app.css";

import axios from "axios" 
import { useState,useEffect } from 'react';
const item = () => {
  const [Users,setUsers] = useState([])
  // const request = () => {
    useEffect(() => {
      axios.get(`http://localhost:1010/data/`).then((res) => {
        setUsers(res.data)
      });
    }, []);
  // }
 
  return (
    <>
      <table border={0}>
        <tr className='headings'>
          <th>Image</th>
          <th>Product Name</th>
          <th>Location</th>
          <th>MRP</th>
          <th>Qty</th>
          <th>Status</th>
          <th>Transfer To</th>
        </tr>
        {Users.map((data, index) => (
        <tr key={index}>
          <td className='text'>
            <img src={data.img} className="image"></img>
          </td>

          <td className='text'>
            {data.Name}
          </td>
          <td className='warehouse' >
            {data.Location}
          </td>
          <td className='text'>
            {data.MRP}
          </td>
          <td className='text'>
            {data.QTY}
          </td>
          {(data.QTY<=data.Low)?
          (<td className='text' id='Low'>
            Low
          </td>):((data.Qty>=data.High)?(<td className='text' id='high'>High</td>):(<td className='text' id='normal'>Normal</td>))
}
          
        </tr>
))}
      </table>
    </>
  )
}

export default item