import React from 'react'
import Home from "../Home";
import Choose from "../Choose";
import Video from "../Video";
import { Work } from "../Work";
import { OurRoute } from "../OurRoutes";
import DownloadApp from "../Download";
import Header from '../Header';
import Footer from '../Footer';
import UpArrowButton from '../../../components/UpArrow';

const MeetInGround = () => {
  return (
    <>
   <Header/>
   <Home/>
   <Choose/>
   {/* <Video/> */}
   <Work/> 
   <OurRoute/>
   <DownloadApp/>
   <Footer/>
   <UpArrowButton/>
    </>
  )
}

export default MeetInGround
