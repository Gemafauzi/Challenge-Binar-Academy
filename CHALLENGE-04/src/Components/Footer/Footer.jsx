import React from 'react'
import './Footer.css'
import { FaFacebookF,FaInstagram ,FaTwitter,FaSquare} from 'react-icons/fa';
import { FiMail,FiTwitch } from 'react-icons/fi';

const Footer = () => {
  return (
    <div>
        <footer className="py-5 px-3">
            <div className="container d-flex flex-column flex-md-row">
                <div className="col-6 col-sm-5 font-14">
                    <p>Jalan Suroyo No. 161 Mayangan Kota<br/> Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>
                <div className="col-6 col-sm-2 font-14">
                    <ul className="p-0">
                        <li className="mb-2">Our service</li>
                        <li className="my-2">Why us</li>
                        <li className="my-2">Testimonial</li>
                        <li className="my-2">FAQ</li>
                    </ul>
                </div>
                <div className="col-12 col-sm-3 font-14">
                    <p>Connect with us</p>
                    <div className="d-flex" style={{gap: `5px`}}>
                        <div className="circle-logo mb-3 icon">
                            <FaFacebookF style={{color:`white`}}/>
                        </div>
                        <div className="circle-logo mb-3 icon">
                            <FaInstagram style={{color:`white`}}/>
                        </div>
                        <div className="circle-logo mb-3 icon">
                            <FaTwitter style={{color:`white`}}/>
                        </div>
                        <div className="circle-logo mb-3 icon">
                            <FiMail style={{color:`white`}}/>
                        </div>
                        <div className="circle-logo mb-3 icon">
                            <FiTwitch style={{color:`white`}}/>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-4 font-14">
                    <FaSquare/>
                    <p>Copyright by Binar</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer