import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 navcustom sticky-top">
            <a href="/" className="navbar-brand p-0">
                <h1 className="m-0"> <img src="http://localhost:3003/static/media/Group%2093.7140d2b4e63d7e50e16c.png" alt="Logo" /></h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <a href="/" className="nav-item nav-link active homeLink">Home</a>
                    <a href="/" className="nav-item nav-link aboutLink">Coach Position</a>
                    <a href="/" className="nav-item nav-link featuresLink">Pnr Status</a>
                    <a href="/" className="nav-item nav-link pricingLink"> Live Train</a>
                </div>
                <a href="https://www.flawkapp.com/User/register" target="_blank" className="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3" rel="noopener noreferrer">More Feature</a>
            </div>
        </nav>
    );
}

export default Navbar;