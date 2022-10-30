import React from 'react'
import "./App.css"

import {  Link } from 'react-router-dom'

const Navbar = () => {
  return (
      

<nav  className ="navbar navbar-expand-lg ">
  <div className ="container">
    <Link className='bicon'><i className="fa-duotone fa-b"></i></Link>
    <Link className ="navbar-brand" to="/">Brownies</Link>
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className ="navbar-toggler-icon"></span>
    </button>
    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className ="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className ="nav-item">
          <Link className ="nav-link" to="/Contact">اتصل بنا</Link>
        </li>
        <li className="nav-item">
          <Link className ="nav-link" to="/About">عن الموقع</Link>
        </li>
      <li className ="nav-item">
          <Link className="nav-link" to="/Bakery">مخبوزات</Link>
        </li>
        <li className="nav-item">
          <Link className="cc nav-link" to="/Oriental"> قسم الشرقي</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Gateux">قسم الغربي</Link>
        </li>

        </ul>
    
        </div>
        </div>
        <div className="navImg"></div>
        <h1 className="h">Welcome To Our Brownies!</h1>
        <h1 className="h1">IT'S NICE TO MEET YOU</h1>
        <button type="button" className="btn btn-warning">Tell Me More</button>

        </nav>












  )
}

export default Navbar