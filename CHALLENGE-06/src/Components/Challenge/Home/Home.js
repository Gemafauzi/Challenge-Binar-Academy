import React from "react";
import style from "../Navbar/navbar.module.css";
import sharedStyle from "../User/additional.module.css";
import { Link } from "react-router-dom";
import "bootstrap/js/src/collapse.js";
import { useSelector } from "react-redux";

const Home = () => {
	const userIslogged = useSelector((store) => store.user.data);

	return (
		<>
			<header>
				<nav className={`navbar navbar-expand-lg navbar-light ${style.navbar_bg}`}>
					<div className="container-fluid navbar-container">
						<Link to="#" className="navbar-brand navbar_left">
							<img src="/image/binar_2.png" alt="binarlogo" className={style.image_navbar} />
						</Link>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className={`collapse navbar-collapse ${style.navbar_groups}`} id="navbarNavAltMarkup">
							<div className="navbar-nav">
								{userIslogged === null && (
									<Link to="#" className="nav-link active" href="#">
										OUR SERVICE <span className="sr-only"></span>
									</Link>
								)}

								{userIslogged === null && (
									<Link to="#" className="nav-link active" href="#">
										WHY US
									</Link>
								)}

								{userIslogged === null && (
									<Link to="#" className="nav-link active" href="#">
										Testimonial
									</Link>
								)}
								{userIslogged === null && (
									<Link to="#" className="nav-link active" href="#">
										FAQ
									</Link>
								)}

								<Link to="/login">
									<button className={`${sharedStyle.buttons} ${style.btn_navbar}`}>LOGIN</button>
								</Link>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Home;
