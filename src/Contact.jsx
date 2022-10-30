import React from 'react'
import "./App.css"
import {Link}from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <nav  className ="navbar navbar-expand-lg ">
  <div className ="container">
    <Link className='bicon'><i class="fa-duotone fa-b"></i></Link>
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
    <div style={{ backgroundColor: "rgb(63, 60, 60)"}} >
      <center><h1 className='ch'>Contact Us</h1></center>
      <div className='sss'>
      <form style={{width:"1000px" , margin:"auto" , }} className="row g-3">
  <div className="col-md-4">
    <label htmlFor="validationDefault01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationDefault01" placeholder='Type Your First Name' required />
  </div>
  <div className="col-md-4">
    <label htmlFor="validationDefault02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationDefault02" placeholder='Type Your Last Name'  required />
  </div>
  <div className="col-md-4">
    <label htmlFor="validationDefaultUsername" className="form-label" >Username</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2" >@</span>
      <input type="text" className="form-control" id="validationDefaultUsername" placeholder='Type Your Username' aria-describedby="inputGroupPrepend2" required />
    </div>
  </div>
  <div className="col-md-6">
    <label htmlFor="validationDefault03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationDefault03" placeholder='Type Your City' required />
  </div>
  <div className="col-md-3">
    <label htmlFor="validationDefault04" className="form-label">State</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationDefault05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationDefault05" required />
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
      <label className="form-check-label" htmlFor="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
</div>
    </div>
    </>
  )
}

export default Contact