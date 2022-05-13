import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'
import './NavbarAdmin.css'
import unis from './unis.png'

function NavbarAdmin() {
    return (
        <Fragment>
            
            <nav class="navbar navbar-expand-lg navbar-white navbar-light">
                <div class="container-fluid">
               
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" id="sidebarToggle" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                    </li>
                </ul>

                <form class="d-flex ms-auto">
                    <div class="wrap-input-search">
                    <span class="icon"><i class="fa-solid fa-magnifying-glass"></i></span>
                    <input class="form-control" id="search" type="search" placeholder="Search" aria-label="Search"/>
                    </div>
                    <button class="btn btn-outline-primary" type="submit">Search</button>
                </form>
                <div class="dropdown no-arrow">
                    <a class="btn dropdown-toggle shadow-none" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    <img class="img-profile rounded-circle" src={unis}/>
                    <span class="ms-1  d-none d-lg-inline text-gray-600 small">Unis Badri</span>
                    </a>
                
                    <div class="dropdown-menu shadow-none animated--grow-in" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">
                        <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                    </a>
                    <a class="dropdown-item" href="#">
                        <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                        Settings
                    </a>
                    <a class="dropdown-item" href="#">
                        <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                        Activity Log
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                        Logout
                    </a>
                    </div>
                </div>
                </div>
            </nav>

        </Fragment>
    )
}

export default NavbarAdmin