import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'
import './Sidebar.css'
import dashboard from './dashboard.png'
import fi_truck from './fi_truck.png'
import Rectangle62 from './Rectangle-62.png'
import Rectangle63 from './Rectangle-63.png'

function Sidebar() {
    const imgRectangle63 = {
        width: '100%', height: '34px'
    }

    const imgRectangle62 = {
        width: '100px', height: '34px'
    }
    
    const mainSidebar = {
        width: '70px'
    }
    const btnActive = {
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
    }
    const btnActiveExpand = {
        backgroundColor: 'rgba(14, 11, 11, 0.3)'
    }

    const sidebar = () => {
        window.addEventListener('DOMContentLoaded', event => {

            // Toggle the side navigation
            const sidebarToggle = document.body.querySelector('#sidebarToggle');
            if (sidebarToggle) {
                // Uncomment Below to persist sidebar toggle between refreshes
                // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
                //     document.body.classList.toggle('sb-sidenav-toggled');
                // }
                sidebarToggle.addEventListener('click', event => {
                    event.preventDefault();
                    document.body.classList.toggle('sb-sidenav-toggled');
                    localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains(
                        'sb-sidenav-toggled'));
                });
            }

        });
    }
    return (
        <Fragment>
            <div class="d-flex" >
                <div class="main-sidebar d-flex flex-column" style={mainSidebar}>
                <a href="/" class="d-block p-3 text-decoration-none" title="" data-bs-toggle="tooltip"
                    data-bs-placement="right" data-bs-original-title="Icon-only">
                    <img src={Rectangle63} style={imgRectangle63} alt=""/>
                    <span class="visually-hidden">Icon-only</span>
                </a>
                <ul class="nav flex-column mb-auto text-center">
                    <li class="nav-item w-100" style={btnActive}>
                    <a href="a" class="nav-link p-0 py-3" aria-current="page" title="" data-bs-toggle="tooltip"
                        data-bs-placement="right" data-bs-original-title="Dashboard">
                        <img src={dashboard} class="mb-1" alt="dashboard"/>
                        Dashboard
                    </a>
                    </li>
                    <li class="nav-item">
                    <a href="/cars" class="nav-link py-3" title="" data-bs-toggle="tooltip" data-bs-placement="right"
                        data-bs-original-title="Cars">
                        <img src={fi_truck} class="mb-1" alt="cars"/>
                        Cars
                    </a>
                    </li>
                </ul>
                </div>
                <div class="expand-sidebar d-flex flex-column" id="sidebar-wrapper">
                <a href="/" class="d-block p-3 side-header text-decoration-none" title="" data-bs-toggle="tooltip"
                    data-bs-placement="right" data-bs-original-title="Icon-only">
                    <img src={Rectangle62} style={imgRectangle62} alt=""/>
                    <span class="visually-hidden">Icon-only</span>
                </a>
                <ul class="nav flex-column mb-auto text-center">
                    <li class="nav-header px-3 py-3 mt-3">DASHBOARD</li>
                    <li class="nav-item w-100" style={btnActiveExpand}>
                    <a href="/" class="nav-link px-3 py-3" aria-current="page" title="" data-bs-toggle="tooltip"
                        data-bs-placement="right" data-bs-original-title="Dashboard">
                        Dashboard
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            <script>
                {sidebar}
            </script>
        </Fragment>
    )
}

export default Sidebar