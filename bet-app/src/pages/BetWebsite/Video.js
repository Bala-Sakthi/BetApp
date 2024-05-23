import React from 'react'
import Playvideoicon from'../../assets/images/play-button.png'
import 'animate.css';
const Video = () => {
  return (
   <>
     <div class="container-xxl bg-custom newsletter my-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container px-lg-5">
                <div class="row align-items-center" style={{height:'350px'}}>
                    <div class="col-12 col-md-6">
                        <h2 class="text-white">See how the Train on wheels  App Helped Your  train travel companion!</h2>

                        <div class="text-center">
                          
                            <img class="img-fluid mt-5" style={{height:'90px'}} data-bs-toggle="modal"
                                data-bs-target="#searchModal" src={Playvideoicon}/>
                        </div>
                    </div>
                    <div class="col-md-6 text-center mb-n5 d-none d-md-block">
                        <img class="img-fluid mt-5" style={{ height: '380px', objectFit: 'contain' }}
                            src="https://media.gettyimages.com/id/1175104957/photo/portrait-of-smiling-young-woman-at-the-train-station.webp?s=1024x1024&w=gi&k=20&c=RzBDxRKrhJA8WHTlOgJ8GIbC0_sicPEYsqq35azdSss="/>
                    </div>
                </div>
            </div>
        </div>
   
   
   </>
  )
}

export default Video