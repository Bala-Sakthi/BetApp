
import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Headerimage from '../../assets/images/Flawk-Img-17-nove-3-min-e1605893129800.png'
import 'animate.css/animate.min.css';
const Home = () => {
  return (
    <>
     <div className="container-xxl position-relative p-0" id="homeDiv" style={{marginTop:'59px'}}>
      <div className="container-xxl py-5 bg-custom hero-header mb-5">
        <Container className="my-5 py-5 px-lg-5">
          <Row className="g-5 py-5">
            <Col lg={6} className="text-center text-lg-start">
              <h1 className="text-white mb-4 animated zoomIn" style={{ fontSize: '55px' }}>An easier way<br /> to manage your<br /> trips!</h1>
              <p className="text-white pb-3 animated zoomIn">Our innovative app is the ideal way to plan and keep track of your travel.</p>
              <Button href="" target="_blank" className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Download Now</Button>
            </Col>
            <Col lg={6} className="text-center text-lg-start">
              <Image fluid src={Headerimage} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    
    
    </>
  )
}

export default Home
