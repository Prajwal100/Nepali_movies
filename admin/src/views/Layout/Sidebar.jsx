import React from "react";
import {Link} from 'react-router-dom'
const Sidebar = () => {
  return <React.Fragment>
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

<Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</Link>

<hr className="sidebar-divider my-0" />

<li className="nav-item active">
    <Link to="/" className="nav-link" >
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></Link>
</li>

<hr className="sidebar-divider" />

<div className="sidebar-heading">
    Interface
</div>

<li className="nav-item">
    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i className="fas fa-users"></i>
        <span>Celebrities</span>
    </Link>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
            <Link className="collapse-item" to="/admin/celebrities">All Celebrity</Link>
            <Link className="collapse-item" to="/admin/celebrity/create">Add Celebrity</Link>
        </div>
    </div>
</li>

<li className="nav-item">
    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseMovie"
        aria-expanded="true" aria-controls="collapseMovie">
        <i className="fas fa-image"></i>
        <span>Movies</span>
    </Link>
    <div id="collapseMovie" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
            <Link className="collapse-item" to="/admin/movies">All Movies</Link>
            <Link className="collapse-item" to="/admin/movie/create">Add Movie</Link>
        </div>
    </div>
</li>
<li className="nav-item">
    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseSettings"
        aria-expanded="true" aria-controls="collapseSettings">
        <i className="fas fa-cog"></i>
        <span>Settings</span>
    </Link>
    <div id="collapseSettings" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
        <div className="bg-white py-2 collapse-inner rounded">
            <Link className="collapse-item" to="">All Movies</Link>
            <Link className="collapse-item" to="cards.html">Add Movie</Link>
        </div>
    </div>
</li>
<div className="text-center d-none d-md-inline">
    <button className="rounded-circle border-0" id="sidebarToggle"></button>
</div>


</ul>
  </React.Fragment>;
};

export default Sidebar;
