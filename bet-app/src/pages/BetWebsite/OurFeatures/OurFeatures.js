
import { Row, Col, Container} from "react-bootstrap";
import Misson from "../../../assets/images/mission.webp";
import TeleService from "../../../assets/images/serviceimages.png";
import Footer from "../Footer";
import Header from "../../../components/WebsiteHeader"
import Chatimage from "../../../assets/images/chatimg.png";
import Postimage from "../../../assets/images/postimage.png";
import Refferal from "../../../assets/images/refferal.png";
import { AnimatedOnScroll } from "react-animated-css-onscroll";


import "animate.css/animate.min.css";

const AboutUs = () => {
  // const [counterOn, setCounteron] = useState(false);
  return (
    <>
      <Header />
      {/* ----------------About row start---------------- */}
      <div className="feature-row">
        <Container className="">
          <Row className="justify-content-end">
            <Col xs={12} md={6}>
         
                <h1 style={{ textAlign: "center" }}>Our Features </h1>
             
            </Col>
          </Row>
        </Container>
      </div>




      <Container className="mt-4 mb-4" style={{ backgroundColor: "##e6eaee" }}>
        <Row className="align-items-center">
          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
            <img
              src={Refferal}
              alt="AgencyBusiness"
              style={{ maxWidth: "100%", height: "auto",borderRadius:"20px" }}
            />
          </Col>
          <Col xs={12} lg={6} className="mt-4 mt-lg-0">

            <AnimatedOnScroll animationIn="bounceInRight">
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
                Reffer and Earn
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  color: "black",
                  letterSpacing: "1px",
                  textAlign: "center",
                }}
              >
               "Earn money effortlessly by referring friends to our app. Share your unique referral code, and for every friend who joins, you earn rewards. Connect, compete, and profit together!".
              </p>
            </AnimatedOnScroll>
          </Col>
        </Row>
      </Container>


      <Container className="mt-4 mb-4" style={{ backgroundColor: "##e6eaee" }}>
        <Row className="align-items-center">
         
          <Col xs={12} lg={6} className="mt-4 mt-lg-0">

            <AnimatedOnScroll animationIn="bounceInRight">
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
 Real Time Messages
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  color: "black",
                  letterSpacing: "1px",
                  textAlign: "center",
                }}
              >
              "Your Ultimate Companion for Games and Sports - Enjoy seamless betting, gaming, and real-time chat with opponents, all in one convenient app. Connect and compete like never before!."
              </p>
            </AnimatedOnScroll>
          </Col>
          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
            <img
              src={Chatimage}
              alt="AgencyBusiness"
              style={{ maxWidth: "100%", height: "auto",borderRadius:"20px" }}
            />
          </Col>
        </Row>
      </Container>




      <Container className="mt-4 mb-4" style={{ backgroundColor: "##e6eaee" }}>
        <Row className="align-items-center">
          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
            <img
              src={Postimage}
              alt="AgencyBusiness"
              style={{ maxWidth: "100%", height: "auto",borderRadius:"20px" }}
            />
          </Col>
          <Col xs={12} lg={6} className="mt-4 mt-lg-0">

            <AnimatedOnScroll animationIn="bounceInRight">
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
                      Play a match that suits you!
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  color: "black",
                  letterSpacing: "1px",
                  textAlign: "center",
                }}
              >
              "Share your thoughts and updates about tournaments, games, and all related sports activities. Post about your experiences, insights, and excitement, all in one convenient app. Connect and engage with the community like never before!".
              </p>
            </AnimatedOnScroll>
          </Col>
        </Row>
      </Container>












   


  

     
   

   
     
  
      <Footer />
    </>
  );
};

export default AboutUs;