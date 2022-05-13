import React from "react";
import './Register.css'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div class="wrap row m-0">
            <div class="col-md-8 img p-0">
                <div class="layer ">
                </div>
            </div>

            <div class="col-md-4 form my-auto">
                <div class="container">
                    <h3 class="mb-3">Binar Car Rental</h3>
                    <h2 class="mb-3">Welcome, Sahabat BCR</h2>
                    {/* <div class="alert alert-danger d-flex" role="alert">
                        <i class="fa-solid fa-circle-exclamation me-2 mt-1"></i>
                        <span>Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.</span>
                    </div> */}
                    <form action="/" method="POST">
                        <label for="email" class="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control mb-2"
                            placeholder="Contoh: johndee@gmail.com"
                            // value={auth.email}
                            // onChange={handleChange}
                            />

                        <label for="password" class="form-label">Password</label>
                        <input
                        type="password"
                        name="password"
                        className="form-control mb-4"
                        aria-describedby="passwordHelpBlock"
                        placeholder="6+ karakter"
                        // value={auth.password}
                        // onChange={handleChange}
                        />

                        <Link to="/landingpage" type="submit" class="btn btn-primary w-100">Sign Up</Link>
                    </form>
                    <p>Sudah punya akun? <Link to="/"><a>Login</a></Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Register