import React from 'react'
import "./App.css" 
import {  Link } from 'react-router-dom'

const Bakery = () => {
  return (

    <>
    
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
        <center><h1 className=' cardh'>قسم المخبوزات</h1></center>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className=" carousel-b carousel-inner">
    <div className="carousel-item active">
      <img src="\images\كحك.jpg" className="carousel-imgg" alt="..." />
    </div>

    <div className="carousel-item">
      <img src="\images\بسكويت.jpg" className="carousel-imgg" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Bakery
