import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
    <h1>Home Page</h1>
    <br />
    <ul>
      <li>
        {/* Endpoint to route to Home component */}
        <Link exact to="/">Home</Link>
      </li>
      <li>
        {/* Endpoint to route to About component */}
        <Link to="/about">About</Link>
      </li>
      <li>
        {/* Endpoint to route to Contact Us component */}
        <Link to="/contactus">Contact Us</Link>
      </li>

      <li>
        {/* Endpoint to route to Create component */}
        <Link to="/create">Create</Link>
      </li>
      <li>
        <Link to="/Items">items</Link>
      </li>
    </ul>
  </div>
  )
}

export default Home
