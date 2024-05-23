
import React from 'react'
import Chooseimage from '../../assets/images/Flawk-img-0-min-e1605868710883.png'
import 'animate.css/animate.min.css'
const Choose = () => {
  return (
  <>
   <div class="container-xxl py-5" id="aboutDiv">
            <div class="container px-lg-5">
                <div class="row g-5">
                    <div class="col-lg-6  fade-in-up" data-wow-delay="0.1s">
                        <div class="section-title position-relative mb-4 pb-2">
                            
                            <h1 class="mt-2"><br/>why choose with Trains on wheels services
                            </h1>
                        </div>
                        <p class="mb-4">Trains on Wheels: Your Ultimate Companion for Indian Railways - Seamlessly book tickets, reserve preferred seats, modify travel details, receive live updates, and earn rewards, all in one convenient app!
                        </p>
                        
                        <div class="d-flex align-items-center mt-4">
                            <a class="btn btn-primary rounded-pill px-4 me-3 btn-new"
                                href="https://www.flawkapp.com/User/register" target="_blank">Get Started</a>
                           
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <img class="img-fluid animated zoomIn" data-wow-delay="0.5s"
                            src={Chooseimage}/>
                    </div>
                </div>
            </div>
        </div>
  
  
  
  </>
  )
}

export default Choose
