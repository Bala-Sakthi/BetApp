import React from 'react'
import Download from '../../assets/images/downloadapp.png'
const DownloadApp = () => {
  return (
    <>
  
  
    <div className="container-xxl py-5">
      <div className="container px-lg-5">
        <div className="row g-5">
          <div className="col-lg-6">
            <img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src={Download} alt="Flawk" />
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="section-title position-relative mb-4 pb-2">
              <h1 className="mt-2"><br /><br />Download Our App</h1>
            </div>
            <p className="mb-4">Wherever you're going, we're right there with you</p>
            <p>"Download the Bet and Play app today. Get access to trusted, authentic, and real-time information about sports events, game schedules, betting odds, player stats, and more at your fingertips."</p>
            <img src="https://tow-admin-web.onrender.com/static/media/play-store-badge-en.471c6e6366da0bee65f0.webp" alt="playstore" srcSet="" width="200px" />
            <img src="https://www.avantiwestcoast.co.uk/-/media/images/android-rating.png?h=29&w=118" alt="android-rating" srcSet="" />
          </div>
        </div>
      </div>
    </div>
  
 
    
    </>
  )
}

export default DownloadApp