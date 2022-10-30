import React from 'react'
import "./App.css"
import {Link}from 'react-router-dom'

// import sayed from "./puplic/images/40 .60 .png"

const  Gateux = () => {
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
    
  <div  >
<center><h1 className=' cardh'>قسم الغربي</h1></center>
    <div className='aa'>
  <div className=" card col-lg-3" >
  <img src='images\تارت اوريو.jpg' className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">تارت اوريو</h5>
    <Link to="#" className=" cardbutton btn btn-primary">Buy</Link>
  </div>
</div>
<div className="card col-lg-3" >
  <img src="images\تورت 2.png" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">تورته كريمة</h5>
    <Link to="#" className=" cardbutton  btn btn-primary">Buy</Link>
  </div>
</div>
<div className="card col-lg-3" >
  <img src="images\فادج.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title" >فادج كيك</h5>
    <Link to="#" className=" cardbutton btn btn-primary">Buy</Link>
  </div>
</div>
<div className="card col-lg-3" >
  <img  src='images\تورته شيكولاته.jpg'  className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title" >فادج كيك</h5>
    <Link to="#" className=" cardbutton btn btn-primary">Buy</Link>
  </div>
</div>
</div>
</div>

<div className='aa'>
  <div className=" card col-lg-3" >
  <img src='images\تورته يوني كورن.png' className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">تورتة يونيكورن</h5>
    <Link to="#" className=" cardbutton btn btn-primary">Buy</Link>
  </div>
</div>
<div className="card col-lg-3" >
  <img src="images\تورته سكر رقم 21.png" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">تورته سكر</h5>
    <Link to="#" className=" cardbutton  btn btn-primary">Buy</Link>
  </div>
</div>
<div className="card col-lg-3" >
  <img src="images\اكلير.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title" >اكلير شوكلت</h5>
    <Link to="#" className=" cardbutton btn btn-primary">Buy</Link>
  </div>
</div>
<div className="card col-lg-3" >
  <img src="images\سويسرول.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">جاتو سويسرول</h5>
    <Link to="#" className=" cardbutton btn btn-primary">Buy</Link>
  </div>
</div>
</div>


   
    </>
     
  )
}

export default  Gateux 