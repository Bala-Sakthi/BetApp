
import React from 'react';
import Downloadicon from "../../assets/images/download.png"
import Workstep from "../../assets/images/Workmap.png"
export const Work = () => {
  return (
    <div className="container-xxl py-5" id="featuresDiv">
      <div className="container px-lg-5">
        <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="mt-2">How it Works</h1>
        </div>
        <div className="row text-center justify-content-center">
          <img className="img-fluid flex-shrink-0" src={Workstep} style={{ width: '65%', height: '70px', objectFit: 'contain', marginBottom: '30px' }} />
        </div>

        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
              <div className="flex-shrink-0">
                <img className="img-fluid flex-shrink-0" src={Downloadicon} style={{ width: '70px', height: '70px', objectFit: 'contain', marginBottom: '30px' }} />
              </div>
              <h5 className="mb-3">Step 1: Download app</h5>
              <p>First Things is Download Trains on Wheels App from playstore</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
              <div className="flex-shrink-0">
                <img className="img-fluid flex-shrink-0" src={Downloadicon} style={{ width: '70px', height: '70px', objectFit: 'contain', marginBottom: '30px' }} />
              </div>
              <h5 className="mb-3">Step 2: Choose Your services</h5>
              <p>Find all the information you need to plan your journey with Trains On Wheels app</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
              <div className="flex-shrink-0">
                <img className="img-fluid flex-shrink-0" src={Downloadicon} style={{ width: '70px', height: '70px', objectFit: 'contain', marginBottom: '30px' }} />
              </div>
              <h5 className="mb-3">Step 3: Arrive Your Destination</h5>
              <p>Get to your destination quickly and safely – you can enjoy with the Journey</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
