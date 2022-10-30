import React from 'react'
import "./App.css"
import {  Link } from 'react-router-dom'

const About = (props) => {
  return (
    <>
<div style={{backgroundColor:"rgba(253, 207, 90)" , height:"350px" }}>
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
        </nav>
        <center><h1 className='abouth1'>حلواني براونيز</h1></center>
        <center><p className='aboutp1'>حلواني براونيز من اشهر محلات الحلو في الوطن العربي</p></center>
        <center><h1 className='abouth2'>2009-2011 Our Humble Beginnings</h1></center>
        <center><p className='aboutp2'>The shop was opened in 2020, and since that time it offers the most delicious and delicious sweets!</p></center>
    

    
    
    
    
        </div>
    
    </>
  )
}

export default About