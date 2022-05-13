import React from "react";
import { Link } from "react-router-dom";
import style from "./footer.module.css";

const Footer = () => {
	return (
		<section className="footer">
			<div className="container text-center text-md-start mt-5 footer-container">
				<div className="row mt-3">
					<div className="col-md-3 col-lg-4 col-xl-3 mb-4 text-left">
						<h6 className="text p-0 py-2">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h6>
						<p className="text p-0 my-2 py-2">binarcarrental@gmail.com</p>
						<p className="text p-0 my-2 py-2">081-233-334-808</p>
					</div>

					<div className="col-md-2 col-lg-2 col-xl-2 mb-4 text-left">
						<p>
							<Link to="/" className="text-reset text-2">
								Our service
							</Link>
						</p>
						<p>
							<Link to="/" className="text-reset text-2">
								Why Us
							</Link>
						</p>
						<p>
							<Link to="/" className="text-reset text-2">
								Testimonial
							</Link>
						</p>
						<p>
							<Link to="#" className="text-reset text-2">
								FAQ
							</Link>
						</p>
					</div>
					<div className="col-md-3 col-lg-3 mx-auto mb-6">
						<h6 className="text mb-4 p-0 mx-4">Connect with us</h6>
						<div className="container icon_container">
							<Link to="https://facebook.com/">
								<img src="/image/icons/icon_facebook.png" alt="Facebook" className={style.icon_container} />
							</Link>
							<Link to="https://www.instagram.com/">
								<img src="/image/icons/icon_instagram.png" alt="Instagram" className={style.icon_container} />
							</Link>
							<Link to="https://twitter.com/">
								<img src="/image/icons/icon_twitter.png" alt="Twitter" className={style.icon_container} />
							</Link>
							<Link to="https://mail.google.com/">
								<img src="/image/icons/icon_mail.png" alt="Mail" className={style.icon_container} />
							</Link>
							<Link to="https://www.twitch.tv/">
								<img src="/image/icons/icon_twitch.png" alt="Twitch" className={style.icon_container} />
							</Link>
						</div>
					</div>
					<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
						<h6 className="text mb-4 p-0 mx-4">Copyright Binar 2022</h6>
						<img src="/image/binar_2.png" alt="binar logo" className={style.footer_logo} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
