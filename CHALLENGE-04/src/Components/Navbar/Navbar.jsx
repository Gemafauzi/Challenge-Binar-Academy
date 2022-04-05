import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container d-flex justify-content-between">
          <Link to='/' className="navbar-brand">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <div className="navbar-nav d-flex flex-row align-items-center">
            <a class="nav-link" href="#service-section">Our Services<span class="sr-only"></span></a>
            <a class="nav-link" href="#Why-us">Why Us</a>
            <a class="nav-link" href="#testimonial-section">Testimonial</a>
            <a class="nav-link" href="#FAQ">FAQ</a>
            <form class="form-inline my-2 my-lg-0">
             <button class="btn btn-success my-2 my-sm-0" type="submit">Register</button>
            </form>
            </div>
           </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar