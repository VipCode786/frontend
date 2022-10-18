import React from 'react'
import  axios  from 'axios'
import  "./app.css";
//import pencils from '../pencil.jpg'
//import steplers from "../2.jpg"
//import erasers from "../3.jpg"
//import pens from "../4.jpg"
//import scale from "../5.jpg"
//import trimax from "../6.jpg"
//import erasners from  "../7.jpg"
//import arrow from "../8.jpg"
import { useEffect,useState } from 'react';
const item = () => {
const [Users,setUsers] =useState([])
useEffect(() =>{
  axios.get("http://localhost:1010/data").then((res) => {
    setUsers(res.data);
  });
},[]);

return(
  <>
    <table border={0}>
      <tr className='header'>
        <th>image</th>
        <th>Product name</th>
        <th>Location</th>
        <th>MRP</th>
        <th>Qty</th>
        <th>Status</th>
        <th>Transfer To</th>
      </tr>
      {Users.map((data,index)=>(
        <tr key={index}>
          <td className='text'>{index+1}</td>
          <td className='text'>{data.Name}</td>
          <td className='warehouse'>{data.Location}</td>
          <td className='text'>{data.MRP}</td>
          <td className='text'>{data.QTY}</td>
          <td>
            {(data.QTY<=data.LOW)?
            (<td className='text' id='LOW'>
            LOW
          </td>):((data.QTY>=data.HIGH)?
          (<td className='text' id='HIGH'>
          HIGH
          </td>):(<td className='text' id='normal'>
          Normal</td>))}
          </td>
        </tr>
      ))}
    </table>
  </>
)

  /*return (
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
        <tr>
          <td><img src={pencils} alt='pencils' className='image'></img></td>
          <td className='text'>Doms Pencils 0011</td>
          <td>
          <select name="category" className='warehouse'>
            <option value = "Choose Warehouse">Choose Warehouse</option>
            <option value="Warehouse 1">Warehouse 1</option>
            <option value="Warehouse 2">Warehouse 2</option>
            <option value="Warehouse 3">Warehouse 3</option>
          </select>
          </td>
          
          <td className='text'>30.00</td>
          <td className='text'>100</td>
          <td className='text'>Low</td>
          <td className='arrow'>
            <img src={arrow} alt='stepler' class = "image"></img>
          </td>
        </tr>
        <tr>
          <td><img src={steplers} alt='stepler' class = "image"></img></td>
          <td className='text'>Kangroo Staplers 0041</td>
          <td>
          <select name="category" className='warehouse'>
            <option value = "Choose Warehouse" >Choose Warehouse</option>
            <option value="Warehouse 1">Warehouse 1</option>
            <option value="Warehouse 2">Warehouse 2</option>
            <option value="Warehouse 3">Warehouse 3</option>
          </select>
          </td>
          <td className='text'>50.00</td>
          <td className='text'>50</td>
          <td className='text'>Normal</td>
          <td className='arrow'>
            <img src={arrow} alt='stepler' class = "image"></img></td>
        </tr>
        <tr>
          <td><img src={erasers} alt="eraser" class = "image"></img></td>
          <td className='text'>Apsara Erasers 0021</td>
          <td>
          <select name="category" className='warehouse'>
            <option value = "Choose Warehouse" >Choose Warehouse</option>
            <option value="Warehouse 1">Warehouse 1</option>
            <option value="Warehouse 2">Warehouse 2</option>
            <option value="Warehouse 3">Warehouse 3</option>
          </select>
          </td>
          <td className='text'>5.00</td>
          <td className='text'>200</td>
          <td className='text'>Normal</td>
          <td className='arrow'>
            <img src={arrow} alt='stepler' class = "image"></img>
          </td>
        </tr>
        <tr>
          <td><img src={pens} alt='pens' class = "image"></img></td>
          <td className='text'>Octane colored Gel Pens 0049</td>
          <td>
          <select name="category" className='warehouse'>
            <option value = "Choose Warehouse">Choose Warehouse</option>
            <option value="Warehouse 1">Warehouse 1</option>
            <option value="Warehouse 2">Warehouse 2</option>
            <option value="Warehouse 3">Warehouse 3</option>
          </select>
          </td>
          <td className='text'>80.00</td>
          <td className='text'>200</td>
          <td className='text'>High</td>
          <td className='arrow'>
            <img src={arrow} alt='stepler' class = "image"></img>
            </td>
        </tr>
        <tr>
          <td><img src={scale} alt='scale' class = "image"></img></td>
          <td className='text'>Doms Scale 0046</td>
          <td>
          <select name="category" className='warehouse'>
            <option value = "Choose Warehouse">Choose Warehouse</option>
            <option value="Warehouse 1">Warehouse 1</option>
            <option value="Warehouse 2">Warehouse 2</option>
            <option value="Warehouse 3">Warehouse 3</option>
          </select>
          </td>
          <td className='text'>15.00</td>
          <td className='text'>150</td>
          <td className='text'>Normal</td>
          <td className='arrow'><img src={arrow} alt='stepler' class = "image"></img></td>
        </tr>
        <tr>
          <td><img src={trimax} alt='trimax' class = "image"></img></td>
          <td className='text'>Trimax Blue Pen 0019</td>
          <td>
          <select name="category" className='warehouse'>
            <option value = "Choose Warehouse">Choose Warehouse</option>
            <option value="Warehouse 1">Warehouse 1</option>
            <option value="Warehouse 2">Warehouse 2</option>
            <option value="Warehouse 3">Warehouse 3</option>
          </select>
          </td>
          <td className='text'>50.00</td>
          <td className='text'>100</td>
          <td className='text'>High</td>
          <td className='arrow'><img src={arrow} alt='stepler' class = "image"></img></td>
        </tr>
        <tr>
          <td><img src={erasners} alt='erasners' class = "image"></img></td>
          <td className='text'>Doms Erasners 0049</td>
          <td>
          <select name="category" className='warehouse'>
            <option value = "Choose Warehouse" >Choose Warehouse</option>
            <option value="Warehouse 1">Warehouse 1</option>
            <option value="Warehouse 2">Warehouse 2</option>
            <option value="Warehouse 3">Warehouse 3</option>
          </select>
          </td>
          <td className='text'>10.00</td>
          <td className='text'>50</td>
          <td className='text'>Normal</td>
          <td className='arrow'><img src={arrow} alt='stepler' class = "image"></img></td>
        </tr>
      </table>
    </>
  )*/
}


export default item