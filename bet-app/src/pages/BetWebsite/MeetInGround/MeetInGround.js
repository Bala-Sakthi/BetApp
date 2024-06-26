import React from 'react';
import Home from "../Home";
import Choose from "../Choose";
import {GetStarted }from "../GetStarted"; 
import { SportsLike } from "../SportsLike";
import DownloadApp from "../Download";
import Header from '../Header';
import Footer from '../Footer';


const MeetInGround = () => {
  return (
    <>
      <Header/>
      <Home/>
      <Choose/>
      <GetStarted/> 
      <SportsLike/>
      <DownloadApp/>
      <Footer/>
   
    </>
  );
};

export default MeetInGround;
