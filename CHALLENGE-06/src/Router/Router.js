import React from 'react'
import {
    BrowserRouter as Browser,
    Routes,
    Route,
} from "react-router-dom";
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import LandingPage from '../Pages/LandingPage/LandingPage';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Navbar from "../Components/Navbar/Navbar";
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import Footer from "../Components/Footer/Footer";

function RouterPages() {
  return (
    <div>
        <Browser>
            <Routes>
                <Route path="/" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/landingpage" element={<LandingPage/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
                {/* <Route path="cari/detail/:id" element={<Detail/>}></Route> */}
            </Routes>
        </Browser>
    </div>
  )
}

export default RouterPages