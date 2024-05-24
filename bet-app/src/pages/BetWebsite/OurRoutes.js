
import React from 'react'
import Cricket from '../../assets/images/Crickets.png'
import Volleyball from '../../assets/images/Volleyball.png'
import Football from '../../assets/images/Football.png'
import Basketball from '../../assets/images/basketball.png'
export const OurRoute = () => {
  return (
    <>
     <div className="container-xxl py-5" id="pricingDiv">
      <div className="container px-lg-5">
        <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
          <h2 className="mt-2">Sports Like...</h2>
        </div>
        <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="card" style={{borderRadius:"15px"}}>
              <img src={Cricket} className="card-img-top" alt="Bangalore" width="311px" height="195px" />
              <div className="card-body">
                <h5 className="card-title">Cricket</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="card" style={{borderRadius:"15px"}}>
              <img src={Volleyball} className="card-img-top" alt="Hyderabad" width="311px" height="195px" />
              <div className="card-body">
                <h5 className="card-title">Volleyball</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="card" style={{borderRadius:"15px"}}>
              <img src={Football} className="card-img-top" alt="Bangalore" width="311px" height="195px" />
              <div className="card-body">
                <h5 className="card-title">Football</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="card" style={{borderRadius:"15px"}}>
              <img src={Basketball} className="card-img-top" alt="Hyderabad" width="311px" height="195px" />
              <div className="card-body">
                <h5 className="card-title">Basketball</h5>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="card">
              <img src={""} className="card-img-top" alt="Pune" width="311px" height="195px" />
              <div className="card-body">
                <h5 className="card-title">Pune</h5>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    
    
    
    </>
  )
}
