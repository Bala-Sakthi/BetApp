import React from 'react';
import NavLogo from "../../assets/images/Group 30.png"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 navcustom sticky-top">
            <a href="/" className="navbar-brand p-0">
                <h1 className="m-0"> <img src={NavLogo} alt="Logo" /></h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ms-auto py-0">
                    <li className="nav-item"><a href="/" className="nav-link active homeLink">Home</a></li>
                    <li className="nav-item"><a href="/" className="nav-link aboutLink">Coach Position</a></li>
                    <li className="nav-item"><a href="/" className="nav-link featuresLink">Pnr Status</a></li>
                    <li className="nav-item"><a href="/" className="nav-link pricingLink">Live Train</a></li>
                </ul>
                <a href="" target="_blank" className="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3" rel="noopener noreferrer">More Feature</a>
            </div>
        </nav>
    );
}

export default Navbar;
