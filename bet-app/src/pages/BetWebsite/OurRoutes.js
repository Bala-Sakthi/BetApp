
import React from 'react'
import Hydrabad from '../../assets/images/Hydrabad.jpg'
import Pune from '../../assets/images/Pune.jpg'
import Chennai from '../../assets/images/Chennai.webp'
import Bangalore from '../../assets/images/Bangalore.avif'
export const OurRoute = () => {
  return (
    <>
     <div className="container-xxl py-5" id="pricingDiv">
      <div className="container px-lg-5">
        <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
          <h2 className="mt-2">Our Routes</h2>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="card">
              <img src={ Chennai} className="card-img-top" alt="Chennai" />
              <div className="card-body">
                <h5 className="card-title">Chennai</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="card">
              <img src={Bangalore} className="card-img-top" alt="Bangalore" width="311px" height="195px" />
              <div className="card-body">
                <h5 className="card-title">Bangalore</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="card">
              <img src={Hydrabad} className="card-img-top" alt="Hyderabad" width="311px" height="195px" />
              <div className="card-body">
                <h5 className="card-title">Hyderabad</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="card">
              <img src={Pune} className="card-img-top" alt="Pune" width="311px" height="195px" />
              <div className="card-body">
                <h5 className="card-title">Pune</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    
    </>
  )
}
