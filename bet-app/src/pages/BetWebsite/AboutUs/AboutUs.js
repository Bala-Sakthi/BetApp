import React, { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import CountUp from "react-countup";
import Explore from "../../../assets/images/Aboutusexpolre.webp";
import Alloption from "../../../assets/images/Aboutusappoption.webp";
import Support from "../../../assets/images/aboutusupport.webp";
import Ourmisson from "../../../assets/images/Ourmission.webp";
import ScrollTrigger from "react-scroll-trigger";
import Footer from "../Footer";
import Header from "../../../components/WebsiteHeader"

const AboutUs = () => {
  const [counterOn, setCounteron] = useState(false);
  return (
    <>
      <Header />
      {/* ----------------About row start---------------- */}
      <div className="Aboutus-row">
        <Container className="">
          <Row className="justify-content-center">
            <Col xs={12} md={6}>
         
                <h1 style={{ textAlign: "center" }}>About Us</h1>
             
            </Col>
          </Row>
        </Container>
      </div>

      {/* <---About us row end---------> */}
      {/* <---Who we are  row start---------> */}

      <Container className="mt-4 mb-4">
        <Row>
          <Col xs={12}>
        
            <h2 className="mb-3"
              style={{
                fontSize: "24px",
                color: "#6B78B7",
                letterSpacing: "1px",
                textAlign: "center",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Who We Are
            </h2>
       
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
    
              <p
                style={{
                  fontSize: "18px",
                  color: "black",
                  letterSpacing: "1px",
                }}
              >
                Introducing "MeetInGround" - your premier destination for all sports betting and gaming enthusiasts! We're here to redefine the way you engage with sports, offering a dynamic platform where fans can connect, compete, and celebrate their love for the game. you're a frequent commuter
                or an occasional traveler.
              </p>
           
              <p
                style={{
                  fontSize: "18px",
                  color: "black",
                  letterSpacing: "1px",
                }}
              >
                At MeetInGround, we cover a wide array of sports, including cricket, football, basketball, tennis, and more. From live match updates to comprehensive statistics, we provide you with the insights you need to make informed bets and take your gaming experience to the next level.
              </p>
  
              <p
                style={{
                  fontSize: "18px",
                  color: "black",
                  letterSpacing: "1px",
                }}
              >
              But MeetInGround is more than just a betting platform - it's a community. Share your predictions, challenge friends, and accept requests from other users. Once a challenge is accepted, it's game on!
              </p>
           
          </Col>
        </Row>
      </Container>
      {/* <---Who we are row end ---------> */}
      {/* <---About us Features row (start) ---------> */}

      <Container className="mt-4 mb-4">
    
          <Row className="justify-content-center">
            <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
              <div className="text-center">
                <img
                  src={Explore}
                  alt="VideoAd"
                  style={{ maxWidth: "100%", maxHeight: "200px" }}
                />
                <p
                  className="mt-3"
                  style={{
                    color: "#6B78B7",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "20px",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    textWrap: "wrap",
                  }}
                >
                  Explore different
                  <br />
                  way of travel
                </p>
                <p
                  className="mt-2"
                  style={{
                    color: "black",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "18px",
                    letterSpacing: "1px",
                  }}
                >
                  In-app Countless ways to find <br />
                  meaningful new journeys
                </p>
              </div>
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
              <div className="text-center">
                <img
                  src={Alloption}
                  alt="All option one place"
                  style={{ maxWidth: "100%", maxHeight: "200px" }}
                />
                <p
                  className="mt-3"
                  style={{
                    color: "#6B78B7",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "20px",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    textWrap: "wrap",
                  }}
                >
                  All your Options
                  <br />
                  in one place
                </p>
                <p
                  className="mt-2"
                  style={{
                    color: "black",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "18px",
                    letterSpacing: "1px",
                  }}
                >
                  Compare options and find the
                  <br /> right price with our easy app
                </p>
              </div>
            </Col>
            <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
              <div className="text-center">
                <img
                  src={Support}
                  alt="Support"
                  style={{ maxWidth: "100%", maxHeight: "200px" }}
                />
                <p
                  className="mt-3"
                  style={{
                    color: "#6B78B7",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "20px",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    textWrap: "wrap",
                  }}
                >
                  Our Team Help <br /> and Support
                </p>
                <p
                  className="mt-2"
                  style={{
                    color: "black",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "18px",
                    letterSpacing: "1px",
                  }}
                >
                  In-app reliable customer <br />
                  Information service and support
                </p>
              </div>
            </Col>
          </Row>
    
      </Container>

      {/* <---About us Features row (end) ---------> */}
      {/* <---Our mission  row start ---------> */}
      <Container className="mt-4 mb-4">
        <Row className="align-items-center">
          <Col xs={12} lg={5} className="mt-4 mt-lg-0">
           
              <h2
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "24px",
                  color: "#6B78B7",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Our Goal
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  color: "black",
                  letterSpacing: "1px",
                  textAlign: "center",
                }}
              >
                At MeetInGround, our goal is to unify sports betting and gaming services, offering users a seamless platform to access the most competitive odds and receive intelligent, up-to-date information on their favorite sports anytime, anywhere.

              </p>
           
          </Col>
          <Col xs={12} lg={7} className="d-flex justify-content-center">
            <img
              src={Ourmisson}
              alt="our mission"
              style={{ maxWidth: "100%", maxHeight: "300px" }}
            />
          </Col>
        </Row>
      </Container>

      {/* <---Our mission  row end ---------> */}
      {/* <---Trainon wheels Statistics  row start ---------> */}
      <Container className="mt-4 mb-5">
     
          <Row className="justify-content-center text-align-center">
            <Col xs={12} lg={12} className="text-center">
              <h2
                style={{
                  fontSize: "24px",
                  color: "#6B78B7",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  
                }}
              >
               Meet In Ground on  Statistics
              </h2>
            </Col>
          </Row>
          <ScrollTrigger
            onEnter={() => setCounteron(true)}
            onExist={() => setCounteron(false)}
          >
            <Row className="justify-content-center mt-4">
              <Col xs={12} lg={4}>
                <h3
                  style={{
                    fontSize: "45px",
                    color: "#212529",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={0}
                      duration={1}
                      delay={1}
                    />
                  )}
                  +
                </h3>
                <p
                  style={{
                    fontSize: "18px",
                    color: "black",
                    textAlign: "center",
                    letterSpacing: "1px",
                    
                  }}
                >
                  Users App Downloaded
                </p>
              </Col>
              <Col xs={12} lg={4}>
                {" "}
                <h3
                  style={{
                    fontSize: "45px",
                    color: "#212529",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {counterOn && (
                    <CountUp start={0} end={0} duration={1} delay={1} />
                  )}
                  +
                </h3>
                <p
                  style={{
                    fontSize: "18px",
                    color: "black",
                    textAlign: "center",
                    letterSpacing: "1px",
                  }}
                >
                  Daily Users
                </p>
              </Col>
              <Col xs={12} lg={4}>
                {" "}
                <h3
                  style={{
                    fontSize: "45px",
                    color: "#212529",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={0}
                      decimals={1}
                      duration={1}
                      delay={1}
                    />
                  )}
                  +
                </h3>
                <p
                  style={{
                    fontSize: "18px",
                    color: "black",
                    textAlign: "center",
                    letterSpacing: "1px",
                  }}
                >
                  App Ratings
                </p>
              </Col>
            </Row>
          </ScrollTrigger>

      </Container>
      {/* <---Trainon wheels Statistics  row end ---------> */}
      <Footer />
    </>
  );
};

export default AboutUs;