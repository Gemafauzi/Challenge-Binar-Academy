import React from "react";
import style from "./admin.module.css";
import { Link } from "react-router-dom";

const Admin = () => {
	return (
		<>
			<div className="main_container">
				<div className="row">
					{/* sidebar start */}
					<div className={`col-lg-1 col-12 ${style.sidebar_container}`}>
						<div id="sidebar">
							<div className={`${style.main_nav} text-center`}>
								<img src="/image/binar_placeholder.png" alt="sidebar_logo" className={style.sidebar_logo} />
								<div className={`${style.main_nav_itexm} ${style.homepage_home_container}`}>
									<i className={`bx bx-home-alt ${style.home_icon}`}></i>
									<div className="">
										<Link to="#" className={style.home_text}>
											Dashboard
										</Link>
									</div>
								</div>
								<div className={`${style.main_nav_item} ${style.homepage_truck_container}`}>
									<i className={`bx bxs-truck ${style.truck_icon}`}></i>
									<div className="">
										<a href="/cars" className={style.truck_text}>
											Cars
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* expand sidebar start */}
					<div className={`${style.sidebar_expand} col-lg-2`}>
						<div className={style.expand_logo_container}>
							<img src="/image/binar.png" alt="" className={style.expand_logo} />
						</div>
						<div className={style.expand_title}>
							<h4>Dashboard</h4>
						</div>
						<div className={style.block_sub_title}>
							<h4>Dashboard</h4>
						</div>
					</div>
					<div className="col">
					<div class="content container-fluid ">
                    <p class="link-page my-4">
                    Dashboard <i class="fa-solid fa-angle-right ms-1"></i> <span>Dashboard</span>
                    </p>
                    <h1 class="title mb-4">Dashboard</h1>
                    <div class="child-title mb-3">
                    <h3>List Order</h3>
                    </div>
                    <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">User Email</th>
                            <th scope="col">Car</th>
                            <th scope="col">Start Rent</th>
                            <th scope="col">Finish Rent</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div class="link-page">
                    <div class="row">
                        <div class="list-select col-md-1">
                        <p>Limit</p>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>10</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        </div>
                        <div class="list-select col-md-2">
                        <p>Jump to Page</p>
                        <div class="d-flex">
                            <select class="form-select" aria-label="Default select example">
                            <option selected>1</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                            <button class="btn btn-primary" type="submit">Go</button>
                        </div>
                        </div>
                        <div class="col-md-4"></div>
                        <div class="col-md-5">
                        <nav aria-label="Page navigation">
                            <ul class="pagination pagination-md justify-content-end">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                <i class="fa-solid fa-angles-left"></i>
                                </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">...</a></li>
                            <li class="page-item"><a class="page-link" href="#">9</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                <i class="fa-solid fa-angles-right"></i>
                                </a>
                            </li>
                            </ul>
                        </nav>
                        </div>
                    </div>
                    </div>

                    <div class="child-title mb-3 mt-4">
                    <h3>List Car</h3>
                    </div>
                    <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Price</th>
                            <th scope="col">Start Rent</th>
                            <th scope="col">Finish Rent</th>
                            <th scope="col">Created at</th>
                            <th scope="col">Updated at</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Name</td>
                            <td>Category</td>
                            <td>Price</td>
                            <td>-</td>
                            <td>-</td>
                            <td>Created at</td>
                            <td>Updated at</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Name</td>
                            <td>Category</td>
                            <td>Price</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Created at</td>
                            <td>Updated at</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Name</td>
                            <td>Category</td>
                            <td>Price</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Created at</td>
                            <td>Updated at</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Name</td>
                            <td>Category</td>
                            <td>Price</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Created at</td>
                            <td>Updated at</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Name</td>
                            <td>Category</td>
                            <td>Price</td>
                            <td>-</td>
                            <td>-</td>
                            <td>Created at</td>
                            <td>Updated at</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Name</td>
                            <td>Category</td>
                            <td>Price</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Created at</td>
                            <td>Updated at</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Name</td>
                            <td>Category</td>
                            <td>Price</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Created at</td>
                            <td>Updated at</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Name</td>
                            <td>Category</td>
                            <td>Price</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Created at</td>
                            <td>Updated at</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Name</td>
                            <td>Category</td>
                            <td>Price</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Created at</td>
                            <td>Updated at</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Name</td>
                            <td>Category</td>
                            <td>Price</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Created at</td>
                            <td>Updated at</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div class="link-page">
                    <div class="row">
                        <div class="list-select col-md-1">
                        <p>Limit</p>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>50</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        </div>
                        <div class="list-select col-md-2">
                        <p>Jump to Page</p>
                        <div class="d-flex">
                            <select class="form-select" aria-label="Default select example">
                            <option selected>1</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>
                            <button class="btn btn-primary" type="submit">Go</button>
                        </div>
                        </div>
                        <div class="col-md-4"></div>
                        <div class="col-md-5">
                        <nav aria-label="Page navigation">
                            <ul class="pagination pagination-md justify-content-end">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                <i class="fa-solid fa-angles-left"></i>
                                </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">...</a></li>
                            <li class="page-item"><a class="page-link" href="#">9</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                <i class="fa-solid fa-angles-right"></i>
                                </a>
                            </li>
                            </ul>
                        </nav>
                        </div>
                    </div>
                    </div>
                </div>
					</div>
					{/* navbar start */}
					{/* main content start */}
				</div>
			</div>
		</>
	);
};

export default Admin;
