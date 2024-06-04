
import { Row, Col, Container} from "react-bootstrap";
import Misson from "../../../assets/images/mission.webp";
import TeleService from "../../../assets/images/service.webp";
import Footer from "../Footer";
import Header from "../../../components/WebsiteHeader"

const AboutUs = () => {
  // const [counterOn, setCounteron] = useState(false);
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
            Our Presence
            </h2>
       
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} lg={12}>
    
          <p
                style={{
                  fontSize: "18px",
                  color: "black",
                  letterSpacing: "1px",
                }}
              >
               <b> Your Sports Betting Hub </b>

              </p>


              <p
  style={{
    fontSize: "18px",
    color: "black",
    letterSpacing: "1px",
  }}
  onMouseOver={(e) => { e.target.style.color = "#6B78B7"; }}
  onMouseOut={(e) => { e.target.style.color = "black"; }}
>
  Introducing <b>"Meet In Ground"</b> - your premier destination for all sports betting and gaming enthusiasts! We're here to redefine the way you engage with sports, offering a dynamic platform where fans can connect, compete, and celebrate their love for the game. Whether you're a frequent commuter or an occasional traveler.
</p>

           
              <p
                style={{
                  fontSize: "18px",
                  color: "black",
                  letterSpacing: "1px",
                }}
                onMouseOver={(e) => { e.target.style.color = "#6B78B7"; }}
                onMouseOut={(e) => { e.target.style.color = "black"; }}
              >
                At <b>"Meet In Ground"</b>, we cover a wide array of sports, including cricket, football, basketball, tennis, and more. From live match updates to comprehensive statistics, we provide you with the insights you need to make informed bets and take your gaming experience to the next level.
              </p>
  
              <p
                style={{
                  fontSize: "18px",
                  color: "black",
                  letterSpacing: "1px",
                }}
                onMouseOver={(e) => { e.target.style.color = "#6B78B7"; }}
                onMouseOut={(e) => { e.target.style.color = "black"; }}
              >
              But <b>"Meet In Ground"</b> is more than just a betting platform - it's a community. Share your predictions, challenge friends, and accept requests from other users. Once a challenge is accepted, it's game on!
              </p>
           
          </Col>
        </Row>
      </Container>
      {/* <---Who we are row end ---------> */}
      {/* <---About us Features row (start) ---------> */}

   

      {/* <---About us Features row (end) ---------> */}
      {/* <---Our mission  row start ---------> */}
      <Container className="mt-4 mb-4">
        <Row className="align-items-center">
          <Col xs={12} lg={6} className="mt-4 mt-lg-0">
           
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
           We’re On A Mission...
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  color: "black",
                  letterSpacing: "1px",
                  textAlign: "center",
                }}
              >
              At <b>"Meet In Ground"</b> Bet App, driven by our desire to provide better service, we aim to unify sports betting and gaming services. Our mission is to deliver a seamless platform where users can access the most competitive odds and receive intelligent, up-to-date information on their favorite sports, anytime and anywhere.
              </p>
           
          </Col>
          <Col xs={12} lg={6} className="d-flex justify-content-end">
            <img
              src={Misson}
              alt="our mission"
              style={{ maxWidth: "100%", maxHeight: "300px" }}
            />
          </Col>
        </Row>
      </Container>




      <Container className="mt-4 mb-4">
        <Row className="align-items-center">
         
          <Col xs={12} lg={6} className="d-flex justify-content-start">
            <img
              src={TeleService}
              alt="our mission"
              style={{ maxWidth: "100%", maxHeight: "300px" }}
            />
          </Col>
          <Col xs={12} lg={6} className="mt-4 mt-lg-0">
           
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
        DRIVEN BY BETTER SERVICE
           </h2>
           <p
             style={{
               fontSize: "18px",
               color: "black",
               letterSpacing: "1px",
               textAlign: "center",
             }}
           >
           Welcome to <b>"Meet In Ground"</b> Bet App: Your Ultimate Sports Betting and Gaming Hub. At "Meet In Ground" Bet App, we are driven by our passion to deliver superior service. Our mission is to integrate sports betting and gaming services into one cohesive platform, ensuring users enjoy access to the most competitive odds and receive insightful, real-time information on their favorite sports, anytime and anywhere.







           </p>
        
       </Col>
        </Row>
      </Container>

      {/* <---Our mission  row end ---------> */}
      {/* <---Trainon wheels Statistics  row start ---------> */}
     
      {/* <---Trainon wheels Statistics  row end ---------> */}
      <Footer />
    </>
  );
};

export default AboutUs;