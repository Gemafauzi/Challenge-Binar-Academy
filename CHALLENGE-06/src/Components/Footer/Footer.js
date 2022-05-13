import React from "react";
import "./Footer.css"
import { Container, Row, Col } from "reactstrap";
import fb from '../../img/icon_facebook.svg'
import ig from '../../img/icon_instagram.svg'
import mail from '../../img/icon_mail.svg'
import twitch from '../../img/icon_twitch.svg'
import tw from '../../img/icon_twitter.svg'
import logo from '../../img/logo.svg'

class Footer extends React.Component {
    render(){
        return (
            <footer>
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3">
                        <div class="col list-footer info">
                            <ul>
                                <li>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</li>
                                <li>binarcarrental@gmail.com</li>
                                <li>081-233-334-808</li>
                            </ul>
                        </div>
                        <div class="col list-footer menu d-flex justify-content-center">
                            <ul>
                                <li><a href="#srv">Our services</a></li>
                                <li><a href="#why">Why Us</a></li>
                                <li><a href="#testi">Testimonial</a></li>
                                <li><a href="#faq">FAQ</a></li>
                            </ul>
                        </div>
                        <div class="col list-footer social">
                            <p>Connect with us</p>
                            <ul class="d-flex align-items-center flex-wrap list-social">
                                <li><a href=""><img src={fb} alt=""/></a></li>
                                <li><a href=""><img src={ig} alt=""/></a></li>
                                <li><a href=""><img src={tw} alt=""/></a></li>
                                <li><a href=""><img src={mail} alt=""/></a></li>
                                <li><a href=""><img src={twitch} alt=""/></a></li>
                            </ul>
                        </div>
                        <div class="col copyright">
                            <p>Copyright Binar 2022</p>
                            <img src={logo} alt=""/>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer