
import React from 'react';
import Login from "../../assets/images/loginimg.png"
import Post from "../../assets/images/postimg.png"
import Play from "../../assets/images/playimg.png"

import Workstep from "../../assets/images/workmaps.png"


export const Work = () => {
  return (
    <div className="container-xxl py-5" id="featuresDiv">
      <div className="container px-lg-5">
        <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="mt-2">Get Started</h1>
        </div>
        <div className="row text-center justify-content-center">
          <img className="img-fluid flex-shrink-0" src={Workstep} style={{ width: '65%', height: '70px', objectFit: 'contain', marginBottom: '30px' }} />
        </div>

        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
              <div className="flex-shrink-0">
                <img className="img-fluid flex-shrink-0" src={Login} style={{ width: '70px', height: '70px', objectFit: 'contain', marginBottom: '30px' }} />
              </div>
              <h5 className="mb-3">Step 1: Login</h5>
              <p>"Log-in to the Bet and Play app to elevate your betting experience. Download it now from the Play Store."</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
              <div className="flex-shrink-0">
                <img className="img-fluid flex-shrink-0" src={Post} style={{ width: '70px', height: '70px', objectFit: 'contain', marginBottom: '30px' }} />
              </div>
              <h5 className="mb-3">Step 2: Post</h5>
              <p>"Discover all you need to boost your betting experience with the Bet and Play app, your ultimate partner for games and sports."</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
            <div className="service-item d-flex flex-column justify-content-center text-center rounded">
              <div className="flex-shrink-0">
                <img className="img-fluid flex-shrink-0" src={Play} style={{ width: '70px', height: '70px', objectFit: 'contain', marginBottom: '30px' }} />
              </div>
              <h5 className="mb-3">Step 3: Play</h5>
              <p>"Get to your winning destination quickly and safely – you can enjoy every step of the journey with our Bet and Play app."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
