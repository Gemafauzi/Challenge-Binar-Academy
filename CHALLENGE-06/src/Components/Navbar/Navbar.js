import React from 'react'
import './Navbar.css'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    render () {
        return (
            <header className="sticky-top">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                            <img className="img-brand" src={logo} alt="logo"/>
                        </Link>
                        <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item px-2">
                                    <a className="nav-link active " href="#srv">Our Service</a>
                                </li>
                                <li className="nav-item px-2">
                                    <a className="nav-link" href="#why">Why Us</a>
                                </li>
                                <li className="nav-item px-2">
                                    <a className="nav-link" href="#testi">Testimonial</a>
                                </li>
                                <li className="nav-item px-2">
                                    <a className="nav-link" href="#faq">FAQ</a>
                                </li>
                                <li className="nav-item px-2">
                                    <a className="btn btn-login btn-success" href="#">Register</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Navbar
