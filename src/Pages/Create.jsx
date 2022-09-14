import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Create() {

  const [name, setName] = useState("");
  const [age,setAge] = useState();

 

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name",name);
    console.log("age",age);
  }
   
     return (
      <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={age} 
          onChange={(e) => setAge(e.target.value)}
        />
        </label>
        <input type="submit" />
    </form>
    )
}