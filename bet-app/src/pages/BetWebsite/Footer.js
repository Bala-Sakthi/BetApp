import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
function Footer() {
    return (
        <div className="container-fluid bg-custom text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s" style={{ marginTop: "0px !important" }}>
            <div className="container py-5 px-lg-5">
                <div className="row g-5">
                <div className="col-md-6 col-lg-5">
    <h5 className="text-white mb-4">Get In Touch</h5>
    <p><i className="fas fa-map-marker-alt me-3"></i>Tirupathur,Tamil Nadu 635653</p>
    <p><i className="fas fa-phone-alt me-3"></i>+91 6381475573</p>
    <p><i className="fas fa-envelope me-3"></i>trainsonwheel@gmail.com</p>
    <div className="d-flex pt-2">
        <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-twitter"></i></a>
        <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-facebook-f"></i></a>
        <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-youtube"></i></a>
        <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-instagram"></i></a>
        <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-linkedin-in"></i></a>
    </div>
</div>

                    <div className="col-md-6 col-lg-3">
                        <h5 className="text-white mb-4">Useful Link</h5>
                        <a className="btn btn-link" href="">About Us</a>
                        <a className="btn btn-link" href="">Faq</a>
                        <a className="btn btn-link" href="">Privacy Policy</a>
                        <a className="btn btn-link" href="">Terms & Condition</a>
                       
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h5 className="text-white mb-4">For MeetInGround</h5>
                        <p>"Gain immediate access to reliable, genuine, and up-to-the-minute details regarding sports events and games. Discover live match updates, schedules, player statistics, betting options, and much more, all at your convenience."</p>

                        <div className="position-relative w-100 mt-3">
                         
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-lg-5">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-12 text-center mb-3 mb-md-0">
                            <a className="border-bottom" href="#">Copyright © 2024 -MeetInGround<br/> </a>
                            <a className="border-bottom" href="#">All rights Reserved </a>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;